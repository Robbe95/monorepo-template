import { getInfoFragment } from '@payload/fragments/info.fragment'
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
    {
      name: 'link',
      required: true,
      type: 'text',
    },
    getInfoFragment({
      info: 'Internal links should be formed like the following `/home/about`, external links should be formed like the following `https://example.com`',
    }),
  ]

  return {
    name,
    fields,
    label,
    type: 'group',
  }
}
