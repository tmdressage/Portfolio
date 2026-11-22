import { cn } from '@/lib/cn'

type LegProps = {
  x: number
  y: number
  upperClassName: string
  lowerClassName: string
  upperWidth: number
  lowerWidth: number
}

// 脚1本（付け根から膝までと、膝から蹄まで）。回転の動きは globals.css で付ける
// 色は親の文字色（currentColor）を使う。手前の脚・奥の脚で色を変えるため、親の <g> で指定する
function Leg({ x, y, upperClassName, lowerClassName, upperWidth, lowerWidth }: LegProps) {
  return (
    <g className={upperClassName}>
      <line
        x1={x}
        y1={y}
        x2={x}
        y2={y + 26}
        stroke='currentColor'
        strokeWidth={upperWidth}
        strokeLinecap='round'
      />
      <g className={lowerClassName}>
        <line
          x1={x}
          y1={y + 26}
          x2={x}
          y2={y + 50}
          stroke='currentColor'
          strokeWidth={lowerWidth}
          strokeLinecap='round'
        />
        <rect x={x - 5} y={y + 48} width={10} height={6} rx={2} fill='currentColor' />
      </g>
    </g>
  )
}

// 歩き方。bow：お辞儀（立ち止まって首を下げる）、paw：前掻き（立ち止まって前脚で地面をかく）、
// walk：常歩（なみあし）、trot：速歩（はやあし）、canter：駈歩（かけあし）、jump：障害飛越、
// gallop：襲歩（しゅうほ。いちばん速い走り方）
export type Gait = 'bow' | 'paw' | 'walk' | 'trot' | 'canter' | 'jump' | 'gallop'

type Props = {
  className?: string
  gait?: Gait
  isIdle?: boolean
}

// 右向きの金色の馬。gait で歩き方を変え（動きは globals.css）、isIdle が true のときは脚を止める
// 弾んだり跳んだりすると耳や頭が絵の枠（viewBox）の上へはみ出すので、はみ出した部分も表示する（overflow-visible）
export function Horse({ className, gait = 'canter', isIdle = false }: Props) {
  return (
    <svg
      className={cn('horse overflow-visible', `horse-${gait}`, isIdle && 'horse-idle', className)}
      viewBox='0 0 220 130'
      aria-hidden='true'
    >
      <g className='horse-body'>
        <g className='horse-far text-horse-far' opacity={0.55}>
          <Leg
            x={146}
            y={66}
            upperClassName='horse-front-upper'
            lowerClassName='horse-front-lower'
            upperWidth={9}
            lowerWidth={7}
          />
          <Leg
            x={76}
            y={64}
            upperClassName='horse-hind-upper'
            lowerClassName='horse-hind-lower'
            upperWidth={10}
            lowerWidth={7}
          />
        </g>
        <path
          className='horse-tail'
          d='M64 50 C46 46 32 56 20 74 C30 70 40 70 46 72 C40 64 52 60 62 60 Z'
          fill='url(#horse-gold)'
        />
        <path
          d='M60 58 C62 44 88 38 112 40 C130 41 142 40 150 44 C157 49 157 63 150 71 C140 79 118 81 100 80 C84 79 66 77 60 68 Z'
          fill='url(#horse-gold)'
        />
        {/* 首から上（首・頭・耳・たてがみ・目）。お辞儀のときは首の付け根を軸に回す */}
        <g className='horse-head'>
          <path
            d='M138 48 C145 34 153 22 163 13 L177 20 C173 31 167 45 159 63 L144 66 Z'
            fill='url(#horse-gold)'
          />
          <path
            d='M161 12 C169 7 180 9 186 15 L199 32 C201 37 196 41 190 39 L178 33 C171 31 165 26 161 20 Z'
            fill='url(#horse-gold)'
          />
          <path className='fill-horse-near' d='M166 10 L170 0 L175 10 Z' />
          <g className='horse-mane fill-horse-mane'>
            <path d='M162 12 C156 16 150 22 146 30 L152 30 Z' />
            <path d='M154 22 C148 26 143 32 140 40 L146 40 Z' />
            <path d='M147 33 C141 37 137 43 135 50 L141 49 Z' />
          </g>
          <circle className='fill-horse-eye' cx={183} cy={20} r={1.8} />
        </g>
        <g className='horse-near text-horse-near'>
          <Leg
            x={146}
            y={66}
            upperClassName='horse-front-upper'
            lowerClassName='horse-front-lower'
            upperWidth={10}
            lowerWidth={8}
          />
          <Leg
            x={76}
            y={64}
            upperClassName='horse-hind-upper'
            lowerClassName='horse-hind-lower'
            upperWidth={11}
            lowerWidth={8}
          />
        </g>
      </g>
    </svg>
  )
}

// 馬の体の金色グラデーション。ページ内のすべての馬がこれを共有する（layout.tsx に1つだけ置く）
export function HorseGradient() {
  return (
    <svg className='absolute h-0 w-0' aria-hidden='true'>
      <defs>
        <linearGradient id='horse-gold' x1='0' x2='1' y1='0' y2='1'>
          <stop className='[stop-color:var(--color-gold-light)]' offset='0' />
          <stop className='[stop-color:var(--color-gold)]' offset='.5' />
          <stop className='[stop-color:var(--color-gold-dark)]' offset='1' />
        </linearGradient>
      </defs>
    </svg>
  )
}
