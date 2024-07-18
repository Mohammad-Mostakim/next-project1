
import { AuthorizeCookie } from "@/lib/constants";
import { AuthUtility, CryptoUtility } from "@/lib/server/common/Utility";
import connectToDB from "@/lib/server/config/Db";
import UserModel from "@/lib/server/model/auth";
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await connectToDB()
    const reqData: any = await req.json();
    try {
        const exists_user = await UserModel.findOne({ email: reqData.email });
        if (!exists_user) {
            const err_msg = `This email is not exist, Please try with currect email or password`;
            return NextResponse.json({ feedback: { success: false, message: err_msg, tag: "user_login" } }, { status: 404 })
        }
        if (exists_user) {
            const db_password = exists_user.password;
            const isMatch = CryptoUtility.comparePasswords(
                db_password,
                reqData.password,
                exists_user.salt
            );
            if (!isMatch) {
                const err_msg = `Wrong email or password, Please try with currect email or password`;
                return NextResponse.json({ feedback: { success: false, message: err_msg, tag: "user_login" } }, { status: 403 })
            } else {
                const sanitUser = AuthUtility.sanitizeUser(exists_user);
                const token = jwt.sign(sanitUser, process.env.JWT_SECRET_KEY as string, { expiresIn: AuthorizeCookie.max_age });
                const response = NextResponse.json({
                    feedback: {
                        success: true,
                        message: "successfully login",
                        tag: "user_login",
                    },
                    User: sanitUser,
                });
                response.cookies.set(AuthorizeCookie.name, token,{httpOnly:true,secure:process.env.NODE_ENV === "production"});
                return response
            }
        }

    } catch (error) {
        console.error('Error occurred during user login:', error);
       return NextResponse.json({ feedback: { success: false, message: 'Internal Server Error',tag:"user_login" } }, { status: 500 });
    }

}