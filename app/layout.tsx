import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Xà lách Ninh Hòa',
  description: 'Trang web chính thức của Xà lách Ninh Hòa',
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
