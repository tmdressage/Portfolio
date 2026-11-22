import type { Gait } from '@/components/elements/Horse'

// ページの区画と、見出しに置く馬アイコンの歩き方
export const SECTIONS = [
  { id: 'strengths', label: 'Strengths', title: '得意分野', gait: 'walk' },
  { id: 'skills', label: 'Skills', title: '保有技術', gait: 'trot' },
] as const satisfies readonly { id: string; label: string; title: string; gait: Gait }[]

export type SectionId = (typeof SECTIONS)[number]['id']
