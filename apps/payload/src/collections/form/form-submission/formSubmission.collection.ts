import type { CollectionConfig } from 'payload'

export const formSubmissionCollection: CollectionConfig = {
  fields: [
    {
      name: 'form',
      label: 'Form',
      relationTo: 'form-builder',
      required: true,
      type: 'relationship',
    },
    {
      name: 'submission',
      type: 'json',
    },
  ],
  slug: 'form-submission',
}
