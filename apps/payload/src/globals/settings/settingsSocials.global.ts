import { getIconFragment } from '@payload/fragments/icon.fragment'
import type { Tab } from 'payload'

export const settingsSocialsTab: Tab = {
  name: 'socials',
  fields: [
    {
      name: 'socials',
      admin: {
        components: {
          RowLabel: '@payload/components/fields/FieldArrayRowLabelSocials.tsx#FieldArrayRowLabelSocials',
        },
      },
      fields: [
        {
          name: 'social',
          fields: [
            {
              name: 'name',
              label: 'Name',
              type: 'text',
            },
            {
              name: 'url',
              label: 'URL',
              type: 'text',
            },
            getIconFragment({
              name: 'icon',
              label: 'Icon',
            }),
          ],
          interfaceName: 'Social',
          label: 'Social',
          type: 'group',
        },
      ],
      label: 'Socials',
      type: 'array',
    },
  ],
  label: 'Socials',
}
