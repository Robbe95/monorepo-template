<script lang="ts" setup>
import { useToast } from '@wisemen/vue-core'
import { useI18n } from 'vue-i18n'

import { useAuthStore } from '~base/stores/auth.store'

const i18n = useI18n()
const authStore = useAuthStore()
const localeRoute = useLocaleRoute()
const routeQuery = useRoute()
const toast = useToast()

async function loginCallback() {
  const authorizationCode = routeQuery.query.code as string

  if (authorizationCode === undefined) {
    toast.error({
      message: i18n.t('auth.callback.login_error.title'),
    })

    const localeLoginRoute = localeRoute('auth-login')

    if (localeLoginRoute == null) {
      return
    }

    await navigateTo(localeLoginRoute)

    return
  }

  try {
    await authStore.loginWithCode(authorizationCode)

    const localeIndexRoute = localeRoute('index')

    if (localeIndexRoute == null) {
      return
    }

    await navigateTo(localeIndexRoute)
  }
  catch (error) {
    console.error(error)
    toast.error({
      message: i18n.t('auth.callback.login_error.title'),
    })
  }
}

onMounted(() => {
  loginCallback()
})
</script>

<template>
  <div />
</template>
