import { Reveal } from '@/components/elements/Reveal'
import { TimelineMarker } from '@/components/elements/TimelineMarker'
import type { Career } from '@/type/career'

type Props = {
  careers: Career[]
}

// 経歴の年表（縦並び）。資格の年表と同じ金の線とひし形の印で、上から順に現れる
export function CareerTimeline({ careers }: Props) {
  return (
    <ol className='relative grid gap-8 pl-7.5 before:absolute before:inset-y-0 before:left-2.25 before:w-px before:bg-linear-to-b before:from-transparent before:via-gold before:to-transparent'>
      {careers.map((career, index) => (
        <li key={career.id}>
          <Reveal delay={index * 0.12} className='relative'>
            <TimelineMarker />
            <p className='font-serif-ja text-base text-gold md:text-[17px]'>{career.period}</p>
            <h3 className='mt-1 font-serif-ja text-lg leading-snug font-semibold md:text-xl'>
              {career.title}
            </h3>
            <ul className='mt-2.5 list-disc pl-5 text-[15px] text-muted'>
              {career.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}
