import { useGlobalI18n } from '@base/composables/i18n/useGlobaI18n'
import { useAuthStore } from '@base/stores/auth.store'
import { getEnv } from '@base/utils/env/getEnv.utils'
import type { AppRouter } from '@payload/trpc/router/trcp.router'
import {
  createTRPCProxyClient,
  httpBatchLink,
} from '@trpc/client'

export function useTrpc() {
  const { CMS_BASE_URL } = getEnv()
  const { locale } = useGlobalI18n()

  const client = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        async headers() {
          const authStore = useAuthStore()
          const headers: Record<string, string> = {}

          headers['Accept-Language'] = locale.value

          try {
            const token = await authStore.getToken()

            headers.Authorization = `Bearer ${token}`
          }
          catch {
            authStore.logout()
          }

          return headers
        },
        url: `${CMS_BASE_URL}/api/trpc`,
      }),
    ],
  })

  return client
}
