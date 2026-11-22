'use client'

import { cn } from 'cn'
import { Dialog as DialogPrimitive } from 'radix-ui'

// ダイアログ全体（開いているかどうかの状態を持つ）
export function Dialog(props: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root {...props} />
}

// 押すとダイアログを閉じるボタン
export function DialogClose(props: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot='dialog-close' {...props} />
}

// ダイアログの見出し。ダイアログの名前として、読み上げ用に自動で結び付く
export function DialogTitle(props: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return <DialogPrimitive.Title data-slot='dialog-title' {...props} />
}

// 背景の幕と、ダイアログの中身
// 幕を画面いっぱいのスクロール枠にして中身を中に置き、中身が画面からはみ出たら幕ごとスクロールする
// 開閉の動きは付けない。スクロールバーは見せない（scrollbar-width に対応していない古い Safari などは ::-webkit-scrollbar で隠す）
export function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        data-slot='dialog-overlay'
        className='fixed inset-0 z-50 flex [scrollbar-width:none] justify-center overflow-y-auto overscroll-contain bg-backdrop px-4 py-5 backdrop-blur-[6px] [&::-webkit-scrollbar]:hidden'
      >
        <DialogPrimitive.Content
          data-slot='dialog-content'
          aria-describedby={undefined}
          className={cn('my-auto w-full', className)}
          {...props}
        >
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Overlay>
    </DialogPrimitive.Portal>
  )
}
