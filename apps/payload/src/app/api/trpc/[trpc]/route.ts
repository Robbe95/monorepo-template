/* eslint-disable check-file/folder-naming-convention */
import { createContext } from '@payload/trpc/context/context'
import { appRouter } from '@payload/trpc/router/trcp.router'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

function handler(request: Request) {
  return fetchRequestHandler({
    // @ts-expect-error This works
    createContext,
    endpoint: '/api/trpc',
    req: request,
    router: appRouter,
  })
}

export { handler as GET, handler as POST }
