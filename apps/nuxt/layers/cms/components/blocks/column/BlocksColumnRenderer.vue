<script setup lang="ts">
import type { SingleColumnBlock } from '@cms/types/blocks.type'

interface Props {
  block: SingleColumnBlock
}

defineProps<Props>()
</script>

<template>
  <BlocksColumnTextCta
    v-if="block.blockType === 'columnTextCta'"
    :block="block"
  />
  <BlocksColumnMultipleText
    v-else-if="block.blockType === 'columnMultipleText'"
    :block="block"
  />
  <BlocksRendererNotSupported
    v-else
    :block-name="(block as any).blockType ?? 'Unknown'"
  />
</template>
