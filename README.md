# ClayStation - Pottery Studio Website

A beautiful, fully responsive website for ClayStation pottery studio with modular component-based architecture.

## 📁 Project Structure

```
claystation-website/
│
├── index.html                 # Main HTML file
│
├── css/                       # Stylesheets
│   ├── variables.css         # CSS variables & design system
│   ├── base.css              # Base styles & resets
│   ├── navbar.css            # Navigation styles
│   ├── hero.css              # Hero section styles
│   ├── services.css          # Services section styles
│   ├── featured.css          # Featured courses styles
│   ├── about.css             # About section styles
│   ├── cta.css               # CTA section styles
│   ├── subscribe.css         # Subscribe section styles
│   ├── footer.css            # Footer styles
│   ├── animations.css        # Animation keyframes
│   └── responsive.css        # Responsive design
│
├── js/                        # JavaScript files
│   ├── components.js         # HTML components
│   ├── navbar.js             # Navbar functionality
│   ├── smooth-scroll.js      # Smooth scrolling
│   ├── animations.js         # Scroll animations
│   ├── product-controls.js   # Product quantity controls
│   ├── form-handler.js       # Form submissions
│   └── main.js               # Main initialization
│
├── images/                    # Image assets
│   ├── hero-pottery.jpg
│   ├── service-basic.jpg
│   ├── service-intermediate.jpg
│   ├── service-advanced.jpg
│   ├── course-wheel.jpg
│   ├── course-handbuilding.jpg
│   ├── course-glazing.jpg
│   ├── about-studio.jpg
│   ├── cta-pottery.jpg
│   └── subscribe-bowls.jpg
│
└── README.md                  # This file
```

## 🚀 Setup Instructions

### Step 1: Create Project Folder

```bash
mkdir claystation-website
cd claystation-website
```

### Step 2: Create Folder Structure

```bash
mkdir css js images
```

### Step 3: Create Files

Create each file as shown in the project structure above and copy the corresponding code from the artifacts.

### Step 4: Add Images

Place your pottery images in the `images/` folder with these names:
- `hero-pottery.jpg` - Main hero background
- `service-basic.jpg` - Basic training service
- `service-intermediate.jpg` - Intermediate workshop
- `service-advanced.jpg` - Advanced masterclass
- `course-wheel.jpg` - Wheel throwing course
- `course-handbuilding.jpg` - Hand building course
- `course-glazing.jpg` - Glazing techniques course
- `about-studio.jpg` - Studio photo
- `cta-pottery.jpg` - CTA section background
- `subscribe-bowls.jpg` - Subscribe section image

### Step 5: Run the Website

#### Option A: Using Live Server (VS Code)
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

#### Option B: Using Python
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

#### Option C: Direct Open
Simply double-click `index.html` to open in browser

## ✨ Features

### Design
- ✅ Elegant serif typography
- ✅ Soft beige/cream color palette
- ✅ Professional minimalist layout
- ✅ Fully responsive design

### Functionality
- ✅ Smooth scroll navigation
- ✅ Mobile hamburger menu
- ✅ Product quantity controls
- ✅ Add to cart functionality
- ✅ Subscribe form validation
- ✅ Scroll-triggered animations
- ✅ Parallax effects
- ✅ Hover animations
- ✅ Notification system

### Components
- ✅ Fixed navigation bar
- ✅ Hero section
- ✅ Services grid
- ✅ Featured courses
- ✅ About section
- ✅ CTA (Call-to-Action)
- ✅ Newsletter subscription
- ✅ Footer with contact info

## 🎨 Customization

### Colors
Edit `css/variables.css` to change colors:
```css
:root {
    --bg-cream: #E8E1D5;
    --text-dark: #3D3226;
    --button-dark: #3D3226;
    --button-light: #C4B5A0;
}
```

### Content
Edit component text in `js/components.js`

### Styling
Each section has its own CSS file for easy customization

## 📱 Responsive Breakpoints

- **Desktop**: 1400px and above
- **Tablet**: 768px - 968px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Future Enhancements

- [ ] Add actual image upload functionality
- [ ] Connect to backend API
- [ ] Add shopping cart page
- [ ] Implement user authentication
- [ ] Add booking system
- [ ] Add gallery lightbox
- [ ] Add testimonials slider
- [ ] Add blog section
- [ ] SEO optimization
- [ ] Analytics integration

## 📞 Contact

**ClayStation**
- Email: training@claystation.in
- Phone: +91 9108856707
- Address: 10 Temple Trees Row, Koramangala, Bengaluru

## 📄 License

This project is created for ClayStation pottery studio.

---

Made with ❤️ and clay