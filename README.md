# Towhid Murad — Personal Portfolio

A modern, clean, and performant personal portfolio website built with React. Features a sophisticated design system, smooth animations, and thoughtful micro-interactions.

## Features

- **Modern Design System**: Deep navy/charcoal theme with electric blue and mint green accents
- **Responsive**: Mobile-first design that works beautifully on all devices
- **Accessible**: WCAG AA compliant with keyboard navigation support
- **Interactive**: Smooth animations and hover effects using Framer Motion
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Keyboard Shortcuts**: Navigate quickly with keyboard shortcuts (press `?` for help)
- **Project Case Studies**: Detailed writeups for VisionCheck, RouteSaver, and Pathfinder
- **Fast & Lightweight**: Optimized for performance with lazy loading and efficient rendering

## Tech Stack

- **Framework**: React 18 with Vite
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons)
- **Styling**: Custom CSS with CSS Variables
- **Typography**: Inter (sans-serif) & JetBrains Mono (monospace)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```


## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── data/            # Static data (projects)
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
└── assets/          # Static assets
```

## Customization

### Adding Projects

`src/data/projects.js` is what i need to edit to add or modify projects. Each project includes:
- Title, summary, and description
- Tech stack tags
- Links (code, demo, case study)
- Detailed case study content

### Updating Content

- **Bio**: Edit `src/components/About.jsx`
- **Experience**: Edit `src/components/Experience.jsx`
- **Skills**: Edit `src/components/Skills.jsx`
- **Contact**: Update email in `src/components/Contact.jsx` and `src/components/Header.jsx`

### Resume

Adding my resume PDF to the `public` folder. The download button will automatically link to it.

### Colors

Modify the color scheme in `src/index.css` by updating the CSS variables:
```css
:root {
  --bg-primary: #0B1220;
  --accent-blue: #60A5FA;
  --accent-mint: #34D399;
  /* ... more variables */
}
```

## Keyboard Shortcuts

- `g` + `p` — Go to Projects
- `g` + `a` — Go to About
- `g` + `e` — Go to Experience
- `g` + `w` — Go to Writing
- `g` + `c` — Go to Contact
- `?` — Show keyboard help
- Type `toggle` — Easter egg (swaps accent colors)

## Performance

- Lazy loading for images
- Code splitting with React Router
- Optimized animations (under 200ms)
- Minimal JavaScript bundle
- Smooth 60fps scrolling

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- WCAG AA color contrast
- Screen reader friendly

## Browser Support

Made sure it works well with
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

Towhid Murad — [tmfahim2123@gmail.com](mailto:tmfahim2123@gmail.com)

GitHub: [@bliss199](https://github.com/bliss199)

---

Built with care by Towhid Murad 
