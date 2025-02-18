import { toCapatilize } from '@repo/utils'
import type {
  CollectionSlug,
  Field,
} from 'payload'

export interface GetRouteFragmentOptions {
  entities: CollectionSlug[]
}

export function getRouteFragment({ entities }: GetRouteFragmentOptions): Field[] {
  const selectField: Field = {
    name: 'type',
    dbName: 'route_fragment_type',
    options: [
      ...entities.map((item) => {
        return {
          label: toCapatilize(item),
          value: item,
        }
      }),
      {
        label: 'External',
        value: 'external',
      },
    ],
    required: true,
    type: 'select',
  }

  const relationFields: Field[] = entities.map<Field>((item) => {
    const field: Field = {
      name: `to${toCapatilize(item)}`,
      admin: {
        condition: (_, sibling) => {
          return sibling.type === item
        },
      },
      label: toCapatilize(item),
      maxDepth: 1,
      relationTo: item,
      required: true,
      type: 'relationship',
    }

    return field
  })

  const fields: Field[] = [
    selectField,
    ...relationFields,
    {
      name: 'toExternal',
      admin: {
        condition: (_, sibling) => {
          return sibling.type === 'external'
        },
      },
      type: 'text',
    },
  ]

  return fields
}
