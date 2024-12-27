import { navSorting } from '@payload/payload.nav'
import type { NavGroupType } from '@payloadcms/ui/shared'

export function sortNavGroups(groups: NavGroupType[]): NavGroupType[] {
  const sortedGroups = groups.toSorted((a, b) => {
    const groupSorting = Object.keys(navSorting)
    const aIndex = groupSorting.indexOf(a.label.toLocaleLowerCase())
    const bIndex = groupSorting.indexOf(b.label.toLocaleLowerCase())

    if (aIndex === -1 && bIndex === -1) {
      return 0
    }

    if (aIndex === -1) {
      return 1
    }

    if (bIndex === -1) {
      return -1
    }

    return aIndex - bIndex
  })

  sortedGroups.forEach((group) => {
    group.entities = group.entities.toSorted((a, b) => {
      const slugOrder = navSorting[group.label.toLocaleLowerCase()]

      const aIndex = slugOrder.findIndex((slug) => slug === a.slug)
      const bIndex = slugOrder.findIndex((slug) => slug === b.slug)

      if (aIndex === -1 && bIndex === -1) {
        return 0
      }

      if (aIndex === -1) {
        return 1
      }

      if (bIndex === -1) {
        return -1
      }

      return aIndex - bIndex
    })
  })

  return sortedGroups
}
