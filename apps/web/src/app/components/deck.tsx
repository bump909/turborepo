import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@repo/ui'
import type { ReactNode } from 'react'

interface CardProps {
  title: string
  description: string
  children: ReactNode
  footer: ReactNode
}

export default function Deck({ title, description, children, footer = '' }: CardProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  )
}
