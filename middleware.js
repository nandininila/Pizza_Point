import { NextResponse } from 'next/server';
import { frontendOrigin } from './common/types/utils/const';
import { stringToNumber } from './common/types/utils/convert/stringToNumber';

export async function middleware(request) {
    // Get the auth cookie value  from the request.
    const authToken = await request.cookies.get('authToken')?.value;
    const pathname = request?.nextUrl?.pathname;

    // authToken is missing
    if (!authToken && pathname === "/signup") {
        return NextResponse.rewrite(new URL("/signup", request.url));
    } else if (!authToken) {
        return NextResponse.rewrite(new URL("/login", request.url));
    }

    try {
        const url = `${frontendOrigin}/api/protected/middleware`;
        const option = {
            method: 'POST',
            body: JSON.stringify(authToken),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await fetch(url, option);
        const resToken = await res.json();
        const { authenticated } = resToken;
        const userInfo = JSON.stringify(resToken?.userInfo);
        const encodedUserInfo = stringToNumber(userInfo);

        const cookieOption = {
            httpOnly: false,
            maxAge: 3600 * 24 * 10,
            path: "/",
            sameSite: "Strict",
            secure: process.env.NODE_ENV === "production",
        }

        if (authenticated !== true) {
            const loginUrl = new URL('/login', request.url);
            return NextResponse.rewrite(loginUrl);
        } else if (pathname === '/login' || pathname === '/signup') {
            const homeUrl = new URL('/', request.url);
            const response = NextResponse.redirect(homeUrl, request.url);
            response.cookies.set("userInfo", encodedUserInfo, cookieOption);
            return response
        } else {
            const response = NextResponse.rewrite(request.url, request.url);
            response.cookies.set("userInfo", encodedUserInfo, cookieOption);
            return response
        }
        // return NextResponse.next();

    } catch (error) {
        // console.log("middleware error", error);
        const loginUrl = new URL('/login', request.url);
        return NextResponse.rewrite(loginUrl);
    }
}

export const config = {
    matcher: ['/login/:path*', '/signup/:path*', '/protected/:path*', '/api/protected/:path*'],
};