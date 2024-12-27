import { getCtasFragment } from '@payload/fragments/cta.fragment'
import { getImageFragment } from '@payload/fragments/image.fragment'
import type { Block } from 'payload'

export const pageHeroBlock: Block = {
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
    getImageFragment({
      name: 'backgroundImage',
      label: 'Background image',
    }),
  ],
  interfaceName: 'HeroBlock',
  labels: {
    plural: 'Hero blocks',
    singular: 'Hero block',
  },
  slug: 'hero',
}
