import { formBlocks } from '@payload/blocks/form/form.blocks'
import type { Block } from 'payload'

export const formGridBlock: Block = {
  fields: [
    {
      name: 'colums',
      required: true,
      type: 'number',
    },
    {
      name: 'blocks',
      blocks: formBlocks,
      type: 'blocks',
    },
  ],
  interfaceName: 'FormGridBlock',
  slug: 'form-grid-block',
}
