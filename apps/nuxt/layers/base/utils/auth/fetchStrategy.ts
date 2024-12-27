import type {
  FetchStrategy,
  FetchStrategyGetNewAccessTokenOptions,
  FetchStrategyGetUserInfoOptions,
  FetchStrategyLoginWithCodeOptions,
  OAuth2Tokens,
  ZitadelUser,
} from '@wisemen/vue-core-auth'
import type { $Fetch } from 'ofetch'

function removeAuthorizationHeader(): void {}

function setAuthorizationHeader(_accessToken: string): void {}

export function useOFetchStrategy(ofetch: $Fetch): FetchStrategy<$Fetch> {
  async function getNewAccessToken(options: FetchStrategyGetNewAccessTokenOptions): Promise<OAuth2Tokens> {
    const response = await ofetch(options.url, {
      body: {
        client_id: options.clientId,
        grant_type: 'refresh_token',
        refresh_token: options.refreshToken,
        scope: options.scope,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
    })

    return response
  }

  async function getUserInfo(options: FetchStrategyGetUserInfoOptions): Promise<ZitadelUser> {
    const response = await ofetch(options.url, {
      headers: {
        Authorization: `Bearer ${options.accessToken}`,
      },
      method: 'GET',
    })

    return response.data
  }

  async function loginWithCode(options: FetchStrategyLoginWithCodeOptions): Promise<OAuth2Tokens> {
    const response = await ofetch<OAuth2Tokens>(options.url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'GET',

      params: {
        client_id: options.clientId,
        code: options.code,
        code_verifier: options.codeVerifier,
        grant_type: 'authorization_code',
        redirect_uri: options.redirectUri,
      },
    })

    return response
  }

  function getFetchInstance(): $Fetch {
    return ofetch
  }

  return {
    getFetchInstance,
    getNewAccessToken,
    getUserInfo,
    loginWithCode,
    removeAuthorizationHeader,
    setAuthorizationHeader,
  }
}
