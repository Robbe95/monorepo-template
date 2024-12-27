import { useTrpc } from '@base/composables/api/useTrpc'
import { useGlobalI18n } from '@base/composables/i18n/useGlobaI18n'
import { useQuery } from '@base/composables/query/useQuery'
import { pageQueryKey } from '@root/layers/cms/api/query-key/page.queryKey'

export function usePageQuery({ slug }: { slug: string }) {
  const trpc = useTrpc()
  const { locale } = useGlobalI18n()

  return useQuery({
    queryFn: async () => {
      const data = await trpc.pages.getPageBySlug.query({ slug })

      return data
    },
    queryKey: [
      pageQueryKey.detail(slug).queryKey,
      locale,
    ],
  })
}
