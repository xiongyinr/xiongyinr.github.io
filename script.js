// ==================== INTERNATIONALIZATION ====================
const translations = {
    zh: {
        // Hero
        heroTitle: 'Designing <em>selfhood</em> with AI, <em>taste</em>, and <em>code</em>.',
        heroIntro: 'Doula 是一名 2026 届毕业生，关注 AI 产品、用户研究、数据分析与技术创造，希望在技术与人文之间寻找新的表达方式。',
        terminalMini: 'whoami → Doula · AI Product · User Research · Data',

        // About
        aboutTitle: '把 AI 当作<em>创造伙伴</em>，而不是黑箱工具。',
        aboutQ1: 'Q: 你好！能介绍一下自己吗？',
        aboutA1: 'A: 你好！我是一名26年应届毕业生，希望用AI探索更多可能,渴望成为一名学者，最近开始接触牢A和Web3',
        aboutQ2: 'Q: 听起来你很喜欢使用AI解决问题,可以说说为什么吗？',
        aboutA2: 'A: AI的发展以及基本能够替代大多数行业的内容,并且完成的工作基本可以达到80分,所以让AI作为员工,帮我们创造产品,实现idea是非常好的选择,所以要全面拥抱AI.',
        aboutQ3: 'Q: 你的核心能力是什么？',
        aboutA3: 'A: 从大语言模型到计算机视觉，从用户研究到数据分析，我在技术与人文的交叉点上寻找创新的可能性',

        // Journey
        journeyTitle: '从<em>地球信息</em>到<em>智能创造</em>。',
        journeySubtitle: '一段从地理空间到人工智能的探索之旅，从理解地球到理解人类，从数据分析到产品创造。',
        milestone1Title: '开启地球信息之旅',
        milestone1Desc: '进入中国海洋大学，开始系统学习地球信息科学与技术，接触 GIS、遥感、GPS 等 3S 技术。',
        milestone2Title: '探索数据与算法',
        milestone2Desc: '深入学习数据处理、空间分析与可视化，开始接触机器学习和深度学习技术。',
        milestone3Title: '拥抱 AI 时代',
        milestone3Desc: '全面转向 AI 产品方向，学习大语言模型、计算机视觉，开始构建智能应用。',
        milestone4Title: '产品与创造',
        milestone4Desc: '专注于 AI 产品设计、用户研究与数据分析，探索技术与人文的交叉点。',
        milestone5Title: '毕业与新起点',
        milestone5Desc: '即将毕业，准备开启职业生涯，继续在 AI 领域探索创新与可能性。',

        // Opinion
        opinionText: '最好的产品<br>是技术与<em>人性</em>的<br>完美结合',
        opinionCredit: '— WHAT I BELIEVE',
        opinionExplanation: '技术是工具，人性是目的。只有当技术真正服务于人的需求、情感和价值时，产品才能超越功能本身，成为连接人与世界的桥梁。',

        // Projects
        projectsTitle: '精选项目',
        project1Title: '智能量化交易系统',
        project1Desc: '基于深度学习的决策交易系统, 实现选股,择时,策略优化功能。',
        project2Title: 'SmartTrip',
        project2Desc: '一款智能旅游规划助手APP,你只需要思考-去那,几人,时间, 就可以开始一场说走就走的旅行了。',

        // Skills
        skillsTitle: '核心技能矩阵',
        skill1Title: 'AI产品设计',
        skill1Desc: '深度理解大语言模型（GPT-4、Claude）、计算机视觉、自然语言处理等前沿技术，将AI能力转化为用户价值',
        skill2Title: '数据驱动决策',
        skill2Desc: '精通SQL、Python数据分析，擅长A/B测试、用户行为分析，用数据指导产品优化',
        skill3Title: '用户体验设计',
        skill3Desc: '以用户为中心，熟练使用Figma进行原型设计，深入用户研究，打造直观优雅的产品体验',
        skill4Title: '敏捷项目管理',
        skill4Desc: '熟练运用Scrum、看板等敏捷方法论，使用Jira管理项目，通过OKR推动目标达成',
        skill5Title: '跨团队协作',
        skill5Desc: '连接技术、设计、运营等多个团队，推动高效协同，确保产品顺利落地',
        skill6Title: '创新与战略',
        skill6Desc: '持续关注AI前沿动态，探索产品创新机会，平衡用户价值与商业目标',

        // Contact
        contactTitle: 'Say Hi',
        contactSubtitle: '期待与你一起探索 AI 的无限可能',
        contactQuote: '"Stay hungry, stay foolish."',

        // Modal
        wechatModalTitle: '关注我的公众号',
        wechatHint: '扫码关注我的公众号',

        // Footer
        footer: '© 2026 Doula · Built with taste, code & AI'
    },
    en: {
        // Hero
        heroTitle: 'Designing <em>selfhood</em> with AI, <em>taste</em>, and <em>code</em>.',
        heroIntro: 'Doula is a 2026 graduate focusing on AI products, user research, data analysis, and technical creation, seeking new expressions between technology and humanities.',
        terminalMini: 'whoami → Doula · AI Product · User Research · Data',

        // About
        aboutTitle: 'We treat AI as a <em>creative collaborator</em>, not a black box.',
        aboutQ1: 'Q: Hi! Could you introduce yourself?',
        aboutA1: 'A: Hello! I\'m a 2026 graduate who hopes to explore more possibilities with AI, aspiring to become a scholar, recently started exploring AI and Web3',
        aboutQ2: 'Q: It sounds like you enjoy using AI to solve problems. Can you tell me why?',
        aboutA2: 'A: AI development has basically been able to replace content in most industries, and the work completed can basically reach 80 points, so letting AI work as an employee to help us create products and realize ideas is a very good choice, so we must fully embrace AI.',
        aboutQ3: 'Q: What are your core competencies?',
        aboutA3: 'A: From LLMs to computer vision, from user research to data analysis, I explore innovation at the intersection of technology and humanity',

        // Journey
        journeyTitle: 'From <em>geoinformation</em> to <em>creative intelligence</em>.',
        journeySubtitle: 'A journey from geographic space to artificial intelligence, from understanding the Earth to understanding humanity, from data analysis to product creation.',
        milestone1Title: 'Beginning the Geoinformation Journey',
        milestone1Desc: 'Entered Ocean University of China, began systematic study of geoinformation science and technology, learning GIS, remote sensing, GPS and other 3S technologies.',
        milestone2Title: 'Exploring Data & Algorithms',
        milestone2Desc: 'Deep dive into data processing, spatial analysis and visualization, started learning machine learning and deep learning technologies.',
        milestone3Title: 'Embracing the AI Era',
        milestone3Desc: 'Fully pivoted to AI product direction, learning large language models, computer vision, and building intelligent applications.',
        milestone4Title: 'Product & Creation',
        milestone4Desc: 'Focused on AI product design, user research and data analysis, exploring the intersection of technology and humanities.',
        milestone5Title: 'Graduation & New Beginning',
        milestone5Desc: 'About to graduate, preparing to start professional career, continuing to explore innovation and possibilities in the AI field.',

        // Opinion
        opinionText: 'The Best Products<br>Are Perfect Harmony<br>of Tech & <em>Humanity</em>',
        opinionCredit: '— WHAT I BELIEVE',
        opinionExplanation: 'Technology is the tool, humanity is the purpose. Only when technology truly serves human needs, emotions and values can products transcend functionality and become bridges connecting people with the world.',

        // Projects
        projectsTitle: 'Featured Projects',
        project1Title: 'Intelligent Quantitative Trading System',
        project1Desc: 'A deep learning-based decision trading system that implements stock selection, timing, and strategy optimization functions.',
        project2Title: 'SmartTrip',
        project2Desc: 'An intelligent travel planning assistant APP. You only need to think about where to go, how many people, and when - and you can start a spontaneous trip.',

        // Skills
        skillsTitle: 'Core Competencies Matrix',
        skill1Title: 'AI Product Design',
        skill1Desc: 'Deep understanding of LLMs (GPT-4, Claude), computer vision, NLP and other cutting-edge technologies, transforming AI capabilities into user value',
        skill2Title: 'Data-Driven Decision',
        skill2Desc: 'Proficient in SQL and Python data analysis, skilled in A/B testing and user behavior analysis, guiding product optimization with data',
        skill3Title: 'User Experience Design',
        skill3Desc: 'User-centered approach, proficient in Figma for prototyping, deep user research, crafting intuitive and elegant product experiences',
        skill4Title: 'Agile Project Management',
        skill4Desc: 'Skilled in Scrum, Kanban and other agile methodologies, using Jira for project management, driving goal achievement through OKR',
        skill5Title: 'Cross-team Collaboration',
        skill5Desc: 'Connecting tech, design, operations and other teams, driving efficient collaboration, ensuring smooth product delivery',
        skill6Title: 'Innovation & Strategy',
        skill6Desc: 'Continuously following AI frontier trends, exploring product innovation opportunities, balancing user value and business goals',

        // Contact
        contactTitle: 'Say Hi',
        contactSubtitle: 'Looking forward to exploring the infinite possibilities of AI with you',
        contactQuote: '"Stay hungry, stay foolish."',

        // Modal
        wechatModalTitle: 'Follow My WeChat',
        wechatHint: 'Scan to follow my WeChat official account',

        // Footer
        footer: '© 2026 Doula · Built with taste, code & AI'
    }
};

