// Menu Data - Sabit Menü (Her zaman mevcut)
const fixedMenuData = [
    // Kahveler - Sabit
    {
        id: 1,
        name: "Filtre Kahve",
        description: "Taze çekilmiş kahve çekirdeklerinden hazırlanan, aromalı filtre kahve. Saf kahve lezzeti.",
        price: "₺18",
        category: "kahve",
        tags: ["Sıcak", "Saf"],
        icon: "☕",
        isFixed: true
    },
    {
        id: 2,
        name: "Türk Kahvesi",
        description: "Geleneksel Türk kahvesi. Cezve ile özel pişirme tekniği ile hazırlanır.",
        price: "₺20",
        category: "kahve",
        tags: ["Sıcak", "Geleneksel"],
        icon: "☕",
        isFixed: true
    },

    // İçecekler - Sabit
    {
        id: 3,
        name: "Çay",
        description: "Demli Türk çayı. Geleneksel çay bardağında servis edilir.",
        price: "₺8",
        category: "icecek",
        tags: ["Sıcak", "Geleneksel"],
        icon: "☕",
        isFixed: true
    },
    {
        id: 4,
        name: "Ayran",
        description: "Ev yapımı taze ayran. Doğal ve ferahlatıcı içecek.",
        price: "₺10",
        category: "icecek",
        tags: ["Sütlü", "Doğal"],
        icon: "🥛",
        isFixed: true
    },
    {
        id: 5,
        name: "Şalgam Suyu",
        description: "Geleneksel şalgam suyu. Acılı ve ferahlatıcı içecek.",
        price: "₺12",
        category: "icecek",
        tags: ["Ferahlatıcı", "Geleneksel"],
        icon: "🥤",
        isFixed: true
    },

];

