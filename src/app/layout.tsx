import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Takeshi Motoyoshi | Portfolio',
  description: 'Web エンジニア Takeshi Motoyoshi のポートフォリオ',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  )
}
