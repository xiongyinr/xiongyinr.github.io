// ==================== INTERNATIONALIZATION ====================
const translations = {
    zh: {
        // Terminal
        whoami: 'Doula',
        role: 'AI产品经理 | 技术爱好者 | 创新探索者',
        skills: '产品设计 · 用户研究 · 数据分析',
        skills2: 'AI技术应用 · 项目管理 · 跨团队协作',
        passion: '"用技术创造有温度的产品"',

        // About
        aboutLabel: 'About Me',
        aboutHeadline: '从小白到产品，一条<em>追寻热爱</em>的路',
        hrQ1: '你好！能介绍一下自己吗？',
        meA1: '你好！我是一名AI产品经理，热爱用技术创造美好体验 ✨',
        hrQ2: '听起来很酷！你是怎么进入这个领域的？',
        meA2: '在AI的浪潮中，我不仅是观察者，更是创造者。我相信每一个产品都应该有灵魂，每一次交互都值得被精心设计 💡',
        hrQ3: '你的核心能力是什么？',
        meA3: '从大语言模型到计算机视觉，从用户研究到数据分析，我在技术与人文的交叉点上寻找创新的可能性 🚀',

        // Timeline
        journeyLabel: 'My Journey',
        journeyHeadline: '成长<em>轨迹</em>',
        job1Year: '2021-2023',
        job1Title: 'AI产品经理',
        job1Desc: '负责智能客服、AIGC平台等多个AI产品的规划与落地，累计服务用户超过100万',
        job2Year: '2020-2021',
        job2Title: '产品经理',
        job2Desc: '从0到1打造推荐系统，通过数据驱动优化，GMV增长35%',
        job3Year: '2018-2020',
        job3Title: '产品实习生',
        job3Desc: '参与多个互联网产品的设计与优化，积累用户体验设计经验',
        job4Year: '2016-2020',
        job4Title: '计算机科学本科',
        job4Desc: '系统学习计算机科学基础，为产品思维打下技术基础',

        // Opinion
        opinionText: '最好的产品<br>是技术与人性的完美结合',
        opinionDeco: '— what I believe',

        // Projects
        projectsLabel: 'What I Do',
        projectsHeadline: '精选项目',
        project1Title: '智能客服系统',
        project1Desc: '基于大语言模型的新一代智能客服平台，实现自然语言理解、多轮对话、情感分析等功能。客户满意度提升40%，人工成本降低60%。',
        project1Tag: 'GPT-4 · NLP · 对话系统',
        project2Title: 'AI内容创作平台',
        project2Desc: '面向创作者的一站式AI辅助创作工具，支持文案生成、图像创作、视频剪辑等多场景。3个月内月活突破10万，用户留存率达65%。',
        project2Tag: 'Stable Diffusion · Prompt工程',

        // Skills
        skillsLabel: 'Core Skills',
        skillsHeadline: '核心技能矩阵',
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
        contactHeadline: 'Say Hi',
        contactSub: '期待与您一起探索AI的无限可能',
        contactEmail: '📮 邮箱',
        contactBlog: '📝 博客',
        contactWechat: '📱 公众号',
        contactGithub: '💻 GitHub',
        contactQuote: '"Stay hungry, stay foolish."<br>— Steve Jobs',

        // Modal
        wechatModalTitle: '关注我的公众号',
        wechatDesc: '扫码关注我的公众号',

        // Footer
        footer: '© 2026 Doula · Built with passion & AI'
    },
    en: {
        // Terminal
        whoami: 'Doula',
        role: 'AI Product Manager | Tech Enthusiast | Innovation Explorer',
        skills: 'Product Design · User Research · Data Analysis',
        skills2: 'AI Application · Project Management · Cross-team Collaboration',
        passion: '"Creating products with soul through technology"',

        // About
        aboutLabel: 'About Me',
        aboutHeadline: 'From Novice to PM, A Journey of <em>Pursuing Passion</em>',
        hrQ1: 'Hi! Could you introduce yourself?',
        meA1: 'Hello! I\'m an AI Product Manager who loves creating delightful experiences through technology ✨',
        hrQ2: 'Sounds cool! How did you get into this field?',
        meA2: 'In the wave of AI, I\'m not just an observer, but a creator. I believe every product should have a soul, and every interaction deserves thoughtful design 💡',
        hrQ3: 'What are your core competencies?',
        meA3: 'From LLMs to computer vision, from user research to data analysis, I explore innovation at the intersection of technology and humanity 🚀',

        // Timeline
        journeyLabel: 'My Journey',
        journeyHeadline: 'Growth <em>Timeline</em>',
        job1Year: '2021-2023',
        job1Title: 'AI Product Manager',
        job1Desc: 'Led planning and implementation of multiple AI products including intelligent customer service and AIGC platforms, serving over 1 million users',
        job2Year: '2020-2021',
        job2Title: 'Product Manager',
        job2Desc: 'Built recommendation system from scratch, achieved 35% GMV growth through data-driven optimization',
        job3Year: '2018-2020',
        job3Title: 'Product Intern',
        job3Desc: 'Participated in design and optimization of multiple internet products, accumulated UX design experience',
        job4Year: '2016-2020',
        job4Title: 'B.S. in Computer Science',
        job4Desc: 'Systematically studied computer science fundamentals, built technical foundation for product thinking',

        // Opinion
        opinionText: 'The Best Products<br>Are Perfect Harmony of Tech & Humanity',
        opinionDeco: '— what I believe',

        // Projects
        projectsLabel: 'What I Do',
        projectsHeadline: 'Featured Projects',
        project1Title: 'Intelligent Customer Service',
        project1Desc: 'Next-gen AI customer service platform powered by LLMs, featuring natural language understanding, multi-turn dialogue, and sentiment analysis. Improved customer satisfaction by 40%, reduced labor costs by 60%.',
        project1Tag: 'GPT-4 · NLP · Dialogue System',
        project2Title: 'AI Content Creation Platform',
        project2Desc: 'All-in-one AI-assisted creation tool for creators, supporting copywriting, image generation, video editing and more. Reached 100K MAU in 3 months with 65% retention rate.',
        project2Tag: 'Stable Diffusion · Prompt Engineering',

        // Skills
        skillsLabel: 'Core Skills',
        skillsHeadline: 'Core Competencies Matrix',
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
        contactHeadline: 'Say Hi',
        contactSub: 'Looking forward to exploring the infinite possibilities of AI with you',
        contactEmail: '📮 Email',
        contactBlog: '📝 Blog',
        contactWechat: '📱 WeChat',
        contactGithub: '💻 GitHub',
        contactQuote: '"Stay hungry, stay foolish."<br>— Steve Jobs',

        // Modal
        wechatModalTitle: 'Follow My WeChat',
        wechatDesc: 'Scan to follow my WeChat official account',

        // Footer
        footer: '© 2026 Doula · Built with passion & AI'
    }
};

