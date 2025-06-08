import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Add the paths that need authentication here
const protectedPaths = [
  '/dashboard',
  '/profile',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname is a protected route
  const isProtectedRoute = protectedPaths.some(path => pathname.startsWith(path));

  if (isProtectedRoute) {
    const authToken = request.cookies.get('authToken')?.value;

    // If there's no auth token, redirect to login
    if (!authToken) {
      const response = NextResponse.redirect(
        new URL('/login', request.url)
      );
      return response;
    }
  }

  // Continue with the request if not protected or authenticated
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    // Match all protected routes
    '/dashboard/:path*',
    '/profile/:path*',
    // Add other protected routes here
  ]
};
