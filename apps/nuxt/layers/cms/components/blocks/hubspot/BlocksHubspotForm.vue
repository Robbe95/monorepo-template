<script setup lang="ts">
import AppHeightTransition from '@base/components/app/AppHeightTransition.vue'
import { useHubspotFormQuery } from '@cms/api/query/useHubspotFormQuery'
import type { HubspotFormBlock } from '@payload/payload-types'
import { VcSkeletonItem } from '@wisemen/vue-core'

interface Props {
  block: HubspotFormBlock
}
const props = defineProps<Props>()

const hubspotFormId = computed<string>(() => {
  if (typeof props.block.hubspotForm === 'string') {
    return props.block.hubspotForm
  }

  return props.block.hubspotForm.formId
})
const hubspotFormQuery = useHubspotFormQuery({ formId: hubspotFormId.value })

onServerPrefetch(async () => {
  await hubspotFormQuery.suspense()
})
</script>

<template>
  <AppContainer>
    <AppHeightTransition>
      <div v-if="!hubspotFormQuery.isPending.value">
        <BlocksHubspotFormSchema
          v-if="hubspotFormQuery.data.value"
          :hubspot-form="hubspotFormQuery.data.value"
        />
      </div>
      <div v-else>
        <VcSkeletonItem class="h-80 w-full" />
      </div>
    </AppHeightTransition>
  </AppContainer>
</template>
