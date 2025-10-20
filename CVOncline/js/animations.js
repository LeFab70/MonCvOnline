// Animation Controller
class AnimationController {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupTypingAnimation();
        this.setupSkillBars();
        this.setupTimelineAnimations();
        this.setupParallaxEffects();
    }

    // Setup scroll-triggered animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.section-enter, .card-enter, .timeline-item').forEach(el => {
            observer.observe(el);
        });
    }

    // Setup typing animation for hero text
    setupTypingAnimation() {
        const typingElement = document.querySelector('.typing-animation');
        if (typingElement) {
            const text = typingElement.textContent;
            typingElement.textContent = '';
            typingElement.style.borderRight = '2px solid #667eea';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    typingElement.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    // Blinking cursor effect
                    setInterval(() => {
                        typingElement.style.borderRight = 
                            typingElement.style.borderRight === 'none' ? '2px solid #667eea' : 'none';
                    }, 750);
                }
            };
            
            setTimeout(typeWriter, 1000);
        }
    }

    // Setup skill bar animations
    setupSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar');
        
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.getAttribute('data-width') || '80%';
                    bar.style.setProperty('--skill-width', width);
                    bar.classList.add('active');
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });
    }

    // Setup timeline animations
    setupTimelineAnimations() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, index * 200);
                }
            });
        }, { threshold: 0.3 });

        timelineItems.forEach(item => {
            timelineObserver.observe(item);
        });
    }

    // Setup parallax effects
    setupParallaxEffects() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax');
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // Animate counter numbers
    animateCounters() {
        const counters = document.querySelectorAll('.counter');
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    let current = 0;
                    
                    const updateCounter = () => {
                        if (current < target) {
                            current += increment;
                            counter.textContent = Math.floor(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    
                    updateCounter();
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    // Floating elements animation
    setupFloatingElements() {
        const floatingElements = document.querySelectorAll('.floating');
        
        floatingElements.forEach((element, index) => {
            const delay = index * 0.5;
            const duration = 3 + (index * 0.5);
            
            element.style.animationDelay = `${delay}s`;
            element.style.animationDuration = `${duration}s`;
        });
    }

    // Smooth scroll for navigation
    setupSmoothScroll() {
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
}

// Particle System for Background
class ParticleSystem {
    constructor(container) {
        this.container = container;
        this.particles = [];
        this.init();
    }

    init() {
        this.createParticles();
        this.animate();
    }

    createParticles() {
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 50%;
                pointer-events: none;
            `;
            
            this.resetParticle(particle);
            this.container.appendChild(particle);
            this.particles.push(particle);
        }
    }

    resetParticle(particle) {
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
    }

    animate() {
        this.particles.forEach(particle => {
            particle.style.animation = `floating ${particle.style.animationDuration} ease-in-out infinite`;
        });
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AnimationController();
    
    // Initialize particle system for hero section
    const heroSection = document.querySelector('#accueil');
    if (heroSection) {
        new ParticleSystem(heroSection);
    }
});

// Export for use in other scripts
window.AnimationController = AnimationController;
window.ParticleSystem = ParticleSystem;