let currentLang = 'zh';

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

    // Update terminal content
    updateTerminal(lang);

    // Save preference
    localStorage.setItem('preferredLang', lang);
}

function updateTerminal(lang) {
    const terminalBody = document.getElementById('terminalBody');
    terminalBody.innerHTML = '';

    const lines = lang === 'zh' ? [
        { type: 'command', text: 'whoami' },
        { type: 'output', text: '> Doula' },
        { type: 'output', text: '> AI产品经理 | 技术爱好者 | 创新探索者' },
        { type: 'command', text: 'cat skills.txt', delay: 800 },
        { type: 'output', text: '> 产品设计 · 用户研究 · 数据分析' },
        { type: 'output', text: '> AI技术应用 · 项目管理 · 跨团队协作' },
        { type: 'command', text: 'echo $PASSION', delay: 800 },
        { type: 'output', text: '> "用技术创造有温度的产品"' },
        { type: 'cursor', text: '', delay: 500 }
    ] : [
        { type: 'command', text: 'whoami' },
        { type: 'output', text: '> Doula' },
        { type: 'output', text: '> AI Product Manager | Tech Enthusiast | Innovation Explorer' },
        { type: 'command', text: 'cat skills.txt', delay: 800 },
        { type: 'output', text: '> Product Design · User Research · Data Analysis' },
        { type: 'output', text: '> AI Application · Project Management · Cross-team Collaboration' },
        { type: 'command', text: 'echo $PASSION', delay: 800 },
        { type: 'output', text: '> "Creating products with soul through technology"' },
        { type: 'cursor', text: '', delay: 500 }
    ];

    lines.forEach((line, index) => {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'terminal-line';

        if (line.type === 'command') {
            lineDiv.innerHTML = `<span class="terminal-prompt">$</span><span class="terminal-command">${line.text}</span>`;
        } else if (line.type === 'output') {
            lineDiv.innerHTML = `<span class="terminal-output">${line.text}</span>`;
        } else if (line.type === 'cursor') {
            lineDiv.innerHTML = `<span class="terminal-prompt">$</span><span class="terminal-cursor"></span>`;
        }

        terminalBody.appendChild(lineDiv);
    });
}

