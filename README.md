# Cling Info Tech — Website Redesign

A modern, responsive business website redesign for **Cling Info Tech**, built with React.js and Vite.

The project focuses on creating a professional digital presence with a modern dark interface, responsive layouts, interactive sections, smooth animations, and reusable React components.

🔗 **Live Website:** https://cling-info-tech-website.vercel.app/
🔗 **GitHub Repository:** https://github.com/naved2001/cling-info-tech-website

---

## ✨ Features

* Modern dark-themed UI
* Fully responsive design
* Component-based React architecture
* Responsive navigation menu
* Sticky glass-style navbar
* Active navigation section detection
* Animated hero section
* Animated statistics counters
* Scroll reveal animations
* Interactive technology showcase
* Services showcase
* Projects showcase
* Products showcase
* Why Choose Us section
* Process / workflow timeline
* Testimonials section
* Contact section with form validation
* Interactive cursor glow effect
* Scroll progress indicator
* Initial page loading animation
* Smooth scrolling navigation
* Responsive layouts for desktop, tablet, and mobile
* SEO-focused page metadata
* Custom favicon
* Open Graph metadata
* Vercel deployment configuration

---

## 🖥️ Website Sections

The homepage is organized into the following sections:

### 1. Navbar

Responsive navigation with:

* Home
* About
* Services
* Work
* Products
* Process
* Contact
* Let's Talk CTA

The navigation also highlights the currently visible section.

### 2. Hero

The hero section introduces the company with:

* Main headline
* Business-focused description
* Primary call-to-action
* Services CTA
* Key statistics
* Animated visual element
* Floating information cards
* Decorative background effects

### 3. Statistics

Highlights important business metrics such as:

* Happy Clients
* Projects Completed
* Office Locations

The statistics use animated counters when the section enters the viewport.

### 4. About

Introduces the company's approach through four capabilities:

* Strategy
* Design
* Development
* Growth

### 5. Services

The website showcases major digital services including:

* Web Design & Development
* Mobile Applications
* Digital Marketing
* Custom Portals
* ERP Solutions

Each service contains its own description, icon, and technology/service tags.

### 6. Technologies

An interactive technology section allows users to explore technologies by category.

The section is designed to present technology capabilities in a structured and visually engaging way.

### 7. Projects

The project showcase presents selected project concepts across areas such as:

* Project Management
* Mobile Applications
* AI / Machine Learning
* Business Platforms

The section also includes a link to the full portfolio.

### 8. Products

The products section presents Cling-related digital products, including:

* Task Flow
* Cling Sales
* Cling Invoice
* Cling Income
* Cling Emails

The section uses interactive product cards and dashboard-style visual elements.

### 9. Why Choose Us

Highlights the project's presentation of four business values:

* Business First
* Modern Technology
* Reliable Solutions
* Long-Term Partnership

### 10. Process

The development workflow is presented as a five-step process:

1. Discover
2. Plan
3. Design
4. Develop
5. Launch

### 11. Testimonials

A testimonial-style section is included to demonstrate how client feedback can be presented within the website.

> Note: The testimonial content in this redesign is placeholder/demo content and should be replaced with verified client testimonials before production use.

### 12. Contact

The contact section provides:

* Email contact
* Phone contact
* Office locations
* Head-office information
* Project inquiry form
* Project type selection
* Form validation
* Submission state feedback

The current form is **frontend-only** and does not send inquiries to a production backend.

### 13. Footer

The footer provides the final navigation and company information area.

---

## 🎨 Design

The visual design uses a modern dark interface with:

* Glassmorphism
* Neon cyan and purple gradients
* Soft background glows
* Grid-based backgrounds
* Rounded cards
* Subtle borders
* Animated hover states
* Floating elements
* Responsive typography
* Smooth transitions

The overall design direction is intended to feel modern, technical, professional, and suitable for a digital technology company.

---

## ⚙️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3

### Build Tool

* Vite

### Icons

* Lucide React
* Font Awesome
* Simple Icons

### Development Tools

* ESLint
* Vite React Plugin
* React Hooks

### Deployment

* Vercel

---

## 📁 Project Structure

