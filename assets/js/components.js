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
    if (path.includes('contact.html')) return 'contact';
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
                        <img src="${basePath}assets/img/common/logo.png" alt="SHIPMATE" class="nav-logo-img" />
                    </a>
                </div>
                <div class="nav-right">
                    <div class="nav-links">
                        <div class="nav-link${currentPage === 'contact' ? ' nav-link-active' : ''}">
                            <a href="${pagesPath}contact.html" class="nav-link-text">お問い合わせ</a>
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
                            <a href="${basePath}index.html" class="footer-logo">
                                 <img src="${basePath}assets/img/logo.png" alt="SHIPMATE" class="footer-logo-img" />
                            </a>
                            <p class="footer-description">漁船の魅力を「選ばれる体験」に変える、集客のトータルサポート。</p>
                        </div>

                        <div class="footer-links">
                            <div class="footer-links-column">
                                <div class="footer-links-title">ページ</div>
                                <div class="footer-links-list">
                                    <a href="${basePath}index.html" class="footer-link-item">ホーム</a>
                                    <a href="${pagesPath}contact.html" class="footer-link-item">お問い合わせ</a>
                                </div>
                            </div>

                            <div class="footer-links-column">
                                <div class="footer-links-title">サービス</div>
                                <div class="footer-links-list">
                                    <a href="${pagesPath}service_promotion.html" class="footer-link-item">集客支援</a>
                                    <a href="${pagesPath}service_web.html" class="footer-link-item">Web制作</a>
                                    <a href="${pagesPath}service_design.html" class="footer-link-item">ブランディング</a>
                                    <a href="${pagesPath}service_event.html" class="footer-link-item">イベント企画</a>
                                </div>
                            </div>

                            <div class="footer-links-column">
                                <div class="footer-links-title">フォロー</div>
                                <div class="footer-social-links">
                                    <a href="https://www.instagram.com/fishartlab" class="footer-social-link">
                                        <img class="footer-social-icon" src="${basePath}assets/img/sns/instagram.svg" alt="Instagram" />
                                </div>
                            </div>
                        </div>W
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-bottom-content">
                        <div class="footer-copyright">© 2025 SHIPMATE. All rights reserved.</div>
                        <div class="footer-bottom-links">
                            <a href="#" class="footer-bottom-link">プライバシーポリシー</a>
                            <a href="#" class="footer-bottom-link">利用規約</a>
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

// スクロール時のヘッダー効果
function handleHeaderScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// スクロールアニメーション（Intersection Observer）
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.about-concept-content, .about-services-grid, .about-mvv-content, ' +
        '.about-target-content, .about-closing-content, .service-card, ' +
        '.about-service-card, .two-col__content, .contact-content, ' +
        '.section-tagline, .about-concept-title, .about-services-title, ' +
        '.about-mvv-title, .about-target-title, .about-closing-title'
    );

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// スムーズスクロール
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// DOMContentLoadedで実行
document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
    initScrollAnimations();
    initSmoothScroll();
});

// スクロールイベント
window.addEventListener('scroll', handleHeaderScroll, { passive: true });
