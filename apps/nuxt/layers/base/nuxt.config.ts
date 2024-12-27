export default defineNuxtConfig({
  components: [
    {
      pathPrefix: false,
      path: '@base/components',
    },
    {
      pathPrefix: false,
      path: '@base/modules',
    },
  ],
  css: [
    '@wisemen/vue-core/style.css',
    '@base/assets/styles/base.css',
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
        name: 'Kreon',
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
    'nuxt-tailwindcss4',
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
