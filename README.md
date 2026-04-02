# Virginia Dooley - Portfolio

A personal portfolio showcasing work in civic technology, community engagement, and public interest projects.

**Live site**: [virginiadooley.github.io](https://virginiadooley.github.io)

## Featured Projects

- **[Voter Information App](https://virginiadooley.github.io/#/portfolio/voter-info)** - Mobile app providing UK voter information, polling locations, and election reminders
- **[Local Representative Data](https://virginiadooley.github.io/#/portfolio/civic-data-tech)** - Collaborative initiative to develop a data pipeline of local U.S. representatives
- **[CivicPatch](https://virginiadooley.github.io/#/portfolio/civic-patch)** - Front end address search and interactive visualizations for civic data
- **[VoiceAbroad](https://virginiadooley.github.io/#/portfolio/civic-action-tool)** - Web app encouraging Americans abroad to sustain civic engagement

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

### Portfolio Detail Pages

Individual project pages are located in `client/src/pages/`:
- `VoterInfoAppDetail.tsx` - Voter Information App details
- `CivicDataTechDetail.tsx` - Local Representative Data details
- `CivicPatchDetail.tsx` - CivicPatch details
- `CivicActionToolDetail.tsx` - VoiceAbroad details

Routes are configured in `client/src/App.tsx` using hash-based routing for GitHub Pages compatibility.

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

**Author**: Virginia Dooley  
**Contact**: [vcdooley@gmail.com](mailto:vcdooley@gmail.com)
