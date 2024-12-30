<script setup lang="ts">
import { isClient } from '@vueuse/core'

import {
  injectThemeProviderContext,
  provideThemeProviderContext,
} from '~base/context/theme.context'

// TODO: Update when vue core updates
const props = withDefaults(defineProps<{
  isDarkModeEnabled?: boolean | null
  theme?: string & {} | 'default' | null
}>(), {
  isDarkModeEnabled: null,
  theme: null,
})

function getThemeClasses(theme: string, isDarkModeEnabled: boolean): string {
  if (!isClient) {
    return theme
  }
  const classes = [
    theme,
  ]

  if (isDarkModeEnabled) {
    classes.push('dark')
  }
  else {
    classes.push('light')
  }

  return classes.join(' ')
}

const themeContext = injectThemeProviderContext()

const isDarkModeEnabled = computed<boolean>(() => (
  props.isDarkModeEnabled ?? themeContext.isDarkModeEnabled.value
))

const theme = computed<string>(() =>
  props.theme ?? themeContext.theme.value)

provideThemeProviderContext({
  isDarkModeEnabled,
  theme,
})
</script>

<template>
  <div :class="getThemeClasses(theme, isDarkModeEnabled)">
    <slot />
  </div>
</template>
