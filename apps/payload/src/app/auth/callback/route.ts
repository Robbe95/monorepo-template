import { loginWithCode } from '@payload/auth/loginWithCode'
import { getEnv } from '@payload/env'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code')

  console.log('code', request.nextUrl)

  const env = getEnv()

  if (code == null) {
    return NextResponse.redirect(
      `${env.CMS_BASE_URL}/login`,
      { status: 302 },
    )
  }

  await loginWithCode(code)

  return NextResponse.redirect(`${env.CMS_BASE_URL}/`, { status: 302 })
}
