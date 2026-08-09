# Story Leaf サポートサイト

[Story Leaf](https://github.com/ki-84/story_leaf)(英語多読絵本アプリ)のサポートページ。
GitHub Pages で公開し、App Store 提出時の **Support URL / Privacy Policy URL** として使う。

公開 URL: **https://ki-84.github.io/story_leaf_support/**

| ページ | 用途 |
|---|---|
| `/en/index.html` | サポートトップ(FAQ・各ページへの導線)→ App Store の Support URL |
| `/en/privacy.html` | プライバシーポリシー → App Store の Privacy Policy URL |
| `/en/bug-report.html` | バグ報告(アプリから version 等のクエリ付きで開く → Google Form へプリフィル) |
| `/en/feature-request.html` | 機能要望(同上) |
| `/en/licenses.html` | 収録コンテンツ・ソフトウェアのライセンスとクレジット |

## Google Form の設定(未設定の間は GitHub Issues に誘導される)

1. Google Forms でバグ報告用・要望用の 2 フォームを作成する
   - バグ報告: 記述式の「App version」「iOS version」「Device model」+ 内容記入欄
   - 要望: 記述式の「App version」(任意)+ 内容記入欄
2. フォームの「事前入力した URL を取得」でダミー値を入れて URL を発行し、
   `FORM_ID`(`/d/e/` の後の長いトークン)と各 `entry.NNNNN` の番号を控える
3. [config.js](config.js) に貼り付けてコミットする

アプリ側は `bug-report.html?version=1.0.0&build=12&os=17.5&device=iPhone15,2`
の形式で開く。ページ側がプリフィル済み Google Form URL を組み立てるため、
**フォームを差し替えてもアプリの更新は不要**。

## 多言語対応

コンテンツはすべて `/en/` 配下にある。日本語版を追加する場合:

1. `en/` を `ja/` にコピーして翻訳する
2. ルートの `index.html` の `supported` 配列に `"ja"` を追加する
   (ブラウザの言語設定で自動振り分けされる)

## ローカル確認

```bash
python3 -m http.server 8000
# → http://localhost:8000/en/bug-report.html?version=1.0.0&build=1
```
