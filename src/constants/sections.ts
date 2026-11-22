import type { Gait } from '@/components/elements/Horse'

// ページの区画と、見出しに置く馬アイコンの歩き方
export const SECTIONS = [
  { id: 'about', label: 'About Me', title: '自己紹介', gait: 'bow' },
  { id: 'strengths', label: 'Strengths', title: '得意分野', gait: 'walk' },
  { id: 'skills', label: 'Skills', title: '保有技術', gait: 'trot' },
  { id: 'works', label: 'Works', title: '経験案件', gait: 'jump' },
  { id: 'personal-projects', label: 'Personal Projects', title: '個人開発', gait: 'paw' },
  { id: 'certifications', label: 'Certifications', title: '保有資格', gait: 'canter' },
  { id: 'career', label: 'Career', title: '経歴', gait: 'gallop' },
] as const satisfies readonly { id: string; label: string; title: string; gait: Gait }[]

export type SectionId = (typeof SECTIONS)[number]['id']
