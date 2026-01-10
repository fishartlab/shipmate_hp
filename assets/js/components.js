// ページの位置に基づいてベースパスを取得
function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/pages/')) {
        return '../';
    }
    return '';
}

// 現在のページに基づいてアクティブなナビリンクを判定
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('about.html')) return 'about';
    if (path.includes('service_')) return 'service';
    if (path.endsWith('index.html') || path.endsWith('/')) return 'home';
    return '';
}

// ヘッダーHTMLを生成
function getHeaderHTML() {
    const basePath = getBasePath();
    const pagesPath = basePath ? '' : 'pages/';
    const currentPage = getCurrentPage();

    return `
        <div class="navbar">
            <div class="nav-container">
                <div class="nav-logo-wrapper">
                    <a href="${basePath}index.html" class="nav-logo">
                    </a>
                </div>
                <div class="nav-right">
                    <div class="nav-links">
                        <div class="nav-link${currentPage === 'home' ? ' nav-link-active' : ''}">
                            <a href="${basePath}index.html" class="nav-link-text">ホーム</a>
                        </div>
                        <div class="nav-link${currentPage === 'about' ? ' nav-link-active' : ''}">
                            <a href="${pagesPath}about.html" class="nav-link-text">アバウト</a>
                        </div>
                        <div class="nav-link">
                            <a href="#" class="nav-link-text">お問い合わせ</a>
                        </div>
                        <div class="nav-link nav-link-has-dropdown${currentPage === 'service' ? ' nav-link-active' : ''}">
                            <div class="nav-link-text">サービス</div>
                            <div class="nav-dropdown-menu">
                                <a href="${pagesPath}service_promotion.html" class="nav-dropdown-item">SNS集客支援</a>
                                <a href="${pagesPath}service_web.html" class="nav-dropdown-item">Web制作</a>
                                <a href="${pagesPath}service_design.html" class="nav-dropdown-item">デザイン制作</a>
                                <a href="${pagesPath}service_event.html" class="nav-dropdown-item">イベント企画・運営</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// フッターHTMLを生成
function getFooterHTML() {
    const basePath = getBasePath();
    const pagesPath = basePath ? '' : 'pages/';

    return `
        <div class="footer">
            <div class="footer-container">
                <div class="footer-content">
                    <div class="footer-main">
                        <div class="footer-brand">
                            <div class="footer-logo">
                                <div class="footer-logo-svg">
                                    <img class="footer-logo-svg-1" src="${basePath}assets/img/vector-3.svg" />
                                    <img class="footer-logo-svg-2" src="${basePath}assets/img/vector-10.svg" />
                                    <img class="footer-logo-svg-3" src="${basePath}assets/img/vector-2.svg" />
                                    <img class="footer-logo-svg-4" src="${basePath}assets/img/vector-6.svg" />
                                    <img class="footer-logo-svg-5" src="${basePath}assets/img/vector-8.svg" />
                                </div>
                            </div>
                            <p class="footer-description">漁船の魅力を「選ばれる体験」に変える、集客のトータルサポート。</p>
                        </div>

                        <div class="footer-links">
                            <div class="footer-links-column">
                                <div class="footer-links-title">サービス</div>
                                <div class="footer-links-list">
                                    <a href="${pagesPath}service_promotion.html" class="footer-link-item">集客支援</a>
                                    <a href="${pagesPath}service_web.html" class="footer-link-item">Web制作</a>
                                    <a href="${pagesPath}service_design.html" class="footer-link-item">デザイン制作</a>
                                    <a href="${pagesPath}service_event.html" class="footer-link-item">イベント企画</a>
                                </div>
                            </div>

                            <div class="footer-links-column">
                                <div class="footer-links-title">会社情報</div>
                                <div class="footer-links-list">
                                    <a href="${pagesPath}about.html" class="footer-link-item">私たちについて</a>
                                    <a href="#" class="footer-link-item">お問い合わせ</a>
                                    <a href="#" class="footer-link-item">採用情報</a>
                                    <a href="#" class="footer-link-item">ブログ</a>
                                </div>
                            </div>

                            <div class="footer-links-column">
                                <div class="footer-links-title">フォロー</div>
                                <div class="footer-social-links">
                                    <a href="#" class="footer-social-link">
                                        <img class="footer-social-icon" src="${basePath}assets/img/sns/facebook.png" alt="Facebook" />
                                    </a>
                                    <a href="#" class="footer-social-link">
                                        <img class="footer-social-icon" src="${basePath}assets/img/sns/instagram.svg" alt="Instagram" />
                                    </a>
                                    <a href="#" class="footer-social-link">
                                        <img class="footer-social-icon" src="${basePath}assets/img/sns/x.svg" alt="X" />
                                    </a>
                                    <a href="#" class="footer-social-link">
                                        <img class="footer-social-icon" src="${basePath}assets/img/sns/youtube.png" alt="YouTube" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-bottom-content">
                        <div class="footer-copyright">© 2025 デジタル魚拓事業。すべての権利を保有します。</div>
                        <div class="footer-bottom-links">
                            <a href="#" class="footer-bottom-link">プライバシーポリシー</a>
                            <a href="#" class="footer-bottom-link">利用規約</a>
                            <a href="#" class="footer-bottom-link">クッキー設定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// コンポーネントを挿入
function loadComponents() {
    const headerElement = document.getElementById('header');
    const footerElement = document.getElementById('footer');

    if (headerElement) {
        headerElement.innerHTML = getHeaderHTML();
    }

    if (footerElement) {
        footerElement.innerHTML = getFooterHTML();
    }
}

// DOMContentLoadedで実行
document.addEventListener('DOMContentLoaded', loadComponents);
