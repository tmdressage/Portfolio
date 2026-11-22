import { Reveal } from '@/components/elements/Reveal'
import type { Strength } from '@/type/profile'

// カード右上に薄く出す番号
const ROMAN_NUMERALS = ['I', 'II', 'III', 'IV', 'V']

type Props = {
  strengths: Strength[]
}

// 得意分野のカード一覧
export function StrengthList({ strengths }: Props) {
  return (
    <div className='grid gap-5 md:grid-cols-2'>
      {strengths.map((strength, index) => (
        <Reveal key={strength.id} delay={index * 0.12} className='h-full'>
          <div className='relative h-full overflow-hidden rounded-2xl border-2 border-line bg-card p-6'>
            <span className='absolute top-2.5 right-4 font-serif-en text-[56px] leading-none text-gold/25'>
              {ROMAN_NUMERALS[index]}
            </span>
            <h3 className='mb-2.5 font-serif-ja text-lg text-gold-light'>{strength.title}</h3>
            <p className='text-[15px] text-muted'>{strength.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
