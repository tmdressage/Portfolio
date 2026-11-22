type Props = {
  children: React.ReactNode
}

// 技術名などを表示する小さな札
export function Chip({ children }: Props) {
  return (
    <span className='rounded-full border border-line bg-gold/5 px-2.5 text-[11.5px] leading-relaxed text-frost'>
      {children}
    </span>
  )
}
