<script setup lang="ts">
import { useTheme } from '@base/composables/theme/theme.composable'
import {
  VcConfigProvider,
  VcDialogContainer,
  VcThemeProvider,
  VcToastContainer,
} from '@wisemen/vue-core'
import { ConfigProvider } from 'reka-ui'

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
          <VcThemeProvider
            :theme="theme"
            :is-dark-mode-enabled="false"
            class="flex size-full flex-1 flex-col"
          >
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
