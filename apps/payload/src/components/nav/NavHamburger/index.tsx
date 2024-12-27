/* eslint-disable check-file/folder-naming-convention */
/* eslint-disable func-style */
/* eslint-disable tailwindcss/no-custom-classname */

'use client'
import { Hamburger, useNav } from '@payloadcms/ui'
import React from 'react'

export const NavHamburger: React.FC<{
  baseClass?: string
}> = ({ baseClass }) => {
  const { navOpen, setNavOpen } = useNav()

  return (
    <button
      className={`${baseClass}__mobile-close`}
      onClick={() => {
        setNavOpen(false)
      }}
      tabIndex={!navOpen ? -1 : undefined}
      type="button"
    >
      <Hamburger isActive />
    </button>
  )
}
