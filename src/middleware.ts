import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./lib/server/middleware/auth";
import { AuthorizeCookie } from "./lib/constants";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = req.cookies.get(AuthorizeCookie.name)?.value;
  const isPublicPath = ["/login", "/signup", "/verifyemail", "/"].includes(path);

  try {
    const verifiedAuth = token && (await verifyAuth(token));

    if (verifiedAuth) {
      if (isPublicPath) {
        return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
      }
      // If authenticated and not a public path, allow the request to proceed
      return NextResponse.next();
    }

    if (!verifiedAuth && path.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
  }

  // If no redirection is needed, let the request pass through
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/:path*"],
};
