import { Badge } from '@/components/ui/badge'

type Props = {
  items: string[]
}

// 技術名などの札を、折り返しながら横に並べる（ボタンの中でも使えるよう span で囲む）
export function ChipList({ items }: Props) {
  return (
    <span className='flex flex-wrap gap-1.5'>
      {items.map((item) => (
        <Badge key={item}>{item}</Badge>
      ))}
    </span>
  )
}
