import { withAuthMiddleware } from '@payload/middlewares/auth.middleware'
import { withCorsMiddleware } from '@payload/middlewares/cors.middleware'
import { withLoginPageMiddleware } from '@payload/middlewares/login.middleware'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export default async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const corsMiddleware = withCorsMiddleware({
    request,
    response,
  })

  const authMiddleware = await withAuthMiddleware({
    request: corsMiddleware.request,
    response: corsMiddleware.response,
  })

  const authPageMiddleware = await withLoginPageMiddleware({
    request: authMiddleware.request,
    response: authMiddleware.response,
  })

  return authPageMiddleware.response
}
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images).*)',
  ],
}
