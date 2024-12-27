import { getEnv } from '@payload/env'
import { cookies } from 'next/headers'

export interface AuthResponse {
  access_token: string
  expires_in: number
  id_token: string
  refresh_token: string
  token_type: string
}

export interface AuthData {
  expiresAt: number
  accessToken: string
  refreshToken: string
}

const env = getEnv()

export const DEFAULT_SCOPES: string[] = [
  'openid',
  'profile',
  'email',
  'offline_access',
  `urn:zitadel:iam:org:id:${env.AUTH_ORGANIZATION_ID}`,
]

export async function setAuthCookie(authResponse: AuthResponse) {
  const cookieStore = await cookies()

  const now = new Date().getTime()
  const expiresIn = authResponse.expires_in
  const expiresAt = now + expiresIn * 1000

  cookieStore.set('access_token', authResponse.access_token)
  cookieStore.set('refresh_token', authResponse.refresh_token)
  cookieStore.set('expires_at', expiresAt.toString())
}

export async function getAuthData(): Promise<AuthData | null> {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('access_token')?.value
  const refreshToken = cookieStore.get('refresh_token')?.value
  const expiresAt = cookieStore.get('expires_at')?.value

  if (accessToken == null || refreshToken == null || expiresAt == null) {
    return null
  }

  return {
    expiresAt: Number(expiresAt),
    accessToken,
    refreshToken,
  }
}

export async function removeAuthCookie() {
  const cookieStore = await cookies()

  cookieStore.delete('access_token')
  cookieStore.delete('refresh_token')
  cookieStore.delete('expires_at')
}
