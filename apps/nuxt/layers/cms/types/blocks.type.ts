import type { ColumnBlocks } from '@payload/payload-types'

export type SingleColumnBlock = NonNullable<NonNullable<ColumnBlocks>[number]['block']>[number]
