import { getCtasFragment } from '@payload/fragments/cta.fragment'
import { getImageFragment } from '@payload/fragments/image.fragment'
import type { Block } from 'payload'

export const pageHotspotsBlock: Block = {
  fields: [
    {
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      name: 'hotspots',
      fields: [
        {
          name: 'hotspot',
          fields: [
            {
              name: 'nr',
              required: true,
              type: 'text',
            },
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
            {
              name: 'coordinates',
              fields: [
                {
                  name: 'x',
                  admin: {
                    description: 'The X coordinate of the hotspot in %',
                  },
                  max: 100,
                  min: 0,
                  required: true,
                  type: 'number',
                },
                {
                  name: 'y',
                  admin: {
                    description: 'The Y coordinate of the hotspot in %',
                  },
                  max: 100,
                  min: 0,
                  required: true,
                  type: 'number',
                },
              ],
              type: 'group',
            },
          ],
          interfaceName: 'Hotspot',
          type: 'group',
        },
      ],
      type: 'array',
    },
    getImageFragment({
      name: 'image',
      label: 'Image',
    }),
    getCtasFragment({
      name: 'ctas',
      label: 'CTAs',
      maxItems: 2,
      minItems: 0,
    }),
  ],
  interfaceName: 'HotspotsBlock',
  slug: 'hotspots',
}
