import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  const { pathname } = request.nextUrl;

  // Public paths that don't require authentication
  const publicPaths = ['/auth/signup', '/'];
  
  // Check if the path is public
  const isPublicPath = publicPaths.some(path => pathname.startsWith(path));

  // Redirect unauthenticated users to signup
  if (!token && !isPublicPath) {
    const signUpUrl = new URL('/auth/signup', request.url);
    return NextResponse.redirect(signUpUrl);
  }

  // Redirect authenticated users to dashboard
  if (token && pathname.startsWith('/auth')) {
    const dashboardUrl = new URL('/dashboard', request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
