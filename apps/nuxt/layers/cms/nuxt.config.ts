import path from 'node:path'

import { ONE_HOUR_IN_SECONDS } from '@shared/constants'

export default defineNuxtConfig({
  alias: {
    '@cms': path.resolve(__dirname, '../cms'),
    '@payload': path.resolve(__dirname, '../payload/src'),
    '@payload-types': path.resolve(__dirname, '../payload'),
    '~base': path.resolve(__dirname, '../base'),
  },
  components: [],
  extends: [
    '../base',
  ],
  routeRules: {
    '/page/**': {
      swr: ONE_HOUR_IN_SECONDS,
    },
  },
})
