import { NextRequest } from "next/server"

export const PROTECTED_ROUTES = ['/', '/calender', '/forms', '/forms/form-elements', '/form/form-layouts', '/tables', '/settings']
export const PUBLIC_ROUTES = ['/auth/signin', '/auth/signup']

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('Authorization')?.value;
    const pathname = request.nextUrl.pathname

    if (currentUser && pathname.startsWith('/auth/signin')) {
        return Response.redirect(new URL ('/', request.url))
    }

    if (
        !currentUser &&
        !PUBLIC_ROUTES.includes(pathname)
    ) {
        return Response.redirect(new URL ('/auth/signin', request.url))
    }
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|.*\\.png$|favicon.ico|.*\\.webp$|.*\\.svg$).*)'
    ]
}