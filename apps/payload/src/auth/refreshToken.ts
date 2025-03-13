import type { AuthResponse } from '@payload/auth/authData'
import {
  DEFAULT_SCOPES,
  getAuthData,
  setAuthCookie,
} from '@payload/auth/authData'
import { getEnv } from '@payload/env'

export async function refreshToken() {
  const env = getEnv()
  const authData = await getAuthData()

  if (authData == null) {
    throw new Error('Auth data not found')
  }

  const response = await fetch(`${env.AUTH_BASE_URL}/oauth/v2/token`, {
    body: new URLSearchParams({
      client_id: env.AUTH_CLIENT_ID,
      grant_type: 'refresh_token',
      refresh_token: authData.refreshToken,
      scopes: DEFAULT_SCOPES.join(' '),
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
  })

  const data = await response.json() as AuthResponse

  setAuthCookie(data)
}
