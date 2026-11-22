import { useEffect, useRef, useState } from 'react'

// 要素が画面に入ったかどうかを返す（一度入ったら true のまま）
export function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}
