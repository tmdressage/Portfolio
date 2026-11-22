## 概要

ドメイン：https://tm-works-portfolio.vercel.app/

- ポートフォリオサイトです。
- 自己紹介、得意分野、保有技術、経験案件、個人開発、保有資格、経歴を1ページにまとめています。
- 見出しの馬アイコンは、区画ごとに歩き方が変わります。
- 表示する内容は `src/features/*/constants/` の TypeScript ファイルで管理しています。

## 使用技術

Next.js、React、TypeScript、Tailwind CSS 4、ESLint、Prettier、shadcn/ui、Motion、GitHub Actions（CI）

- UI：shadcn/ui の 部品と Tailwind CSS で作成しています。
- 馬のモーション：馬は SVG で描き、CSS アニメーション（@keyframes）で動かしています。脚は付け根と膝の2か所で回転させ、7種類の歩き方はクラス名で切り替えています。保有技術のレーンを走る動きと、画面に入ったときに各欄が現れる細かい動きは、Motion で作成しています。

## 起動方法

Node.js 20.9 以上が必要です（CI は Node.js 24 で動かしています）。

```bash
npm install
npm run dev
```

開発サーバーを起動したら http://localhost:3000 を開きます。

## 主なコマンド

| コマンド                | 内容                                  |
| ----------------------- | ------------------------------------- |
| `npm run dev`           | 開発サーバーを起動する                |
| `npm run build`         | 本番用にビルドする                    |
| `npm run lint`          | ESLint でチェックする                 |
| `npm run lint:prettier` | Prettier で書き方の崩れをチェックする |
| `npm run fix:prettier`  | Prettier で書き方を自動で整える       |

## フォルダ構成

```
src/
├── app/         ページとレイアウト、全体の CSS（配色の定義も含む）
├── components/  共通の部品（`ui/` は shadcn/ui をもとにした部品）
├── features/    区画ごとの部品と表示する内容
├── constants/   区画の並びと見出しの設定
└── type/        型の定義
```
