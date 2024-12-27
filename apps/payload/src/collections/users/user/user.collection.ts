import {
  ACCESS_TOKEN_EXPIRATION,
  LOCK_TIME,
  MAX_LOGIN_ATTEMPTS,
} from '@payload/constants/auth.constant'
import { zitadalStrategy } from '@payload/zitadel.auth'
// import { zitadalStrategy } from '@payload/zitadel.auth'
import type { CollectionConfig } from 'payload'

export const userCollection: CollectionConfig = {
  access: {
    delete: () => false,
    update: ({ req: { user } }) => {
      return user?.role === 'admin'
    },
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    lockTime: LOCK_TIME, // Time period to allow the max login attempts
    maxLoginAttempts: MAX_LOGIN_ATTEMPTS, // Automatically lock a user out after X amount of failed logins
    strategies: [
      zitadalStrategy,
      // tempZitadalStrategy,
    ],
    tokenExpiration: ACCESS_TOKEN_EXPIRATION, // How many seconds to keep the user logged in
    verify: false, // Require email verification before being allowed to authenticate
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      virtual: true,
    },
    {
      name: 'role',
      defaultValue: 'user',
      options: [
        'user',
        'admin',
        'editor',
        'developer',
      ],
      required: true,
      type: 'select',
    },
    {
      hasMany: true,
      name: 'addresses',
      relationTo: 'addresses',
      type: 'relationship',
    },
  ],
  hooks: {
    afterRead: [
      ({ doc }) => {
        doc.title = doc.email
      },
    ],
  },
  slug: 'users',
}
