import { NextResponse, type NextRequest } from "next/server";

import { resolveLegacyDestination } from "@/lib/seo/legacy-redirects";

export function middleware(request: NextRequest) {
  const destination = resolveLegacyDestination(request.nextUrl.pathname);
  if (!destination) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = destination;
  url.search = "";

  if (url.pathname === request.nextUrl.pathname && url.search === request.nextUrl.search) {
    return NextResponse.next();
  }

  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|api/|brand/|.*\\.(?:webp|png|jpg|jpeg|gif|svg|ico|css|woff2|xml|txt)$).*)",
  ],
};
