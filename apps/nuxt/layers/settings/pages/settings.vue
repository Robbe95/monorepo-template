<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { NuxtPage } from '#components'
import AppPage from '~base/components/app/page/AppPage.vue'

const { t } = useI18n()
</script>

<template>
  <AppPage :title="t('module.setting.title')">
    <template #default>
      <NuxtPage />
    </template>
  </AppPage>
</template>
