import { useTrpc } from '@base/composables/api/useTrpc'
import { useGlobalI18n } from '@base/composables/i18n/useGlobaI18n'
import { useQuery } from '@base/composables/query/useQuery'
import { settingsQueryKey } from '@cms/api/query-key/settings.queryKey'

export function useSocialsQuery() {
  const trpc = useTrpc()
  const { locale } = useGlobalI18n()

  return useQuery({
    queryFn: async () => {
      const data = await trpc.settings.getSocials.query()

      return data ?? []
    },
    queryKey: [
      settingsQueryKey.socials.queryKey,
      locale,
    ],
  })
}
