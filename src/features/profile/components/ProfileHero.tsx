import { Horse } from '@/components/elements/Horse'
import { Container } from '@/components/layouts/Container'
import type { Profile } from '@/type/profile'

// ISO 形式の日時（2026-11-22T05:30:00.000Z）を、日本時間の「2026.11.22」の形にする
function formatDate(iso: string) {
  const parts = new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date(iso))
  const pick = (type: string) => parts.find((part) => part.type === type)?.value
  return `${pick('year')}.${pick('month')}.${pick('day')}`
}

type Props = {
  profile: Profile
}

// トップ（名前・肩書き・最終更新日）と、雪原の上を走り続ける馬
export function ProfileHero({ profile }: Props) {
  // サイトを作った（ビルドした）日時。next.config.ts の env でビルドの時点に埋め込まれる
  const lastUpdated = process.env.LAST_UPDATED

  return (
    <section className='relative flex min-h-svh items-center overflow-hidden'>
      <Container>
        <div className='relative z-10 max-w-155'>
          <p className='flex flex-wrap items-baseline gap-x-6 gap-y-1 font-serif-en text-sm tracking-[0.35em] text-muted'>
            PORTFOLIO
            {lastUpdated && (
              <span className='text-base tracking-[0.15em]'>
                Last updated <time dateTime={lastUpdated}>{formatDate(lastUpdated)}</time>
              </span>
            )}
          </p>
          <h1 className='gold-text mt-4 mb-5 font-serif-en text-[clamp(46px,9vw,104px)] leading-none font-bold'>
            {profile.name.split(' ').map((word) => (
              <span key={word} className='block'>
                {word}
              </span>
            ))}
          </h1>
          <p className='font-serif-ja text-[clamp(17px,2.2vw,22px)] tracking-widest'>
            {profile.role}
          </p>
        </div>
      </Container>

      {/* 走っている景色（遠くの丘・柵・雪原が流れ、馬が走り続けて雪原に蹄の跡が残る） */}
      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-[46%]' aria-hidden='true'>
        <svg
          className='hills absolute bottom-21.5 left-0 h-30 w-[200%] opacity-35'
          viewBox='0 0 2000 120'
          preserveAspectRatio='none'
        >
          <path
            d='M0 70 C150 30 300 60 450 35 S800 80 1000 70 C1150 30 1300 60 1450 35 S1800 80 2000 70 L2000 120 L0 120 Z'
            className='fill-navy'
          />
        </svg>
        <div className='snowfield snowfield-moving absolute inset-x-0 bottom-0 h-22.5 border-t border-gold/40' />
        {/* 蹄の跡。蹄が雪につく高さに、画面の左端から馬の前脚の下まで敷く
            （馬の幅は min(380px,58vw)。蹄の高さは馬の絵の下から 9%、前脚は馬の絵の左から 66% の位置） */}
        <div className='hoofprints absolute right-[calc(6%+min(380px,58vw)*0.336)] bottom-[calc(41px+min(380px,58vw)*0.0544)] left-0 h-3.5' />
        <div className='fence absolute inset-x-0 bottom-22.5 h-11.5 opacity-45' />
        <Horse className='absolute right-[6%] bottom-12 w-[min(380px,58vw)] drop-shadow-[0_18px_30px] drop-shadow-black/60' />
        <span className='snow-spray absolute right-[calc(6%+250px)] bottom-14 size-2.5 rounded-full bg-white/70' />
        <span className='snow-spray absolute right-[calc(6%+110px)] bottom-14 size-2.5 rounded-full bg-white/70 [animation-delay:-0.6s]' />
      </div>

      {/* スクロールの合図。雪原の上に重なるので紺で書く。線が上から下へ流れ、先に下向きの矢じりを付ける */}
      <div className='absolute bottom-0.5 left-1/2 z-10 -translate-x-1/2 text-center font-serif-en text-sm tracking-[0.3em] text-navy/80'>
        SCROLL
        <span className='relative mx-auto mt-1.5 block h-7 w-px'>
          <span className='scroll-cue-line absolute inset-0 bg-linear-to-b from-transparent to-navy' />
          <span className='absolute bottom-0 left-1/2 size-2 -translate-x-1/2 rotate-45 border-r border-b border-navy' />
        </span>
      </div>
    </section>
  )
}
