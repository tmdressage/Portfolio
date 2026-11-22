import { ProfileHero } from '@/features/profile/components/ProfileHero'
import { PROFILE } from '@/features/profile/constants/profile'

// ポートフォリオのトップページ（データは各機能の constants に置き、静的なページとして作る）
export default function Home() {
  return (
    <>
      <main>
        <ProfileHero profile={PROFILE} />
      </main>
      <footer className='px-4 pt-20 pb-12 text-center font-serif-en tracking-[0.2em] text-muted'>
        © {PROFILE.name}
      </footer>
    </>
  )
}
