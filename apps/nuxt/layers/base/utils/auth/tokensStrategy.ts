import type {
  OAuth2Tokens,
  TokensStrategy,
  TokensStrategySetCodeVerifierOptions,
  TokensStrategySetTokensOptions,
} from '@wisemen/vue-core-auth'

export const CODE_VERIFIER_KEY = 'code_verifier'
export const LOCAL_STORAGE_KEY = 'tokens'

function getTokens(key: string): OAuth2Tokens | null {
  const tokens = useCookie<OAuth2Tokens | null>(key, { default: () => null })

  if (tokens === null) {
    return null
  }

  return tokens.value
}

function removeTokens(key: string): void {
  const tokens = useCookie<OAuth2Tokens | null>(key, { default: () => null })

  if (tokens === null) {
    return
  }

  tokens.value = null
}

function setTokens({ key, tokens }: TokensStrategySetTokensOptions): void {
  const cookie = useCookie<OAuth2Tokens | null>(key, { default: () => null })

  cookie.value = tokens
}

function setCodeVerifier({ codeVerifier, key }: TokensStrategySetCodeVerifierOptions): void {
  const cookie = useCookie<string | null>(key, { default: () => null })

  cookie.value = codeVerifier
}

function removeCodeVerifier(key: string): void {
  const tokens = useCookie<string | null>(key, { default: () => null })

  if (tokens === null) {
    return
  }

  tokens.value = null
}

function getCodeVerifier(key: string): string | null {
  const tokens = useCookie<string | null>(key, { default: () => null })

  return tokens.value
}

export const cookieTokensStrategy: TokensStrategy = {
  getCodeVerifier: () => getCodeVerifier(CODE_VERIFIER_KEY),
  getTokens: () => getTokens(LOCAL_STORAGE_KEY),
  removeCodeVerifier: () => removeCodeVerifier(CODE_VERIFIER_KEY),
  removeTokens: () => removeTokens(LOCAL_STORAGE_KEY),
  setCodeVerifier: (codeVerifier: string) => setCodeVerifier({ codeVerifier, key: CODE_VERIFIER_KEY }),
  setTokens: (tokens: OAuth2Tokens) => setTokens({ key: LOCAL_STORAGE_KEY, tokens }),
}
