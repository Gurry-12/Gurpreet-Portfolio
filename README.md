# 🚀 Gurpreet Singh - Developer Portfolio

A modern, minimal portfolio website built with **Angular 18** featuring a unique Gen Z aesthetic and terminal-inspired design.

## ✨ Features

- **Gen Z Aesthetic**: Dark-first design with neon green accents and monospace fonts
- **Live Clock**: Real-time IST clock display on homepage
- **Theme Toggle**: Dark/light mode with smooth transitions
- **Responsive Design**: Mobile-first approach optimized for all devices
- **PWA Ready**: Service worker and manifest for app-like experience
- **Performance Optimized**: Lazy loading and optimized bundle sizes

## 🛠️ Tech Stack

- **Framework**: Angular 18 (Standalone Components)
- **Language**: TypeScript
- **Styling**: SCSS with CSS custom properties
- **Fonts**: JetBrains Mono, Inter
- **Icons**: Bootstrap Icons
- **Deployment**: Netlify

## 🎨 Design System

### Color Palette
- **Background**: Deep black (#0a0a0a)
- **Accent**: Neon green (#00ff88)
- **Text**: Light gray (#e5e5e5)
- **Muted**: Dark gray (#666666)

### Typography
- **Monospace**: JetBrains Mono (code, headers)
- **Sans-serif**: Inter (body text)
- **Terminal aesthetic**: Consistent with developer tools

## 📱 Pages

### 🏠 Home
- Live IST clock
- Status indicators (open to work)
- Tech stack overview
- Experience timeline
- Social links with hover effects

### 👨‍💻 About
- Personal bio and background
- Education details
- Professional achievements
- Skills grid (no progress bars)
- Career timeline

### 🚀 Projects
- Featured project showcase
- GitHub and live demo links
- Tech stack tags
- Responsive project cards

### 📞 Contact
- Contact form with validation
- Multiple contact methods
- Professional email and social links
- Hiring-focused messaging

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone repository
git clone https://github.com/Gurry-12/Gurpreet-Portfolio.git
cd Gurpreet-Portfolio

# Install dependencies
npm install

# Start development server
npm start
```

Visit `http://localhost:4200`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/           # Homepage with live clock
│   │   ├── about/          # About page with achievements
│   │   ├── projects/       # Projects showcase
│   │   └── contact/        # Contact form
│   ├── header/             # Navigation with theme toggle
│   ├── footer/             # Footer with social links
│   ├── services/
│   │   └── theme.service.ts # Theme management
│   └── app.routes.ts       # Routing configuration
├── styles.scss             # Global styles and variables
└── index.html              # Main HTML with Bootstrap Icons
```

## 🎯 Key Features

### Live Clock
Real-time IST display with proper SSR handling:
```typescript
updateTime(): void {
  const now = new Date();
  this.currentTime = now.toLocaleTimeString('en-US', {
    hour12: false,
    timeZone: 'Asia/Kolkata'
  });
}
```

### Theme Service
SSR-safe theme management with localStorage persistence:
```typescript
@Injectable({ providedIn: 'root' })
export class ThemeService {
  // Platform-aware theme switching
}
```

### Responsive Design
Mobile-first CSS with consistent spacing:
```scss
// Breakpoints
$mobile: 768px;
$tablet: 1024px;
$desktop: 1200px;
```

## 🌟 Unique Elements

- **Terminal aesthetic**: Monospace fonts and dark theme
- **Minimal navigation**: Clean "gurpreet.dev" branding
- **Status indicators**: "Open to work" messaging
- **Hover animations**: Subtle interactions throughout
- **No progress bars**: Clean skills presentation
- **Bootstrap Icons**: Consistent iconography

## 📊 Performance

- **Bundle size**: Optimized with lazy loading
- **Lighthouse**: High performance scores
- **SSR disabled**: Static SPA for Netlify deployment
- **Service worker**: Offline capability

## � Deployment

Deployed on Netlify with automatic builds:

```toml
[build]
  publish = "dist/gurpreet-portfolio/browser"
  command = "npm install --legacy-peer-deps && npm run build"
```

## 📈 Future Enhancements

- [ ] Blog section
- [ ] Project filtering
- [ ] Animation improvements
- [ ] More interactive elements
- [ ] Analytics integration

## 🤝 Contributing

Feel free to submit issues and pull requests!

## 📞 Contact

- **Email**: work.gurpreetsw@gmail.com
- **LinkedIn**: [gurpreet-singh57](https://linkedin.com/in/gurpreet-singh57)
- **GitHub**: [Gurry-12](https://github.com/Gurry-12)

---

**Status**: Open to work | **Location**: Bhiwadi, Rajasthan

Built with ❤️ using Angular 18 and modern web technologies