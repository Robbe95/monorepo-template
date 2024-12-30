import { extendIcons } from '@wisemen/vue-core'
import { defineNuxtPlugin } from 'nuxt/app'

import { icons } from '~base/icons/icons'

export default defineNuxtPlugin({
  name: 'vue-core',
  parallel: true,
  setup() {
    extendIcons(icons)
  },
})
