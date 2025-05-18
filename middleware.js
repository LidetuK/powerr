import { NextResponse } from "next/server"

export function middleware(request) {
  // Check if the request is for a non-existent page
  if (request.nextUrl.pathname === "/_not-found") {
    // Redirect to our static 404.html page
    return NextResponse.redirect(new URL("/404.html", request.url))
  }

  return NextResponse.next()
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: ["/_not-found", "/((?!api|_next/static|_next/image|favicon.ico|404.html).*)"],
}
