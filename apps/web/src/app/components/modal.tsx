'use client'
import type { ReactNode } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@repo/ui'

interface ModalProps {
  title: string
  children: ReactNode
}

export default function Modal({ title, children }: ModalProps): JSX.Element {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="border border-slate-800 rounded-md dark px-4 py-2 text-sm">
        Open
      </AlertDialogTrigger>
      <AlertDialogContent className="p-0">
        <AlertDialogHeader className="border-b border-slate-300 px-4 py-2">
          <AlertDialogTitle>{title}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="px-4">{children}</AlertDialogDescription>
        <AlertDialogFooter className="p-4 ">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
