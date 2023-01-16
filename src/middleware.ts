import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== '/login' && request.cookies.get('accessToken')?.value === undefined) {
      return NextResponse.redirect(new URL('/login', request.url));
  } 

  if (request.nextUrl.pathname === '/login' && request.cookies.get('accessToken')?.value !== undefined) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}
