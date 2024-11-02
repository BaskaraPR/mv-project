import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(function middleware(req) {
	const isAuth = !!req.nextauth.token;

	if (!isAuth) {
		const loginUrl = new URL("/login", req.url);
		return NextResponse.redirect(loginUrl);
	}

	return NextResponse.next();
});

export const config = {
	matcher: ["/company/:path*", "/user/:path*"],
};
