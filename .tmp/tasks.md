# Svecium ドキュメント・デモサイト実装タスクリスト

## Phase 1: 基本構築（MVP）

### 1. プロジェクトセットアップ
- [ ] docs-siteディレクトリ作成
- [ ] SvelteKitプロジェクト初期化
- [ ] 必要な依存関係インストール
  - [ ] @sveltejs/adapter-static
  - [ ] tailwindcss
  - [ ] @tailwindcss/typography
  - [ ] shiki
  - [ ] vite-plugin-static-copy
- [ ] 基本設定ファイル作成
  - [ ] svelte.config.js (static adapter設定)
  - [ ] vite.config.ts (Cesium対応)
  - [ ] tailwind.config.js
  - [ ] tsconfig.json

### 2. 基本レイアウト構築
- [ ] app.html作成（基本HTMLテンプレート）
- [ ] app.css作成（Tailwind導入）
- [ ] +layout.svelte作成（共通レイアウト）
- [ ] Header.svelteコンポーネント作成
- [ ] Footer.svelteコンポーネント作成
- [ ] 基本ナビゲーション実装

### 3. ランディングページ作成
- [ ] ヒーローセクション実装
  - [ ] キャッチコピー
  - [ ] 簡単なCesiumデモ背景
  - [ ] CTAボタン（Get Started, View Demos）
- [ ] 特徴セクション実装（3カラム）
- [ ] クイックスタートセクション
- [ ] コンポーネント一覧カード

### 4. ドキュメント基本ページ
- [ ] /docs/getting-started ページ作成
- [ ] /docs/installation ページ作成
- [ ] Sidebar.svelteコンポーネント作成
- [ ] ドキュメントレイアウト実装
- [ ] マークダウンコンテンツ準備

### 5. APIリファレンス基本ページ
- [ ] PropsTable.svelteコンポーネント作成
- [ ] CodeBlock.svelteコンポーネント作成
- [ ] 各コンポーネントAPIページ作成
  - [ ] /docs/api/viewer
  - [ ] /docs/api/terrain
  - [ ] /docs/api/camera
  - [ ] /docs/api/imagery
  - [ ] /docs/api/geojson-point
  - [ ] /docs/api/geojson-line
  - [ ] /docs/api/geojson-polygon
  - [ ] /docs/api/mvt

### 6. シンプルデモページ
- [ ] DemoViewer.svelteコンポーネント作成
- [ ] /demos ページ作成（デモ一覧）
- [ ] 基本的な静的デモ実装
  - [ ] Viewerデモ
  - [ ] Terrainデモ
  - [ ] Cameraデモ

### 7. GitHub Pages デプロイ設定
- [ ] .github/workflows/deploy.yml作成
- [ ] package.jsonにbuild:docsスクリプト追加
- [ ] 静的ビルド確認
- [ ] 初回デプロイテスト

## Phase 2: 機能拡張

### 8. インタラクティブデモ機能
- [ ] LiveEditor.svelteコンポーネント作成
- [ ] Monaco Editor統合
- [ ] リアルタイムプレビュー機能
- [ ] エラーハンドリング実装

### 9. プレイグラウンド機能
- [ ] /demos/playground ページ作成
- [ ] コード・プレビュー分割レイアウト
- [ ] プリセット機能実装
- [ ] コード共有機能（URL化）

### 10. 高度なデモ実装
- [ ] GeoJSONデモ（Point, Line, Polygon）
- [ ] MVTデモ
- [ ] 複合デモ（全機能統合）
- [ ] インタラクティブパラメータ調整UI

### 11. コンテンツ充実
- [ ] 詳細なAPIドキュメント記述
- [ ] 使用例とベストプラクティス
- [ ] トラブルシューティングガイド
- [ ] FAQ作成

### 12. 検索機能
- [ ] 検索インデックス生成
- [ ] 検索UIコンポーネント
- [ ] 検索結果表示

## Phase 3: 最適化・改善

### 13. パフォーマンス最適化
- [ ] コード分割実装
- [ ] Cesium遅延ロード
- [ ] 画像最適化
- [ ] キャッシュ戦略実装

### 14. SEO対策
- [ ] メタタグ生成
- [ ] サイトマップ生成
- [ ] Open Graph対応
- [ ] 構造化データ追加

### 15. アクセシビリティ
- [ ] キーボードナビゲーション改善
- [ ] ARIAラベル追加
- [ ] カラーコントラスト確認
- [ ] スクリーンリーダーテスト

### 16. モバイル対応
- [ ] レスポンシブデザイン調整
- [ ] モバイルナビゲーション
- [ ] タッチ操作最適化

### 17. テスト
- [ ] コンポーネントテスト作成
- [ ] E2Eテスト作成
- [ ] ビジュアルリグレッションテスト
- [ ] Lighthouse CI設定

### 18. ドキュメント仕上げ
- [ ] README更新
- [ ] コントリビューションガイド
- [ ] ライセンス情報
- [ ] チェンジログ

## 実装優先順位

### 🔴 Critical (Phase 1完了必須)
1. プロジェクトセットアップ
2. 基本レイアウト構築
3. ランディングページ作成
4. ドキュメント基本ページ
5. GitHub Pagesデプロイ設定

### 🟡 High (Phase 2で優先)
6. APIリファレンス基本ページ
7. シンプルデモページ
8. インタラクティブデモ機能

### 🟢 Medium (Phase 2-3)
9. プレイグラウンド機能
10. 高度なデモ実装
11. コンテンツ充実
12. パフォーマンス最適化

### 🔵 Low (Phase 3)
13. 検索機能
14. SEO対策
15. アクセシビリティ
16. モバイル対応
17. テスト

## 見積もり工数

- **Phase 1**: 2-3日
- **Phase 2**: 3-4日
- **Phase 3**: 2-3日
- **合計**: 7-10日

## 成功基準

### Phase 1完了時
- [ ] GitHub Pagesでサイトが公開されている
- [ ] 基本的なドキュメントが閲覧可能
- [ ] 最低1つのデモが動作している

### Phase 2完了時
- [ ] 全コンポーネントのAPIドキュメント完成
- [ ] インタラクティブデモが動作
- [ ] プレイグラウンドで自由に試せる

### Phase 3完了時
- [ ] Lighthouse スコア90以上
- [ ] 全デバイスで適切に表示
- [ ] 完全なドキュメント完成