import { getCurrentUser } from '@payload/modules/auth/queries/getCurrentUser.mutation'
import { router } from '@payload/trpc/trpc'

export const authRouter = router({
  getCurrentUser,
})