// Günlük Menü Verileri (Değişken)
const dailyMenuData = {
    // Pazartesi
    "monday": {
        corba: [
            {
                id: 7,
                name: "Mercimek Çorbası",
                description: "Geleneksel Türk mutfağının vazgeçilmezi, ev yapımı mercimek çorbası. Bol malzemeli ve besleyici.",
                price: "₺25",
                category: "corba",
                tags: ["Vejetaryen", "Glutensiz"],
                icon: "🥣"
            }
        ],
        "ana-yemek": [
            {
                id: 8,
                name: "Karnıyarık",
                description: "Patlıcan, kıyma ve sebzelerle hazırlanan geleneksel Türk yemeği. Fırında özel pişirme tekniği.",
                price: "₺45",
                category: "ana-yemek",
                tags: ["Geleneksel", "Vejetaryen"],
                icon: "🍆"
            }
        ],
        pilav: [
            {
                id: 9,
                name: "Bulgur Pilavı",
                description: "Domatesli ve sebzeli bulgur pilavı. Geleneksel Türk mutfağının vazgeçilmezi.",
                price: "₺25",
                category: "pilav",
                tags: ["Vejetaryen", "Geleneksel"],
                icon: "🍚"
            }
        ],
        tatli: [
            {
                id: 10,
                name: "Künefe",
                description: "Geleneksel Türk tatlısı künefe. Kadayıf, peynir ve şerbetle hazırlanır.",
                price: "₺35",
                category: "tatli",
                tags: ["Geleneksel", "Sıcak"],
                icon: "🍰"
            }
        ]
    },
    // Salı
    "tuesday": {
        corba: [
            {
                id: 11,
                name: "Ezogelin Çorbası",
                description: "Acılı ve lezzetli ezogelin çorbası. Kırmızı mercimek ve baharatlarla hazırlanır.",
                price: "₺28",
                category: "corba",
                tags: ["Acılı", "Geleneksel"],
                icon: "🍲"
            }
        ],
        "ana-yemek": [
            {
                id: 12,
                name: "Tavuk Sote",
                description: "Taze sebzelerle sote edilmiş tavuk eti. Özel baharatlarla lezzetlendirilmiş.",
                price: "₺55",
                category: "ana-yemek",
                tags: ["Protein", "Sağlıklı"],
                icon: "🍗"
            }
        ],
        pilav: [
            {
                id: 13,
                name: "Tavuklu Pilav",
                description: "Tavuk eti ile hazırlanan özel pilav. Tereyağı ve baharatlarla lezzetlendirilmiş.",
                price: "₺35",
                category: "pilav",
                tags: ["Protein", "Doyurucu"],
                icon: "🍚"
            }
        ],
        tatli: [
            {
                id: 14,
                name: "Baklava",
                description: "El açması yufka ile hazırlanan baklava. Fıstık ve şerbetle lezzetlendirilmiş.",
                price: "₺40",
                category: "tatli",
                tags: ["Geleneksel", "El Yapımı"],
                icon: "🥮"
            }
        ]
    },
    // Çarşamba
    "wednesday": {
        corba: [
            {
                id: 15,
                name: "Tavuk Suyu Çorbası",
                description: "Ev yapımı tavuk suyu ile hazırlanan, şifa kaynağı çorba. Sebzelerle zenginleştirilmiş.",
                price: "₺30",
                category: "corba",
                tags: ["Şifalı", "Protein"],
                icon: "🍜"
            }
        ],
        "ana-yemek": [
            {
                id: 16,
                name: "Köfte",
                description: "Ev yapımı ızgara köfte. Özel baharatlarla hazırlanmış, yanında taze salata ile servis edilir.",
                price: "₺50",
                category: "ana-yemek",
                tags: ["Geleneksel", "Protein"],
                icon: "🥩"
            }
        ],
        pilav: [
            {
                id: 17,
                name: "Mercimekli Pilav",
                description: "Kırmızı mercimek ile hazırlanan besleyici pilav. Bol protein içerir.",
                price: "₺28",
                category: "pilav",
                tags: ["Vejetaryen", "Protein"],
                icon: "🍚"
            }
        ],
        tatli: [
            {
                id: 18,
                name: "Sütlaç",
                description: "Ev yapımı fırın sütlaç. Kremalı ve lezzetli geleneksel tatlı.",
                price: "₺25",
                category: "tatli",
                tags: ["Sütlü", "Geleneksel"],
                icon: "🍮"
            }
        ]
    },
    // Perşembe
    "thursday": {
        corba: [
            {
                id: 19,
                name: "Mercimek Çorbası",
                description: "Geleneksel Türk mutfağının vazgeçilmezi, ev yapımı mercimek çorbası. Bol malzemeli ve besleyici.",
                price: "₺25",
                category: "corba",
                tags: ["Vejetaryen", "Glutensiz"],
                icon: "🥣"
            }
        ],
        "ana-yemek": [
            {
                id: 20,
                name: "Mantı",
                description: "El açması hamur ile hazırlanan mantı. Yoğurt ve özel sos ile servis edilir.",
                price: "₺40",
                category: "ana-yemek",
                tags: ["Geleneksel", "El Yapımı"],
                icon: "🥟"
            }
        ],
        pilav: [
            {
                id: 21,
                name: "Bulgur Pilavı",
                description: "Domatesli ve sebzeli bulgur pilavı. Geleneksel Türk mutfağının vazgeçilmezi.",
                price: "₺25",
                category: "pilav",
                tags: ["Vejetaryen", "Geleneksel"],
                icon: "🍚"
            }
        ],
        tatli: [
            {
                id: 22,
                name: "Kemalpaşa",
                description: "Özel hamur ile hazırlanan kemalpaşa tatlısı. Şerbetle lezzetlendirilmiş.",
                price: "₺20",
                category: "tatli",
                tags: ["Geleneksel", "Şerbetli"],
                icon: "🍡"
            }
        ]
    },
    // Cuma
    "friday": {
        corba: [
            {
                id: 23,
                name: "Ezogelin Çorbası",
                description: "Acılı ve lezzetli ezogelin çorbası. Kırmızı mercimek ve baharatlarla hazırlanır.",
                price: "₺28",
                category: "corba",
                tags: ["Acılı", "Geleneksel"],
                icon: "🍲"
            }
        ],
        "ana-yemek": [
            {
                id: 24,
                name: "İmambayıldı",
                description: "Patlıcan, soğan ve domatesle hazırlanan geleneksel yemek. Zeytinyağlı pişirme tekniği.",
                price: "₺42",
                category: "ana-yemek",
                tags: ["Vejetaryen", "Zeytinyağlı"],
                icon: "🍆"
            }
        ],
        pilav: [
            {
                id: 25,
                name: "Tavuklu Pilav",
                description: "Tavuk eti ile hazırlanan özel pilav. Tereyağı ve baharatlarla lezzetlendirilmiş.",
                price: "₺35",
                category: "pilav",
                tags: ["Protein", "Doyurucu"],
                icon: "🍚"
            }
        ],
        tatli: [
            {
                id: 26,
                name: "Künefe",
                description: "Geleneksel Türk tatlısı künefe. Kadayıf, peynir ve şerbetle hazırlanır.",
                price: "₺35",
                category: "tatli",
                tags: ["Geleneksel", "Sıcak"],
                icon: "🍰"
            }
        ]
    },
    // Cumartesi
    "saturday": {
        corba: [
            {
                id: 27,
                name: "Tavuk Suyu Çorbası",
                description: "Ev yapımı tavuk suyu ile hazırlanan, şifa kaynağı çorba. Sebzelerle zenginleştirilmiş.",
                price: "₺30",
                category: "corba",
                tags: ["Şifalı", "Protein"],
                icon: "🍜"
            }
        ],
        "ana-yemek": [
            {
                id: 28,
                name: "Karnıyarık",
                description: "Patlıcan, kıyma ve sebzelerle hazırlanan geleneksel Türk yemeği. Fırında özel pişirme tekniği.",
                price: "₺45",
                category: "ana-yemek",
                tags: ["Geleneksel", "Vejetaryen"],
                icon: "🍆"
            }
        ],
        pilav: [
            {
                id: 29,
                name: "Mercimekli Pilav",
                description: "Kırmızı mercimek ile hazırlanan besleyici pilav. Bol protein içerir.",
                price: "₺28",
                category: "pilav",
                tags: ["Vejetaryen", "Protein"],
                icon: "🍚"
            }
        ],
        tatli: [
            {
                id: 30,
                name: "Baklava",
                description: "El açması yufka ile hazırlanan baklava. Fıstık ve şerbetle lezzetlendirilmiş.",
                price: "₺40",
                category: "tatli",
                tags: ["Geleneksel", "El Yapımı"],
                icon: "🥮"
            }
        ]
    },
    // Pazar
    "sunday": {
        corba: [
            {
                id: 31,
                name: "Mercimek Çorbası",
                description: "Geleneksel Türk mutfağının vazgeçilmezi, ev yapımı mercimek çorbası. Bol malzemeli ve besleyici.",
                price: "₺25",
                category: "corba",
                tags: ["Vejetaryen", "Glutensiz"],
                icon: "🥣"
            }
        ],
        "ana-yemek": [
            {
                id: 32,
                name: "Tavuk Sote",
                description: "Taze sebzelerle sote edilmiş tavuk eti. Özel baharatlarla lezzetlendirilmiş.",
                price: "₺55",
                category: "ana-yemek",
                tags: ["Protein", "Sağlıklı"],
                icon: "🍗"
            }
        ],
        pilav: [
            {
                id: 33,
                name: "Bulgur Pilavı",
                description: "Domatesli ve sebzeli bulgur pilavı. Geleneksel Türk mutfağının vazgeçilmezi.",
                price: "₺25",
                category: "pilav",
                tags: ["Vejetaryen", "Geleneksel"],
                icon: "🍚"
            }
        ],
        tatli: [
            {
                id: 34,
                name: "Sütlaç",
                description: "Ev yapımı fırın sütlaç. Kremalı ve lezzetli geleneksel tatlı.",
                price: "₺25",
                category: "tatli",
                tags: ["Sütlü", "Geleneksel"],
                icon: "🍮"
            }
        ]
    }
};


