'use client'

import { Horse } from '@/components/elements/Horse'
import { Reveal } from '@/components/elements/Reveal'
import type { Skill } from '@/type/skill'
import { useReducedMotion } from 'motion/react'
import * as m from 'motion/react-m'
import { useState } from 'react'

// レーンを走る馬の幅（px）。右端で馬がはみ出さないように位置の計算に使う
const HORSE_WIDTH = 52

// 馬の左端の位置。進んだ割合（--progress、0〜100）だけ進み、右端まで走っても馬がレーンからはみ出さないよう、進んだ割合だけ馬の幅を引く
const HORSE_LEFT = `calc(var(--progress) * (1% - ${HORSE_WIDTH / 100}px))`

type Props = {
  skill: Skill
  ratio: number
}

// 技術1つ分のレーン。画面に入ると、馬が経験期間の長さまで走って止まる
export function SkillLane({ skill, ratio }: Props) {
  const [isInView, setIsInView] = useState(false)
  const [isArrived, setIsArrived] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  return (
    <Reveal
      onInView={() => setIsInView(true)}
      className='grid grid-cols-[120px_1fr] items-center gap-x-4 md:grid-cols-[140px_1fr_90px]'
    >
      <div className='font-serif-en text-xl font-bold md:text-[22px]'>
        {skill.name}
        <span className='block font-sans text-[11px] font-medium tracking-widest text-muted'>
          {skill.category}
        </span>
      </div>
      {/* レーン。背景の網目模様が透けると馬が見づらいので、ページの背景色で塗りつぶしてから目盛りの線を重ねる
          進んだ割合（--progress）を Motion で動かし、線の長さと馬の位置はそこから計算する
          短い距離はゆっくりになりすぎないよう、距離に合わせて走る時間を変える。動きを減らす設定の人には、すぐに到着させる */}
      <m.div
        className='relative h-11 border-y border-line bg-night bg-[repeating-linear-gradient(90deg,transparent_0_39px,--alpha(var(--color-gold)/12%)_39px_40px)]'
        initial={{ '--progress': 0 }}
        animate={{ '--progress': isInView ? ratio * 100 : 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.6 + ratio * 1.4,
          ease: [0.3, 0.6, 0.3, 1],
        }}
        onAnimationComplete={() => {
          if (isInView) setIsArrived(true)
        }}
      >
        {/* 馬が走った跡の線。馬より前にはみ出さないよう、馬の体の真ん中で止めて馬の後ろに隠す */}
        <div
          className='absolute top-1/2 left-0 h-0.5 bg-linear-to-r from-transparent to-gold'
          style={{ width: `calc(${HORSE_LEFT} + ${HORSE_WIDTH / 2}px)` }}
        />
        <div className='absolute bottom-0.5' style={{ width: HORSE_WIDTH, left: HORSE_LEFT }}>
          <Horse isIdle={isArrived} />
        </div>
      </m.div>
      <div className='col-start-2 font-serif-ja text-sm text-gold-light md:col-start-auto md:text-right md:text-base'>
        {skill.period}
      </div>
    </Reveal>
  )
}
