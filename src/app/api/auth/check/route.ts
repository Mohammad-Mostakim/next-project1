
import { AuthorizeCookie } from "@/lib/constants";
import { AuthUtility } from "@/lib/server/common/Utility";
import { verifyAuth } from "@/lib/server/middleware/auth";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get(AuthorizeCookie.name)?.value;
    const verifiedData: any = token && await verifyAuth(token).catch((err) => {
      console.log(err)
    })
    if (!verifiedData) {
      const err_msg = `Authencation Expired.Please relogin and Try again`;
      const response = NextResponse.json({ feedback: { success: false, message: err_msg, tag: "check_auth" } }, { status: 403 });
      response.cookies.set(AuthorizeCookie.name, '', { expires: new Date(0) });
      return response;
    }
    if (verifiedData) {
      const send_user=AuthUtility.sanitizeUser(verifiedData)
        return NextResponse.json({ feedback: { success: true, message: 'Authenticated Successfully', tag: "check_auth" }, User: send_user }, { status: 200 });
    }

  } catch (error) {
    console.error('Error occurred during auth check:', error);
    return NextResponse.json({ feedback: { success: false, message: 'Internal Server Error',tag:"check_auth" } }, { status: 500 });
  }

}