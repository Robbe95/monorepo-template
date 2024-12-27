import { pageBlocks } from '@payload/blocks/page/page.blocks'
import { getSeoFragment } from '@payload/fragments/seo.fragment'
import type {
  GlobalConfig,
} from 'payload'

export const homePageGlobal: GlobalConfig = {
  access: {
    read: () => true,
  },
  admin: {
    livePreview: {
      url: () => {
        return `http://localhost:3000`
      },
    },
  },
  fields: [
    {
      tabs: [
        {
          fields: [
            {
              name: 'blocks',
              blocks: pageBlocks,
              localized: true,
              minRows: 1,
              type: 'blocks',
            },
          ],
          label: 'Structure',
        },
        {
          name: 'seo',
          fields: [
            ...getSeoFragment(),
          ],
          label: 'SEO',
        },
      ],
      type: 'tabs',
    },

  ],
  label: 'Home Page',
  lockDocuments: {
    duration: 300,
  },
  slug: 'home-page',
  versions: {
    drafts: {
      autosave: true,
    },
  },
}
