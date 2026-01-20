// 상품 데이터
const productsData = [
    {
        id: 1,
        brand: 'LYNN',
        name: '그랜드 부츠컷 슬랙스',
        price: 1980000,
        image: 'https://www.figma.com/api/mcp/asset/6614e4df-4875-441c-a0d6-b0bce82830a5',
        rating: 6
    },
    {
        id: 2,
        brand: 'LYNN',
        name: '포레즈 페미닌 원피스',
        price: 679000,
        image: 'https://www.figma.com/api/mcp/asset/4c6a0a43-bc23-4337-827f-df088c3c35aa',
        rating: 5
    },
    {
        id: 3,
        brand: 'LYNN',
        name: '플라워 비딩 풀오버',
        price: 1980000,
        image: 'https://www.figma.com/api/mcp/asset/6614e4df-4875-441c-a0d6-b0bce82830a5',
        rating: 4
    },
    {
        id: 4,
        brand: 'KENNETH LADY',
        name: '드레이프 넥 블라우스',
        price: 179000,
        image: 'https://www.figma.com/api/mcp/asset/50b4fbf8-aad0-4594-86c6-408e1ad05e30',
        rating: 3
    },
    {
        id: 5,
        brand: 'KENNETH LADY',
        name: '이프 무스탕 코트',
        price: 459000,
        image: 'https://www.figma.com/api/mcp/asset/f0c1c543-917a-4fb1-a357-7a9ed99f44eb',
        rating: 2
    },
    {
        id: 6,
        brand: 'KENNETH LADY',
        name: '배색 레터링 데님 자켓',
        price: 103000,
        image: 'https://www.figma.com/api/mcp/asset/abdb6506-8371-487b-b2b2-798a2dfa8836',
        rating: 1
    }
];

const brandsData = [
    { id: 1, name: '전체', count: 85, active: true },
    { id: 2, name: '린', count: 0 },
    { id: 3, name: '라인어디션', count: 0 },
    { id: 4, name: '케네스레이디', count: 0 },
    { id: 5, name: '디어케이', count: 0 },
    { id: 6, name: '라인스튜디오원', count: 0 },
    { id: 7, name: '모에', count: 0 },
    { id: 8, name: '미우미우', count: 0 }
];

const trendsData = [
    {
        id: 1,
        title: 'MD가 직접 입어봤어요!',
        subtitle: '지금 입기 딱 좋은 라인어디션과 케네스레이디의 아우터',
        image: 'https://www.figma.com/api/mcp/asset/87134af7-a3bb-497b-bb15-ba2548b75a30'
    },
    {
        id: 2,
        title: 'COLOR POINT ITEM',
        subtitle: '어두운 겨울 옷 사이 컬러 포인트',
        image: 'https://www.figma.com/api/mcp/asset/15459560-c455-47bc-976c-6a94817acfc6'
    },
    {
        id: 3,
        title: '겨울이 좋아지는 포근함, FUR',
        subtitle: '올 겨울 필수 FUR ITEM',
        image: 'https://www.figma.com/api/mcp/asset/93c78899-6359-427c-9e16-fecfcd739680'
    },
    {
        id: 4,
        title: 'Move Me',
        subtitle: '25FW COLLECTION 2ND OPEN',
        image: 'https://www.figma.com/api/mcp/asset/3d340e35-5862-4322-95f4-fe4d3b9028ce'
    }
];

const categoriesData = [
    { id: 1, name: '코트', image: 'https://www.figma.com/api/mcp/asset/8269a78b-33d4-4697-82ea-ab54915868f5' },
    { id: 2, name: '패딩·다운', image: 'https://www.figma.com/api/mcp/asset/91f380f6-c115-4df8-ad98-c70f7e12d33c' },
    { id: 3, name: '트위드', image: 'https://www.figma.com/api/mcp/asset/071ec2f5-3200-4b73-8eb7-c068a5ba9c31' },
    { id: 4, name: '원피스', image: 'https://www.figma.com/api/mcp/asset/d4e879b6-c122-4465-9569-28c6d1ada6c1' },
    { id: 5, name: '블라우스', image: 'https://www.figma.com/api/mcp/asset/8ab2f21b-4732-4928-a5f0-bfd647bcd067' },
    { id: 6, name: '니트', image: 'https://www.figma.com/api/mcp/asset/8c625c39-17fa-491b-b4ba-bf9353dba24b' },
    { id: 7, name: '스커트', image: 'https://www.figma.com/api/mcp/asset/ff872992-8553-406b-870e-463152e51f9b' },
    { id: 8, name: '팬츠', image: 'https://www.figma.com/api/mcp/asset/14910ba9-1bc2-4193-baca-30342cd3b43e' },
    { id: 9, name: '데님', image: 'https://www.figma.com/api/mcp/asset/2ee7c531-7b35-430c-b650-ca1ec213912c' },
    { id: 10, name: '가방', image: 'https://www.figma.com/api/mcp/asset/2912c9db-120e-4aac-b2a6-7d5b5c2567bf' },
    { id: 11, name: '신발', image: 'https://www.figma.com/api/mcp/asset/d641259e-78fc-4d43-8497-7fcaa8f08b01' },
    { id: 12, name: '스윔웨어', image: 'https://www.figma.com/api/mcp/asset/2ad1ec79-078b-4d50-8dea-fd731aff5467' }
];

// DOM 요소 캐싱
const app = document.getElementById('app');
const todayProductsSlider = document.getElementById('todayProductsSlider');
const trendsSlider = document.getElementById('trendsSlider');
const categoryGrid = document.getElementById('categoryGrid');
const brandShops = document.getElementById('brandShops');

