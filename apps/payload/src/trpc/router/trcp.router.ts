import { authRouter } from '@payload/modules/auth/auth.router'
import { pagesRouter } from '@payload/modules/pages/pages.router'
import { settingsRouter } from '@payload/modules/settings/settings.router'
import { router } from '@payload/trpc/trpc'

export const appRouter = router({
  auth: authRouter,
  pages: pagesRouter,
  settings: settingsRouter,
})

export type AppRouter = typeof appRouter
