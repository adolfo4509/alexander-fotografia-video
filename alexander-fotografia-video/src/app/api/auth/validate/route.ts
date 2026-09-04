import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebaseAdmin";

export async function GET(req: Request) {
  const cookie = req.headers.get("cookie") || "";
  const token = cookie.split("session=")[1];
  
  
  if (!token) {
    return NextResponse.json({ error: "No session" }, { status: 401 });
  } 

  try {
    const decoded = await adminAuth.verifyIdToken(token);
    return NextResponse.json({ user: decoded });
  } catch (e) {
    const res = NextResponse.json({ error: "Invalid session" }, { status: 401 });
    res.cookies.set("session", "", { maxAge: 0 });
    return res;
  }
}
