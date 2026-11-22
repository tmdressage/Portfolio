'use client'

import { domAnimation, LazyMotion, MotionConfig } from 'motion/react'

type Props = {
  children: React.ReactNode
}

// Motion の共通設定
// ・使う機能（値の動き・画面に入ったときの動き）だけを読み込み、読み込む JavaScript を減らす（LazyMotion。部品は m.div などを使う）
// ・端末で「動きを減らす」設定をしている人には、位置や大きさを動かさない（reducedMotion）
export function MotionProvider({ children }: Props) {
  return (
    <MotionConfig reducedMotion='user'>
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  )
}
