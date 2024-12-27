<script setup lang="ts">
import type { Page } from '@payload/payload-types'

interface Props {
  blocks: Page['blocks']
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <template
      v-for="(block) in blocks"
      :key="JSON.stringify(block)"
    >
      <NuxtErrorBoundary>
        <BlocksHero
          v-if="block.blockType === 'hero'"
          :block="block"
        />
        <BlocksColumn
          v-else-if="block.blockType === 'column'"
          :block="block"
        />
        <BlocksHubspotForm
          v-else-if="block.blockType === 'hubspot-form'"
          :block="block"
        />
        <BlocksRendererNotSupported
          v-else
          :block-name="(block as any).blockType ?? 'Unknown'"
        />
        <template #error>
          <BlocksRendererError />
        </template>
      </NuxtErrorBoundary>
    </template>
  </div>
</template>
