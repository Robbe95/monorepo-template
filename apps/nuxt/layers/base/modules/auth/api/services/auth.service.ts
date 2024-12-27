import { useTrpc } from '@base/composables/api/useTrpc'

import { AuthTransformer } from '#shared/models/auth.transformer'
import type { CurrentUser } from '#shared/models/current-user/currentUser.model'

export class AuthService {
  static async getCurrentUser(): Promise<CurrentUser> {
    const trpc = useTrpc()

    const data = await trpc.auth.getCurrentUser.query()

    return AuthTransformer.toCurrentUser(data)
  }
}
