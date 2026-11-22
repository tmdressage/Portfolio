import type { Certification } from '@/type/certification'

// スキルシートの「資格」と取得年月
export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    name: 'G検定 (JDLA Deep Learning for GENERAL)',
    acquiredOn: '2021-11-06',
  },
  {
    id: 2,
    name: 'ITパスポート試験',
    acquiredOn: '2021-12-27',
  },
  {
    id: 3,
    name: '基本情報技術者試験',
    acquiredOn: '2022-06-27',
  },
  {
    id: 4,
    name: '応用情報技術者試験',
    acquiredOn: '2022-12-22',
  },
  {
    id: 5,
    name: '情報セキュリティマネジメント試験',
    acquiredOn: '2023-01-30',
  },
]