// Günlük menü fonksiyonları
function getCurrentDay() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days[new Date().getDay()];
}

function getDailyMenu() {
    const currentDay = getCurrentDay();
    const todayMenu = dailyMenuData[currentDay];

    if (!todayMenu) {
        return [];
    }

    // Günlük menüyü düz array'e çevir
    const dailyItems = [];
    Object.keys(todayMenu).forEach(category => {
        dailyItems.push(...todayMenu[category]);
    });

    return dailyItems;
}

function getAllMenu() {
    // Sabit menü + günlük menü
    return [...fixedMenuData, ...getDailyMenu()];
}

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const navButtons = document.querySelectorAll('.nav-btn');

// Current filter
let currentFilter = 'all';

// Initialize the menu
function initMenu() {
    renderMenu(getAllMenu());
    setupEventListeners();
    updateDayIndicator();
}

// Render menu items
function renderMenu(items) {
    menuGrid.innerHTML = '';

    if (items.length === 0) {
        menuGrid.innerHTML = `
            <div class="loading">
                Bu kategoride henüz yemek bulunmamaktadır.
            </div>
        `;
        return;
    }

    items.forEach((item, index) => {
        const menuItem = createMenuItem(item, index);
        menuGrid.appendChild(menuItem);
    });
}

// Create menu item element
function createMenuItem(item, index) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item fade-in';
    menuItem.setAttribute('data-category', item.category);
    menuItem.style.animationDelay = `${index * 0.1}s`;

    menuItem.innerHTML = `
        <div class="menu-item-image">
            <span>${item.icon}</span>
        </div>
        <div class="menu-item-content">
            <div class="menu-item-header">
                <div>
                    <h3 class="menu-item-title">${item.name}</h3>
                </div>
                <span class="menu-item-price">${item.price}</span>
            </div>
            <p class="menu-item-description">${item.description}</p>
            <div class="menu-item-tags">
                ${item.tags.map(tag => `<span class="menu-item-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    return menuItem;
}

