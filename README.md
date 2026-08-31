# Gurpreet Singh — Personal Portfolio

> Minimal, fast, engineering-focused portfolio built with Angular 18 and clean vanilla CSS.

---

## ⚡ Overview

A lightweight, high-density personal portfolio designed for a **Backend Software Engineer**.

- **Zero CSS Framework Overhead**: Pure CSS design tokens with custom properties (~12 kB uncompressed, 2.4 kB gzipped).
- **No Over-Engineering**: Static data modeling, minimal dependencies, no SSR or Service Worker bloat.
- **Deep Technical Case Studies**: Architectural layers, engineering tradeoffs, and failure retrospectives.

---

## 🛠️ Tech Stack

- **Framework**: Angular 18 (Standalone Components)
- **Styling**: Vanilla CSS (8-point grid, CSS Custom Properties)
- **Typography**: Inter & JetBrains Mono
- **Deployment**: Netlify

---

## 📂 Project Architecture

```
src/
├── index.html
├── main.ts
├── styles.css                 # Standalone design system (~500 lines)
├── app/
│   ├── app.component.ts       # Shell layout (Header + Outlet + Footer)
│   ├── app.config.ts          # Angular application configuration
│   ├── app.routes.ts          # Minimal route definition (/ and /projects/:id)
│   ├── data/
│   │   └── projects.ts        # Typed project case study data
│   ├── pages/
│   │   ├── home/              # Hero, Experience, Capabilities, Work, Contact
│   │   └── project-detail/    # Architecture & tradeoff deep-dives
│   └── directives/
│       └── scroll-reveal.directive.ts
└── assets/
    └── resume/
        └── Gurpreet_Singh_Resume.pdf
```

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Gurry-12/Gurpreet-Portfolio.git
cd Gurpreet-Portfolio

# Install dependencies
npm install

# Start development server
npm start
# -> http://localhost:4200

# Build production bundle
npm run build
```

---

## 📬 Contact

- **Email**: [work.gurpreetsw@gmail.com](mailto:work.gurpreetsw@gmail.com)
- **LinkedIn**: [linkedin.com/in/gurpreet-singh57](https://linkedin.com/in/gurpreet-singh57)
- **GitHub**: [github.com/Gurry-12](https://github.com/Gurry-12)
