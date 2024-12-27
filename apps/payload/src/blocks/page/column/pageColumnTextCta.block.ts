import { getCtasFragment } from '@payload/fragments/cta.fragment'
import type { Block } from 'payload'

export const pageColumnTextCtaBlock: Block = {
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
    getCtasFragment({
      name: 'ctas',
      label: 'CTAs',
      maxItems: 2,
      minItems: 0,
    }),
  ],
  interfaceName: 'ColumnTextCtaBlock',
  labels: {
    plural: 'Column text CTA blocks',
    singular: 'Column text CTA block',
  },
  slug: 'columnTextCta',
}
