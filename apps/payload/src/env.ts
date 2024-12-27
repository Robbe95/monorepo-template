/* eslint-disable node/prefer-global/process */

export function getEnv() {
  return {
    AUTH_BASE_URL: process.env.AUTH_BASE_URL as string,
    AUTH_CLIENT_ID: process.env.AUTH_CLIENT_ID as string,
    AUTH_ISSUER: process.env.AUTH_ISSUER as string,
    AUTH_JWKS_ENDPOINT: process.env.AUTH_JWKS_ENDPOINT as string,
    AUTH_ORGANIZATION_ID: process.env.AUTH_ORGANIZATION_ID as string,
    AUTH_PROJECT_ID: process.env.AUTH_PROJECT_ID as string,
    CMS_BASE_URL: process.env.CMS_BASE_URL as string,
    ENVIRONMENT: process.env.ENVIRONMENT as string,
    SITE_BASE_URL: process.env.SITE_BASE_URL as string,
  } as const
}
