type Props = {
  children: React.ReactNode
}

// 英字の小見出し（金色・斜体の欧文）。区画の見出し・案件カード・ダイアログで同じ見た目にそろえる
export function EnglishLabel({ children }: Props) {
  return (
    <span className='block font-serif-en text-[19px] tracking-[0.2em] text-gold italic'>
      {children}
    </span>
  )
}
