import { withPayload } from '@payloadcms/next/withPayload'
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: false,
  },
  // Your Next.js config here
  output: 'standalone',
}

export default withPayload(nextConfig)
