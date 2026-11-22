type Props = {
  children: React.ReactNode
}

// ページの横幅をそろえる枠（中央寄せ・最大幅・左右の余白）
export function Container({ children }: Props) {
  return <div className='mx-auto w-full max-w-280 px-4'>{children}</div>
}
