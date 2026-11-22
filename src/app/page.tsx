import { ComingSoon } from '@/components/elements/ComingSoon'
import { Section } from '@/components/layouts/Section'
import { CareerTimeline } from '@/features/career/components/CareerTimeline'
import { CAREERS } from '@/features/career/constants/careers'
import { CertificationTimeline } from '@/features/certification/components/CertificationTimeline'
import { CERTIFICATIONS } from '@/features/certification/constants/certifications'
import { AboutMe } from '@/features/profile/components/AboutMe'
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
        <Section id='about'>
          <AboutMe paragraphs={PROFILE.about} />
        </Section>
        <Section id='strengths'>
          <StrengthList strengths={PROFILE.strengths} />
        </Section>
        <Section id='skills'>
          <SkillLaneList skills={SKILLS} />
        </Section>
        <Section id='works'>
          <ProjectList projects={PROJECTS} />
        </Section>
        <Section id='personal-projects'>
          <ComingSoon />
        </Section>
        <Section id='certifications'>
          <CertificationTimeline certifications={CERTIFICATIONS} />
        </Section>
        <Section id='career'>
          <CareerTimeline careers={CAREERS} />
        </Section>
      </main>
      <footer className='px-4 pt-20 pb-12 text-center font-serif-en tracking-[0.2em] text-muted'>
        © {PROFILE.name}
      </footer>
    </>
  )
}
