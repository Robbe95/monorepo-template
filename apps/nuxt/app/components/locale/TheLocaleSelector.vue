<script setup lang="ts">
import type { DropdownMenuItem } from '@wisemen/vue-core'
import {
  VcDropdownMenu,
  VcIcon,
} from '@wisemen/vue-core'

import { translateLocale } from '~base/translations/locale.translate'

const { locale, locales } = useI18n()

type LocaleObject = typeof locales.value[number]
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed<LocaleObject[]>(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})

const dropdownItems = computed<DropdownMenuItem[]>(() => {
  return availableLocales.value.map((i) => ({
    label: translateLocale(i.code),
    type: 'option',
    onSelect: () => {
      void navigateTo(switchLocalePath(i.code))
    },
  }))
})
</script>

<template>
  <VcDropdownMenu
    :items="dropdownItems"
    popover-align="end"
  >
    <template #trigger>
      <button class="flex items-center gap-1 px-2 py-1 font-medium uppercase text-white text-sm">
        <span>
          {{ locale }}
        </span>
        <VcIcon
          icon="chevronDown"
          class="size-4"
        />
      </button>
    </template>
  </VcDropdownMenu>
</template>
