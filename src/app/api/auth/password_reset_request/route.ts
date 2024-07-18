import { PasswordResetTimeOutWithMinute } from "@/lib/constants";
import { ModelUtility } from "@/lib/server/common/ModelUtility";
import { AuthUtility } from "@/lib/server/common/Utility";
import connectToDB from "@/lib/server/config/Db";
import UserModel from "@/lib/server/model/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await connectToDB()
    const { email } = await req.json();
    try {
        const exists_user = await UserModel.findOne({ email: email });
        if (!exists_user) {
            const err_msg = `User with email ${email} does not exist`;
            return NextResponse.json({ feedback: { success: false, message: err_msg, tag: "password_reset_request" } }, { status: 401 })
        }
        //2.genaret a random reset token and save this in database
        const resetToken: any = await exists_user.createResetPasswordToken();
        const save_user = await exists_user.save({ validateBeforeSave: false });
        if (save_user) {
            const subject: string = "reset password for www.brightenyourcode.site";
            const message: string = `We have received a password reset request.Please click this Button and reset your Password.This reset link will be valid only  for ${PasswordResetTimeOutWithMinute} minute`;

            const isSendMail = await AuthUtility.sendMail({ email: email,requestType:"password_reset", subject: subject, hashedToken: resetToken, message: message });
            if (isSendMail)
                return NextResponse.json({
                    feedback: {
                        success: true,
                        message:
                            "Succefullly send reset token to this email,check your email box and reset your password",
                        tag: "password_reset_request",
                    }
                })
        }

    } catch (error) {
        console.error('Error occurred during user registration:', error);
        NextResponse.json({ feedback: { success: false, message: 'Internal Server Error.Try again later', tag: "password_reset_request", } }, { status: 500 });
    }

}