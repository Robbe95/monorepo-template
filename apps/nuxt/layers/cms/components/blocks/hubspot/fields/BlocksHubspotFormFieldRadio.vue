<script setup lang="ts">
import type {
  HubspotField,
} from '@cms/types/hubspotForm.type'
import type { RadioGroupItem } from '@wisemen/vue-core'
import { VcRadioGroup } from '@wisemen/vue-core'
import type { Field } from 'formango'

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
    <VcRadioGroup
      :label="hubspotField.label"
      v-bind="formField"
      :items="options"
    />
  </div>
</template>
