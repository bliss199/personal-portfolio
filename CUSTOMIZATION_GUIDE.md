# Customization Guide

This guide will help you quickly update and personalize your portfolio website.

## Quick Updates

### 1. Update Email Address

Replace `towhid@example.com` with your actual email in these files:
- `src/components/Header.jsx` (line ~55 and ~60)
- `src/components/Contact.jsx` (multiple locations)
- `src/components/Footer.jsx` (line ~34)

### 2. Add Your Resume

Replace the placeholder file at `public/Towhid_Murad_Resume.pdf` with your actual resume PDF.

### 3. Update GitHub Link

Your GitHub username is already set to `bliss199`. If you want to change it, search and replace `https://github.com/bliss199` throughout the project.

### 4. Add Profile Photo

Replace the avatar placeholder in `src/components/About.jsx`:
1. Add your photo to `public/` folder (e.g., `avatar.jpg`)
2. In `About.jsx`, replace the `avatar-placeholder` div with:
```jsx
<img src="/avatar.jpg" alt="Towhid Murad" className="avatar-image" />
```
3. Add CSS for the image in `About.css`:
```css
.avatar-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid var(--border-color);
  object-fit: cover;
}
```

### 5. Update Personal Information

**Bio Text** — `src/components/About.jsx` (lines 50-65)
- Update the three paragraphs to match your story

**Facts Card** — `src/components/About.jsx` (lines 32-37)
- Update location, degree, graduation year, and interests

**Hero Text** — `src/components/Hero.jsx` (lines 48-57)
- Customize your intro and interests

### 6. Add Real Projects

Edit `src/data/projects.js` to update project details:

**For Each Project**:
- Update `summary` and `pitch` text
- Modify `stack` array with your actual tech
- Update `links.code` with real GitHub URLs
- Update `links.demo` with live demo URLs (or set to `null`)
- Rewrite the case study content:
  - `problem`
  - `approach`
  - `outcome`
  - `wins` array
  - `lessons` array
  - `improvements`

**Project Images**:
Add project screenshots to `public/projects/` folder and update the `image` and `gallery` paths.

### 7. Update Experience

Edit `src/components/Experience.jsx` (lines 6-30):
- Add/remove experience items
- Update titles, places, dates, descriptions, and impacts

### 8. Update Skills

Edit `src/components/Skills.jsx` (lines 6-20):
- Modify skill groups
- Update the skills arrays
- Rewrite descriptions to match your experience

### 9. Update Writing Section

When you publish blog posts, edit `src/components/Writing.jsx` (lines 7-15):
- Add post objects with title, description, readTime, date, and link
- Remove or modify the placeholder card

### 10. Customize Colors

To change the color scheme, edit `src/index.css`:

```css
:root {
  /* Background colors */
  --bg-primary: #0B1220;        /* Main background */
  --bg-secondary: #0F172A;      /* Sections background */
  
  /* Text colors */
  --text-primary: #E5E7EB;      /* Main text */
  --text-secondary: #9CA3AF;    /* Secondary text */
  
  /* Accent colors */
  --accent-blue: #60A5FA;       /* Primary accent */
  --accent-mint: #34D399;       /* Secondary accent */
}
```

## Adding New Projects

To add a new project to the portfolio:

1. Open `src/data/projects.js`
2. Copy an existing project object
3. Update all fields with your new project details
4. Add project images to `public/projects/`
5. The project will automatically appear on the homepage and have its own case study page

Example:
```javascript
{
  id: 'my-new-project',  // URL-friendly ID
  title: 'My Project',
  summary: 'One-line description',
  pitch: 'Two-line pitch for the card',
  stack: ['React', 'Node.js'],
  image: '/projects/my-project.png',
  links: {
    code: 'https://github.com/username/repo',
    demo: 'https://demo-url.com',
    caseStudy: '/projects/my-new-project'
  },
  color: '#60A5FA',
  // ... rest of case study content
}
```

## Deploying Your Site

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Netlify
1. Run `npm run build`
2. Drag the `dist` folder to [netlify.com/drop](https://netlify.com/drop)

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run `npm run deploy`

## Testing Checklist

Before deploying, test these features:

- [ ] All navigation links work
- [ ] Mobile menu opens and closes
- [ ] Theme toggle switches colors
- [ ] Project cards link to case studies
- [ ] Resume download works
- [ ] Email links open mail client
- [ ] Contact form shows success message
- [ ] Keyboard shortcuts work (press `?`)
- [ ] Site looks good on mobile
- [ ] All sections scroll smoothly
- [ ] Images load properly

## Need Help?

If you encounter issues:
1. Check browser console for errors (F12)
2. Make sure all imports are correct
3. Verify file paths match your folder structure
4. Ensure you're using Node 18+
5. Try deleting `node_modules` and running `npm install` again

## Performance Tips

- Compress images before adding them (use [TinyPNG](https://tinypng.com))
- Keep images under 500KB each
- Use WebP format for better compression
- Remove unused dependencies to keep bundle size small
- Test on slow 3G connection to ensure fast loading

---

**Remember**: This is your portfolio. Make it uniquely yours! Don't hesitate to modify colors, layouts, and content to match your style.

