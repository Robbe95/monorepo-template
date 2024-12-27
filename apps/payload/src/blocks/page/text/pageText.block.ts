import type { Block } from 'payload'

export const pageTextBlock: Block = {
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
  interfaceName: 'TextBlock',
  slug: 'text',
}
