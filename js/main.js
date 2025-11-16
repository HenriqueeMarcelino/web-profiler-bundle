// ================================
// GSAP SETUP & SMOOTH SCROLL
// ================================

gsap.registerPlugin(ScrollTrigger);

// Configuração global do GSAP
gsap.config({
    nullTargetWarn: false,
});

// ================================
// NAVIGATION SCROLL EFFECT
// ================================

const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.8)';
    }

    lastScroll = currentScroll;
});

// ================================
// HERO SECTION ANIMATIONS
// ================================

function initHeroAnimations() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animação sequencial de entrada
    tl.to('.hero-subtitle', {
        opacity: 1,
        duration: 1,
        delay: 0.3
    })
    .to('.hero-title-line', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15
    }, '-=0.5')
    .to('.hero-description', {
        opacity: 1,
        duration: 1
    }, '-=0.8')
    .to('.hero-cta', {
        opacity: 1,
        duration: 1
    }, '-=0.6')
    .to('.scroll-indicator', {
        opacity: 1,
        duration: 1
    }, '-=0.5');

    // Efeito parallax no hero background
    gsap.to('.hero-gradient', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        opacity: 0.3,
        scale: 1.2
    });
}

// ================================
// ABOUT SECTION (CANADÁ) ANIMATIONS
// ================================

function initAboutAnimations() {
    // Animação do título da seção
    gsap.from('.about-intro', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    // Animação dos blocos de texto
    gsap.to('.about-block', {
        scrollTrigger: {
            trigger: '.about-text',
            start: 'top 70%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Animação da bandeira do Canadá
    gsap.to('.flag-element', {
        scrollTrigger: {
            trigger: '.about-visual',
            start: 'top 70%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'elastic.out(1, 0.8)'
    });

    // Animação da folha de maple
    gsap.to('.maple-element', {
        scrollTrigger: {
            trigger: '.about-visual',
            start: 'top 70%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        rotation: 360,
        duration: 2,
        ease: 'power2.out',
        delay: 0.3
    });

    // Rotação contínua suave da folha de maple
    gsap.to('.maple-leaf', {
        scrollTrigger: {
            trigger: '.about-visual',
            start: 'top 70%',
            end: 'bottom top',
            scrub: 1
        },
        rotation: 720,
        ease: 'none'
    });

    // Animação das estatísticas
    gsap.to('.canada-stats', {
        scrollTrigger: {
            trigger: '.about-visual',
            start: 'top 70%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
    });

    // Parallax dos elementos visuais
    gsap.to('.flag-element', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        y: -50
    });

    gsap.to('.maple-element', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        y: -80
    });
}

// ================================
// TECH SECTION ANIMATIONS
// ================================

function initTechAnimations() {
    // Animação do cabeçalho
    gsap.from('.tech-intro', {
        scrollTrigger: {
            trigger: '.tech-section',
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    // Animação dos cards de tecnologia
    const techCards = gsap.utils.toArray('.tech-card');

    techCards.forEach((card, index) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 40%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });

        // Efeito de hover com GSAP para suavidade extra
        card.addEventListener('mouseenter', () => {
            gsap.to(card.querySelector('.tech-icon'), {
                scale: 1.1,
                rotation: 5,
                duration: 0.4,
                ease: 'back.out(1.7)'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card.querySelector('.tech-icon'), {
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
    });

    // Parallax do grid de tecnologias
    gsap.to('.tech-grid', {
        scrollTrigger: {
            trigger: '.tech-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        y: -30
    });
}

// ================================
// PROJECTS SECTION ANIMATIONS
// ================================

function initProjectsAnimations() {
    // Animação do cabeçalho
    gsap.from('.projects-intro', {
        scrollTrigger: {
            trigger: '.projects-section',
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    // Animação dos cards de projetos
    const projectCards = gsap.utils.toArray('.project-card');

    projectCards.forEach((card, index) => {
        // Animação de entrada
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 40%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.15,
            ease: 'power3.out'
        });

        // Parallax individual em cada card
        gsap.to(card.querySelector('.project-image'), {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            y: -20
        });
    });
}

// ================================
// SMOOTH SCROLL PARA LINKS
// ================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');

            if (targetId === '#') return;

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: targetSection,
                        offsetY: 80
                    },
                    ease: 'power3.inOut'
                });
            }
        });
    });
}

// ================================
// PARTICLES EFFECT (HERO)
// ================================

function initParticles() {
    const particlesContainer = document.querySelector('.hero-particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'rgba(0, 102, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        particlesContainer.appendChild(particle);

        // Animação flutuante individual
        gsap.to(particle, {
            x: `+=${Math.random() * 100 - 50}`,
            y: `+=${Math.random() * 100 - 50}`,
            opacity: Math.random() * 0.5 + 0.3,
            duration: Math.random() * 3 + 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
}

// ================================
// CURSOR CUSTOMIZADO (OPCIONAL)
// ================================

function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Animação suave do cursor
    gsap.ticker.add(() => {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;

        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    });

    // Efeito em elementos interativos
    const interactiveElements = document.querySelectorAll('a, button, .tech-card, .project-card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform += ' scale(2)';
        });

        el.addEventListener('mouseleave', () => {
            cursor.style.transform = cursor.style.transform.replace('scale(2)', '');
        });
    });
}

// ================================
// LOADING ANIMATION
// ================================

function initLoadingAnimation() {
    const body = document.body;
    body.style.overflow = 'hidden';

    gsap.to(body, {
        opacity: 1,
        duration: 0.5,
        onComplete: () => {
            body.style.overflow = 'auto';
        }
    });
}

// ================================
// SECTION REVEAL ANIMATION
// ================================

function initSectionReveals() {
    const sections = gsap.utils.toArray('section');

    sections.forEach((section) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 90%',
                end: 'top 60%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0.8,
            duration: 1,
            ease: 'power2.out'
        });
    });
}

// ================================
// INICIALIZAÇÃO
// ================================

function init() {
    // Inicializar todas as animações
    initLoadingAnimation();
    initParticles();
    initHeroAnimations();
    initAboutAnimations();
    initTechAnimations();
    initProjectsAnimations();
    initSmoothScroll();
    initSectionReveals();

    // Cursor customizado (opcional - pode comentar se não quiser)
    // initCustomCursor();

    // ScrollTrigger refresh após todas as animações
    ScrollTrigger.refresh();
}

// Executar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Refresh no resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// ================================
// PERFORMANCE OPTIMIZATION
// ================================

// Preload de imagens críticas
const criticalImages = document.querySelectorAll('.hero img, .about-visual img');
criticalImages.forEach(img => {
    const src = img.getAttribute('src');
    if (src) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.as = 'image';
        preloadLink.href = src;
        document.head.appendChild(preloadLink);
    }
});

// Lazy loading para imagens de projetos
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('.project-image img');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ================================
// DEBUG MODE (Desenvolvimento)
// ================================

// Descomentar para ver os triggers do ScrollTrigger
// ScrollTrigger.create({
//     trigger: 'body',
//     start: 'top top',
//     end: 'bottom bottom',
//     markers: true
// });

console.log('🎬 Portfolio Cinematográfico carregado com sucesso!');
console.log('📦 GSAP + ScrollTrigger ativos');
console.log('✨ Todas as animações inicializadas');
