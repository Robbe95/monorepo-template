import type { Block } from 'payload'

export const pageCarouselBlock: Block = {
  fields: [
    {
      hasMany: true,
      name: 'images',
      relationTo: 'images',
      required: true,
      type: 'upload',
    },
  ],
  interfaceName: 'CarouselBlock',
  slug: 'carousel',
}
