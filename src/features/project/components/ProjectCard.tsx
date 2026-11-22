import { ChipList } from '@/components/elements/ChipList'
import { EnglishLabel } from '@/components/elements/EnglishLabel'
import { PHASES } from '@/features/project/constants/phases'
import { formatProjectNo } from '@/features/project/utils/formatProjectNo'
import type { Project } from '@/type/project'

// カードに出す技術の数
const MAIN_TECH_COUNT = 4

type Props = {
  project: Project
  onClick: () => void
}

// 案件カード（屋根板つきの絵馬の形）。押すと詳細ダイアログが開く
// 形は globals.css の ema-frame / ema-face で五角形に切り抜く。影も形に沿うよう drop-shadow を使う
export function ProjectCard({ project, onClick }: Props) {
  const mainTechs = [...project.languages, ...project.tools].slice(0, MAIN_TECH_COUNT)
  // 担当した工程（作業工程の順に並べる）
  const donePhases = PHASES.filter((phase) => project.phases.includes(phase))

  return (
    <button
      type='button'
      onClick={onClick}
      className='ema group relative h-full w-full cursor-pointer text-left transition duration-450 ease-[cubic-bezier(0.2,0.8,0.2,1.3)] hover:-translate-y-2 hover:rotate-[-0.4deg] hover:drop-shadow-[0_24px_30px] hover:drop-shadow-black/55 focus-visible:-translate-y-2 focus-visible:outline-none'
    >
      {/* 縁の線（乗せたときは淡い青にする） */}
      <span className='ema-frame absolute inset-0 bg-line transition-colors duration-450 group-hover:bg-project-card-hover/80 group-focus-visible:bg-project-card-hover/80' />
      {/* 面。下に縁の色の五角形があるので、半透明のグラデーションだけだと縁の色が透けて面の色が濁る。
          先にページの背景色（夜の色）で塗りつぶしてから、グラデーションを重ねる */}
      <span className='ema-face absolute inset-(--ema-border) overflow-hidden bg-night bg-[linear-gradient(160deg,var(--color-project-card-from),var(--color-project-card-to))]'>
        {/* 屋根板（屋根の三角の部分を紺にし、下を金の線で区切る） */}
        <span className='absolute inset-x-0 top-0 h-(--ema-face-roof) border-b border-gold/45 bg-linear-to-b from-navy-light/55 to-navy/85' />
        {/* カードに乗せると、淡い青の光が横切る */}
        <span className='pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(115deg,transparent_30%,--alpha(var(--color-project-card-hover)/22%)_50%,transparent_70%)] transition-transform duration-900 group-hover:translate-x-[120%]' />
      </span>
      {/* 紐を通す穴 */}
      <span className='absolute top-[calc(var(--ema-roof)*0.36)] left-1/2 size-2.25 -translate-x-1/2 -translate-y-1/2 rounded-full bg-night ring-[1.5px] ring-gold/60' />
      {/* 紐（金と紺の2本をより合わせ、穴から上へ輪にする。カードの上に少しはみ出す） */}
      <svg
        className='absolute top-[calc(var(--ema-roof)*0.36-34px)] left-1/2 -translate-x-1/2'
        width='40'
        height='34'
        viewBox='0 0 40 34'
        aria-hidden='true'
      >
        <path
          className='stroke-gold'
          d='M20 34 C7 25 6 7 20 3 C34 7 33 25 20 34'
          fill='none'
          strokeWidth={2.4}
          strokeLinecap='round'
        />
        <path
          className='stroke-navy-light'
          d='M20 34 C10 25 9.5 9 20 6 C30.5 9 30 25 20 34'
          fill='none'
          strokeWidth={1.6}
          strokeLinecap='round'
        />
      </svg>
      {/* 屋根の中の案件番号 */}
      <span className='absolute inset-x-0 top-[calc(var(--ema-roof)*0.36+6px)] text-center'>
        <EnglishLabel>{formatProjectNo(project.no)}</EnglishLabel>
      </span>
      {/* 中身（屋根の下から並べる） */}
      <span className='relative flex h-full flex-col gap-2.5 px-5.5 pt-[calc(var(--ema-roof)+16px)] pb-5.5'>
        <span className='text-sm text-muted'>{project.period}</span>
        <span className='font-serif-ja text-lg leading-normal font-semibold'>{project.title}</span>
        <ChipList items={mainTechs} />
        <ChipList items={donePhases} />
        <span className='mt-auto flex items-center gap-2 font-serif-en text-[13px] tracking-[0.2em] text-gold'>
          VIEW
          {/* 線の先に右向きの矢じりを付ける（乗せると線が伸び、矢じりも一緒に動く） */}
          <span className='relative inline-block h-px w-6 bg-gold transition-[width] duration-400 group-hover:w-12 after:absolute after:top-1/2 after:right-0 after:size-1.5 after:-translate-y-1/2 after:rotate-45 after:border-t after:border-r after:border-gold' />
        </span>
      </span>
    </button>
  )
}
