<script setup lang="ts">
import type { HubspotField } from '@cms/types/hubspotForm.type'
import { VcTextarea } from '@wisemen/vue-core'
import type { Field } from 'formango'

import { toFormField } from '~base/utils/form/toFormField.util'

interface Props {
  formField: Field<any, any>
  hubspotField: HubspotField
}

defineProps<Props>()
</script>

<template>
  <div class="w-full">
    <VcTextarea
      :label="hubspotField.label"
      :placeholder="hubspotField.label"
      v-bind="toFormField(formField)"
    />
  </div>
</template>
