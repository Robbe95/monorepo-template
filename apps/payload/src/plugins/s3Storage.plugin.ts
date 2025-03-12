import { getEnv } from '@payload/env'
import { s3Storage } from '@payloadcms/storage-s3'

const { ENVIRONMENT } = getEnv()

export function pluginStorage() {
  return s3Storage({
    bucket: process.env.S3_BUCKET as string,
    collections: {
      icons: true,
      images: true,
    },
    config: {
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
      },
      endpoint: process.env.S3_ENDPOINT as string,
      region: process.env.S3_REGION as string,
    },
    enabled: ENVIRONMENT !== 'local',
  })
}
