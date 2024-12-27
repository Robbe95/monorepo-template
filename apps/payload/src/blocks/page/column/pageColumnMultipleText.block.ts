import { getCtasFragment } from '@payload/fragments/cta.fragment'
import type { Block } from 'payload'

export const pageColumnMultipleTextBlock: Block = {
  fields: [
    {
      name: 'texts',
      fields: [
        {
          name: 'subtitle',
          required: true,
          type: 'text',
        },
        {
          name: 'text',
          required: true,
          type: 'textarea',
        },
      ],
      required: true,
      type: 'array',
    },
    getCtasFragment({
      name: 'ctas',
      label: 'CTAs',
      maxItems: 2,
      minItems: 0,
    }),
  ],
  interfaceName: 'ColumnMultipleTextBlock',
  labels: {
    plural: 'Column multiple text blocks',
    singular: 'Column multiple text block',
  },
  slug: 'columnMultipleText',
}
