import type { CollectionConfig } from 'payload'

export const imageCollection: CollectionConfig = {
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
  slug: 'images',
  upload: {
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 80,
          },
        },
        height: undefined,
        position: 'centre',
        width: 400,
        withoutEnlargement: true,
      },
      {
        name: 'card',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 80,
          },
        },
        height: undefined,
        position: 'centre',
        width: 768,
        withoutEnlargement: true,
      },
      {
        name: 'tablet',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 80,
          },
        },
        height: undefined,
        position: 'centre',
        width: 1024,
        withoutEnlargement: true,
      },
      {
        name: 'desktop',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 80,
          },
        },
        height: undefined,
        position: 'centre',
        width: 1280,
        withoutEnlargement: true,
      },
      {
        name: 'background',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 80,
          },
        },
        height: undefined,
        position: 'centre',
        width: 1920,
        withoutEnlargement: true,
      },
    ],
    mimeTypes: [
      'image/*',
    ],
    staticDir: 'images',
  },
}
