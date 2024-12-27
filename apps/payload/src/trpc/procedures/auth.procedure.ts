import { authMiddleware } from '@payload/trpc/middleware/auth.middleware'
import { t } from '@payload/trpc/trpc'

export const authProcedure = t.procedure.use(authMiddleware)
