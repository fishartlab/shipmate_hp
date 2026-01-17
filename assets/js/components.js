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
                        <img src="${basePath}assets/img/common/logo_transparent.png" alt="SHIPMATE" class="nav-logo-img" />
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
                    <div class="footer-brand">
                        <img src="${basePath}assets/img/common/logo_transparent.png" alt="SHIPMATE" class="footer-brand-logo" />
                        <p class="footer-description">釣りの感動を、もっと多くの人へ。</p>
                    </div>
                    <div class="footer-related">
                        <div class="footer-related-label">関連事業</div>
                        <a href="https://fishartlab.com" class="footer-related-link" target="_blank" rel="noopener noreferrer">
                            <img src="${basePath}assets/img/common/fishartlab.png" alt="Fish Art Lab" class="footer-related-logo" />
                            <div class="footer-related-info">
                                <span class="footer-related-name">Fish Art Lab</span>
                                <span class="footer-related-url">fishartlab.com</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p class="footer-copyright">© 2026 SHIPMATE. All rights reserved.</p>
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
