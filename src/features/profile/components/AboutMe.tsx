import { Reveal } from '@/components/elements/Reveal'

type Props = {
  paragraphs: string[]
}

// 自己紹介の文章（左に金の線を引き、段落ごとに並べる）
export function AboutMe({ paragraphs }: Props) {
  return (
    <Reveal className='grid max-w-190 gap-3 border-l-2 border-gold/50 pl-5 text-[15px] md:pl-6 md:text-base'>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </Reveal>
  )
}
