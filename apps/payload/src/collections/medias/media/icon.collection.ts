import type { CollectionConfig } from 'payload'

export const iconCollection: CollectionConfig = {
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: [
      'filename',
      'alt',
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
    {
      name: 'content',
      admin: {
        hidden: true,
      },
      type: 'text',
    },
  ],
  hooks: {
    beforeChange: [
      ({
        data,
        req,
      }) => {
        const svgAsString = req.file?.data.toString()

        data.content = svgAsString

        return data
      },
    ],
  },
  slug: 'icons',
  upload: {
    mimeTypes: [
      'image/svg+xml',
    ],
    staticDir: 'icons',
  },
}
