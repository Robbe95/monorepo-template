<script setup lang="ts">
import { useToast, VcButton } from '@wisemen/vue-core'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { useAuthStore } from '~base/stores/auth.store'

const authStore = useAuthStore()

const { lastLoggedInUser } = storeToRefs(authStore)

const { t } = useI18n()
const toast = useToast()
const isZitadelLoading = ref<boolean>(false)

const title = computed<string>(() => {
  if (lastLoggedInUser.value === null) {
    return t('auth.login.log_in')
  }

  return t('auth.login.welcome_back_name', {
    name: lastLoggedInUser.value?.email ?? '',
  })
})

async function onLoginWithZitadelClick(): Promise<void> {
  try {
    isZitadelLoading.value = true

    const loginUrl = await authStore.getLoginUrl()

    navigateTo(loginUrl, {
      external: true,
    })
  }
  catch {
    toast.error({
      message: t('auth.login.error_toast.title'),
    })
  }
  finally {
    isZitadelLoading.value = false
  }
}
</script>

<template>
  <div
    :cols="1"
    class="w-full"
  >
    {{ title }}
    <VcButton
      @click="onLoginWithZitadelClick"
    >
      {{ t('auth.login.login_with_zitadel') }}
    </VcButton>
  </div>
</template>
