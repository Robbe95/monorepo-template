import { publicProcedure } from '@payload/trpc/procedures/public.procedure'
import { getPayload } from '@payload/utils/getPayload.util'

export const getHomePage = publicProcedure
  .query(async ({ ctx }) => {
    const payload = await getPayload()

    const homePage = await payload.findGlobal({
      fallbackLocale: false,
      locale: ctx.locale,
      slug: 'home-page',
    })

    return homePage
  })
