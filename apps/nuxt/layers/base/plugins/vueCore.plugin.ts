import { icons } from '@base/icons/icons'
import { extendIcons } from '@wisemen/vue-core'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin({
  name: 'vue-core',
  parallel: true,
  setup() {
    extendIcons(icons)
  },
})
