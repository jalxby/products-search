import type { Metadata } from 'next'

import { ReactNode, Suspense } from 'react'

import { Header } from '@/components/header/Header'

import '@/styles/index.scss'

export const metadata: Metadata = {
  description: 'Find the best products with Royal Gambit Search.',
  openGraph: {
    description: 'Find the best products with Royal Gambit Search.',
    images: [
      {
        alt: 'Search for products with Royal Gambit Search',
        height: 600,
        url: '/path-to-image.jpg',
        width: 800,
      },
    ],
    title: 'Royal Gambit Search',
    url: 'https://your-site.com',
  },
  title: 'Royal Gambit Search',
  twitter: {
    card: 'summary_large_image',
    description: 'Find the best products with Royal Gambit Search.',
    images: ['/path-to-image.jpg'],
    title: 'Royal Gambit Search',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html>
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          {children}
        </Suspense>
      </body>
    </html>
  )
}
