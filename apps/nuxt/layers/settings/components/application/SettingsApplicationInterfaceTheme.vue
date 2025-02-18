<script setup lang="ts">
import {
  defineStyleConfig,
  type RadioGroupItem,
  VcRadioGroup,
  VcRadioGroupItem,
} from '@wisemen/vue-core'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppFormFieldset from '~base/components/app/fieldset/AppFormFieldset.vue'
import AppThemeProvider from '~base/components/app/theme-provider/AppThemeProvider.vue'
import { useDarkMode } from '~base/composables/dark-mode/useDarkMode'
import { useTheme } from '~base/composables/theme/theme.composable'
import SettingsApplicationOverviewMiniDashboard from '~root/layers/settings/components/application/SettingsApplicationOverviewMiniDashboard.vue'

type ThemeValue = 'dark' | 'light' | 'system'

const { t } = useI18n()
const theme = useTheme()
const darkMode = useDarkMode()

const themes = computed<RadioGroupItem<ThemeValue>[]>(() => [
  {
    label: t('module.setting.interface_theme.light'),
    value: 'light',
  },
  {
    label: t('module.setting.interface_theme.dark'),
    value: 'dark',
  },
  {
    label: t('module.setting.interface_theme.system_preference'),
    value: 'system',
  },
])

const value = computed<'dark' | 'light' | 'system'>({
  get: () => darkMode.value,
  set: (value) => {
    darkMode.value = value
  },
})

defineStyleConfig({
  colorScheme: 'dark',
  config: {
    '--button-bg-color-default': 'var(--error-500)',
  },
  theme: 'default',
  variant: 'test',
  component: 'button',
})
</script>

<template>
  <AppFormFieldset
    :title="t('module.setting.interface_theme.title')"
    :description="t('module.setting.interface_theme.description')"
  >
    <VcRadioGroup
      v-model="value"
    >
      <div class="grid gap-lg lg:grid-cols-3">
        <VcRadioGroupItem
          v-for="item of themes"
          :key="item.value"
          :value="item.value"
          :item="item"
          class="group rounded-xl text-left !ring-0 !ring-offset-0"
        >
          <AppThemeProvider
            :dark-mode-value="item.value"
            :theme="theme.theme.value"
          >
            <div class="relative h-40 overflow-hidden rounded-xl border-2 border-solid border-transparent bg-tertiary ring-brand-primary-500 ring-offset-1 duration-200 group-focus-visible:ring-2 group-data-[state=checked]:border-brand">
              <SettingsApplicationOverviewMiniDashboard class="absolute left-4 top-4" />
            </div>
          </AppThemeProvider>

          <span class="mt-md block text-sm text-primary">
            {{ item.label }}
          </span>
        </VcRadioGroupItem>
      </div>
    </VcRadioGroup>
  </AppFormFieldset>
</template>
