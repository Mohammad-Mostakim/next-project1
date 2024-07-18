import { AuthorizeCookie } from "@/lib/constants";
import connectToDB from "@/lib/server/config/Db";
import { verifyAuth } from "@/lib/server/middleware/auth";
import UserModel from "@/lib/server/model/auth";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectToDB()
  const tag="get_user_info"
  try {
    const token = req.cookies.get(AuthorizeCookie.name)?.value;

    if (!token) {
      const errMsg = "You are not allowed to get User Info. Please relogin and try again";
      const response = NextResponse.json(
        { feedback: { success: false, message: errMsg, tag: tag } },
        { status: 403 }
      );
      response.cookies.set(AuthorizeCookie.name, "", { expires: new Date(0) });
      return response;
    }

    const verifiedAuth = await verifyAuth(token).catch((err) => {
      console.log(err);
      return null;
    });
    if (!verifiedAuth) {
      const errMsg = "You are not allowed to get User Info. Please relogin and try again";
      const response = NextResponse.json(
        { feedback: { success: false, message: errMsg, tag: tag } },
        { status: 403 }
      );
      response.cookies.set(AuthorizeCookie.name, "", { expires: new Date(0) });
      return response;
    }

    const existUser = await UserModel.findById(new mongoose.Types.ObjectId(verifiedAuth.uid?.toString())).exec();
    if (!existUser) {
      const errMsg = "Invalid credentials. Please relogin";
      const response = NextResponse.json(
        { feedback: { success: false, message: errMsg, tag: tag } },
        { status: 403 }
      );
      response.cookies.set(AuthorizeCookie.name, "", { expires: new Date(0) });
      return response;
    }
    const sendUser=existUser.profile

    return NextResponse.json(
      {
        feedback: { success: true, message: "User Info Fetched Successfully", tag: tag },
        UserInfo: sendUser,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error occurred during user info fetch:", error);
    return NextResponse.json(
      { feedback: { success: false, message: "Internal Server Error",tag:tag } },
      { status: 500 }
    );
  }
}
