import { getEnv } from '@payload/env'
import { getPayload } from '@payload/utils/getPayload.util'
import {
  createRemoteJWKSet,
  jwtVerify,
} from 'jose'
import type { AuthStrategy } from 'payload'

export const USER_NOT_AUTHENTICATED = {
  user: null,
}
export const zitadalStrategy: AuthStrategy = {
  name: 'zitadel',
  authenticate: async (ctx) => {
    const payload = await getPayload()
    const env = getEnv()

    const authorizationHeader = ctx.headers.get('Authorization')
    const bearerToken = authorizationHeader?.split(' ')[1]

    if (bearerToken == null) {
      return USER_NOT_AUTHENTICATED
    }

    console.log('Bearer token', env.AUTH_JWKS_ENDPOINT)

    const jwk = createRemoteJWKSet(new URL(env.AUTH_JWKS_ENDPOINT))

    try {
      const jwtVerifyResponse = await jwtVerify(bearerToken, jwk, {
        issuer: env.AUTH_ISSUER,
        audience: env.AUTH_PROJECT_ID,
      })

      console.log('JWT verify response', jwtVerifyResponse)

      const userEmail = jwtVerifyResponse.payload.email as string

      console.log('User email', userEmail)

      const users = await payload.find({
        collection: 'users',
        where: { email: { equals: userEmail } },
      })

      const singleUser = users.docs[0]

      if (singleUser == null) {
        const existingUsers = await payload.find({
          collection: 'users',
          limit: 1,
        })
        const isFirstUser = existingUsers.docs.length === 0

        await payload.create({
          collection: 'users',
          data: {
            email: userEmail,
            password: 'idc',
            role: isFirstUser ? 'admin' : 'user',
          },
        })
      }

      if (singleUser.role === 'user') {
        return USER_NOT_AUTHENTICATED
      }

      return {
        user: {
          id: singleUser.id,
          collection: 'users',
          email: singleUser.email,
          role: singleUser.role,
          username: singleUser.email,
        },
      }
    }
    catch {
      return USER_NOT_AUTHENTICATED
    }
  },
}

export const tempZitadalStrategy: AuthStrategy = {
  name: 'zitadel-temp',
  authenticate: async () => {
    const payload = await getPayload()
    const users = await payload.find({
      collection: 'users',
    })

    const singleUser = users.docs[0]

    return {
      user: {
        id: singleUser.id,
        collection: 'users',
        email: singleUser.email,
        role: singleUser.role,
        username: singleUser.email,
      },
    }
  },
}
