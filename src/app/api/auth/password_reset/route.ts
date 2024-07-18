import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/lib/server/config/Db";
import { AuthUtility, CryptoUtility } from "@/lib/server/common/Utility";
import { PasswordResetTimeOutWithMinute } from "@/lib/constants";
import UserModel from "@/lib/server/model/auth";
export async function PATCH(req: NextRequest) {

    try {
        await connectToDB()
        const { email, newPassword, token } = await req.json();
        const hashtoken =CryptoUtility.createHashToken(token);
        const exists_user = await UserModel.findOne({
            email: email,
            passwordResetToken: hashtoken,
            passwordResetTokenExpires: { $gt: Date.now() },
        });
        if (!exists_user) {
            const err_msg = `Invalid credentials.Please try again later with valid credentials`;
            return NextResponse.json({ feedback: { success: false, message: err_msg, tag: "password_reset" } });
        };
        const hashedPassword = CryptoUtility.hashPasswordWithToken(
            newPassword,
            exists_user.salt
          );
          exists_user.password = hashedPassword;
          exists_user.passwordChangeAt = Date.now();
          const resetToken=await exists_user.createResetPasswordToken();
          exists_user.passwordResetToken =  resetToken;
          const save_user=await exists_user.save({ validateBeforeSave: false });
          if(save_user){
            const subject: string = `successfully password reset for ${process.env.DOMAIN}`;
            const message: string = `Your Password has Reseted.If anything wrong,Please Try this link within ${PasswordResetTimeOutWithMinute} minute to recovery your Password`;
            const isSendMail = await AuthUtility.sendMail({ email: email,requestType:"password_reset", subject: subject, hashedToken: resetToken, message: message });
            if(isSendMail){
                return NextResponse.json({
                    feedback: {
                        success: true,
                        message:"Succefullly reset password to this email",
                        tag: "password_reset",
                    }
                })
            }

          }

    } catch (error) {
        console.error('Error occurred during user registration:', error);
        NextResponse.json({ feedback: { success: false, message: 'Internal Server Error.Try again later', tag: "password_reset", } }, { status: 500 });
    }

}