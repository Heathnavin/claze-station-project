// ========================================
// MAIN JAVASCRIPT - INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('ClayStation Website Loaded Successfully!');

    // Initialize lazy loading for images
    initLazyLoading();

    // Initialize tooltips if needed
    initTooltips();

    // Performance monitoring
    monitorPerformance();

    // Initialize "Learn More" expandable section
    initLearnMore();

    // Initialize booking modal
    initBookingModal();

    // Dark mode toggle (future enhancement)
    // initDarkMode();
});

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length === 0) return;
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const dataSrc = img.dataset.src;
                
                if (dataSrc) {
                    img.src = dataSrc;
                    img.classList.add('loaded');
                    
                    // Add error handling
                    img.addEventListener('error', function() {
                        this.style.display = 'none';
                        console.warn('Failed to load image:', dataSrc);
                    });
                    
                    observer.unobserve(img);
                }
            }
        });
    }, {
        rootMargin: '50px' // Start loading images 50px before they come into view
    });

    images.forEach(img => imageObserver.observe(img));
}

// Tooltips initialization
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    if (tooltipElements.length === 0) return;
    
    tooltipElements.forEach(el => {
        let tooltip = null;
        let timeoutId = null;
        
        const showTooltip = function() {
            // Clear any pending timeout
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
            
            // Remove existing tooltip if any
            if (tooltip) {
                tooltip.remove();
            }
            
            const tooltipText = this.dataset.tooltip;
            if (!tooltipText) return;
            
            tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tooltipText;
            tooltip.setAttribute('role', 'tooltip');
            tooltip.setAttribute('aria-hidden', 'true');
            tooltip.style.cssText = `
                position: absolute;
                background: var(--text-dark);
                color: var(--white);
                padding: 0.5rem 1rem;
                border-radius: 5px;
                font-size: 0.875rem;
                pointer-events: none;
                z-index: 1000;
                white-space: nowrap;
                opacity: 0;
                transition: opacity 0.2s ease;
            `;
            
            document.body.appendChild(tooltip);
            
            // Calculate position
            const rect = this.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            
            let top = rect.top + scrollTop - tooltipRect.height - 10;
            let left = rect.left + scrollLeft + (rect.width - tooltipRect.width) / 2;
            
            // Adjust if tooltip goes off screen
            if (left < 10) left = 10;
            if (left + tooltipRect.width > window.innerWidth - 10) {
                left = window.innerWidth - tooltipRect.width - 10;
            }
            
            tooltip.style.top = `${top}px`;
            tooltip.style.left = `${left}px`;
            
            // Fade in
            requestAnimationFrame(() => {
                tooltip.style.opacity = '1';
            });
        };
        
        const hideTooltip = function() {
            if (tooltip) {
                tooltip.style.opacity = '0';
                timeoutId = setTimeout(() => {
                    if (tooltip) {
                        tooltip.remove();
                        tooltip = null;
                    }
                    timeoutId = null;
                }, 200); // Wait for fade out
            }
        };
        
        el.addEventListener('mouseenter', showTooltip);
        el.addEventListener('mouseleave', hideTooltip);
        el.addEventListener('focus', showTooltip);
        el.addEventListener('blur', hideTooltip);
    });
}

// Booking Modal functionality
function initBookingModal() {
    const modal = document.getElementById('booking-modal');
    const form = document.getElementById('booking-form');
    const successMessage = document.getElementById('booking-success');
    const closeBtn = document.querySelector('.modal-close');
    const cancelBtn = document.querySelector('.btn-cancel');
    const closeSuccessBtn = document.querySelector('.btn-close-success');
    const courseDisplay = document.getElementById('course-display');
    const selectedCourseInput = document.getElementById('selected-course');
    const selectedPriceInput = document.getElementById('selected-price');
    const dateInput = document.getElementById('preferred-date');
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    if (dateInput) {
        dateInput.min = today;
    }
    
    // Open modal when Book Now buttons are clicked (removed .service-btn - service cards are informational only)
    document.querySelectorAll('.cta-btn, .book-now-btn').forEach(btn => {
        if (btn.tagName === 'BUTTON') {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const course = this.getAttribute('data-course') || 'General Inquiry';
                const price = this.getAttribute('data-price') || 'Contact Us';
                
                // Set course info in form
                if (courseDisplay) courseDisplay.value = course;
                if (selectedCourseInput) selectedCourseInput.value = course;
                if (selectedPriceInput) selectedPriceInput.value = price;
                
                // Show modal
                if (modal) {
                    modal.setAttribute('aria-hidden', 'false');
                    document.body.style.overflow = 'hidden';
                    
                    // Focus on first input
                    setTimeout(() => {
                        const firstInput = form.querySelector('input');
                        if (firstInput) firstInput.focus();
                    }, 100);
                }
            });
        }
    });
    
    // Close modal functions
    function closeModal() {
        if (modal) {
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
            form.reset();
            successMessage.style.display = 'none';
            form.style.display = 'block';
        }
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeModal);
    }
    
    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', closeModal);
    }
    
    // Close on overlay click
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeModal);
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.getAttribute('aria-hidden') === 'false') {
            closeModal();
        }
    });
    
    // Form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                course: selectedCourseInput.value,
                price: selectedPriceInput.value,
                preferredDate: document.getElementById('preferred-date').value,
                preferredTime: document.getElementById('preferred-time').value,
                message: document.getElementById('message').value
            };
            
            // Here you would normally send this to your backend/email service
            // For now, we'll just show success message
            console.log('Booking Request:', formData);
            
            // TODO: Send to your email/backend service
            // Example: sendBookingEmail(formData);
            
            // Show success message
            form.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Scroll to top of modal
            const modalContent = document.querySelector('.modal-content');
            if (modalContent) {
                modalContent.scrollTop = 0;
            }
        });
    }
}

// Learn More expandable section
function initLearnMore() {
    const learnMoreBtn = document.getElementById('learn-more-btn');
    const expandedContent = document.getElementById('about-expanded');
    
    if (learnMoreBtn && expandedContent) {
        learnMoreBtn.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                // Collapse
                this.setAttribute('aria-expanded', 'false');
                expandedContent.setAttribute('aria-hidden', 'true');
                this.textContent = 'Learn more';
                
                // Smooth scroll to button after collapse
                setTimeout(() => {
                    this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            } else {
                // Expand
                this.setAttribute('aria-expanded', 'true');
                expandedContent.setAttribute('aria-hidden', 'false');
                this.textContent = 'Show less';
                
                // Smooth scroll to expanded content
                setTimeout(() => {
                    expandedContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 300);
            }
        });
    }
}

// Performance monitoring
function monitorPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
        });
    }
}

// Utility functions
const utils = {
    // Debounce function
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function
    throttle: (func, limit) => {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Check if element is in viewport
    isInViewport: (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Smooth scroll to element
    scrollToElement: (element, offset = 80) => {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

// Export utils for use in other files
window.utils = utils;

// Console message (only in development)
const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
if (isDevelopment) {
    console.log('%c Welcome to ClayStation! ', 'background: #3D3226; color: #E8E1D5; font-size: 16px; padding: 10px;');
    console.log('%c Crafted with love and clay ❤️🏺', 'color: #3D3226; font-size: 12px;');
}