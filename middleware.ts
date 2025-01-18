import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  const response = NextResponse.next();
  const authCookie = request.cookies.get("next-auth.session-token");

  if (authCookie?.value) {
    response.cookies.set("next-auth.session-token", authCookie.value, {
      ...authCookie.options,
      expires: undefined,
      maxAge: undefined,
      httpOnly: true,
      secure: "next-auth.session-token".startsWith("__Secure"),
    });
  }

  return response;
};
