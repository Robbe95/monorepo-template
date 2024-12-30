<script setup lang="ts">
import BlocksRenderer from '@cms/components/blocks/renderer/BlocksRenderer.vue'
import type { HomePage, Page } from '@payload/payload-types'

interface Props {
  page: HomePage | Page
}

defineProps<Props>()
</script>

<template>
  <div class="mb-24 flex flex-col gap-4">
    <BlocksRenderer
      v-if="page.blocks"
      :blocks="page.blocks"
    />
  </div>
</template>
