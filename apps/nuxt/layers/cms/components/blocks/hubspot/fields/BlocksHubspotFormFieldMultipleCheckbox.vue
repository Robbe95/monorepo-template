<script setup lang="ts">
import type {
  HubspotField,
} from '@cms/types/hubspotForm.type'
import type { RadioGroupItem } from '@wisemen/vue-core'
import { VcInputFieldLabel } from '@wisemen/vue-core'
import type { Field } from 'formango'

import AppCheckboxGroup from '~base/components/app/AppCheckboxGroup.vue'
import { toFormField } from '~base/utils/form/toFormField.util'

interface Props {
  formField: Field<any, any>
  hubspotField: HubspotField
}

const props = defineProps<Props>()

const options = computed<RadioGroupItem<string>[]>(() => {
  return props.hubspotField.options?.map((option) => {
    return {
      hint: option.description,
      label: option.label,
      value: option.value,
    }
  }) ?? []
})
</script>

<template>
  <div class="w-full">
    <VcInputFieldLabel
      :is-required="false"
      :label="hubspotField.label"
      for=""
    />

    <AppCheckboxGroup
      :label="hubspotField.label"
      v-bind="toFormField(formField)"
      :items="options"
    />
  </div>
</template>
