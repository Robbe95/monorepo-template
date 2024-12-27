import { getButtonFragment } from '@payload/fragments/button.fragment'
import type {
  ArrayField,
  Field,
  GroupField,
} from 'payload'

export interface GetCtaFragmentOptions {
  name: string
  label: GroupField['label']
  maxItems?: number
  minItems?: number
}

export function getCtasFragment({ name, label, maxItems, minItems }: GetCtaFragmentOptions): ArrayField {
  const field: Field = {
    name,
    fields: [
      getButtonFragment({
        name: 'cta',
        label: 'CTA',
      }),
    ],
    label,
    maxRows: maxItems,
    minRows: minItems,
    required: false,
    type: 'array',
  }

  return field
}

export interface PathSegment {
  /**
   * The key representing a path segment.
   */
  readonly key: PropertyKey
}
