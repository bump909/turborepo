/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client'

import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@repo/ui'

// Define an interface for the mixing tip object
interface CardI {
  id: number
  title: string
  description: string
}

// Define an interface for the props of the MixingTipsComponent
interface CardProps {
  data: CardI[]
}

export function CarouselPlugin({ data }: CardProps): JSX.Element {
  const plugin = React.useRef(Autoplay({ delay: 8000, stopOnInteraction: true, reset: true }))

  return (
    <Carousel
      className="mx-auto w-full dark:text-white"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[plugin.current]}
    >
      <CarouselContent>
        {data.map(card => (
          <CarouselItem key={card.id}>
            <div className="p-1">
              <Card className="prose flex aspect-square flex-col items-center justify-center p-6">
                <CardHeader>
                  <CardTitle>
                    <span className="text-4xl font-semibold">{card.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>{card.description}</CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:block" />
      <CarouselNext className="hidden md:block" />
    </Carousel>
  )
}
