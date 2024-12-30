import type { ColumnBlocks } from '@shared/payload-types'

export type SingleColumnBlock = NonNullable<NonNullable<ColumnBlocks>[number]['block']>[number]
