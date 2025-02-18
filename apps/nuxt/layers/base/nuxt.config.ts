export default defineNuxtConfig({
  components: [],
  css: [
    '@wisemen/vue-core/style.css',
    '~base/assets/styles/base.css',
  ],
  experimental: {
    viewTransition: true,
  },
  fonts: {
    experimental: {
      processCSSVariables: true,
    },
    families: [
      {
        name: 'Template',
        global: true,
        preload: true,
        provider: 'local',
        weights: [
          300,
          400,
          700,
        ],
      },

    ],
  },
  modules: [
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxt/fonts',
    'nuxt-time',
    // 'nuxt-tailwindcss4',
    '@nuxtjs/color-mode',
  ],
  runtimeConfig: {
    public: {
      authClientId: '',
      authOrganizationId: '',
      authProjectId: '',
      authBaseUrl: '',
      authIssuer: '',
      authJwksEndpoint: '',
      cmsBaseUrl: '',
      environment: '',
      siteBaseUrl: '',
    },
  },
})
