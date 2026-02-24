// ========================================
// HTML COMPONENTS - SHOPIFY VERSION
// ========================================

// ========================================
// SHOPIFY CONFIGURATION
// ========================================
// IMPORTANT: Replace these with your actual Shopify store URLs and product handles
// Example: If your store is 'claze.myshopify.com', set storeUrl to 'https://claze.myshopify.com'
// Product handles can be found in your Shopify admin under Products > [Product] > URL and handle
const SHOPIFY_CONFIG = {
    storeUrl: 'https://your-store.myshopify.com', // TODO: Replace with your actual Shopify store URL
    products: {
        basic: '/products/basic-pottery-training', // TODO: Update with your actual product handle
        intermediate: '/products/intermediate-pottery-workshop', // TODO: Update with your actual product handle
        advanced: '/products/advanced-pottery-masterclass', // TODO: Update with your actual product handle
        freeChat: '/pages/book-consultation' // TODO: Update with your booking page URL or use Calendly/booking app
    }
};

const components = {
    navbar: `
        <header role="banner">
            <nav role="navigation" aria-label="Main navigation">
                <a href="#" class="logo" aria-label="Claze - The Clay Station Home">Claze - The Clay Station</a>
                <button class="hamburger" aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="nav-links">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-links" id="nav-links" role="menubar">
                    <li role="none"><a href="#services" role="menuitem">Services</a></li>
                    <li role="none"><a href="#about" role="menuitem">About</a></li>
                    <li role="none"><a href="#contact" role="menuitem">Contact</a></li>
                    <li role="none"><a href="${SHOPIFY_CONFIG.storeUrl}/account/login" class="auth-link" role="menuitem">Account</a></li>
                    <li role="none"><button class="book-now-btn" data-course="General Inquiry" data-price="Contact Us" role="menuitem">Book now</button></li>
                </ul>
            </nav>
        </header>
    `,

    hero: `
        <section class="hero" id="home" aria-label="Hero section">
            <div class="hero-content">
                <h1 class="animate-fade-in">Explore the Joy of Crafting with Clay</h1>
            </div>
        </section>
    `,

    services: `
        <section class="services" id="services" aria-labelledby="services-heading">
            <h2 id="services-heading" class="scroll-reveal">Explore our services</h2>
            <div class="service-grid" role="list">
                <article class="service-card scroll-reveal stagger-1 hover-lift" role="listitem">
                    <div class="service-image" role="img" aria-label="Basic pottery training session"></div>
                    <div class="service-card-content">
                        <h3>Basic Training</h3>
                        <p class="service-price">₹1,200</p>
                        <p class="service-description">Perfect for beginners. Learn fundamental pottery techniques including hand-building, wheel throwing basics, and simple glazing. Includes all materials and tools for your creative journey.</p>
                    </div>
                </article>

                <article class="service-card scroll-reveal stagger-2 hover-lift" role="listitem">
                    <div class="service-image" role="img" aria-label="Intermediate pottery workshop"></div>
                    <div class="service-card-content">
                        <h3>Intermediate Workshop</h3>
                        <p class="service-price">₹1,200</p>
                        <p class="service-description">Advance your skills with complex forms, advanced wheel techniques, and decorative methods. Explore surface design, slip trailing, and intermediate glazing techniques.</p>
                    </div>
                </article>

                <article class="service-card scroll-reveal stagger-3 hover-lift" role="listitem">
                    <div class="service-image" role="img" aria-label="Advanced pottery masterclass"></div>
                    <div class="service-card-content">
                        <h3>Advanced Masterclass</h3>
                        <p class="service-price">₹1,200</p>
                        <p class="service-description">Master the art of ceramics with professional techniques, glaze chemistry, kiln firing, and portfolio development. Perfect for those pursuing pottery professionally.</p>
                    </div>
                </article>
            </div>
        </section>
    `,

    about: `
        <section class="about" id="about" aria-labelledby="about-heading">
            <div class="about-container">
                <div class="about-image scroll-reveal" role="img" aria-label="Claze pottery studio workspace"></div>
                <div class="about-content scroll-reveal">
                    <h2 id="about-heading">Get to know us</h2>
                    <p>Welcome to our whimsical world of ceramics and pottery, where every piece tells a unique story spun from imagination! Dive into our vibrant collection and discover items crafted with heart and soul, destined to bring a sprinkle of joy to your daily life.</p>
                    <p>Since 2009, Claze has been Bengaluru's premier pottery studio, introducing over 10,000 students to the art of ceramics and supporting 200+ studios across India.</p>
                    <button class="learn-more-btn" aria-label="Learn more about Claze" aria-expanded="false" id="learn-more-btn">Learn more</button>
                    
                    <!-- Expanded content (hidden by default) -->
                    <div class="about-expanded" id="about-expanded" aria-hidden="true">
                        <div class="expanded-content">
                            <h3>Our Story</h3>
                            <p>Founded in 2009, Claze began as a small studio with a big dream - to make pottery accessible to everyone. What started as a passion project has grown into Bengaluru's most trusted pottery education center.</p>
                            
                            <h3>What We Offer</h3>
                            <ul class="about-features">
                                <li><strong>Expert Instruction:</strong> Learn from experienced ceramic artists who are passionate about teaching</li>
                                <li><strong>All Materials Included:</strong> Everything you need is provided - just bring your creativity!</li>
                                <li><strong>Flexible Scheduling:</strong> Weekend classes that fit your busy lifestyle</li>
                                <li><strong>Community:</strong> Join a vibrant community of pottery enthusiasts</li>
                                <li><strong>Take Home:</strong> Keep all the beautiful pieces you create</li>
                            </ul>
                            
                            <h3>Our Impact</h3>
                            <p>Over the years, we've had the privilege of teaching over 10,000 students and supporting more than 200 pottery studios across India. Our mission is to spread the joy of ceramics and help people discover their creative potential.</p>
                            
                            <h3>Visit Us</h3>
                            <p>Located in the heart of HSR Layout, Bangalore, our studio is open every Saturday and Sunday from 10 AM to 6 PM. We'd love to welcome you to our creative space!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,

    cta: `
        <section class="cta" id="book" aria-labelledby="cta-heading">
            <h2 id="cta-heading">Grab a free chat session</h2>
            <p>Ready to unleash your inner artist? Book an appointment today and dive into a world where clay and imagination come alive, crafting memorable masterpieces one spin at a time!</p>
            <button class="cta-btn" data-course="Free Consultation" data-price="Free" aria-label="Book a free consultation chat session">Book now</button>
        </section>
    `,

    footer: `
        <footer id="contact" role="contentinfo">
            <div class="footer-container">
                <div class="footer-section">
                    <h3>Claze - The Creative Space</h3>
                    <p>Creating possibilities in ceramic art</p>
                </div>
                <div class="footer-section">
                    <h4>Location</h4>
                    <address>
                        HSR Layout<br>
                        Bangalore
                    </address>
                </div>
                <div class="footer-section">
                    <h4>Contact</h4>
                    <p><a href="mailto:claze.info@gmail.com" aria-label="Email Claze">claze.info@gmail.com</a><br>
                    <a href="tel:+919187152615" aria-label="Call Claze">+91 9187152615</a></p>
                    <p style="margin-top: 1rem;">Saturday - Sunday<br>10 AM - 6 PM</p>
                </div>
            </div>
        </footer>
    `,

    bookingModal: `
        <div class="booking-modal" id="booking-modal" role="dialog" aria-labelledby="booking-modal-title" aria-hidden="true">
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="modal-close" aria-label="Close booking form">&times;</button>
                <h2 id="booking-modal-title">Book Your Course</h2>
                <form id="booking-form" class="booking-form">
                    <input type="hidden" id="selected-course" name="course">
                    <input type="hidden" id="selected-price" name="price">
                    
                    <div class="form-group">
                        <label for="name">Full Name <span class="required">*</span></label>
                        <input type="text" id="name" name="name" required placeholder="Enter your full name">
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email Address <span class="required">*</span></label>
                        <input type="email" id="email" name="email" required placeholder="your.email@example.com">
                    </div>
                    
                    <div class="form-group">
                        <label for="phone">Phone Number <span class="required">*</span></label>
                        <input type="tel" id="phone" name="phone" required placeholder="+91 9876543210">
                    </div>
                    
                    <div class="form-group">
                        <label for="course-display">Selected Course</label>
                        <input type="text" id="course-display" readonly class="readonly-input">
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="preferred-date">Preferred Date <span class="required">*</span></label>
                            <input type="date" id="preferred-date" name="preferred-date" required min="">
                        </div>
                        
                        <div class="form-group">
                            <label for="preferred-time">Preferred Time <span class="required">*</span></label>
                            <select id="preferred-time" name="preferred-time" required>
                                <option value="">Select time</option>
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="1:00 PM">1:00 PM</option>
                                <option value="2:00 PM">2:00 PM</option>
                                <option value="3:00 PM">3:00 PM</option>
                                <option value="4:00 PM">4:00 PM</option>
                                <option value="5:00 PM">5:00 PM</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Additional Message (Optional)</label>
                        <textarea id="message" name="message" rows="4" placeholder="Tell us about your pottery experience or any special requests..."></textarea>
                    </div>
                    
                    <div class="form-actions">
                        <button type="button" class="btn-cancel">Cancel</button>
                        <button type="submit" class="btn-submit">Submit Booking Request</button>
                    </div>
                </form>
                
                <div class="booking-success" id="booking-success" style="display: none;">
                    <div class="success-icon">✓</div>
                    <h3>Booking Request Submitted!</h3>
                    <p>Thank you for your interest! We've received your booking request and will contact you shortly to confirm your session.</p>
                    <p class="success-note">We'll reach out to you via email or phone within 24 hours.</p>
                    <button type="button" class="btn-close-success">Close</button>
                </div>
            </div>
        </div>
    `
};

// Load all components
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('navbar-component').innerHTML = components.navbar;
    document.getElementById('hero-component').innerHTML = components.hero;
    document.getElementById('services-component').innerHTML = components.services;
    document.getElementById('about-component').innerHTML = components.about;
    document.getElementById('cta-component').innerHTML = components.cta;
    document.getElementById('footer-component').innerHTML = components.footer;
    
    // Add booking modal to body
    document.body.insertAdjacentHTML('beforeend', components.bookingModal);
});