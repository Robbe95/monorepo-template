<script setup lang="ts">
import type { BreadcrumbItem } from '@wisemen/vue-core'
import { VcBreadcrumbs } from '@wisemen/vue-core'

import AppContainer from '~base/components/app/container/AppContainer.vue'

const props = withDefaults(
  defineProps<{
    title: string
    breadcrumbs?: BreadcrumbItem[]
  }>(),
  {
    breadcrumbs: () => [],
  },
)
</script>

<template>
  <div class="flex w-full flex-1 flex-col">
    <div class="bg-primary z-10 sticky top-0">
      <AppContainer>
        <VcBreadcrumbs
          v-if="props.breadcrumbs.length > 0"
          :items="props.breadcrumbs"
          class="-ml-xxs"
        />

        <div class="flex min-h-10 items-center justify-between">
          <h1
            class="text-display-xs font-semibold text-primary"
          >
            {{ props.title }}
          </h1>

          <div
            id="header-actions"
            class="flex items-center justify-end gap-xl"
          >
            <slot name="header-actions" />
          </div>
        </div>
      </AppContainer>
    </div>

    <AppContainer class="flex flex-1 flex-col overflow-hidden pb-4xl pt-4xl">
      <slot />
    </AppContainer>
  </div>
</template>
