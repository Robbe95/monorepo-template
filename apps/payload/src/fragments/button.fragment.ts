import { getRouteFragment } from '@payload/fragments/route.fragment'
import type { Field, GroupField } from 'payload'

export interface GetButtonFragmentOptions {
  name: string
  label: GroupField['label']
}

export function getButtonFragment({ name, label }: GetButtonFragmentOptions): GroupField {
  const fields: Field[] = [
    {
      name: 'label',
      required: true,
      type: 'text',
    },
    ...getRouteFragment({
      entities: [
        'pages',
        'users',
      ],
    }),
  ]

  return {
    name,
    fields,
    label,
    type: 'group',
  }
}
