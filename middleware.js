import { decodeJwt } from 'jose';
import { NextResponse } from 'next/server';
import { frontendOrigin } from './common/types/utils/const';
import { numberToText } from './common/types/utils/convert/numberToText';

export async function middleware(request) {
    // Get the auth cookie value  from the request.
    const authToken = await request.cookies.get('authToken')?.value;
    const pathname = request?.nextUrl?.pathname;

    if (!authToken && pathname === "/signup") {
        // authToken is missing
        return NextResponse.rewrite(new URL("/signup", request.url));
    } else if (!authToken) {
        return NextResponse.rewrite(new URL("/login", request.url));
    }

    try {
        const numToTex = numberToText(authToken);

        const decodedToken = decodeJwt(numToTex);
        const tokenId = decodedToken.id;

        const url = `${frontendOrigin}/api/protected/middleware`;
        const option = {
            method: 'POST',
            body: JSON.stringify(tokenId),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await fetch(url, option);
        const resToken = await res.json();
        console.log(resToken);

        if (resToken !== true) {
            const loginUrl = new URL('/login', request.url);
            return NextResponse.rewrite(loginUrl);
        } else if (pathname === '/login' || pathname === '/signup') {
            const homeUrl = new URL('/', request.url);
            return NextResponse.redirect(homeUrl, request.url);
        } else {
            NextResponse.rewrite(request.url, request.url);
        }

        return NextResponse.next();

    } catch (error) {
        // console.log("middleware error", error);
        const loginUrl = new URL('/login', request.url);
        return NextResponse.rewrite(loginUrl);
    }
}

export const config = {
    matcher: ['/login/:path*', '/signup/:path*', '/protected/:path*'],
};