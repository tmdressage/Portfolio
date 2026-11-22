import { HorseGradient } from '@/components/elements/Horse'
import { MotionProvider } from '@/components/layouts/MotionProvider'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Noto_Sans_JP, Shippori_Mincho_B1 } from 'next/font/google'
import './globals.css'

// 英字の見出し用（明朝系の欧文書体）
const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['500', '700'],
  style: ['normal', 'italic'],
})

// 日本語の見出し用（明朝体）
const shippori = Shippori_Mincho_B1({
  variable: '--font-shippori',
  subsets: ['latin'],
  weight: ['600', '800'],
})

// 本文用（ゴシック体）
const notoSansJp = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Takeshi Motoyoshi | Portfolio',
  description: 'Web エンジニア Takeshi Motoyoshi のポートフォリオ',
  // 名前で検索しても出てこないよう、検索エンジンに載せない
  robots: { index: false },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='ja'
      className={`${cormorant.variable} ${shippori.variable} ${notoSansJp.variable} antialiased`}
    >
      <body className='font-sans leading-[1.8]'>
        <HorseGradient />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
