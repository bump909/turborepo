'use client'

import React from 'react'
import { Button, toast } from '@repo/ui'

function ToastExample(): JSX.Element {
  return (
    <Button
      onClick={() =>
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => {
              console.log('Undo')
            },
          },
        })
      }
      variant="outline"
    >
      Show Toast
    </Button>
  )
}

export default ToastExample
