import React from 'react'
import { cn } from '@repo/lib'

interface Props extends React.HTMLProps<HTMLHeadingElement> {
  children: React.ReactNode
  className?: string
}

const H1: React.FC<Props> = ({ children, className, ...props }) => {
  const classes = cn('text-2xl md:text-3xl font-bold my-3 md:my-6 text-slate-900 dark:text-slate-50', className)

  return (
    <h1 className={classes} {...props}>
      {children}
    </h1>
  )
}

const H2: React.FC<Props> = ({ children, className, ...props }) => {
  const classes = cn('text-xl md:text-2xl font-semibold mb-3 text-slate-900 dark:text-slate-50', className)

  return (
    <h2 className={classes} {...props}>
      {children}
    </h2>
  )
}

export { H1, H2 }
