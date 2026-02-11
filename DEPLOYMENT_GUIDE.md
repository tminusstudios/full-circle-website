# Deployment Guide

This guide covers deploying your Full Circle Function & Fitness website to production.

## Recommended: Vercel Deployment

Vercel is the recommended hosting platform for Next.js applications (created by the Next.js team).

### Step 1: Prepare for Deployment

1. **Ensure all content is extracted** from your Wix site
2. **Test the build locally**:
   ```bash
   npm run build
   ```
   Fix any errors that appear during the build.

3. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Full Circle replatformed site"
   ```

### Step 2: Create a GitHub Repository

1. Go to [https://github.com/new](https://github.com/new)
2. Create a new repository (name it something like `full-circle-website`)
3. Follow GitHub's instructions to push your local code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/full-circle-website.git
   git branch -M main
   git push -u origin main
   ```

### Step 3: Deploy to Vercel

1. **Sign up for Vercel**: Visit [https://vercel.com](https://vercel.com) and sign up (free tier is sufficient)

2. **Import your repository**:
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Next.js project

3. **Configure settings** (Vercel should auto-configure these):
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Deploy**: Click "Deploy"
   - Vercel will build and deploy your site
   - You'll get a temporary URL like `your-project.vercel.app`

### Step 4: Configure Custom Domain

1. **In Vercel**:
   - Go to your project settings
   - Click "Domains"
   - Add your domain: `www.fullcirclefunctionandfitness.com`

2. **Update DNS** (at your domain registrar):
   - Vercel will provide specific DNS records
   - Typically:
     - `A` record pointing to Vercel's IP
     - `CNAME` for www subdomain
   - Follow Vercel's exact instructions

3. **Wait for DNS propagation** (can take 24-48 hours, often faster)

4. **SSL Certificate**: Vercel automatically provisions SSL certificates (HTTPS)

### Step 5: Redirects from Wix

You have two options:

**Option A: Keep Wix temporarily**
- Keep Wix site live during testing
- Test the new site on Vercel's temporary URL
- Once satisfied, point DNS to Vercel

**Option B: Immediate switch**
- Point DNS to Vercel immediately
- Wix site goes offline
- New site goes live

**Recommended**: Option A for safer migration

## Alternative: Self-Hosted Deployment

If you prefer to host on your own server (VPS, AWS, etc.):

### Build for Production

```bash
npm run build
npm start
```

This runs the Next.js production server on port 3000.

### Using PM2 (Process Manager)

```bash
# Install PM2 globally
npm install -g pm2

# Start the app
pm2 start npm --name "full-circle" -- start

# Save the process list
pm2 save

# Set up PM2 to start on boot
pm2 startup
```

### Nginx Reverse Proxy

Example Nginx configuration:

```nginx
server {
    listen 80;
    server_name www.fullcirclefunctionandfitness.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Post-Deployment Checklist

### SEO & Analytics

- [ ] Submit new sitemap to Google Search Console
  - URL: `https://www.fullcirclefunctionandfitness.com/sitemap.xml` (if you create one)
- [ ] Set up Google Analytics 4 (if desired)
  - Add tracking ID to `app/layout.tsx`
- [ ] Verify all redirects work (from old Wix URLs)
- [ ] Check canonical URLs are correct
- [ ] Test Open Graph images (share on social media)

### Performance

- [ ] Run Lighthouse audit (Chrome DevTools)
  - Target: 90+ Performance, 95+ Accessibility, 100 SEO
- [ ] Test on PageSpeed Insights: [https://pagespeed.web.dev](https://pagespeed.web.dev)
- [ ] Verify images are optimized and loading fast
- [ ] Check mobile performance

### Functionality

- [ ] Test all navigation links
- [ ] Verify contact form works (if implemented)
- [ ] Test on multiple devices (desktop, tablet, mobile)
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify all pages load without errors

### DNS & SSL

- [ ] Confirm HTTPS is working (green padlock in browser)
- [ ] Verify www and non-www both work
- [ ] Test from different networks/devices

## Monitoring

### Vercel Dashboard

- Check deployment status
- View build logs
- Monitor performance metrics
- Track visitor analytics (basic)

### Error Monitoring (Optional)

Consider adding error tracking:
- **Sentry**: [https://sentry.io](https://sentry.io)
- **LogRocket**: [https://logrocket.com](https://logrocket.com)

## Rollback Plan

If something goes wrong:

1. **Vercel**: Revert to previous deployment in Vercel dashboard
2. **DNS**: Point DNS back to Wix temporarily
3. **Debug**: Check build logs and error messages

## Ongoing Maintenance

### Updating Content

1. Edit content files in `lib/content/`
2. Commit changes to Git
3. Push to GitHub
4. Vercel automatically rebuilds and deploys

### Updating Design

1. Edit component files or Tailwind config
2. Test locally with `npm run dev`
3. Commit and push
4. Vercel auto-deploys

### Dependencies

Update dependencies periodically:

```bash
npm outdated
npm update
```

Then test and deploy.

## Environment Variables

If you add any sensitive information (API keys, etc.), use Vercel's environment variables:

1. Go to your project in Vercel
2. Settings → Environment Variables
3. Add variables (never commit secrets to Git)

## Support

- **Vercel Documentation**: [https://vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Community**: [https://github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

**Estimated Timeline**:
- Vercel deployment: 5-10 minutes
- DNS propagation: 1-48 hours
- Testing & verification: 1-2 hours
- Total: Plan for 1-2 days to be safe
