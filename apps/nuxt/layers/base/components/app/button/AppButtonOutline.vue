<script setup lang="ts">
import type { VcButtonProps } from '@wisemen/vue-core'
import { VcButton } from '@wisemen/vue-core'

const props = defineProps<VcButtonProps>()
</script>

<template>
  <VcButton
    v-bind="props"
    :style-config="{
      '--button-border-radius-default': '4px',
      '--button-text-color-hover': 'var(--white)',
      '--button-padding-left-default': '2rem',
      '--button-padding-right-default': '2rem',
    }"
    as="div"
    variant="secondary-color"
  >
    <slot />
  </VcButton>
</template>
