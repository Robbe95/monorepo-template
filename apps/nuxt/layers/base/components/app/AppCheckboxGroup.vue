<script lang="ts" setup generic="TValue extends AcceptableValue">
import type {
  AcceptableValue,
  RadioGroupItem,
} from '@wisemen/vue-core'
import { VcCheckbox } from '@wisemen/vue-core'
import { defineModel } from 'vue'

interface Props {
  items: RadioGroupItem<TValue>[]
}
const props = defineProps<Props>()

const model = defineModel<TValue[]>({
  required: true,
})

function isInModel(value: TValue): boolean {
  return model.value?.includes(value)
}

function setComputedModel(value: TValue) {
  if (isInModel(value)) {
    model.value = model.value.filter((item) => item !== value)
  }
  else {
    model.value = [
      ...model.value,
      value,
    ]
  }
}
</script>

<template>
  <div>
    <VcCheckbox
      v-for="item in props.items"
      :key="item.label"
      :label="item.label"
      :model-value="isInModel(item.value)"
      @update:model-value="setComputedModel(item.value)"
    />
  </div>
</template>