// Filter menu items
function filterMenu(category) {
    currentFilter = category;

    // Update active button
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });

    // Filter items
    const allMenu = getAllMenu();
    const filteredItems = category === 'all'
        ? allMenu
        : allMenu.filter(item => item.category === category);

    // Render filtered items
    renderMenu(filteredItems);
}

// Setup event listeners
function setupEventListeners() {
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');
            filterMenu(category);
        });
    });

    // Add scroll animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}

// Add smooth scrolling for navigation
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Add loading animation
function showLoading() {
    menuGrid.innerHTML = `
        <div class="loading">
            Menü yükleniyor...
        </div>
    `;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    showLoading();

    // Simulate loading time for better UX
    setTimeout(() => {
        initMenu();
    }, 500);
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Reset to all categories
        filterMenu('all');
    }
});

// Add touch gestures for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - could be used for next category
            console.log('Swiped left');
        } else {
            // Swipe right - could be used for previous category
            console.log('Swiped right');
        }
    }
}

// Add search functionality (for future enhancement)
function searchMenu(query) {
    const allMenu = getAllMenu();
    const searchResults = allMenu.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );

    renderMenu(searchResults);
}

// Update day indicator
function updateDayIndicator() {
    const currentDay = getCurrentDay();
    const dayNames = {
        'monday': 'Pazartesi',
        'tuesday': 'Salı',
        'wednesday': 'Çarşamba',
        'thursday': 'Perşembe',
        'friday': 'Cuma',
        'saturday': 'Cumartesi',
        'sunday': 'Pazar'
    };

    // Header'a gün bilgisi ekle
    const header = document.querySelector('.header-content');
    const existingDayIndicator = document.querySelector('.day-indicator');

    if (existingDayIndicator) {
        existingDayIndicator.remove();
    }

    const dayIndicator = document.createElement('div');
    dayIndicator.className = 'day-indicator';
    dayIndicator.innerHTML = `
        <span class="day-text">${dayNames[currentDay]} Menüsü</span>
        <span class="daily-note">Günlük Özel Yemekler</span>
    `;

    header.appendChild(dayIndicator);
}

// Export functions for potential future use
window.MenuApp = {
    filterMenu,
    searchMenu,
    getAllMenu,
    getDailyMenu,
    getCurrentDay
}; 