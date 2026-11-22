import { SectionHeading } from '@/components/elements/SectionHeading'
import { Container } from '@/components/layouts/Container'
import type { SectionId } from '@/constants/sections'
import { SECTIONS } from '@/constants/sections'

type Props = {
  id: SectionId
  children: React.ReactNode
}

// 区画の枠（馬アイコンつきの見出し＋中身）
export function Section({ id, children }: Props) {
  const section = SECTIONS.find((item) => item.id === id)
  if (!section) return null

  return (
    <section id={id} className='pt-27.5 pb-10'>
      <Container>
        <SectionHeading gait={section.gait} label={section.label} title={section.title} />
        {children}
      </Container>
    </section>
  )
}
