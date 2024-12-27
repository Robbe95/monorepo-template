import { removeAuthCookie } from '@payload/auth/authData'

export async function logout(): Promise<void> {
  await removeAuthCookie()
}
