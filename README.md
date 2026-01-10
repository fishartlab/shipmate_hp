# SHIPMATE HP

漁船集客支援サービス「SHIPMATE」のホームページ

## ディレクトリ構成

```
shipmate_hp/
├── index.html              # トップページ
├── globals.css             # グローバルCSS
├── pages/                  # 各ページ
│   ├── about.html          # 私たちについて
│   ├── service_promotion.html  # 集客支援・プロモーション
│   ├── service_web.html    # Web制作
│   ├── service_design.html # デザイン制作
│   └── service_event.html  # イベント企画・運営
└── assets/
    ├── css/
    │   ├── style.css       # メインスタイル
    │   └── styleguide.css  # スタイルガイド（変数定義）
    ├── js/
    │   └── components.js   # ヘッダー・フッター共通化
    └── img/
        └── pages/          # ページ別画像
            ├── about/
            └── promotion/
```

---

## 共通コンポーネント

### 1. ヘッダー・フッター

`assets/js/components.js` で動的に生成。各HTMLには以下を記述するだけ。

```html
<div class="page">
    <div id="header"></div>

    <!-- ページコンテンツ -->

    <div id="footer"></div>
</div>
<script src="../assets/js/components.js"></script>
```

- ページ位置（ルート or pages/）を自動判定してパスを調整
- 現在のページに応じてナビゲーションのアクティブ状態を適用

---

### 2. ヒーローセクション (`.hero-section`)

ページ上部のメインビジュアルエリア。

```html
<div class="hero-section">
    <div class="hero__container">
        <div class="hero__content">
            <h1 class="hero__title">タイトル</h1>
            <p class="hero__subtitle">サブタイトル（任意）</p>
            <div class="hero__actions">
                <button class="hero__btn hero__btn--primary">メインボタン</button>
                <button class="hero__btn">サブボタン</button>
            </div>
        </div>
    </div>
</div>
```

| クラス | 説明 |
|--------|------|
| `.hero-section` | ヒーローセクション本体 |
| `.hero__container` | 中央寄せコンテナ |
| `.hero__content` | コンテンツラッパー |
| `.hero__title` | メインタイトル（h1） |
| `.hero__subtitle` | サブタイトル（任意） |
| `.hero__actions` | ボタンエリア（任意） |
| `.hero__btn` | ボタン（透過スタイル） |
| `.hero__btn--primary` | ボタン（白背景） |

---

### 3. 2カラムセクション (`.two-col-section`)

左テキスト・右画像（または逆）のレイアウト。

```html
<div class="two-col-section">
    <div class="two-col__container">
        <div class="two-col__content">
            <div class="two-col__text">
                <div class="section-tagline"><span>タグライン</span></div>
                <h2 class="two-col__title">セクションタイトル</h2>
                <p class="two-col__description">説明文</p>
                <div class="two-col__actions">
                    <button class="two-col__btn">ボタン</button>
                </div>
            </div>
            <div class="two-col__image">
                <img src="..." alt="..." />
            </div>
        </div>
    </div>
</div>
```

#### モディファイア

| クラス | 説明 |
|--------|------|
| `.two-col-section--reverse` | 左画像・右テキスト |
| `.two-col-section--alt-bg` | 背景色をグレーに変更 |

#### 使用例

```html
<!-- 基本（左テキスト・右画像） -->
<div class="two-col-section">

<!-- 左画像・右テキスト -->
<div class="two-col-section two-col-section--reverse">

<!-- 背景色変更 + 左画像・右テキスト -->
<div class="two-col-section two-col-section--alt-bg two-col-section--reverse">
```

---

### 4. セクションタグライン (`.section-tagline`)

セクションの上部に表示する小さなラベル。

```html
<div class="section-tagline">
    <span>About</span>
</div>
```

---

## 新規ページ作成手順

### Step 1: HTMLファイル作成

`pages/` に新しいHTMLファイルを作成。

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="utf-8" />
    <title>ページタイトル | SHIPMATE</title>
    <link rel="stylesheet" href="../globals.css" />
    <link rel="stylesheet" href="../assets/css/styleguide.css" />
    <link rel="stylesheet" href="../assets/css/style.css" />
</head>
<body>
    <div class="page">
        <div id="header"></div>

        <!-- ヒーローセクション -->
        <div class="hero-section">
            <div class="hero__container">
                <div class="hero__content">
                    <h1 class="hero__title">ページタイトル</h1>
                </div>
            </div>
        </div>

        <!-- コンテンツセクション -->
        <div class="two-col-section">
            <!-- ... -->
        </div>

        <div id="footer"></div>
    </div>
    <script src="../assets/js/components.js"></script>
</body>
</html>
```

### Step 2: 画像配置

ページ用の画像は `assets/img/pages/[ページ名]/` に配置。

```
assets/img/pages/
├── about/
│   ├── hero.png
│   └── concept.png
└── promotion/
    ├── status.png
    └── support_detail.png
```

### Step 3: ナビゲーション追加（必要に応じて）

`assets/js/components.js` の `getHeaderHTML()` と `getFooterHTML()` にリンクを追加。

---

### 5. カードグリッドセクション (`.card-grid-section`)

複数のカードをグリッド表示するセクション。

```html
<section class="card-grid-section">
    <div class="card-grid-section__inner">
        <p class="card-grid-section__eyebrow">できること</p>
        <h2 class="card-grid-section__title">セクションタイトル</h2>
        <p class="card-grid-section__lead">リード文</p>

        <div class="card-grid">
            <!-- 横長カード -->
            <article class="grid-card grid-card--wide">
                <div class="grid-card__no">01</div>
                <div class="grid-card__content">
                    <h3 class="grid-card__title">カードタイトル</h3>
                    <p class="grid-card__desc">説明文</p>
                    <div class="grid-card__image">
                        <span class="grid-card__image-icon">🖼️</span>
                    </div>
                </div>
                <div class="grid-card__side-label">ラベル</div>
            </article>

            <!-- 縦長カード -->
            <article class="grid-card grid-card--thin">
                <div class="grid-card__no">02</div>
                <div class="grid-card__thin-label">ラベル</div>
            </article>
        </div>
    </div>
