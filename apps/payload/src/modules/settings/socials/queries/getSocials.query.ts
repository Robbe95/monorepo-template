import { publicProcedure } from '@payload/trpc/procedures/public.procedure'
import { getPayload } from '@payload/utils/payload/getPayload.util'

export const getSocials = publicProcedure
  .query(async ({ ctx }) => {
    const payload = await getPayload()

    const settings = await payload.findGlobal({
      fallbackLocale: false,
      locale: ctx.locale,
      slug: 'settings',
    })

    return settings.socials?.socials?.map((social) => social.social) ?? []
  })
