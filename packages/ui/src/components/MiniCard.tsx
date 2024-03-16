import React from 'react'
import { H2 } from './Headers'
import { LuChevronRight } from 'react-icons/lu'

interface MiniCardProps {
  title: string
  body: string
  href: string
}
function MiniCard({ title, body, href }: MiniCardProps) {
  return (
    <a
      href={href}
      className="group rounded-lg bg-emerald-50 dark:bg-emerald-900 dark:border-slate-300 border border-slate-500 px-5 py-4 transition-colors hover:border-gray-800 dark:hover:border-gray-200 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      rel="noopener noreferrer"
    >
      <H2 className="flex items-center justify-center">
        {title}
        <span className="ml-2 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          <LuChevronRight />
        </span>
      </H2>
      <p className="text-sm opacity-50">{body}</p>
    </a>
  )
}

export { MiniCard }
