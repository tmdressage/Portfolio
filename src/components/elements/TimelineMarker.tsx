import { cn } from 'cn'

type Props = {
  className?: string
}

// 年表の印（金色に光るひし形）。縦並びの年表の左の線に置く。
export function TimelineMarker({ className }: Props) {
  return (
    <span
      className={cn(
        'absolute top-2 -left-6.75 size-3.5 rotate-45 border border-gold bg-night shadow-[0_0_14px] shadow-gold/60',
        className,
      )}
    />
  )
}
