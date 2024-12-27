<script setup lang="ts">
import { VcIcon } from '@wisemen/vue-core'

const { t } = useI18n()
</script>

<template>
  <header class="fixed top-0 z-20 w-full">
    <div class="bg-brand-primary text-brand-primary">
      <div class="container mx-auto px-4 py-2">
        <div class="flex items-center gap-2">
          <span class="text-caption !text-gray-400">
            {{ t('app.header.compatible_with_vektron') }}
          </span>
          <VcIcon
            icon="chevronRight"
            size="sm"
          />
        </div>
      </div>
    </div>
    <div class="bg-gradient-to-b from-[rgb(0,0,0,0.8)] to-transparent py-6 text-white">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between text-white lg:grid lg:grid-cols-3 lg:items-center lg:justify-center">
          <HeaderLogo />
          <div />
          <div class="flex items-center justify-end gap-4">
            <NuxtLinkLocale
              :to="{
                path: '/page/home',
              }"
            >
              {{ t('app.header.home') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale
              :to="{
                path: '/page/form',
              }"
            >
              {{ t('app.header.form') }}
            </NuxtLinkLocale>

            <TheLocaleSelector />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
