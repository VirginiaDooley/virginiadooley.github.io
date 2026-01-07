# Portfolio - Tech for Public Interest

A clean, minimal freelance portfolio template emphasizing work in public interest technology, community engagement, small business support, and women-led initiatives.

## Features

- ✨ Clean, minimal design inspired by Notion, Apple, and Linear
- 📱 Fully responsive across all devices
- 🎨 Modern UI with Tailwind CSS and shadcn/ui components
- 🚀 Optimized for GitHub Pages deployment
- ♿ Accessible and semantic HTML
- 🔍 SEO-optimized with meta tags and Open Graph

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5000` to see your portfolio.

### Deploy to GitHub Pages

This portfolio is fully configured for GitHub Pages:

```bash
# Build static site


# Commit and push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

Then enable GitHub Pages in your repository settings:
1. Go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main`, Folder: `/docs`
4. Save

Your site will be live at `https://yourusername.github.io/repository-name/`

See [DEPLOY.md](./DEPLOY.md) for detailed deployment instructions.

## Customization

### Content

Edit the following components to customize your portfolio:

- `client/src/components/HeroSection.tsx` - Hero section with title and description
- `client/src/components/ServicesSection.tsx` - Your services/offerings
- `client/src/components/PortfolioSection.tsx` - Featured projects
- `client/src/components/AboutSection.tsx` - About you and your skills
- `client/src/components/ContactSection.tsx` - Contact information
- `client/src/pages/CV.tsx` - Full CV/resume page

### Design

The portfolio uses a minimal design system defined in `design_guidelines.md`. Colors and styles can be customized in:

- `client/src/index.css` - Color variables and global styles
- `design_guidelines.md` - Design principles and guidelines

### Images

Replace the generated images in `attached_assets/generated_images/` with your own:
- Professional headshot
- Project screenshots/mockups

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Routing**: Wouter (hash-based for GitHub Pages compatibility)
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Build**: Vite
- **Deployment**: GitHub Pages (static hosting)

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   └── lib/            # Utilities
│   └── index.html          # Entry HTML
├── attached_assets/        # Images and assets
├── docs/                   # GitHub Pages build output
├── build-static.sh         # Build script for deployment
├── DEPLOY.md              # Deployment guide
└── design_guidelines.md    # Design system
```

## License

MIT

---

**Note**: This is a static portfolio template. No backend server or database is required for deployment.
