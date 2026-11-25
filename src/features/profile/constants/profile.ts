import type { Profile } from '@/type/profile'

// トップに出す名前・肩書き・自己紹介、得意分野
export const PROFILE: Profile = {
  // 個人情報を伏せた版では、名前をイニシャルにする
  name: process.env.MASK_PERSONAL_INFO === 'true' ? 'T.M' : 'Takeshi Motoyoshi',
  role: 'Web エンジニア ／ Next.js・Laravel',
  about: [
    '2026年11月現在、北海道在住のフリーランスエンジニアです。',
    '主にNext.jsやLaravelを用いたWebアプリケーション・業務システムの開発案件に',
    '参画させていただき、エンジニアとして約2年以上経験を積んで参りました。',
  ],
  strengths: [
    {
      id: 1,
      title: 'フロントエンド開発',
      body: 'React・Next.jsとTypeScriptを用いて、6件の案件で画面のUIを作成いたしました。Tailwind CSSやshadcn/ui、HeroUI、React-Bootstrapなど、案件ごとに異なるUIライブラリを扱ってきたほか、APIとの連携やCRUD機能を含む画面も作成しております。',
    },
    {
      id: 2,
      title: 'バックエンド開発',
      body: 'Laravel・PHPを用いて、CRUD機能やバリデーション、CSVファイルのインポート、cronを用いたバッチ処理などを実装いたしました。LINE Messaging APIやGoogleカレンダーAPIなど、外部サービスと連携する機能も実装しております。',
    },
    {
      id: 3,
      title: '設計・ドキュメント作成',
      body: '詳細設計を担当した3件の案件では、いずれも続けてタスク作成、実装、テストまで担当いたしました。仕様が固まっていない案件の設計なども経験しております。アーキテクチャー図やI/F設計図などのドキュメント類の作成の際は、見やすさを心掛けております。',
    },
    {
      id: 4,
      title: 'チーム開発',
      body: '密なコミュニケーションを重視し、認識の相違を防ぐため、開発のルールや仕様などは細かく擦り合わせるよう心掛けております。タスクの作成や他のPGのコードレビューも担当いたしました。実装やレビューの際は、保守性・可読性・拡張性を意識しております。',
    },
  ],
}
