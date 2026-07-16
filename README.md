# Portfolio Website Template

A professional, modern, and fully responsive portfolio website template with sections for personal info, education, hackathons, and startup/ONG details.

## 🎯 Features

- ✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- ✅ **Modern UI** - Clean, professional design with smooth animations
- ✅ **Easy to Customize** - Well-organized HTML structure with comments
- ✅ **Fast Performance** - Lightweight, no heavy dependencies
- ✅ **Mobile Menu** - Responsive hamburger menu for mobile devices
- ✅ **Smooth Scrolling** - Smooth navigation between sections
- ✅ **Contact Form** - Ready-to-use contact form section
- ✅ **SEO Friendly** - Properly structured semantic HTML

## 📁 Files Included

```
index.html       - Main HTML structure
style.css        - Styling and responsive design
script.js        - Interactive features and animations
README.md        - This file
```

## 🚀 Getting Started

### Option 1: Open Directly
1. Simply open `index.html` in your web browser
2. That's it! The website will load with all styling and functionality

### Option 2: Using a Local Server (Recommended)
For best experience with form handling:

**Using Python:**
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
npx http-server
```

Then open `http://localhost:8000` (or the port shown) in your browser.

## ✏️ Customization Guide

### 1. **Personal Information**
Edit `index.html` and replace the following:

**In the Hero Section (around line 37):**
```html
<h1 class="hero-title">Your Name</h1>
<p class="hero-subtitle">Web Developer | Designer | Innovator</p>
```

**In the About Section (around line 70):**
```html
<p><strong>Name:</strong> Your Full Name</p>
<p><strong>Age:</strong> 25</p>
<p><strong>Current Position:</strong> Full Stack Developer</p>
<p><strong>Location:</strong> Your City, Country</p>
```

### 2. **Add Education**
The template includes 3 education cards. To add more:

1. Copy this block in the `.education-grid`:
```html
<div class="education-card">
    <div class="education-header">
        <h3>Your Degree Name</h3>
        <p class="education-school">Your School/University</p>
    </div>
    <p class="education-period">YYYY - YYYY</p>
    <p class="education-description">
        Your description here
    </p>
</div>
```

2. To remove cards, simply delete the entire `<div class="education-card">` block

### 3. **Add Hackathons**
The template includes 4 hackathon examples. To customize:

1. Replace the hackathon details in the `.hackathons-grid`
2. Add/remove badges by changing:
```html
<div class="hackathon-badge">1st Place</div>
```

3. Modify the tech tags:
```html
<span class="tech-tag">React Native</span>
<span class="tech-tag">Python</span>
```

### 4. **Customize Startup/ONG Section**
Edit the startup card section:

```html
<h3>Your Startup/ONG Name</h3>
<p class="startup-role">Your Role</p>
<p class="startup-period">Start Year - Present</p>
```

Add or remove impact points in the list:
```html
<li>✓ Your achievement here</li>
```

### 5. **Contact Information**
Update contact details:

```html
<p><strong>Email:</strong> your.email@example.com</p>
<p><strong>Phone:</strong> +1 (555) 123-4567</p>
<p><strong>Location:</strong> Your City, Country</p>
```

### 6. **Social Links**
Update social media links:

```html
<a href="https://linkedin.com/in/yourprofile" class="social-icon">LinkedIn</a>
<a href="https://github.com/yourprofile" class="social-icon">GitHub</a>
<a href="https://twitter.com/yourprofile" class="social-icon">Twitter</a>
<a href="https://instagram.com/yourprofile" class="social-icon">Instagram</a>
```

### 7. **Change Colors (Optional)**
Edit `style.css` at the top - modify the `:root` variables:

```css
:root {
    --primary-color: #6366f1;        /* Main color - change this */
    --secondary-color: #8b5cf6;      /* Secondary color */
    --accent-color: #ec4899;         /* Accent color */
}
```

## 📱 Responsive Breakpoints

The template is optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🌐 Deployment Options

### Free Hosting:
1. **GitHub Pages** - Simple and free
2. **Netlify** - Drag & drop deployment
3. **Vercel** - Optimized for web
4. **Firebase Hosting** - Google's solution

## 📄 License

Feel free to use this template for your portfolio!

---

**Happy Portfolio Building! 🚀**

Built with ❤️ using HTML, CSS & JavaScript