```text
cling-info-tech-website/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Technologies.jsx
│   │   ├── Projects.jsx
│   │   ├── Products.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Process.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── CursorGlow.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── PageLoader.jsx
│   │   ├── Counter.jsx
│   │   └── Reveal.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vercel.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

You can verify your installations with:

```bash
node -v
npm -v
git --version
```

---

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/naved2001/cling-info-tech-website.git
```

Move into the project directory:

```bash
cd cling-info-tech-website
```

Install dependencies:

```bash
npm install
```

---

## 💻 Run Development Server

Start the Vite development server:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

Vite provides fast development feedback and hot module replacement during development.

---

## 🏗️ Production Build

Create an optimized production build:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

---

## 🔍 Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

---

## 🧹 Run ESLint

Run the project's linting configuration:

```bash
npm run lint
```

---

## ☁️ Deployment

The project is configured for deployment with Vercel.

The repository includes:

```text
vercel.json
```

with the production configuration:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

### Deploy with Vercel

1. Push the project to GitHub.
2. Open Vercel.
3. Import the GitHub repository.
4. Select the project.
5. Verify the Vite build configuration.
6. Deploy.

### Production URL

https://cling-info-tech-website.vercel.app/

---

## 📱 Responsive Design

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

Responsive layouts are implemented using CSS media queries and flexible grid/flexbox layouts.

---

## ♿ Accessibility Considerations

The project includes accessibility-focused improvements such as:

* Semantic HTML structure
* Accessible navigation controls
* ARIA labels where appropriate
* Keyboard-friendly form controls
* Visible focus states
* Reduced-motion support
* Descriptive form labels

---

## ⚡ Performance Considerations

The project is built with Vite and uses a component-based React structure.

Performance-focused practices include:

* Production builds through Vite
* Optimized static asset delivery
* Lazy loading for appropriate images
* Async image decoding
* CSS-based visual effects
* Responsive layouts
* Reduced-motion support
* Lightweight icon components

---

## 🔎 SEO

The project includes SEO-oriented metadata such as:

* Page title
* Meta description
* Keywords
* Author metadata
* Robots metadata
* Canonical URL
* Open Graph metadata
* Twitter metadata
* Custom favicon

The final production domain should be reflected in the canonical, Open Graph, Twitter, robots, and sitemap URLs.

---

## 🧩 React Architecture

The website is divided into reusable React components instead of keeping the entire homepage inside a single component.

For example:

```text
App
│
├── PageLoader
├── ScrollProgress
├── CursorGlow
├── Navbar
│
└── Main
    ├── Hero
    ├── Stats
    ├── About
    ├── Services
    ├── Technologies
    ├── Projects
    ├── Products
    ├── WhyChooseUs
    ├── Process
    ├── Testimonials
    └── Contact
│
└── Footer
```

This structure makes individual sections easier to maintain, update, and reuse.

---

## 📌 Project Purpose

This project was created as a **website redesign / internship project** to demonstrate practical frontend development skills using React.js.

The main goals were:

* Recreate a professional business website experience
* Practice React component architecture
* Build responsive layouts
* Improve UI/UX presentation
* Implement interactive frontend behavior
* Practice modern CSS
* Prepare a production-ready Vite project
* Deploy the application using Vercel

---

## ⚠️ Project Disclaimer

This project is a **redesign concept created for internship and educational purposes**.

Some visual content, UI representations, testimonials, project descriptions, and dashboard-style elements are presentation/demo content and should not be interpreted as verified production data.

The contact form is currently **frontend-only** and does not send project inquiries to a production backend.

---

## 👨‍💻 Author

**Naved**

GitHub:
https://github.com/naved2001

Repository:
https://github.com/naved2001/cling-info-tech-website

---

## 📄 License

No license file is currently included in this repository.

If this project is intended to be distributed publicly, add an appropriate `LICENSE` file and update this section accordingly.

---

## ⭐ Acknowledgements

This project was built using:

* React
* Vite
* Lucide React
* Font Awesome
* Simple Icons
* Modern CSS
* Vercel

---

## 📬 Feedback

If you find an issue or have a suggestion for improving the project, feel free to open an issue in the GitHub repository.

---

### Built with React + Vite

**Cling Info Tech Website Redesign**
