# Deployment Guide

This guide covers different deployment options for the Fitra Rizky Portfolio website.

## 🚀 Quick Deploy

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/fitra-portfolio)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/fitra-portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com/)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Configure Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

### AWS Amplify

1. **Connect Repository**
   - Open AWS Amplify Console
   - Connect your GitHub repository
   - Configure build settings:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm install
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: .next
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```

2. **Deploy**
   - Click "Save and Deploy"
   - Wait for deployment to complete

## 🐳 Docker Deployment

### Build Docker Image

1. **Create Dockerfile**
   ```dockerfile
   FROM node:20-alpine AS base

   # Install dependencies only when needed
   FROM base AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app

   COPY package.json package-lock.json ./
   RUN npm ci

   # Rebuild the source code only when needed
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .

   RUN npm run build

   # Production image
   FROM base AS runner
   WORKDIR /app

   ENV NODE_ENV production

   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs

   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

   USER nextjs

   EXPOSE 3000

   ENV PORT 3000

   CMD ["node", "server.js"]
   ```

2. **Build and Run**
   ```bash
   docker build -t fitra-portfolio .
   docker run -p 3000:3000 fitra-portfolio
   ```

### Docker Compose

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

Run with:
```bash
docker-compose up -d
```

## 🌐 VPS Deployment

### Using PM2

1. **Install PM2**
   ```bash
   npm install -g pm2
   ```

2. **Build Application**
   ```bash
   npm run build
   ```

3. **Start with PM2**
   ```bash
   pm2 start npm --name "fitra-portfolio" -- start
   pm2 save
   pm2 startup
   ```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com;

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

Enable SSL with Let's Encrypt:
```bash
sudo certbot --nginx -d yourdomain.com
```

## 📊 Environment Variables

Create `.env.local` for production:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Fitra Rizky Portfolio
```

## 🔧 Build Optimization

### Enable Standalone Output

In `next.config.ts`:
```typescript
const nextConfig = {
  output: 'standalone',
};

export default nextConfig;
```

### Analyze Bundle Size

```bash
npm install -D @next/bundle-analyzer
```

Update `next.config.ts`:
```typescript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
```

Run analysis:
```bash
ANALYZE=true npm run build
```

## 🚨 Pre-Deployment Checklist

- [ ] Update personal information (name, email, links)
- [ ] Add real projects and blog posts
- [ ] Replace placeholder images
- [ ] Configure environment variables
- [ ] Test on multiple devices
- [ ] Check SEO meta tags
- [ ] Verify all links work
- [ ] Test contact form
- [ ] Enable analytics (optional)
- [ ] Set up error monitoring (optional)

## 📈 Post-Deployment

### Monitor Performance

- Use [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- Check [PageSpeed Insights](https://pagespeed.web.dev/)
- Monitor with [Vercel Analytics](https://vercel.com/analytics)

### SEO

- Submit sitemap to Google Search Console
- Verify Open Graph tags
- Check mobile-friendliness
- Monitor Core Web Vitals

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - run: npm test
```

## 🆘 Troubleshooting

### Build Fails

- Clear cache: `rm -rf .next node_modules`
- Reinstall: `npm install`
- Check Node version: `node -v` (should be 18+)

### Deployment Issues

- Check environment variables
- Verify build command
- Check deployment logs
- Ensure all dependencies are in `package.json`

## 📞 Support

For deployment issues:
- Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Visit [Vercel Support](https://vercel.com/support)
- Open an issue on GitHub

---

Happy Deploying! 🚀
