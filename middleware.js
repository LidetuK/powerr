import { NextResponse } from "next/server"

export function middleware(request) {
  // Add any global middleware logic here
  return NextResponse.next()
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // Skip all API routes
    // Skip all static files
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
