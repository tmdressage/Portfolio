import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // AIツール向けのメモ（AGENTS.md）を next dev が自動で作らないようにする
  agentRules: false,
  // サイトを作った（ビルドした）日時。ビルドの時点で値が埋め込まれ、トップの「Last updated」に出す
  env: {
    LAST_UPDATED: new Date().toISOString(),
  },
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
}

export default nextConfig
