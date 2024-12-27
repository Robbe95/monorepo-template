import { getSocials } from '@payload/modules/settings/socials/queries/getSocials.query'
import { router } from '@payload/trpc/trpc'

export const settingsRouter = router({
  getSocials,
})
