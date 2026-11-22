import type { Gait } from '@/components/elements/Horse'
import { Horse } from '@/components/elements/Horse'

type Props = {
  gait: Gait
}

// 見出しに置く丸い馬アイコン。区画ごとに歩き方（gait）を変える
export function HorseIcon({ gait }: Props) {
  return (
    <span
      className='relative inline-block size-14 shrink-0 overflow-hidden rounded-full border border-gold/60 bg-[radial-gradient(circle_at_35%_30%,var(--color-horse-icon-from),var(--color-horse-icon-to)_70%)] shadow-[0_8px_24px] shadow-black/50'
      aria-hidden='true'
    >
      {/* 地面の線 */}
      <span className='absolute inset-x-2 bottom-3 h-px bg-gold/40' />
      {/* 障害飛越のときだけ、跳び越える横木を置く */}
      {gait === 'jump' && (
        <span className='horse-hurdle absolute bottom-3 left-1/2 h-2.5 w-3 -translate-x-1/2 border-x-[1.5px] border-t-2 border-gold-light' />
      )}
      <Horse gait={gait} className='absolute bottom-2.5 left-1/2 w-11 -translate-x-1/2' />
    </span>
  )
}
