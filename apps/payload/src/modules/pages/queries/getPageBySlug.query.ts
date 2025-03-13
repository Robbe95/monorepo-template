import { publicProcedure } from '@payload/trpc/procedures/public.procedure'
import { getPayload } from '@payload/utils/payload/getPayload.util'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

export const getPageBySlug = publicProcedure
  .input(z.object({
    slug: z.string(),
  }))
  .query(async ({ ctx, input }) => {
    const payload = await getPayload()

    const paginatedPages = await payload.find({
      collection: 'pages',
      fallbackLocale: false,
      locale: ctx.locale,
      where: {
        slug: {
          equals: input.slug,
        },
      },
    })

    if (paginatedPages.docs.length === 0) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'This page does not exist',
      })
    }

    return paginatedPages.docs[0]
  })
