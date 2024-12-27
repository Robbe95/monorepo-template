import { getPayload } from '@payload/utils/getPayload.util'
import type { inferAsyncReturnType } from '@trpc/server'
import type { TypedLocale } from 'payload'

export async function createContext({
  req,
  res,
}: { req: Request, res: Response }) {
  const headers = req.headers

  const locale = headers.get('Accept-Language') as 'all' | TypedLocale | undefined

  const payload = await getPayload()
  const { user } = await payload.auth({ headers })

  return { locale, req, res, user }
}

export type Context = inferAsyncReturnType<typeof createContext>
