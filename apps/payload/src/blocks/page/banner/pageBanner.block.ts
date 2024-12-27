import { getCtasFragment } from '@payload/fragments/cta.fragment'
import { getIconFragment } from '@payload/fragments/icon.fragment'
import type { Block } from 'payload'

export const bannerBlock: Block = {
  fields: [
    {
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      name: 'text',
      required: true,
      type: 'text',
    },
    getIconFragment({
      name: 'icon',
      label: 'Icon',
    }),
    getCtasFragment({
      name: 'ctas',
      label: 'CTAs',
      maxItems: 2,
      minItems: 0,
    }),
  ],
  interfaceName: 'BannerBlock',
  labels: {
    plural: 'Banner blocks',
    singular: 'Banner block',
  },
  slug: 'banner',
}
