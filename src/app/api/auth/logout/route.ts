import { AuthorizeCookie } from "@/lib/constants";
import { verifyAuth } from "@/lib/server/middleware/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const tag="logout"
    try {
        const token = req.cookies.get(AuthorizeCookie.name)?.value;
        const verifiedData: any = token && await verifyAuth(token).catch((err) => {
            console.log(err)
        })
        if (!verifiedData) {
            const err_msg = `Authentication Expired. Please relogin and try again`;
            const response = NextResponse.json({ feedback: { success: false, message: err_msg, tag: tag } }, { status: 403 });
            response.cookies.set(AuthorizeCookie.name, '', { expires: new Date(0) });
            return response;
        }
        if (verifiedData) {
            const response = NextResponse.json({ feedback: { success: true, message: 'Logout Successfully', tag:tag } }, { status: 200 });
            response.cookies.set(AuthorizeCookie.name, '', { expires: new Date(0) });
            return response;
        }

    } catch (error) {
        console.error('Error occurred during auth check:', error);
        return NextResponse.json({ feedback: { success: false, message: 'Internal Server Error',tag:tag } }, { status: 500 });
    }
}