// 오늘의 업데이트 상품 렌더링
function renderTodayProducts() {
    todayProductsSlider.innerHTML = productsData.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-card__image">
                <img src="${product.image}" alt="${product.name}">
                <button class="product-card__like">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M 10 18 L 2 10 Q 2 5 7 5 Q 10 5 10 7 Q 10 5 13 5 Q 18 5 18 10 L 10 18 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
                    </svg>
                </button>
            </div>
            <p class="product-card__brand">${product.brand}</p>
            <p class="product-card__name">${product.name}</p>
            <p class="product-card__price">${product.price.toLocaleString()}원</p>
        </div>
    `).join('');

    // 좋아요 버튼 이벤트
    document.querySelectorAll('.product-card__like').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            btn.style.opacity = btn.style.opacity === '1' ? '0.3' : '1';
        });
    });
}

// 요즘 트렌드 렌더링
function renderTrends() {
    trendsSlider.innerHTML = trendsData.map(trend => `
        <div class="trend-card" data-trend-id="${trend.id}">
            <img src="${trend.image}" alt="${trend.title}">
            <div class="trend-card__content">
                <h3 class="trend-card__title">${trend.title}</h3>
                <p class="trend-card__subtitle">${trend.subtitle}</p>
            </div>
        </div>
    `).join('');

    // 트렌드 클릭 이벤트
    document.querySelectorAll('.trend-card').forEach(card => {
        card.addEventListener('click', () => {
            console.log(`Trend clicked: ${card.dataset.trendId}`);
        });
    });
}

// 카테고리 렌더링
function renderCategories() {
    categoryGrid.innerHTML = categoriesData.map(category => `
        <div class="category-item" data-category-id="${category.id}">
            <img src="${category.image}" alt="${category.name}">
            <div class="category-item__overlay">${category.name}</div>
        </div>
    `).join('');

    // 카테고리 클릭 이벤트
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', () => {
            console.log(`Category clicked: ${item.dataset.categoryId}`);
        });
    });
}

// 브랜드 샵 렌더링
function renderBrandShops() {
    const brandLogos = [
        { name: '전체', logo: '(85)' },
        { name: '린', logo: 'LYNN' },
        { name: '라인어디션', logo: 'LINE ADDITION' },
        { name: '케네스레이디', logo: 'KENNETH LADY' },
        { name: '디어케이', logo: 'DEAR K' },
        { name: '라인스튜디오원', logo: 'STUDIO ONE' },
        { name: '모에', logo: 'MOE' },
        { name: '미우미우', logo: 'MIU MIU' }
    ];

    brandShops.innerHTML = brandLogos.map((brand, index) => `
        <div class="brand-logo" data-brand="${brand.name}">
            <div class="brand-logo__image">
                <span style="font-size: 18px; font-weight: 700;">${brand.logo}</span>
            </div>
            <div class="brand-logo__name">${brand.name}</div>
        </div>
    `).join('');

    // 브랜드 클릭 이벤트
    document.querySelectorAll('.brand-logo').forEach(brand => {
        brand.addEventListener('click', () => {
            const brandName = brand.dataset.brand;
            console.log(`Brand clicked: ${brandName}`);
            updateActiveBrand(brandName);
        });
    });
}

// 활성 브랜드 업데이트
function updateActiveBrand(brandName) {
    document.querySelectorAll('.brand-shop__tab').forEach(tab => {
        const isActive = tab.textContent.includes(brandName) || 
                        (brandName === '전체' && tab.classList.contains('brand-shop__tab--active'));
        tab.classList.toggle('brand-shop__tab--active', isActive);
    });
}

// 헤더 이벤트 리스너
function initHeaderEvents() {
    const menuBtn = document.getElementById('menuBtn');
    const searchBtn = document.getElementById('searchBtn');
    const profileBtn = document.getElementById('profileBtn');
    const cartBtn = document.getElementById('cartBtn');

    menuBtn?.addEventListener('click', () => {
        console.log('Menu clicked');
    });

    searchBtn?.addEventListener('click', () => {
        console.log('Search clicked');
    });

    profileBtn?.addEventListener('click', () => {
        console.log('Profile clicked');
    });

    cartBtn?.addEventListener('click', () => {
        console.log('Cart clicked');
    });
}

// 슬라이더 초기화 (터치/드래그)
function initSliders() {
    const sliders = document.querySelectorAll('[id$="Slider"]');
    
    sliders.forEach(slider => {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1;
            slider.scrollLeft = scrollLeft - walk;
        });
    });
}

// 탭 기능
function initTabs() {
    const tabs = document.querySelectorAll('.brand-shop__tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 모든 탭에서 active 클래스 제거
            tabs.forEach(t => t.classList.remove('brand-shop__tab--active'));
            // 클릭한 탭에 active 클래스 추가
            tab.classList.add('brand-shop__tab--active');
        });
    });
}

// 스크롤 애니메이션
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.product-card, .trend-card, .category-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 모바일 메뉴 토글
function initMobileMenu() {
    const menuBtn = document.getElementById('menuBtn');
    
    menuBtn?.addEventListener('click', () => {
        const nav = document.querySelector('.header__icons');
        if (nav) {
            nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
        }
    });

    // 윈도우 크기 변경 시
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            const nav = document.querySelector('.header__icons');
            if (nav) {
                nav.style.display = 'flex';
            }
        }
    });
}

// 부드러운 스크롤
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    renderTodayProducts();
    renderTrends();
    renderCategories();
    renderBrandShops();
    initHeaderEvents();
    initSliders();
    initTabs();
    initScrollAnimations();
    initMobileMenu();
    initSmoothScroll();

    console.log('Page initialized successfully');
});

// 윈도우 리사이즈 이벤트
window.addEventListener('resize', () => {
    console.log('Window resized');
});

// 페이지 언로드 정리
window.addEventListener('beforeunload', () => {
    console.log('Page unloading');
});
