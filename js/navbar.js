// ========================================
// NAVBAR FUNCTIONALITY
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');

    // Check if elements exist before adding event listeners
    if (!hamburger || !navLinks || !header) {
        console.warn('Navbar elements not found. Make sure components.js loads before navbar.js');
        return;
    }

    // Hamburger menu click
    hamburger.addEventListener('click', () => {
        const isActive = hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = isActive ? 'hidden' : 'auto';
        
        // Update ARIA attributes for accessibility
        hamburger.setAttribute('aria-expanded', isActive);
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu when clicking outside (improved logic)
    document.addEventListener('click', (e) => {
        const isMenuOpen = navLinks.classList.contains('active');
        const clickedInsideNav = navLinks.contains(e.target);
        const clickedHamburger = hamburger.contains(e.target);
        
        if (isMenuOpen && !clickedInsideNav && !clickedHamburger) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add scrolled class for styling
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Active link highlighting based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    if (sections.length > 0) {
        // Throttle scroll event for performance
        let ticking = false;
        
        const updateActiveLink = () => {
            let current = '';
            const scrollPosition = window.pageYOffset + 200;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href && href.substring(1) === current) {
                    link.classList.add('active');
                    link.setAttribute('aria-current', 'page');
                } else {
                    link.removeAttribute('aria-current');
                }
            });
            
            ticking = false;
        };
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateActiveLink);
                ticking = true;
            }
        }, { passive: true });
    }
});