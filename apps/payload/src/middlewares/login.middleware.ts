import type { CustomMiddleware } from '@payload/middlewares/helper.middleware'
import pkceChallenge from 'pkce-challenge'

export async function withLoginPageMiddleware(customMiddleware: CustomMiddleware) {
  const {
    request,
    response,
  } = customMiddleware

  if (request.nextUrl.pathname !== '/login') {
    return customMiddleware
  }

  const hasCode = request.cookies.get('code_challenge') != null

  if (!hasCode) {
    const codes = await pkceChallenge()

    request.cookies.set('code_challenge', codes.code_challenge)
    request.cookies.set('code_verifier', codes.code_verifier)

    response.cookies.set('code_challenge', codes.code_challenge)
    response.cookies.set('code_verifier', codes.code_verifier)
  }

  return {
    request,
    response,
  }
}
