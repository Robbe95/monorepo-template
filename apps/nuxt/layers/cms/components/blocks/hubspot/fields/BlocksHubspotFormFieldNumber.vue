<script setup lang="ts">
import type { HubspotField } from '@cms/types/hubspotForm.type'
import { VcNumberField } from '@wisemen/vue-core'
import type { Field } from 'formango'

interface Props {
  formField: Field<any, any>
  hubspotField: HubspotField
}

defineProps<Props>()
</script>

<template>
  <div class="w-full">
    <VcNumberField
      :label="hubspotField.label"
      v-bind="formField"
    />
  </div>
</template>
