/* eslint-disable func-style */
import { defu } from 'defu'
import type {
  CollectionSlug,
  Field,
  GroupField,
} from 'payload'

export type LinkAppearances = 'default' | 'outline'

type LinkType = (options?: {
  name?: string
  disableLabel?: boolean
  linkTo?: CollectionSlug[]
  overrides?: Partial<GroupField>
}) => Field

const DEFAULT_LINK_TO: CollectionSlug[] = [
  'pages',
]

export const getLinkField: LinkType = ({ name = 'link', disableLabel = false, linkTo = DEFAULT_LINK_TO, overrides = {} } = {}) => {
  const linkResult: GroupField = {
    name,
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        fields: [
          {
            name: 'type',
            admin: {
              layout: 'horizontal',
              width: '50%',
            },
            defaultValue: 'reference',
            enumName: 'link_type',
            options: [
              {
                label: 'Internal link',
                value: 'reference',
              },
              {
                label: 'Custom URL',
                value: 'custom',
              },
            ],
            type: 'radio',
          },
          {
            name: 'newTab',
            admin: {
              style: {
                alignSelf: 'flex-end',
              },
              width: '50%',
            },
            label: 'Open in new tab',
            type: 'checkbox',
          },
        ],
        type: 'row',
      },
    ],
    interfaceName: 'LinkField',
    type: 'group',
  }

  const linkTypes: Field[] = [
    {
      name: 'reference',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'reference',
      },
      label: 'Link',
      relationTo: linkTo,
      required: true,
      type: 'relationship',
    },
    {
      name: 'url',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'custom',
      },
      label: 'Custom URL',
      required: true,
      type: 'text',
    },
  ]

  if (!disableLabel) {
    linkTypes.map((linkType) => ({
      ...linkType,
      admin: {
        ...linkType.admin,
      },
    }))
  }
  else {
    linkResult.fields = [
      ...linkResult.fields,
      ...linkTypes,
    ]
  }

  return defu(linkResult, overrides)
}
