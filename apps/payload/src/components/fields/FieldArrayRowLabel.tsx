'use client'

import { useRowLabel } from '@payloadcms/ui'

export function FieldArrayRowLabel() {
  const { data } = useRowLabel<{ name?: string }>()

  const customLabel = `${data?.name ?? '...'}`

  return (
    <div>
      {customLabel}
    </div>
  )
}
