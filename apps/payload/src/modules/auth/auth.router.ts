import { login } from '@payload/modules/auth/mutations/login.mutation'
import { getCurrentUser } from '@payload/modules/auth/queries/getCurrentUser.mutation'
import { router } from '@payload/trpc/trpc'

export const authRouter = router({
  getCurrentUser,
  login,
})
