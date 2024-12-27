/* eslint-disable perfectionist/sort-objects */
/* eslint-disable node/prefer-global/process */
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import collections from '@payload/collections/collections'
import globals from '@payload/globals/globals'
import { migrations } from '@payload/migrations'
import { setCollectionGroups } from '@payload/payload.nav'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import { slateEditor } from '@payloadcms/richtext-slate'
import { s3Storage } from '@payloadcms/storage-s3'
import { buildConfig } from 'payload'
import { en } from 'payload/i18n/en'
import { nl } from 'payload/i18n/nl'
import sharp from 'sharp'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  globals: setCollectionGroups(globals),
  collections: setCollectionGroups(collections),
  admin: {
    components: {
      graphics: {
        Icon: '/components/logo/Logo#Icon',
        Logo: '/components/logo/Logo#Logo',
      },
      Nav: '@payload/components/nav/Nav#DefaultNav',
      afterLogin: [
        '@payload/components/auth/LoginButton',
      ],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  cors: [
    'http://localhost:3000',
    'http://localhost:5173',
  ],
  routes: {
    admin: '/',
  },
  db: postgresAdapter({
    idType: 'uuid',
    prodMigrations: migrations,
    push: true,
    pool: {
      connectionString: process.env.POSTGRES_URI ?? '',
    },
  }),
  // editor: slateEditor({}),
  editor: lexicalEditor(),
  i18n: {
    supportedLanguages: { en, nl },
  },
  localization: {
    defaultLocale: 'nl',
    locales: [
      'en',
      'nl',
      'fr',
    ],
  },
  plugins: [
    seoPlugin({
      generateDescription: ({ doc }) => doc.excerpt,
      generateTitle: ({ doc }) => `Website.com — ${doc.title}`,
      tabbedUI: true,
      uploadsCollection: 'images',
    }),
    s3Storage({
      collections: {
        images: true,
        icons: true,
      },
      bucket: process.env.S3_BUCKET as string,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
        },
        endpoint: process.env.S3_ENDPOINT as string,
        region: process.env.S3_REGION as string,
      },
    }),

  ],

  secret: process.env.PAYLOAD_SECRET ?? '',
  sharp,
  typescript: {
    autoGenerate: true,
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  async onInit() {

  },

})
