<script setup lang="ts">
import { useHubspotFormQuery } from '@cms/api/query/useHubspotFormQuery'
import BlocksHubspotFormSchema from '@cms/components/blocks/hubspot/BlocksHubspotFormSchema.vue'
import type { HubspotFormBlock } from '@repo/payload-types'
import { VcSkeletonItem } from '@wisemen/vue-core'

import AppHeightTransition from '~base/components/app/AppHeightTransition.vue'
import AppContainer from '~base/components/app/container/AppContainer.vue'

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
