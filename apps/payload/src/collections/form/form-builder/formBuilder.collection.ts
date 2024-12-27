import { formBlocks } from '@payload/blocks/form/form.blocks'
import { formGridBlock } from '@payload/blocks/form/formGrid.block'
import type { CollectionConfig } from 'payload'

export const formBuilderCollection: CollectionConfig = {
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      localized: true,
      required: true,
      type: 'text',
    },
    {
      name: 'builder',
      blocks: [
        ...formBlocks,
        formGridBlock,
      ],
      type: 'blocks',
    },
    {
      name: 'submissions',
      collection: 'form-submission',
      type: 'join',
      on: 'form',
    },
  ],
  slug: 'form-builder',
}
