import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage, ModeToggle } from '@repo/ui'
import { auth, signIn, signOut } from 'auth'
import ToastExample from './toast-example'

async function AppBar() {
  const session = await auth()
  return (
    <div className="flex min-h-12 w-full justify-between gap-2 bg-gradient-to-b from-slate-300 to-slate-200 dark:from-slate-800 dark:to-slate-600 p-2 dark:text-slate-50 text-slate-900">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-4">
        {/* <Link href={'/clientPage'}>Client Page</Link>
        <Link href={'/serverPage'}>Server Page</Link>
        <Link href={'/middlewareProtected'}>Middleware Protected Page</Link> */}
        <Link href="/" className=" font-semibold text-2xl">
          THE SAMPLE SHED
        </Link>
        <div className="ml-auto flex items-center gap-x-2">
          <ModeToggle />
          <ToastExample />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {session && session.user ? (
            <div className="flex gap-2">
              <p>{session.user.name}</p>
              <form
                action={async () => {
                  'use server'
                  await signOut()
                }}
              >
                <button type="submit">Sign Out</button>
              </form>
            </div>
          ) : (
            <form
              action={async () => {
                'use server'
                await signIn()
              }}
            >
              <button type="submit">Sign In</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default AppBar
