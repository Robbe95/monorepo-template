<script setup lang="ts">
import {
  VcConfigProvider,
  VcDialogContainer,
  VcToastContainer,
} from '@wisemen/vue-core'
import { ConfigProvider } from 'reka-ui'

import {
  NuxtLayout,
  NuxtLoadingIndicator,
  NuxtPage,
} from '#components'
import AppThemeProvider from '~base/components/app/theme-provider/AppThemeProvider.vue'
import { useTheme } from '~base/composables/theme/theme.composable'

function useIdFunction() {
  return useId()
}

const { theme } = useTheme()
const locale = useI18n().locale
</script>

<template>
  <div class="flex w-screen flex-1">
    <div class="w-full">
      <ConfigProvider :use-id="useIdFunction">
        <VcConfigProvider :locale="locale">
          <!-- TODO: Update when vue core updates -->
          <AppThemeProvider :theme="theme">
            <NuxtLoadingIndicator color="#FFFFFF" />
            <NuxtLayout>
              <NuxtPage />
            </NuxtLayout>
            <Teleport to="#teleports">
              <VcDialogContainer />
              <VcToastContainer />
            </Teleport>
          </AppThemeProvider>
        </VcConfigProvider>
      </ConfigProvider>
    </div>
  </div>
</template>
