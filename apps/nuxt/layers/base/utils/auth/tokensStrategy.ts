import type {
  OAuth2Tokens,
  TokensStrategy,
} from '@wisemen/vue-core-auth'

export const CODE_VERIFIER_KEY = 'code_verifier'
export const LOCAL_STORAGE_KEY = 'tokens'

export class CookieTokensStrategy implements TokensStrategy {
  private CODE_VERIFIER_KEY = 'code_verifier'
  private TOKENS_KEY = 'tokens'
  constructor() {}
  public getCodeVerifier(): string | null {
    const tokens = useCookie<string | null>(this.TOKENS_KEY, { default: () => null })

    return tokens.value
  }

  public getTokens(): OAuth2Tokens | null {
    const tokens = useCookie<OAuth2Tokens | null>(this.TOKENS_KEY, { default: () => null })

    if (tokens === null) {
      return null
    }

    return tokens.value
  }

  public removeCodeVerifier(): void {
    const tokens = useCookie<string | null>(this.CODE_VERIFIER_KEY, { default: () => null })

    if (tokens === null) {
      return
    }

    tokens.value = null
  }

  public removeTokens(): void {
    const tokens = useCookie<OAuth2Tokens | null>(this.TOKENS_KEY, { default: () => null })

    if (tokens === null) {
      return
    }

    tokens.value = null
  }

  public setCodeVerifier(codeVerifier: string): void {
    const cookie = useCookie<string | null>(this.CODE_VERIFIER_KEY, { default: () => null })

    cookie.value = codeVerifier
  }

  public setTokens(tokens: OAuth2Tokens): void {
    const cookie = useCookie<OAuth2Tokens | null>(this.TOKENS_KEY, { default: () => null })

    cookie.value = tokens
  }
}
