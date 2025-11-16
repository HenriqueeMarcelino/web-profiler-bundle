// ================================
// GSAP SETUP & SMOOTH SCROLL
// ================================

gsap.registerPlugin(ScrollTrigger);

// Configuração global do GSAP
gsap.config({
    nullTargetWarn: false,
});

// ================================
// PARALLAX REAL - MÚLTIPLAS CAMADAS
// ================================

function initParallaxLayers() {
    // Parallax nas camadas de background da seção About
    const parallaxBg = document.querySelector('.parallax-bg');
    const parallaxMid = document.querySelector('.parallax-mid');

    if (parallaxBg) {
        gsap.to(parallaxBg, {
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1, // Movimento suave e sincronizado com scroll
            },
            y: '30%', // Move mais devagar (velocidade 0.3x)
            ease: 'none'
        });
    }

    if (parallaxMid) {
        gsap.to(parallaxMid, {
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
            y: '50%', // Move mais rápido (velocidade 0.5x)
            ease: 'none'
        });
    }

    // Parallax nos cards de stats (movimento individual)
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        const speed = parseFloat(card.dataset.speed) || 0.3;

        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
            y: `${speed * 100}%`,
            ease: 'none'
        });
    });

    // Parallax no badge do Canadá
    const canadaBadge = document.querySelector('.canada-badge');
    if (canadaBadge) {
        gsap.to(canadaBadge, {
            scrollTrigger: {
                trigger: canadaBadge,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
            y: '60%',
            rotation: 2,
            ease: 'none'
        });
    }

    // Parallax no footer background
    const footerBg = document.querySelector('.footer-parallax-bg');
    if (footerBg) {
        gsap.to(footerBg, {
            scrollTrigger: {
                trigger: '.footer',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
            y: '-20%',
            ease: 'none'
        });
    }
}

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
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Animação IMPACTANTE de entrada
    tl.to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'back.out(1.4)'
    })
    .to('.hero-title-line', {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.4,
        stagger: 0.12,
        ease: 'power4.out'
    }, '-=0.8')
    .to('.hero-description', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out'
    }, '-=1')
    .to('.hero-cta', {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)'
    }, '-=0.8')
    .to('.scroll-indicator', {
        opacity: 1,
        duration: 1
    }, '-=0.5');

    // Efeito parallax FORTE no hero background durante scroll
    gsap.to('.hero-gradient', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        opacity: 0,
        scale: 1.5,
        y: '30%',
        filter: 'blur(20px)'
    });

    // Parallax nas partículas do hero
    gsap.to('.hero-particles', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5
        },
        y: '50%',
        opacity: 0,
        scale: 0.5
    });

    // Fade out e blur do conteúdo do hero ao scrollar
    gsap.to('.hero-content', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        opacity: 0,
        y: -100,
        filter: 'blur(10px)'
    });

    // Zoom out no hero inteiro
    gsap.to('.hero', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5
        },
        scale: 0.95
    });
}

// ================================
// CROSSFADE IMAGES (Calgary Holographic Effect)
// ================================

function initCrossfadeImages() {
    const images = document.querySelectorAll('.crossfade-image');
    if (images.length === 0) return;

    let currentIndex = 0;

    // Crossfade baseado no scroll
    ScrollTrigger.create({
        trigger: '.about-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
            const progress = self.progress;
            const totalImages = images.length;
            const newIndex = Math.floor(progress * (totalImages - 0.001));

            if (newIndex !== currentIndex && newIndex < totalImages) {
                // Remove active de todas
                images.forEach(img => img.classList.remove('active'));
                // Adiciona active na nova
                images[newIndex].classList.add('active');
                currentIndex = newIndex;
            }
        }
    });

    // Parallax nas imagens ao scrollar
    gsap.to('.parallax-image', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5
        },
        scale: 1.15,
        y: '10%',
        ease: 'none'
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
            trigger: '.about-text-column',
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

    // Animação dos stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
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
    });

    // Animação do badge do Canadá
    gsap.to('.canada-badge', {
        scrollTrigger: {
            trigger: '.canada-badge',
            start: 'top 85%',
            end: 'top 40%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'back.out(1.4)'
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

        // Parallax leve em cada card
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            y: -20
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
            scrub: 1.5
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

        // Parallax individual em cada card (efeito profundidade)
        gsap.to(card.querySelector('.project-image'), {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5
            },
            y: -30,
            scale: 1.05
        });

        // Parallax no conteúdo do card (velocidade diferente)
        gsap.to(card.querySelector('.project-content'), {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            y: -15
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
// FOOTER ANIMATIONS
// ================================

function initFooterAnimations() {
    const footerElements = gsap.utils.toArray('.footer-brand, .footer-column');

    footerElements.forEach((el, index) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: '.footer',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
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
    initCrossfadeImages(); // ← Efeito holográfico Calgary!
    initParallaxLayers(); // ← PARALLAX REAL!
    initAboutAnimations();
    initTechAnimations();
    initProjectsAnimations();
    initFooterAnimations();
    initSmoothScroll();
    initSectionReveals();

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
const criticalImages = document.querySelectorAll('.hero img, .parallax-image');
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

console.log('🎬 Portfolio Cinematográfico ATUALIZADO!');
console.log('📦 GSAP + ScrollTrigger ativos');
console.log('✨ PARALLAX REAL implementado');
console.log('🚀 Todas as animações inicializadas');
