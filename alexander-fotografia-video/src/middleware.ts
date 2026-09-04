import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(req: NextRequest) {
  const hasSession = !!req.cookies.get("session");

  const protectedRoutes = ["/sessions", "/gallery"];
  const isProtected = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (isProtected && !hasSession) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (req.nextUrl.pathname === "/login" && hasSession) {
    
    return NextResponse.redirect(new URL("/sessions", req.url));
  }

  return NextResponse.next();
}