// Language toggle button
document.getElementById('langToggle').addEventListener('click', () => {
    const newLang = currentLang === 'zh' ? 'en' : 'zh';
    switchLanguage(newLang);
});

// Load saved language preference (but skip terminal on initial load)
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'zh';
    currentLang = savedLang;
    document.documentElement.setAttribute('data-lang', savedLang);
    document.documentElement.setAttribute('lang', savedLang === 'zh' ? 'zh-CN' : 'en');

    // Update all elements except terminal (terminal will be animated on load)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[savedLang][key]) {
            el.innerHTML = translations[savedLang][key];
        }
    });
});

// ==================== TERMINAL TYPEWRITER ====================
const terminalBody = document.querySelector('.terminal-body');

const terminalLines = [
    { type: 'command', text: 'whoami' },
    { type: 'output', text: '> Doula' },
    { type: 'output', text: '> AI产品经理 | 技术爱好者 | 创新探索者' },
    { type: 'command', text: 'cat skills.txt', delay: 800 },
    { type: 'output', text: '> 产品设计 · 用户研究 · 数据分析' },
    { type: 'output', text: '> AI技术应用 · 项目管理 · 跨团队协作' },
    { type: 'command', text: 'echo $PASSION', delay: 800 },
    { type: 'output', text: '> "用技术创造有温度的产品"' },
    { type: 'cursor', text: '', delay: 500 }
];

let lineIndex = 0;
let currentLineText = '';
let charIndex = 0;

function typeCharacter() {
    if (lineIndex >= terminalLines.length) return;

    const line = terminalLines[lineIndex];

    if (charIndex === 0) {
        // Create new line element
        const lineDiv = document.createElement('div');
        lineDiv.className = 'terminal-line';
        lineDiv.id = `line-${lineIndex}`;

        if (line.type === 'command') {
            lineDiv.innerHTML = `<span class="terminal-prompt">$</span><span class="terminal-command" id="cmd-${lineIndex}"></span>`;
        } else if (line.type === 'output') {
            lineDiv.innerHTML = `<span class="terminal-output" id="out-${lineIndex}"></span>`;
        } else if (line.type === 'cursor') {
            lineDiv.innerHTML = `<span class="terminal-prompt">$</span><span class="terminal-cursor"></span>`;
            terminalBody.appendChild(lineDiv);
            return;
        }

        terminalBody.appendChild(lineDiv);
    }

    // Type character by character
    if (charIndex < line.text.length) {
        const targetElement = line.type === 'command'
            ? document.getElementById(`cmd-${lineIndex}`)
            : document.getElementById(`out-${lineIndex}`);

        if (targetElement) {
            targetElement.textContent += line.text[charIndex];
        }

        charIndex++;
        setTimeout(typeCharacter, 50); // 50ms per character
    } else {
        // Move to next line
        charIndex = 0;
        lineIndex++;
        const delay = terminalLines[lineIndex - 1]?.delay || 400;
        setTimeout(typeCharacter, delay);
    }
}

