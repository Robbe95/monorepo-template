import type { Block } from 'payload'

export const pageImageTextBlock: Block = {
  fields: [
    {
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      name: 'text',
      required: true,
      type: 'textarea',
    },
  ],
  interfaceName: 'ImageTextBlock',
  slug: 'image-text',
}
