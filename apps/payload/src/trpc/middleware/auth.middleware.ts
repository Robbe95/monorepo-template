import { middleware } from '@payload/trpc/trpc'
import { TRPCError } from '@trpc/server'

export const authMiddleware = middleware(({ ctx, next }) => {
  if (ctx.user?.email == null) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
    })
  }

  return next({
    ctx: {
      user: ctx.user,
    },
  })
})
