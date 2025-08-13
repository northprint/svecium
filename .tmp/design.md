# Svecium ドキュメント・デモサイト技術設計書

## 1. アーキテクチャ概要

### 1.1 システム構成
```
┌─────────────────────────────────────────────────┐
│                GitHub Pages                      │
│  ┌────────────────────────────────────────────┐ │
│  │          SvelteKit Static Site             │ │
│  │  ┌──────────────┐  ┌──────────────────┐  │ │
│  │  │Documentation │  │  Interactive Demo  │  │ │
│  │  │    Pages     │  │     Playground     │  │ │
│  │  └──────────────┘  └──────────────────┘  │ │
│  │  ┌──────────────────────────────────────┐ │ │
│  │  │     Svecium Component Library        │ │ │
│  │  │        (Local Package)               │ │ │
│  │  └──────────────────────────────────────┘ │ │
│  └────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

### 1.2 技術スタック
- **Framework**: SvelteKit (Static Adapter)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Code Highlighting**: Shiki
- **3D Visualization**: Cesium + Svecium
- **Deployment**: GitHub Pages via GitHub Actions

## 2. プロジェクト構造

```
svecium/
├── docs-site/                    # ドキュメントサイトのルート
│   ├── package.json
│   ├── svelte.config.js         # SvelteKit設定（static adapter）
│   ├── vite.config.ts           # Vite設定（Cesium対応）
│   ├── tailwind.config.js      # Tailwind CSS設定
│   ├── tsconfig.json
│   ├── src/
│   │   ├── app.html            # HTMLテンプレート
│   │   ├── app.css             # グローバルスタイル
│   │   ├── routes/
│   │   │   ├── +layout.svelte  # 共通レイアウト
│   │   │   ├── +page.svelte    # ランディングページ
│   │   │   ├── docs/
│   │   │   │   ├── +page.svelte         # ドキュメントトップ
│   │   │   │   ├── getting-started/
│   │   │   │   ├── installation/
│   │   │   │   └── api/
│   │   │   │       ├── viewer/
│   │   │   │       ├── terrain/
│   │   │   │       ├── camera/
│   │   │   │       ├── imagery/
│   │   │   │       ├── geojson-point/
│   │   │   │       ├── geojson-line/
│   │   │   │       ├── geojson-polygon/
│   │   │   │       └── mvt/
│   │   │   ├── demos/
│   │   │   │   ├── +page.svelte         # デモ一覧
│   │   │   │   ├── playground/          # インタラクティブプレイグラウンド
│   │   │   │   └── [component]/         # 各コンポーネントデモ
│   │   │   └── examples/                # 実装例ギャラリー
│   │   ├── lib/
│   │   │   ├── components/
│   │   │   │   ├── Header.svelte        # ヘッダー
│   │   │   │   ├── Sidebar.svelte       # サイドバーナビ
│   │   │   │   ├── Footer.svelte        # フッター
│   │   │   │   ├── CodeBlock.svelte     # コード表示
│   │   │   │   ├── LiveEditor.svelte    # ライブエディター
│   │   │   │   ├── DemoViewer.svelte    # デモビューアー
│   │   │   │   └── PropsTable.svelte    # Props表
│   │   │   ├── data/
│   │   │   │   ├── navigation.ts        # ナビゲーション構造
│   │   │   │   ├── examples.ts          # サンプルコード
│   │   │   │   └── demos.ts             # デモ設定
│   │   │   └── utils/
│   │   │       ├── cesium-config.ts     # Cesium設定
│   │   │       └── code-formatter.ts    # コードフォーマット
│   │   └── static/
│   │       ├── favicon.png
│   │       └── cesium/                  # Cesiumアセット（コピー）
│   └── .github/
│       └── workflows/
│           └── deploy.yml               # GitHub Pages デプロイ
├── src/                                 # 既存のライブラリソース
└── package.json                         # ライブラリ本体

