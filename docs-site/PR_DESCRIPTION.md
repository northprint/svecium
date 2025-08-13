# Pull Request Description

## 📚 Svecium Documentation & Demo Site

このPRでは、Sveciumライブラリー用のドキュメンテーションサイトとインタラクティブデモを追加しました。

### ✨ 主な変更内容

#### 1. ドキュメントサイトの構築
- **技術スタック**: SvelteKit + Static Adapter + Tailwind CSS
- **ホスティング**: GitHub Pages対応
- **ビルドツール**: Vite with Cesium integration

#### 2. 追加されたページ
- **ランディングページ**: ライブラリーの特徴とクイックスタート
- **ドキュメント**: 
  - Getting Started Guide
  - Installation Guide  
  - API Reference (Viewer, Camera コンポーネント)
- **インタラクティブデモ**:
  - Basic Viewer Demo
  - OpenStreetMap Integration
  - Camera Control Demo

#### 3. 主な機能
- 🌍 **ライブデモ**: 実際に動作するCesium地球儀
- 📖 **詳細なAPIドキュメント**: Props説明と使用例
- 💻 **コード例**: コピー可能なサンプルコード
- 📱 **レスポンシブデザイン**: モバイル対応

#### 4. GitHub Actions設定
- 自動デプロイワークフロー (`deploy-docs.yml`)
- mainブランチへのプッシュで自動的にGitHub Pagesへデプロイ

### 🏗️ プロジェクト構造
```
/docs-site              # ドキュメントサイト
├── src/
│   ├── routes/         # ページコンポーネント
│   ├── lib/
│   │   ├── components/ # UIコンポーネント
│   │   └── demo-components/ # デモ用Cesiumラッパー
│   └── app.css        # グローバルスタイル
├── static/            # 静的アセット
└── package.json       # 依存関係
```

### 🚀 セットアップ & デプロイ

#### ローカル開発
```bash
cd docs-site
pnpm install
pnpm run dev
```

#### ビルド & プレビュー
```bash
pnpm run build:docs
pnpm run preview
```

#### GitHub Pagesデプロイ
1. このPRをマージ
2. Settings → Pages → Source: GitHub Actions を選択
3. 自動的にデプロイが開始されます

### 📝 注意事項
- Cesium Ionトークンは現在使用していません（OpenStreetMapのみ使用）
- Terrain機能を使用する場合は、有効なCesium Ionトークンが必要です
- デモはすべてトークン不要で動作します

### 🔗 関連リンク
- デプロイ先: `https://takamunesuda.github.io/svecium/` (マージ後)
- ライブラリー: [@takamunesuda/svecium](https://www.npmjs.com/package/@takamunesuda/svecium)

### ✅ チェックリスト
- [x] ドキュメントサイトの基本構築
- [x] インタラクティブデモの実装
- [x] GitHub Actions設定
- [x] レスポンシブデザイン対応
- [x] ビルド・デプロイテスト完了

### 🐛 修正履歴
- PNPM バージョンを9に更新（GitHub Actions互換性向上）
- GitHub Pages自動有効化設定を追加（`enablement: true`）
- デプロイはmainブランチのみに制限

### ⚠️ 初回セットアップ
初回デプロイ時は以下の手順が必要です：
1. PRをマージ
2. GitHub リポジトリ設定 → Pages
3. Source: "GitHub Actions" を選択
4. 再度GitHub Actionsを実行（自動的に開始されます）