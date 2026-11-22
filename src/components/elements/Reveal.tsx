'use client'

import { useInView } from '@/hooks/useInView'
import { cn } from 'cn'

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
}

// 画面に入ったら、駈歩のリズムで中身を表示する
export function Reveal({ children, className, delay = 0 }: Props) {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(isInView ? 'reveal-in' : 'reveal', className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