// Start terminal animation after page load
window.addEventListener('load', () => {
    // Use the current language to determine which lines to show
    const lines = currentLang === 'zh' ? [
        { type: 'command', text: 'whoami' },
        { type: 'output', text: '> Doula' },
        { type: 'output', text: '> AI产品经理 | 技术爱好者 | 创新探索者' },
        { type: 'command', text: 'cat skills.txt', delay: 800 },
        { type: 'output', text: '> 产品设计 · 用户研究 · 数据分析' },
        { type: 'output', text: '> AI技术应用 · 项目管理 · 跨团队协作' },
        { type: 'command', text: 'echo $PASSION', delay: 800 },
        { type: 'output', text: '> "用技术创造有温度的产品"' },
        { type: 'cursor', text: '', delay: 500 }
    ] : [
        { type: 'command', text: 'whoami' },
        { type: 'output', text: '> Doula' },
        { type: 'output', text: '> AI Product Manager | Tech Enthusiast | Innovation Explorer' },
        { type: 'command', text: 'cat skills.txt', delay: 800 },
        { type: 'output', text: '> Product Design · User Research · Data Analysis' },
        { type: 'output', text: '> AI Application · Project Management · Cross-team Collaboration' },
        { type: 'command', text: 'echo $PASSION', delay: 800 },
        { type: 'output', text: '> "Creating products with soul through technology"' },
        { type: 'cursor', text: '', delay: 500 }
    ];

    // Update terminalLines with the correct language
    terminalLines.length = 0;
    terminalLines.push(...lines);

    setTimeout(typeCharacter, 500);
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
    if (e.key === 'Escape' && wechatModal.classList.contains('active')) {
        wechatModal.classList.remove('active');
    }
});

// ==================== CURSOR GLOW ====================
const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});


// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-up elements
document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
});

// ==================== 3D TILT EFFECT ====================
const tiltElements = document.querySelectorAll('[data-tilt]');

tiltElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// ==================== SMOOTH SCROLL ====================
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

// ==================== TIMELINE ANIMATION ====================
const timelineItems = document.querySelectorAll('.tl-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 150);
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    timelineObserver.observe(item);
});

// ==================== PROJECT CARDS STAGGER ====================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    card.style.transitionDelay = `${index * 0.1}s`;
});

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

projectCards.forEach(card => projectObserver.observe(card));

// ==================== HORIZONTAL SCROLL HINT ====================
const worksTrack = document.querySelector('.works-track');

if (worksTrack) {
    let isScrolling = false;

    worksTrack.addEventListener('scroll', () => {
        isScrolling = true;
    });

    // Auto-scroll hint on first view
    const worksObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isScrolling) {
                setTimeout(() => {
                    worksTrack.scrollBy({
                        left: 100,
                        behavior: 'smooth'
                    });
                    setTimeout(() => {
                        worksTrack.scrollBy({
                            left: -100,
                            behavior: 'smooth'
                        });
                    }, 800);
                }, 500);
            }
        });
    }, { threshold: 0.5 });

    worksObserver.observe(worksTrack);
}

// ==================== RESIZE HANDLER ====================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Re-calculate any position-dependent elements if needed
    }, 250);
});

// ==================== PERFORMANCE: REDUCE MOTION ====================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

// ==================== EASTER EGG: KONAMI CODE ====================
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s linear infinite';

    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
        document.body.style.animation = '';
        style.remove();
    }, 5000);

    console.log('🎉 彩蛋已激活！你发现了隐藏的惊喜！');
}

// ==================== OPINION SLIDES ANIMATION ====================
const opinionSlides = document.querySelectorAll('.opinion-slide');

const opinionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const opinionText = entry.target.querySelector('.opinion-text');
            if (opinionText) {
                opinionText.classList.add('is-visible');
            }
        }
    });
}, { threshold: 0.3 });

opinionSlides.forEach(slide => opinionObserver.observe(slide));

// ==================== AVATAR CLICK EFFECT ====================
const avatarWrapper = document.querySelector('.about-photo-wrapper');
const avatarImg = document.querySelector('.about-photo-img');

if (avatarWrapper && avatarImg) {
    avatarWrapper.addEventListener('click', (e) => {
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.className = 'avatar-ripple';

        const rect = avatarWrapper.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - size / 2 + 'px';

        avatarWrapper.appendChild(ripple);

        // Add bounce animation to avatar
        avatarImg.style.animation = 'avatarBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';

        setTimeout(() => {
            ripple.remove();
            avatarImg.style.animation = '';
        }, 600);
    });
}

// ==================== LOG WELCOME MESSAGE ====================
console.log('%c👋 欢迎来到我的个人主页！', 'font-size: 20px; font-weight: bold; color: #ff6b6b;');
console.log('%c如果你对代码感兴趣，欢迎查看源码 😊', 'font-size: 14px; color: #4ecdc4;');
console.log('%c提示：试试输入 Konami Code (↑↑↓↓←→←→BA) 看看会发生什么...', 'font-size: 12px; color: #ffd93d; font-style: italic;');
