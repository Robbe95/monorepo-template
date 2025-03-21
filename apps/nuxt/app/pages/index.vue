<script setup lang="ts">
import { usePageQuery } from '@cms/api/query/usePageQuery'
import { useLivePreview } from '@cms/composables/useLivePreview'
import NotFoundView from '@cms/views/NotFoundView.vue'
import PageView from '@cms/views/PageView.vue'

import { NuxtErrorBoundary } from '#components'
import { getEnv } from '~base/utils/env/getEnv.utils'

const { CMS_BASE_URL } = getEnv()

const pageQuery = usePageQuery({ slug: 'home' })

await pageQuery.suspense()

const { data } = useLivePreview({
  initialData: pageQuery.data,
})

const ogImage = computed<string>(() => {
  if (!data.value?.seo?.image) {
    return ''
  }

  if (typeof data.value.seo?.image === 'string') {
    return getImageUrl(data.value.seo?.image)
  }

  return getImageUrl(data.value.seo?.image.sizes?.card?.url ?? '')
})

function getImageUrl(url: string): string {
  return `${CMS_BASE_URL}/${url}`
}

const head = useLocaleHead({
  dir: true,
  lang: true,
  seo: true,
})

useHead(() => ({
  htmlAttrs: {
    lang: head.value.htmlAttrs!.lang,
  },
  link: [
    {
      href: '/favicon.png',
      rel: 'icon',
      type: 'image/png',
    },
  ],
}))

useSeoMeta({
  title: data.value?.seo?.title,
  description: data.value?.seo?.description,
  ogDescription: data.value?.seo?.description,
  ogImage: ogImage.value,
  ogTitle: data.value?.seo?.title,
  twitterCard: 'summary',
  twitterDescription: data.value?.seo?.description,
  twitterImage: ogImage.value,
  twitterTitle: data.value?.seo?.title,
})
</script>

<template>
  <div class="w-full">
    <NuxtErrorBoundary>
      <PageView
        v-if="data"
        :page="data"
      />

      <NotFoundView v-else />
      <template #fallback>
        <div class="flex size-full items-center justify-center">
          <div class="flex flex-col items-center justify-center" />
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
