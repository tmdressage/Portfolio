import { Section } from '@/components/layouts/Section'
import { ProfileHero } from '@/features/profile/components/ProfileHero'
import { StrengthList } from '@/features/profile/components/StrengthList'
import { PROFILE } from '@/features/profile/constants/profile'
import { ProjectList } from '@/features/project/components/ProjectList'
import { PROJECTS } from '@/features/project/constants/projects'
import { SkillLaneList } from '@/features/skill/components/SkillLaneList'
import { SKILLS } from '@/features/skill/constants/skills'

// ポートフォリオのトップページ（データは各機能の constants に置き、静的なページとして作る）
export default function Home() {
  return (
    <>
      <main>
        <ProfileHero profile={PROFILE} />
        <Section id='strengths'>
          <StrengthList strengths={PROFILE.strengths} />
        </Section>
        <Section id='skills'>
          <SkillLaneList skills={SKILLS} />
        </Section>
        <Section id='works'>
          <ProjectList projects={PROJECTS} />
        </Section>
      </main>
      <footer className='px-4 pt-20 pb-12 text-center font-serif-en tracking-[0.2em] text-muted'>
        © {PROFILE.name}
      </footer>
    </>
  )
}