</section>
```

| クラス | 説明 |
|--------|------|
| `.card-grid-section` | セクション本体 |
| `.card-grid` | カードグリッドコンテナ |
| `.grid-card` | 基本カード |
| `.grid-card--wide` | 横長カード |
| `.grid-card--thin` | 縦長カード |

---

### 6. CTAセクション (`.cta-section`)

中央配置のコールトゥアクションセクション。

```html
<section class="cta-section">
    <div class="cta-section__inner">
        <p class="cta-section__eyebrow">タグライン</p>
        <h2 class="cta-section__title">タイトル</h2>
        <p class="cta-section__lead">リード文</p>

        <div class="cta-section__logos">
            <span class="brand-chip">ブランド名</span>
        </div>

        <div class="cta-section__cta">
            <a class="cta-section__btn" href="#">
                <span>ボタン</span>
            </a>
        </div>

        <img src="..." alt="..." />
    </div>
</section>
```

---

### 7. フィーチャーセクション (`.feature-section`)

3カラムのカード表示セクション。

```html
<section class="feature-section">
    <div class="feature-section__inner">
        <p class="feature-section__eyebrow">流れ</p>
        <h2 class="feature-section__title">タイトル</h2>
        <p class="feature-section__lead">リード文</p>

        <div class="feature-cards">
            <!-- 横長カード -->
            <article class="feature-card feature-card--wide">
                <div class="feature-wide">
                    <div class="feature-wide__text">
                        <p class="feature-wide__tag">タグ</p>
                        <h3 class="feature-wide__title">タイトル</h3>
                        <p class="feature-wide__desc">説明文</p>
                        <a class="feature-wide__link" href="#">→</a>
                    </div>
                    <img src="..." alt="..." />
                </div>
            </article>

            <!-- 縦長カード -->
            <article class="feature-card feature-card--tall">
                <div class="feature-tall">
                    <div class="feature-tall__icon"><!-- アイコン --></div>
                    <h3 class="feature-tall__title">タイトル</h3>
                    <p class="feature-tall__desc">説明文</p>
                    <a class="feature-tall__link" href="#">→</a>
                </div>
            </article>
        </div>
    </div>
</section>
```

| クラス | 説明 |
|--------|------|
| `.feature-section` | セクション本体 |
| `.feature-cards` | カードグリッドコンテナ |
| `.feature-card--wide` | 横長カード |
| `.feature-card--tall` | 縦長カード |

---

### 8. スクロールナビセクション (`.scroll-nav`)

ページ内スクロールナビゲーション付きのセクション。

```html
<section class="scroll-nav">
    <div class="scroll-nav__inner">
        <p class="scroll-nav__tagline">Tagline</p>
        <div class="scroll-nav__head">
            <div class="scroll-nav__no">01</div>
            <h2 class="scroll-nav__title">タイトル</h2>
        </div>

        <div class="scroll-nav-frame">
            <!-- 左：縦ラベル -->
            <div class="scroll-nav-frame__left">
                <div class="vlabel vlabel--strong">メインラベル</div>
                <div class="vlabel vlabel--muted">サブラベル</div>
            </div>

            <!-- 中央：スクロール領域 -->
            <div class="scroll-nav-frame__main">
                <div class="scroll-nav-main-scroll">
                    <section id="section1" class="scroll-nav-main-block">
                        <div class="scroll-nav-main">
                            <div class="scroll-nav-main__no">02</div>
                            <p class="scroll-nav-main__text">コンテンツ</p>
                            <div class="scroll-nav-main__image">
                                <span class="scroll-nav-main__image-icon">🖼️</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <!-- 右：縦ナビ -->
            <nav class="scroll-nav-frame__right">
                <a class="vcol vcol--link" href="#section1">
                    <span class="vcol__text">リンク</span>
                </a>
            </nav>
        </div>
    </div>
</section>
```

---

## CSS設計方針

### BEM記法

```
.block__element--modifier
```

- **Block**: 独立したコンポーネント（例: `.hero-section`, `.two-col-section`）
- **Element**: Blockの一部（例: `__container`, `__title`）
- **Modifier**: バリエーション（例: `--reverse`, `--alt-bg`）

### 共通コンポーネントの追加

1. `assets/css/style.css` の「共通レイアウトコンポーネント」セクションに追加
2. レスポンシブ対応を含める（1024px, 768px ブレークポイント）
3. このREADMEに使用方法を追記

---

## CSS変数

`assets/css/styleguide.css` で定義。主要な変数:

| 変数 | 用途 |
|------|------|
| `--spacing-sizing-container-container-large` | コンテナ最大幅 |
| `--spacing-sizing-page-padding-padding-global` | ページ左右パディング |
| `--heading-h1-font-family` | 見出しフォント |
| `--text-medium-normal-font-family` | 本文フォント |
| `--color-schemes-color-scheme-1-text` | テキスト色 |
| `--primitives-color-neutral-darkest` | 濃い色（ボタンなど） |

---

## 既存コンポーネント（About専用）

以下はAboutページ専用のスタイル。必要に応じて共通化を検討。

- `.about-concept-section` - 事業コンセプト
- `.about-services-section` - 提供サービス（4カラムグリッド）
- `.about-mvv-section` - ミッション・ビジョン・バリュー
- `.about-target-section` - ターゲットセクション（青背景）
- `.about-closing-section` - クロージングCTA
