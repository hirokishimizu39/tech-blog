# Tech Blog

Next.js + MDX で構築した技術ブログです。

## 機能

- MDX で記事を執筆
- ダークモード対応
- シンタックスハイライト
- レスポンシブデザイン

## ローカル開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開いてください。

## 記事の追加方法

`content/posts/` に `.mdx` ファイルを追加します：

```mdx
---
title: "記事タイトル"
description: "記事の説明"
date: "2024-12-02"
tags: ["タグ1", "タグ2"]
---

## 見出し

記事の本文...
```

## Vercelへのデプロイ方法

### 方法1: Vercel ダッシュボードから（推奨・簡単）

1. [Vercel](https://vercel.com) にアクセスしてログイン（GitHubアカウントでログイン可能）
2. 「Add New...」→「Project」をクリック
3. 「Import Git Repository」から `tech-blog` リポジトリを選択
4. 「Deploy」をクリック
5. 数分でデプロイ完了！URLが発行されます

### 方法2: Vercel CLI から

```bash
# Vercel CLIのインストール（未インストールの場合）
npm install -g vercel

# プロジェクトディレクトリで実行
cd ~/Desktop/tech-blog

# Vercelにログイン（初回のみ）
vercel login

# デプロイ（プレビュー）
vercel

# 本番デプロイ
vercel --prod
```

### 自動デプロイ設定

VercelとGitHubを連携すると：
- `main` ブランチへのプッシュ → 自動で本番デプロイ
- プルリクエスト → 自動でプレビューデプロイ

## プロジェクト構造

```
tech-blog/
├── content/
│   └── posts/          # MDX記事ファイル
├── src/
│   ├── app/
│   │   ├── layout.tsx  # 共通レイアウト
│   │   ├── page.tsx    # トップページ
│   │   └── posts/[slug]/
│   │       └── page.tsx # 記事詳細ページ
│   ├── components/     # Reactコンポーネント
│   └── lib/
│       └── posts.ts    # 記事取得ロジック
└── public/             # 静的ファイル
```

## 技術スタック

- [Next.js 16](https://nextjs.org/) - Reactフレームワーク
- [MDX](https://mdxjs.com/) - Markdown + JSX
- [Tailwind CSS](https://tailwindcss.com/) - CSSフレームワーク
- [next-themes](https://github.com/pacocoursey/next-themes) - ダークモード
