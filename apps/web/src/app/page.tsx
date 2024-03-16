'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger, H1, H2, LuChevronRight, MiniCard } from '@repo/ui'
import { CarouselPlugin } from '@/components/carousel'
import { data as mixing } from '@/data/mixing'
import { data as mastering } from '@/data/mastering'
import { data as deck } from '@/data/deck'
import Deck from '@/components/deck'
import Modal from '@/components/modal'

export default function Home(): JSX.Element {
  const guest = true
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between">
      <div className="prose mx-auto flex w-full max-w-7xl flex-col items-center justify-between space-y-8 p-4">
        <H1>Sonic Strategies</H1>
        <h3>
          The Sonic Strategies provided here are inspired by Brian Enos Oblique Strategies, a set of cards designed to
          break creative deadlock by encouraging lateral thinking. While the specific strategies listed here are not
          direct copies of Enos cards, they are crafted in a similar spirit to inspire creativity and experimentation in
          your audio productions and compositions. While some elements may overlap with broader creative concepts, this
          specific collection is an update for contemporary productions.
        </h3>

        <Tabs className="mx-auto w-full max-w-7xl py-4 md:px-6" defaultValue="tab1">
          <TabsList className="flex-col md:flex-row max-md:space-y-1">
            <TabsTrigger value="tab1">{deck.name}</TabsTrigger>
            <TabsTrigger value="tab2">{mixing.name}</TabsTrigger>
            <TabsTrigger value="tab3">{mastering.name}</TabsTrigger>
          </TabsList>
          <TabsContent className="flex" value="tab1">
            {guest ? <CarouselPlugin data={deck.guest} /> : <CarouselPlugin data={deck.tips} />}
          </TabsContent>
          <TabsContent className="flex" value="tab2">
            {guest ? <CarouselPlugin data={mixing.guest} /> : <CarouselPlugin data={mixing.tips} />}
          </TabsContent>
          <TabsContent className="flex" value="tab3">
            {guest ? <CarouselPlugin data={mastering.guest} /> : <CarouselPlugin data={mastering.tips} />}
          </TabsContent>
        </Tabs>

        {/* <Deck description="Oblique Straegies for the 21st Sentry" footer="prev | next" title="Inspire Deck">
          Use just C-D-E
        </Deck> */}
      </div>
      <div className="grid w-full max-w-7xl px-4 text-center mb-4 md:grid-cols-4 md:text-left md:space-x-2 max-md:space-y-2">
        <MiniCard href="/" title="Docs" body="Find in-depth information about our audio features." />
        <MiniCard
          href="/"
          title="Sonic Strategy Cards"
          body="Hundred's of &lquot;light bulb&rquot; ideas and inspiration for your music"
        />
        <MiniCard href="/" title="Learn" body="A reference of audio related posts." />
        <MiniCard href="/" title="Sample Packs" body="Download Sample Packs for Genre specific music" />
      </div>
    </div>
  )
}
