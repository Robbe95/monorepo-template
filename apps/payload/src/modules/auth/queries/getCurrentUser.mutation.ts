import { authProcedure } from '@payload/trpc/procedures/auth.procedure'

export const getCurrentUser = authProcedure
  .query(({ ctx }) => {
    return ctx.user
  })
