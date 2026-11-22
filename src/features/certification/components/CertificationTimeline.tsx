import { Reveal } from '@/components/elements/Reveal'
import { TimelineMarker } from '@/components/elements/TimelineMarker'
import type { Certification } from '@/type/certification'

// 「yyyy.mm.dd」を「yyyy.mm」の形にする
function formatYearMonth(date: string) {
  return date.slice(0, 7).replace('-', '.')
}

type Props = {
  certifications: Certification[]
}

// 資格の年表（PC では横並び、スマホでは縦並び）。点が順番に光りながら現れる
export function CertificationTimeline({ certifications }: Props) {
  return (
    <ol className='relative grid gap-4.5 pl-7.5 before:absolute before:inset-y-0 before:left-2.25 before:w-px before:bg-linear-to-b before:from-transparent before:via-gold before:to-transparent md:grid-cols-5 md:gap-3 md:pt-8.5 md:pl-0 md:before:inset-x-0 md:before:top-3.5 md:before:bottom-auto md:before:h-px md:before:w-auto md:before:bg-linear-to-r'>
      {certifications.map((certification, index) => (
        <li key={certification.id}>
          <Reveal delay={index * 0.15} className='relative text-sm md:text-center'>
            {/* PC では横並びの線の上に置く */}
            <TimelineMarker className='md:-top-6.75 md:left-1/2 md:-translate-x-1/2' />
            <time
              dateTime={certification.acquiredOn}
              className='block font-serif-en text-[21px] text-gold'
            >
              {formatYearMonth(certification.acquiredOn)}
            </time>
            {certification.name}
          </Reveal>
        </li>
      ))}
    </ol>
  )
}
