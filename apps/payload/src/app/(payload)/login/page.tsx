import { DEFAULT_SCOPES } from '@payload/auth/authData'
import LoginButton from '@payload/components/auth/LoginButton'
import { BigLogo } from '@payload/components/logo/Logo'
import { getEnv } from '@payload/env'
import { cookies } from 'next/headers'

async function getLoginUrl(): Promise<string> {
  const env = getEnv()
  const cookiesStore = await cookies()
  const searchParams = new URLSearchParams()
  const codeChallenge = cookiesStore.get('code_challenge')?.value

  if (codeChallenge == null) {
    return ''
  }

  const scopes = DEFAULT_SCOPES

  searchParams.append('client_id', env.AUTH_CLIENT_ID)
  searchParams.append('redirect_uri', `${env.CMS_BASE_URL}/auth/callback`)
  searchParams.append('response_type', 'code')
  searchParams.append('prompt', 'login')
  searchParams.append('scope', scopes.join(' '))
  searchParams.append('code_challenge', codeChallenge)
  searchParams.append('code_challenge_method', 'S256')

  return `${env.AUTH_BASE_URL}/oauth/v2/authorize?${searchParams.toString()}`
}

export default async function Login() {
  const url = await getLoginUrl()

  return (
    <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '2rem', height: '100vh', justifyContent: 'center' }}>
      <div>
        <BigLogo />
      </div>

      <div style={{ maxWidth: '12rem', width: '100%' }}>
        <LoginButton url={url} />
      </div>

    </div>
  )
}
