import type { UIField } from 'payload'

export interface GetInfoFragmentOptions {
  info: string
}
export function getInfoFragment({ info }: GetInfoFragmentOptions): UIField {
  return {
    name: 'info-fragment',
    admin: {
      components: {
        Field: '/components/fields/FieldInfo.tsx',
      },
    },
    custom: {
      info,
    },
    type: 'ui',
  }
}
