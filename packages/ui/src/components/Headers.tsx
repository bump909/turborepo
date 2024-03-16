import React from 'react'
import { cn } from '@repo/lib'

interface Props extends React.HTMLProps<HTMLHeadingElement> {
  children: React.ReactNode
  className?: string
}

const H1: React.FC<Props> = ({ children, className, ...props }) => {
  const classes = cn('text-xl font-bold my-6', className)

  return (
    <h1 className={classes} {...props}>
      {children}
    </h1>
  )
}

export { H1 }
