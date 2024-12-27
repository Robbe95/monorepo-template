import { getFormFragment } from '@payload/fragments/form.fragment'
import type { Block } from 'payload'

export const formInputBlock: Block = {
  fields: [
    ...getFormFragment(),
    {
      name: 'type',
      options: [
        'text',
        'email',
        'password',
        'number',
        'date',
        'tel',
      ],
      type: 'select',
    },
  ],
  interfaceName: 'FormInputBlock',
  slug: 'form-input-block',
}
