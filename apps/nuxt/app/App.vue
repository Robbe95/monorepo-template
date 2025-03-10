<script setup lang="ts">
import {
  VcConfigProvider,
  VcDialogContainer,
  VcToastContainer,
} from '@wisemen/vue-core'
import { ConfigProvider } from 'reka-ui'

import { useCookie } from '#app'
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

const test = useCookie('access_token')
</script>

<template>
  <div class="flex w-screen flex-1">
    {{ test }}
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
