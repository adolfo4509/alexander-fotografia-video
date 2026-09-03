import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const isLoggedIn = req.headers.get("cookie")?.includes("firebase-auth=true");


  const protectedRoutes = ["/sessions", "/gallery"];

  const isProtected = protectedRoutes.some((route) =>
    
  req.nextUrl.pathname.startsWith(route)
  );

  if (isProtected && !isLoggedIn) {
    
    return NextResponse.redirect(new URL("/login", req.url));
  }else{
    return NextResponse.next();
  }

}
