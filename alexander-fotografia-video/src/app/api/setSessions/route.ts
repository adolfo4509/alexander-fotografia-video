import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();

  const response = NextResponse.json({ ok: true });

  response.cookies.set({
    name: "session",
    value: token,
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    
  });
  return response;
}