```

## 3. コンポーネント設計

### 3.1 共通コンポーネント

#### Header.svelte
```typescript
interface HeaderProps {
  currentSection?: 'home' | 'docs' | 'demos' | 'examples';
}
```
- ロゴとナビゲーションリンク
- GitHub/NPMバッジ
- モバイルメニュートグル

#### Sidebar.svelte
```typescript
interface SidebarProps {
  items: NavigationItem[];
  currentPath: string;
}
```
- 階層型ナビゲーション
- 現在位置のハイライト
- 折りたたみ可能なセクション

#### CodeBlock.svelte
```typescript
interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
}
```
- Shikiによるシンタックスハイライト
- コピーボタン
- ファイル名表示

#### LiveEditor.svelte
```typescript
interface LiveEditorProps {
  initialCode: string;
  scope: Record<string, any>;
  height?: string;
}
```
- Monaco Editor統合
- リアルタイムプレビュー
- エラーハンドリング

#### DemoViewer.svelte
```typescript
interface DemoViewerProps {
  ionToken: string;
  height?: string;
  config?: DemoConfig;
}
```
- Cesiumビューアーラッパー
- デモ設定の動的適用
- パフォーマンス最適化

### 3.2 ページ構成

#### ランディングページ (/)
- ヒーローセクション（ライブデモ背景）
- 特徴説明（3カラム）
- クイックスタート
- コンポーネント一覧

#### ドキュメント (/docs)
- 左サイドバー（目次）
- メインコンテンツエリア
- 右サイドバー（ページ内目次）

#### デモページ (/demos)
- 左パネル（コードエディター）
- 右パネル（ライブプレビュー）
- 下部パネル（設定オプション）

## 4. データ構造

### 4.1 ナビゲーション
```typescript
interface NavigationItem {
  title: string;
  path: string;
  children?: NavigationItem[];
  icon?: string;
}
```

### 4.2 デモ設定
```typescript
interface DemoConfig {
  title: string;
  description: string;
  code: string;
  imports: string[];
  props?: Record<string, any>;
  presets?: DemoPreset[];
}

interface DemoPreset {
  name: string;
  description: string;
  config: Record<string, any>;
}
```

### 4.3 APIドキュメント
```typescript
interface ComponentDoc {
  name: string;
  description: string;
  props: PropDoc[];
  examples: Example[];
  typescript: string;
}

interface PropDoc {
  name: string;
  type: string;
  required: boolean;
  default?: any;
  description: string;
}
```

## 5. ビルド・デプロイ設計

### 5.1 ビルドプロセス
1. ライブラリビルド（npm run build）
2. ドキュメントサイトビルド
3. Cesiumアセットコピー
4. 静的ファイル生成

### 5.2 GitHub Actions ワークフロー
```yaml
name: Deploy Documentation
on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v4
      - run: pnpm install
      - run: pnpm run build:docs
      - uses: peaceiris/actions-gh-pages@v3
```

## 6. パフォーマンス最適化

### 6.1 コード分割
- ルートベースの自動分割
- Cesiumの遅延ロード
- デモコンポーネントの動的インポート

### 6.2 アセット最適化
- 画像の最適化とWebP変換
- フォントのサブセット化
- CSSのPurge

### 6.3 キャッシュ戦略
- 静的アセットの長期キャッシュ
- Service Workerによるオフライン対応（オプション）

## 7. セキュリティ考慮事項

### 7.1 Cesium Ion Token
- 環境変数での管理
- ドメイン制限の設定
- レート制限の適用

### 7.2 ユーザー入力
- コードエディターのサンドボックス化
- XSS対策
- CSP設定

## 8. SEO・アクセシビリティ

### 8.1 SEO対策
- 静的サイトマップ生成
- メタタグ最適化
- 構造化データ（JSON-LD）

### 8.2 アクセシビリティ
- セマンティックHTML
- ARIAラベル
- キーボードナビゲーション
- スクリーンリーダー対応

## 9. 開発環境設定

### 9.1 必要なパッケージ
```json
{
  "devDependencies": {
    "@sveltejs/adapter-static": "^3.0.0",
    "@sveltejs/kit": "^2.0.0",
    "tailwindcss": "^3.4.0",
    "shiki": "^1.0.0",
    "@monaco-editor/react": "^4.6.0",
    "vite-plugin-static-copy": "^1.0.0"
  }
}
```

### 9.2 環境変数
```env
PUBLIC_CESIUM_ION_TOKEN=your_token_here
PUBLIC_SITE_URL=https://takamunesuda.github.io/svecium
```

## 10. テスト戦略

### 10.1 単体テスト
- Vitest for component testing
- Testing Library

### 10.2 E2Eテスト
- Playwright for demo testing
- Visual regression testing

### 10.3 パフォーマンステスト
- Lighthouse CI
- Bundle size monitoring