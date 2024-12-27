import type { Field } from 'payload'

export function getFormFragment(): Field[] {
  const fields: Field[] = [
    {
      name: 'label',
      required: true,
      type: 'text',
    },
    {
      name: 'isRequired',
      required: true,
      type: 'checkbox',
    },
  ]

  return fields
}
