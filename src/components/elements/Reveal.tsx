'use client'

import { useReducedMotion } from 'motion/react'
import * as m from 'motion/react-m'

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
  onInView?: () => void
}

// 画面に入ったら、駈歩のリズムで中身を表示する（「タ・タ・タン」と弾みながら、下から浮かび上がる）
// 画面に2割入ったら一度だけ動かす。onInView は、そのときに呼ぶ
// 端末で「動きを減らす」設定をしている人には、待ち時間なしですぐに表示する
export function Reveal({ children, className, delay = 0, onInView }: Props) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: [0, 1, 1, 1, 1], y: [28, -6, 2, -2, 0] }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.9,
        delay: shouldReduceMotion ? 0 : delay,
        times: [0, 0.45, 0.65, 0.82, 1],
        ease: [0.2, 0.7, 0.2, 1],
      }}
      onViewportEnter={onInView}
    >
      {children}
    </m.div>
  )
}
