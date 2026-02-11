# Content Extraction Guide

This guide will help you extract content from your current Wix site and populate the new Next.js site.

## Overview

The new site is fully built and styled with the Dunkel-inspired industrial design system. All pages are functional with placeholder content that needs to be replaced with your actual content from the Wix site.

## Required: Install Node.js

Before you can run the site locally, you need to install Node.js:

1. **Download Node.js**: Visit [https://nodejs.org](https://nodejs.org) and download the LTS version (20.x or higher)
2. **Install**: Run the installer and follow the prompts
3. **Verify**: Open Terminal and run:
   ```bash
   node --version
   npm --version
   ```

Once Node.js is installed:

```bash
# Navigate to the project directory
cd "/Users/justinnovak/Full Circle Claude Website"

# Install dependencies
npm install

# Run the development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) to view the site.

## Content Extraction Process

### Step 1: Extract Brand Assets

**Logo**:
1. Visit your Wix site
2. Right-click on the logo image
3. Save it to `public/images/logo.svg` (or `.png` if SVG isn't available)

**Brand Blue Color**:
1. Visit any page with a blue button or link
2. Right-click → Inspect Element
3. Find the computed `background-color` or `color` value
4. Update the hex code in `tailwind.config.ts`:
   ```ts
   brand: {
     500: '#REPLACE_WITH_ACTUAL_HEX',
   }
   ```

**Current Color Placeholder**: `#3B9FFF` (update this with your exact brand blue)

### Step 2: Extract Homepage Content

**File to edit**: `lib/content/homepage.ts`

Visit [https://www.fullcirclefunctionandfitness.com](https://www.fullcirclefunctionandfitness.com) and extract:

1. **Hero Section**:
   - Main headline (exact copy)
   - Subtext/tagline
   - CTA button text
   - Hero background image (save to `public/images/hero/hero-bg.jpg`)

2. **Services Section**:
   - Each service title
   - Each service description
   - Service images (save to `public/images/services/`)

**Example Update**:
```typescript
export const heroContent = {
  headline: "YOUR EXACT HEADLINE FROM WIXES",
  subtext: "Your exact subtext from the Wix site",
  ctaText: "YOUR CTA TEXT",
  ctaHref: "/contact",
  backgroundImage: "/images/hero/hero-bg.jpg", // Add this line
};

export const servicesContent = [
  {
    title: "EXACT SERVICE TITLE",
    description: "Exact description from your Wix site...",
    imageUrl: "/images/services/training.jpg", // Add image
    href: "/training",
  },
  // ... more services
];
```

### Step 3: Extract About Page Content

**File to edit**: `lib/content/about.ts`

Visit [https://www.fullcirclefunctionandfitness.com/about](https://www.fullcirclefunctionandfitness.com/about)

Extract:
- Page title
- Each section heading
- All body copy (exact text)
- Any trainer bio, certifications, or credentials
- Photos (save to `public/images/about/`)

### Step 4: Extract Training Page Content

**File to edit**: `lib/content/training.ts`

Visit [https://www.fullcirclefunctionandfitness.com/training](https://www.fullcirclefunctionandfitness.com/training)

Extract:
- Service description
- Training approach/methodology
- What clients can expect
- Pricing information
- Any session details
- Images (save to `public/images/training/`)

### Step 5: Extract Massage Page Content

**File to edit**: `lib/content/massage.ts`

Visit [https://www.fullcirclefunctionandfitness.com/massage](https://www.fullcirclefunctionandfitness.com/massage)

Extract:
- Service description
- Massage approach/methodology
- Benefits
- Pricing information
- Images (save to `public/images/massage/`)

### Step 6: Extract Contact Page Content

**File to edit**: `lib/content/contact.ts`

Visit [https://www.fullcirclefunctionandfitness.com/contact](https://www.fullcirclefunctionandfitness.com/contact)

Extract:
- Full address (street, city, state, zip)
- Phone number
- Email address
- Business hours
- Any additional contact info

**Also update SEO schema** in `lib/utils/seo.ts`:
- Add full address
- Add phone number
- Add geographic coordinates (latitude/longitude)

### Step 7: Extract Images

**Hero Images**:
- Save to `public/images/hero/`
- Recommended: 1920x1080 or larger
- Format: JPG or WebP

**Service Images**:
- Save to `public/images/services/`
- Recommended: 800x600 or larger
- Format: JPG or WebP

**Other Images**:
- Save to `public/images/studio/` or relevant folders
- Ensure images are optimized (compressed)

**Image Processing** (Optional but Recommended):
For the Dunkel-inspired aesthetic, consider processing images:
- Slight desaturation (reduce vibrancy)
- Increase contrast
- Darken slightly for moody, industrial feel

Tools: Photoshop, GIMP, or online tools like TinyPNG for compression.

## How to Extract Content from Wix

Since Wix uses heavy JavaScript rendering, here's how to get the actual content:

### Method 1: Manual Copy (Recommended)
1. Open the page in your browser
2. Select and copy text directly from the rendered page
3. Paste into the content files

### Method 2: Browser Inspector
1. Visit the page
2. Right-click → Inspect Element
3. Navigate the DOM to find text content
4. Copy the text from the Elements panel

### Method 3: View Source (Limited)
1. Right-click → View Page Source
2. Search for readable text (though Wix may load content via JS)

## Content Files Reference

| Page | Content File | What to Extract |
|------|--------------|-----------------|
| Homepage | `lib/content/homepage.ts` | Hero headline, subtext, CTA, services list |
| About | `lib/content/about.ts` | Philosophy, trainer info, all sections |
| Training | `lib/content/training.ts` | Service details, approach, pricing |
| Massage | `lib/content/massage.ts` | Service details, benefits, pricing |
| Contact | `lib/content/contact.ts` | Address, phone, email, hours |

## SEO Metadata Extraction

For each page, also extract the current SEO metadata:

1. Visit the page
2. Right-click → View Page Source
3. Look for `<title>` and `<meta name="description">` tags
4. Update the corresponding page file's `metadata` object

**Example** (in `app/about/page.tsx`):
```typescript
export const metadata: Metadata = {
  title: "Exact title from Wix site",
  description: "Exact meta description from Wix site",
  // ...
};
```

## Verification Checklist

After extracting all content:

- [ ] All text content matches the Wix site exactly
- [ ] Brand blue hex code is updated in Tailwind config
- [ ] Logo is in place (`public/images/logo.svg` or `.png`)
- [ ] Hero background image added
- [ ] All service images added
- [ ] Contact information is complete (address, phone, email)
- [ ] Run `npm run dev` and verify all pages render correctly
- [ ] Check that no "TODO" or "placeholder" text remains

## Testing Locally

```bash
# Start development server
npm run dev

# Build for production (test for errors)
npm run build

# Run production build locally
npm start
```

Visit each page and verify:
1. All content is correct and complete
2. Images load properly
3. Links work
4. Mobile responsive design looks good (resize browser)
5. No console errors

## Questions?

If you encounter any issues during content extraction or have questions about where content should go:

1. Check the placeholder content in the content files for guidance
2. Refer to the plan document: `/Users/justinnovak/.claude/plans/stateful-toasting-thompson.md`
3. Each content file has TODO comments indicating what needs to be extracted

## Next Steps After Content Extraction

Once all content is populated:

1. **Image Optimization**: Consider running images through compression tools
2. **Build Test**: Run `npm run build` to ensure no errors
3. **Deployment**: Deploy to Vercel or your preferred hosting platform
4. **DNS**: Point your domain to the new site
5. **Monitoring**: Set up Google Analytics (if desired)

---

**Important**: The visual design (Dunkel-inspired industrial aesthetic) is already fully implemented. You only need to replace placeholder content with your actual content from the Wix site.
