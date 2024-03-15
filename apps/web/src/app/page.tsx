'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@repo/ui'
import { CarouselPlugin } from '@/components/carousel'
import { data as mixing } from '@/data/mixing'
import { data as deck } from '@/data/deck'
import Deck from '@/components/deck'
import Modal from '@/components/modal'

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <div className="prose mx-auto flex w-full max-w-7xl flex-col items-center justify-between space-y-8 p-4">
        <h3>
          The Sonic Strategies provided here are inspired by Brian Enos Oblique Strategies, a set of cards designed to
          break creative deadlock by encouraging lateral thinking. While the specific strategies listed here are not
          direct copies of Enos cards, they are crafted in a similar spirit to inspire creativity and experimentation in
          your audio productions and compositions. While some elements may overlap with broader creative concepts, this
          specific collection is an update for contemporary productions.
        </h3>

        <Tabs className="mx-auto w-full max-w-2xl p-4" defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">{deck.name}</TabsTrigger>
            <TabsTrigger value="tab2">{mixing.name}</TabsTrigger>
          </TabsList>
          <TabsContent className="flex" value="tab1">
            <CarouselPlugin data={deck.tips} />
          </TabsContent>
          <TabsContent className="flex" value="tab2">
            <CarouselPlugin data={mixing.tips} />
          </TabsContent>
        </Tabs>

        <Deck description="Oblique Straegies for the 21st Sentry" footer="prev | next" title="Inspire Deck">
          Use just C-D-E
        </Deck>
      </div>
      <div className="mb-32 grid w-full max-w-7xl px-4 text-center lg:mb-0 lg:w-full lg:grid-cols-4 lg:text-left">
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">Explore starter templates for Next.js.</p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
