import { pageBlocks } from '@payload/blocks/page/page.blocks'
import { getSeoFragment } from '@payload/fragments/seo.fragment'
import { createExampleJob } from '@payload/jobs/jobs/example/example.job'
import type { CollectionConfig } from 'payload'

export const pageCollection: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: [
      'title',
      'slug',
      'blocks',
    ],
    listSearchableFields: [
      'title',
      'slug',
    ],
    livePreview: {
      url: ({ data }) => {
        return `http://localhost:3000/page/${data.slug}`
      },
    },
    useAsTitle: 'title',

  },
  fields: [
    {
      name: 'title',
      admin: {
        position: 'sidebar',
      },
      localized: true,
      required: true,
      type: 'text',
    },
    {
      name: 'slug',
      admin: {
        position: 'sidebar',
      },
      localized: true,
      required: true,
      type: 'text',
    },
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
  hooks: {
    afterChange: [
      ({ doc }) => {
        createExampleJob({
          title: doc.title,
        })
      },
    ],
  },
  lockDocuments: {
    duration: 300,
  },
  slug: 'pages',
  versions: {
    drafts: {
      autosave: true,
      schedulePublish: true,
    },
  },
}
