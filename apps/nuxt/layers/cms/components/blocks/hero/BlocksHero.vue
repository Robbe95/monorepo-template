<script setup lang="ts">
import CmsImage from '@cms/components/image/CmsImage.vue'
import type { HeroBlock } from '@repo/payload-types'

interface Props {
  block: HeroBlock
}

defineProps<Props>()
</script>

<template>
  <div
    v-if="block.blockType === 'hero'"
    class="flex h-dvh flex-col items-center justify-center bg-brand-primary"
  >
    <div class="w-full flex-1 overflow-hidden">
      <CmsImage
        v-if="(typeof block.backgroundImage !== 'string')"
        :image="block.backgroundImage"
        class="object-cover"
      />
    </div>

    <div class="w-full bg-brand-primary py-12 text-brand-primary">
      <div class="container mx-auto flex flex-col px-4 py-1">
        <div class="grid items-center justify-center gap-2 lg:grid-cols-[0.6fr,0.4fr]">
          <span class="text-hero leading-[4.5rem]">
            {{ block.title }}
          </span>
          <span class="text-subtext">
            {{ block.text }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
