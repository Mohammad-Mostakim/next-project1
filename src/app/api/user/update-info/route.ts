import { AuthorizeCookie } from "@/lib/constants";
import connectToDB from "@/lib/server/config/Db";
import { verifyAuth } from "@/lib/server/middleware/auth";
import UserModel, { UserProfileModel } from "@/lib/server/model/auth";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await connectToDB();
    const tag = "update_user_info";
    const reqData = await req.json();

    try {
        // Check authentication 
        const token = req.cookies.get(AuthorizeCookie.name)?.value;
        const verifiedAuth = token && await verifyAuth(token).catch((err) => {
            console.log(err);
        });

        if (!verifiedAuth) {
            const err_msg = `You are not allowed to update info. Please relogin and try again.`;
            const response = NextResponse.json({ feedback: { success: false, message: err_msg, tag } }, { status: 403 });
            response.cookies.set(AuthorizeCookie.name, '', { expires: new Date(0) });
            return response;
        }

        const req_uid = new mongoose.Types.ObjectId(verifiedAuth.uid?.toString());

        // Find the existing user
        const exists_user = await UserModel.findById(req_uid).exec();
        if (!exists_user) {
            const err_msg = `Wrong email or password, please try with correct email or password`;
            return NextResponse.json({ feedback: { success: false, message: err_msg, tag } }, { status: 404 });
        }

        // Validate the profile data using the schema
        //      const profileInstance = new UserProfileModel(reqData);
        //      const error = profileInstance.validateSync();
        // if (error) {
        //     const errorMessage = `Validation errors: ${error.message}`;
        //     const errorObj = parseValidationError(errorMessage);
        //     return NextResponse.json({ feedback: { success: false, message: errorMessage, tag } }, { status: 400 });
        // }

        // Update the user's profile data in the database
        const updated_data = await UserModel.findByIdAndUpdate(
            req_uid,
            { $set: { profile: reqData } },
            { new: true }
        )
            .select("profile")
            .lean();

        if (!updated_data) {
            const err_msg = "Failure updating profile, please try again or contact the administrator";
            return NextResponse.json({ feedback: { success: false, message: err_msg, tag } }, { status: 500 });
        }

        return NextResponse.json({ feedback: { success: true, message: 'Profile updated successfully', tag }, UserInfo: updated_data.profile }, { status: 200 });

    } catch (error) {
        console.error('Error occurred during profile update:', error);
        return NextResponse.json({ feedback: { success: false, message: 'Internal Server Error', tag } }, { status: 500 });
    }
}

// Helper function to parse validation errors
function parseValidationError(errorMessage: string): Record<string, string> {
    const errorObj: Record<string, string> = {};
    const errorParts = errorMessage.split(': ')[1].split(', ');

    errorParts.forEach(part => {
        const [field, message] = part.split(': ');
        errorObj[field.trim()] = message.trim();
    });

    return errorObj;
}
