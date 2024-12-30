import type { CurrentUser } from '@shared/models'

import { useTrpc } from '~base/composables/api/useTrpc'

export class AuthService {
  static async getCurrentUser(): Promise<CurrentUser> {
    const trpc = useTrpc()

    const data = await trpc.auth.getCurrentUser.query()

    return data
  }
}
