import type { Block } from 'payload'

export const pageHubspotFormBlock: Block = {
  fields: [
    {
      name: 'hubspotForm',
      relationTo: 'form-hubspot',
      required: true,
      type: 'relationship',
    },
  ],
  interfaceName: 'HubspotFormBlock',
  labels: {
    plural: 'Hubspot form blocks',
    singular: 'Hubspot form block',
  },
  slug: 'hubspot-form',
}
