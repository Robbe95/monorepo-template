import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    test: {
      include: ['**/apps/nuxt/**/*.test.{ts,js}'],
      name: 'nuxt',
    }
  },
  {
    test: {
      include: ['**/apps/payload/**/*.test.{ts,js}'],
      name: 'payload',
    }
  },
  {
    test: {
      include: ['**/packages/**/*.test.{ts,js}'],
      name: 'packages',
    }
  }
])