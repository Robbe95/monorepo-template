import { publicProcedure } from '@payload/trpc/procedures/public.procedure'
import { getPayload } from '@payload/utils/getPayload.util'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

export const login = publicProcedure
  .input(z.object({
    email: z.string(),
    password: z.string(),
  }))
  .mutation(async ({ input }) => {
    const payload = await getPayload()

    try {
      const login = await payload.login({
        collection: 'users',
        data: {
          email: input.email,
          password: input.password,
        },
      })

      return login
    }
    catch {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'Invalid email or password',
      })
    }
  })
