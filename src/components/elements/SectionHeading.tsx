import { EnglishLabel } from '@/components/elements/EnglishLabel'
import type { Gait } from '@/components/elements/Horse'
import { HorseIcon } from '@/components/elements/HorseIcon'
import { Reveal } from '@/components/elements/Reveal'

type Props = {
  gait: Gait
  label: string
  title: string
}

// 区画の見出し（馬アイコン＋英字の小見出し＋日本語の見出し）
export function SectionHeading({ gait, label, title }: Props) {
  return (
    <Reveal className='mb-9 flex items-center gap-4'>
      <HorseIcon gait={gait} />
      <div>
        <EnglishLabel>{label}</EnglishLabel>
        <h2 className='font-serif-ja text-[clamp(26px,4vw,40px)] leading-tight font-extrabold tracking-[0.06em] after:mt-3.5 after:block after:h-0.5 after:w-16 after:bg-linear-to-r after:from-gold after:to-transparent'>
          {title}
        </h2>
      </div>
    </Reveal>
  )
}
