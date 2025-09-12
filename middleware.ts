// middleware.ts (at project root or src/middleware.ts)
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // Exclude Next internals + common static assets from auth
  matcher: [
    '/((?!api|_next/static|_next/image|favicon\\.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|css|js|txt|webmanifest)$).*)',
  ],
};
