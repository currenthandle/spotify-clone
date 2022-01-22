import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;
  //return NextResponse.redirect("/login");
  // Allow the requests if the following in true..., or
  // 1) It's a request for next-auth session & provider fetching
  // 2) the token exists
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  //Redirect them to login if they don't have a token AND are requesting a protected route
  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }
}
