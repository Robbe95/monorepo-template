'use client'

import React from 'react'

function LoginButton({ url }: { url: string }) {
  return (
    <a
      className="btn btn--style-primary btn--icon-style-without-border btn--size-medium"
      style={{
        display: 'block',
        textAlign: 'center',
        width: '100%',
      }}
      href={url}
    >
      Sign in
    </a>
  )
}

export default LoginButton
