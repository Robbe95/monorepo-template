<script setup lang="ts">
import { useTheme } from '@base/composables/theme/theme.composable'
import {
  VcConfigProvider,
  VcDialogContainer,
  VcThemeProvider,
  VcToastContainer,
} from '@wisemen/vue-core'
import { ConfigProvider } from 'reka-ui'

import {
  NuxtLayout,
  NuxtLoadingIndicator,
  NuxtPage,
} from '#components'

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
          <VcThemeProvider :theme="theme">
            <NuxtLoadingIndicator color="#FFFFFF" />
            <NuxtLayout>
              <NuxtPage />
            </NuxtLayout>
            <Teleport to="#teleports">
              <VcDialogContainer />
              <VcToastContainer />
            </Teleport>
          </VcThemeProvider>
        </VcConfigProvider>
      </ConfigProvider>
    </div>
  </div>
</template>
