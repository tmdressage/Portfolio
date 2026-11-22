import { Reveal } from '@/components/elements/Reveal'

// 準備中の区画に出す「Coming Soon」（点線の枠の中に、金色の英字で表示する）
export function ComingSoon() {
  return (
    <Reveal className='rounded-2xl border border-dashed border-gold/40 px-6 py-14 text-center'>
      <p className='font-serif-en text-[clamp(26px,4vw,36px)] tracking-[0.2em] text-gold italic'>
        Coming Soon
      </p>
    </Reveal>
  )
}
