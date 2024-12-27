import { pageColumnBlocks } from '@payload/blocks/page/pageColumn.blocks'
import type { Block } from 'payload'

export const pageColumnBlock: Block = {
  fields: [
    {
      name: 'columns',
      admin: {
        components: {
          RowLabel: '@payload/components/fields/FieldArrayRowColumnLabel.tsx#FieldArrayRowColumnLabel',
        },
      },
      fields: [
        {
          name: 'block',
          blocks: pageColumnBlocks,
          maxRows: 1,
          type: 'blocks',
        },
      ],
      interfaceName: 'ColumnBlocks',
      localized: true,
      maxRows: 2,
      minRows: 1,
      type: 'array',
    },
  ],
  interfaceName: 'ColumnBlock',
  labels: {
    plural: 'Column blocks',
    singular: 'Column block',
  },
  slug: 'column',
}
