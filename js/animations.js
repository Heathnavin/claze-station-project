// ========================================
// SCROLL ANIMATIONS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optionally stop observing after reveal
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });

    // Stagger animation for grid items
    const serviceCards = document.querySelectorAll('.service-card');
    const productCards = document.querySelectorAll('.product-card');

    [...serviceCards, ...productCards].forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });

    // Image parallax effect - REMOVED for about-image to fix grid alignment
    // Only apply parallax to subscribe-image if it exists
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Parallax only for subscribe-image (not about-image to maintain grid alignment)
        document.querySelectorAll('.subscribe-image').forEach(img => {
            const speed = 0.3;
            const yPos = -(scrolled * speed);
            img.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Hover effect for service and product cards
    const allCards = document.querySelectorAll('.service-card, .product-card');
    
    allCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Counter animation for stats (if added later)
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 20);
    }

    // Loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});