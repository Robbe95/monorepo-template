import { getLocale } from '@payload/utils/getLocale.util'
import { getPayload } from '@payload/utils/getPayload.util'
import { convertLocale } from '@shared/utils'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

async function getSitemap(request: NextRequest) {
  const payload = await getPayload()

  const locale = getLocale(request)
  const paginatedPages = await payload.find({
    collection: 'pages',
    pagination: false,
    populate: {
      pages: {
        title: true,
        slug: true,
      },
    },
  })

  const response = paginatedPages.docs.map((page) => ({
    _sitemap: convertLocale(locale),
    loc: `/${locale}/page/${page?.slug}`,
  }))

  return NextResponse.json(response)
}

export { getSitemap as GET }
