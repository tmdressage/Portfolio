import type { ClassValue } from 'clsx'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

// クラス名をつなぐ（条件つきのクラスをまとめ、Tailwind の同じ種類のクラスがぶつかったら後ろを優先する）
export function cn(...classNames: ClassValue[]) {
  return twMerge(clsx(classNames))
}
