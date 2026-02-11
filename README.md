# Full Circle Function & Fitness - Replatformed Website

Performance-driven personal training website built with Next.js 14, TypeScript, and Tailwind CSS.

## Design Philosophy

This site features a Dunkel-inspired industrial aesthetic:
- Deep navy and industrial blue-gray backgrounds
- Sharp corners and minimal shadows
- Bold uppercase typography
- Performance-focused imagery treatment
- Brand blue as the only accent color

## Tech Stack

- **Framework**: Next.js 14.2+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Fonts**: Oswald (display), Inter (body)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── training/          # Training services
│   ├── massage/           # Massage services
│   └── contact/           # Contact page
│
├── components/            # Reusable components
│   ├── layout/           # Header, Footer, Container
│   ├── sections/         # Hero, Services, ServiceCard
│   └── ui/               # Button, SectionDivider
│
├── lib/                   # Utilities and content
│   ├── content/          # Content modules (extracted from Wix)
│   └── utils/            # Helper functions
│
├── public/               # Static assets
│   └── images/          # Optimized images
│
└── styles/              # Additional CSS if needed
```

## Design System

### Colors

- **Navy**: Primary backgrounds (#0A0F1C, #0D1423, #13192D)
- **Steel**: Secondary backgrounds (#1A1F2E, #252B3D, #2F3749)
- **Brand Blue**: Accent color (#3B9FFF)
- **White**: Text on dark backgrounds
- **Charcoal**: Text on light backgrounds

### Typography

- **Display**: Oswald (bold, uppercase headings)
- **Body**: Inter (clean, readable)
- All headings are uppercase with tight tracking
- Hero headlines: 4.5rem (desktop), 2.5rem (mobile)

### Spacing

- Section padding: 6rem (desktop), 3rem (mobile)
- Container max-width: 1280px (7xl)
- Consistent 8-point grid system

## SEO & Performance

- Metadata API for all pages
- Structured data (LocalBusiness, Organization)
- Optimized images (WebP/AVIF)
- React Server Components by default
- Target Lighthouse scores: 90+ (mobile), 95+ (desktop)

## Content Extraction Status

Content is being extracted from the live Wix site and will be added to `lib/content/` modules.

## Deployment

Recommended deployment on Vercel:

1. Push to GitHub
2. Import to Vercel
3. Configure domain DNS
4. Set up redirects for old Wix URLs (configured in next.config.js)

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Accessibility

- WCAG AA compliance
- Keyboard navigation support
- Focus states on all interactive elements
- Semantic HTML structure
- Alt text for all images

## License

Private - All rights reserved by Full Circle Function & Fitness

## Contact

Full Circle Function & Fitness
Pittsburgh, PA
https://www.fullcirclefunctionandfitness.com
