'use client'
import { SessionProvider } from 'next-auth/react'
import type { ReactNode } from 'react'
import React from 'react'

function Providers({ children }: { children: ReactNode }): JSX.Element {
  return <SessionProvider>{children}</SessionProvider>
}

export default Providers