let currentLang = 'zh';

// ==================== LANGUAGE SWITCHING ====================
function switchLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Save preference
    localStorage.setItem('preferredLang', lang);
}

// Language toggle button
document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'zh' ? 'en' : 'zh';
            switchLanguage(newLang);
        });
    }

    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLang') || 'zh';
    if (savedLang !== 'zh') {
        switchLanguage(savedLang);
    }
});

// ==================== WECHAT MODAL ====================
const wechatBtn = document.getElementById('wechatBtn');
const wechatModal = document.getElementById('wechatModal');
const wechatClose = document.querySelector('.wechat-modal-close');

if (wechatBtn) {
    wechatBtn.addEventListener('click', (e) => {
        e.preventDefault();
        wechatModal.classList.add('active');
    });
}

if (wechatClose) {
    wechatClose.addEventListener('click', () => {
        wechatModal.classList.remove('active');
    });
}

// Close modal when clicking outside
if (wechatModal) {
    wechatModal.addEventListener('click', (e) => {
        if (e.target === wechatModal) {
            wechatModal.classList.remove('active');
        }
    });
}

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && wechatModal && wechatModal.classList.contains('active')) {
        wechatModal.classList.remove('active');
    }
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 48;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
window.addEventListener('load', () => {
    const animatedElements = document.querySelectorAll('.section-header, .section-title, .hero-label, .hero-title, .hero-intro, .project-card, .skill-card, .gallery-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// ==================== PARALLAX EFFECT ====================
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;

    // Parallax for hero visual
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        const offset = scrolled * 0.3;
        heroVisual.style.transform = `translateY(${offset}px)`;
    }

    // Parallax for background images
    const bgImages = document.querySelectorAll('.journey-bg-image, .opinion-bg, .contact-bg');
    bgImages.forEach(img => {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const offset = (window.innerHeight - rect.top) * 0.1;
            img.style.transform = `translateY(${offset}px)`;
        }
    });

    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// ==================== IMAGE HOVER EFFECTS ====================
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    const img = card.querySelector('.archive-image');
    if (img) {
        card.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.6s ease';
        });
        card.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    }
});

const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    const img = item.querySelector('.archive-image');
    if (img) {
        item.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.5s ease';
        });
        item.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    }
});

// ==================== HEADER SCROLL BEHAVIOR ====================
let lastScroll = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    } else {
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ==================== PERFORMANCE: REDUCE MOTION ====================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

// ==================== CONSOLE MESSAGE ====================
console.log('%c👋 欢迎来到我的个人档案！', 'font-size: 20px; font-weight: bold; color: #E8664A;');
console.log('%c如果你对代码感兴趣，欢迎查看源码 😊', 'font-size: 14px; color: #6D665A;');
console.log('%cBuilt with taste, code & AI', 'font-size: 12px; color: #C99735; font-style: italic;');

// ==================== LAZY LOADING IMAGES ====================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== RESIZE HANDLER ====================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculate any position-dependent elements if needed
        updateParallax();
    }, 250);
});
