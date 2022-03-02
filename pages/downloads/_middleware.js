import { NextResponse } from "next/server";

export function middleware(req) {
  if (req.nextUrl.pathname === "/downloads") {
    const url = req.nextUrl.clone();
    if (req.ua.os.name === "Mac OS") {
      url.pathname = "/downloads/mac";
    } else {
      url.pathname = "/downloads/windows";
    }
    return NextResponse.redirect(url);
  } else {
    return NextResponse.next();
  }
}
