import { getEnv } from '@payload/env'
import {
  deleteCookie,
  getCookie,
  setCookie,
} from 'cookies-next'
// import { useCookies } from 'next-client-cookies'

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

export function setAuthCookie(authResponse: AuthResponse) {
  const now = new Date().getTime()
  const expiresIn = authResponse.expires_in
  const expiresAt = now + expiresIn * 1000

  setCookie('access_token', authResponse.access_token)
  setCookie('refresh_token', authResponse.refresh_token)
  setCookie('expires_at', expiresAt.toString())
}

export async function getAuthData(): Promise<AuthData | null> {
  const accessToken = await getCookie('access_token')
  const refreshToken = await getCookie('refresh_token')
  const expiresAt = await getCookie('expires_at')

  if (accessToken == null || refreshToken == null || expiresAt == null) {
    return null
  }

  return {
    expiresAt: Number(expiresAt),
    accessToken,
    refreshToken,
  }
}

export function removeAuthCookie() {
  deleteCookie('access_token')
  deleteCookie('refresh_token')
  deleteCookie('expires_at')
}
