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
                        <div class="nav-link${currentPage === 'service' ? ' nav-link-active' : ''}">
                            <a href="${pagesPath}service_design.html" class="nav-link-text">サービス</a>
                        </div>
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
                        <div class="footer-social">
                            <a href="https://www.instagram.com/fishartlab?igsh=MTl4MWY4bnFoaXk2OA==" class="social-link instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                </svg>
                            </a>
                        </div>
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