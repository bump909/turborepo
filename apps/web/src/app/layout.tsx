import './globals.css'
import '@repo/ui/styles.css'
import { cn } from '@repo/lib'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { Toaster } from '@repo/ui'
import { ThemeProvider } from '@/components/theme-provider'
import AppBar from '@/components/app-bar'
import Providers from './providers'
import { Analytics } from '@vercel/analytics/react'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'The SampleShed - An Electronic Music Resource',
  description: 'Sonic Strategies, Sample Packs and helpful audio solutions',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body
        className={cn(
          'dark:bg-slate-800 font-sans antialiased text-gray-600 dark:text-gray-50 leading-normal tracking-normal',
          fontSans.variable,
        )}
      >
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="w-full flex flex-col h-screen justify-between overflow-auto">
              <header className="w-full sticky top-0 z-10">
                <div className="bg-white flex w-full flex-wrap">
                  <AppBar />
                </div>
              </header>
              <main className="w-full mb-auto grow shadow-sm mx-auto" id="root">
                <div className="min-h-full w-full px-4 max-w-7xl mx-auto ">
                  {children}
                  <Toaster />
                </div>
              </main>
              <footer>
                <div className="text-white bg-blue-950 xl:bg-gradient-radial from-blue-150 to-blue-950">
                  <div className="p-6 max-w-7xl px-4 mx-auto">
                    <address className="not-italic">Payments by Stripe</address>
                  </div>
                </div>
                <div className="w-full bg-black mt-auto">
                  <div className="  flex p-6 space-x-8 md:space-x-12 text-slate-400 text-sm max-w-7xl px-4 mx-auto">
                    <div className="flex flex-col md:flex-row">
                      <ul>
                        <li>2024 &copy; Sample Shed</li>
                        <li>
                          <a href="/contact">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-12">
                      <ul className="">
                        <li>
                          <a href="/">Clients</a>
                        </li>
                        <li>
                          <a href="/">Resources</a>
                        </li>
                        <li>
                          <a href="/" title="">
                            FAQs
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* social_links */}
                  </div>
                </div>
              </footer>
            </div>
          </ThemeProvider>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
