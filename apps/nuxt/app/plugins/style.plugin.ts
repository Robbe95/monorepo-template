import {
  setStyleConfigSsrCallback,
  setupDefaultStyles,
} from '@wisemen/vue-core'

export default defineNuxtPlugin({
  name: 'style',
  setup(nuxt) {
    setStyleConfigSsrCallback((styleNode) => {
      nuxt.ssrContext?.head.push?.({
        style: [
          styleNode,
        ],
      })
    })

    if (nuxt.ssrContext != null) {
      setupDefaultStyles()
      // defineStyleConfig({
      //   colorScheme: '*',
      //   config: {
      //     '--checkbox-bg-color-checked': '#E94935',
      //   },
      //   theme: '*',
      //   variant: 'default',
      //   component: 'checkbox',
      // })
    }
  },
})
