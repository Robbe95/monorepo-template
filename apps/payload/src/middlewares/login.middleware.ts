import type { CustomMiddleware } from '@payload/middlewares/helper.middleware'

export async function withLoginPageMiddleware(customMiddleware: CustomMiddleware) {
  const {
    request,
    response,
  } = customMiddleware

  return customMiddleware
}
