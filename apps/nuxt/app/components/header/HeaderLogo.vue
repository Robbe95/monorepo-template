<script setup lang="ts">
import AppLogo from '@base/components/app/AppLogo.vue'

import { NuxtLinkLocale } from '#components'
</script>

<template>
  <NuxtLinkLocale
    :to="{
      name: 'index',
    }"
    class="focus-ring-white"
  >
    <AppLogo class="h-12" />
  </NuxtLinkLocale>
</template>
