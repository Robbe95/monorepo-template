import { multiTenantPlugin } from '@payloadcms/plugin-multi-tenant'
import type { Config } from '@repo/payload-types'

export function pluginMultiTentant() {
  return multiTenantPlugin<Config>({
    collections: {
      services: {
        useTenantAccess: true,
      },
      tenantFooters: {
        useTenantAccess: true,
      },
      tenantHeaders: {
        useTenantAccess: true,
      },
      tenantPages: {
        useTenantAccess: true,
      },
    },
    tenantField: {
      access: {
        read: () => true,
        update: () => true,
      },
    },
    tenantsArrayField: {
      includeDefaultField: true,
    },
    userHasAccessToAllTenants: () => true,
  })
}
