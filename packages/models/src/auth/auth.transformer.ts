import type { User } from '@repo/payload-types'

import type { CurrentUser, UserId } from './current-user/currentUser.model'

export class AuthTransformer {
  static toCurrentUser(dto: User): CurrentUser {
    return {
      id: dto.id as UserId,
      email: dto.email,
      role: dto.role,
    }
  }
}
