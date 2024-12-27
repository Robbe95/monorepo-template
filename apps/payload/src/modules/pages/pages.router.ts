import { getHomePage } from '@payload/modules/pages/queries/getHomePage.query'
import { getPageBySlug } from '@payload/modules/pages/queries/getPageBySlug.query'
import { router } from '@payload/trpc/trpc'

export const pagesRouter = router({
  getHomePage,
  getPageBySlug,
})
