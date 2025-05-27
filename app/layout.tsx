import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bella Vista',
  description: 'Bella Vista Resturant - A Taste of Italy',
  authors: [{ name: 'Siddhant Bhattarai', url: 'https://bellavista.example.com' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
