/**
 * This is your entry point to setup the root configuration for tRPC on the server.
 * - `initTRPC` should only be used once per app.
 * - We export only the functionality that we use so we can enforce which base procedures should be used
 *
 * Learn how to create protected base procedures and other things below:
 * @see https://trpc.io/docs/server/routers
 * @see https://trpc.io/docs/server/procedures
 */
import type { Context } from '@payload/trpc/context/context'
import type { appRouter } from '@payload/trpc/router/trpc.router'
import { initTRPC } from '@trpc/server'

export const t = initTRPC
  .context<Context>()
  .create()

export const router = t.router
export const middleware = t.middleware
export type AppRouter = typeof appRouter
