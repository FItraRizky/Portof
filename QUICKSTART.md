# Quick Start Guide

Get your portfolio up and running in 5 minutes! 🚀

## ⚡ Prerequisites

- **Node.js** 18.0 or higher ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **Git** ([Download](https://git-scm.com/))
- Code editor (VS Code recommended)

## 🚀 Installation

### Step 1: Navigate to Project
```bash
cd "c:\Users\ryan\Downloads\portofolio memek\fitra-portfolio"
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
Visit [http://localhost:2999](http://localhost:2999)

**That's it! Your portfolio is running! 🎉**

## ✏️ Quick Customization (5 Minutes)

### 1. Update Your Name (1 min)

**File**: `components/Hero.tsx` (Line 42)
```typescript
I'm Your Name, an independent software developer from Your Country.
```

**File**: `components/Header.tsx` (Line 42)
```typescript
Your Name
```

### 2. Update Contact Info (1 min)

**File**: `components/Contact.tsx` (Lines 10-24)
```typescript
{
  icon: Mail,
  label: 'Email',
  value: 'your.email@example.com',
  href: 'mailto:your.email@example.com',
},
```

### 3. Update Social Links (1 min)

**File**: `components/Hero.tsx` (Lines 88-110)
```typescript
<a href="https://github.com/yourusername">
<a href="https://linkedin.com/in/yourusername">
<a href="mailto:your.email@example.com">
```

### 4. Add Your First Project (2 min)

**File**: `components/Projects.tsx` (Lines 15-64)
```typescript
{
  id: '1',
  title: 'Your Amazing Project',
  description: 'What makes this project special',
  link: 'https://your-project.com',
  tags: ['React', 'Next.js', 'TypeScript'],
},
```

**Save all files and see changes instantly! 🔥**

## 🎨 Change Colors (Optional)

**File**: `app/globals.css` (Lines 3-10)

```css
:root {
  --accent: #3b82f6;  /* Change this to your brand color */
}
```

Popular colors:
- Purple: `#8b5cf6`
- Green: `#10b981`
- Orange: `#f59e0b`
- Pink: `#ec4899`

## 📱 Test Responsiveness

1. **Open DevTools**: Press `F12`
2. **Toggle Device Toolbar**: Click phone icon or press `Ctrl+Shift+M`
3. **Test Different Sizes**: iPhone, iPad, Desktop

## 🚀 Deploy to Vercel (10 Minutes)

### Step 1: Create GitHub Repository
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-portfolio.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Visit [vercel.com](https://vercel.com/)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

**Your site will be live in ~2 minutes! 🌐**

## 📋 Checklist

Before going live, make sure to:

- [ ] Update your name everywhere
- [ ] Add your email and contact info
- [ ] Update social media links
- [ ] Add at least 3 real projects
- [ ] Update the About section
- [ ] Add your photo (optional)
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Update meta tags for SEO

## 🎯 Next Steps

### Immediate (Today)
1. ✅ Customize personal information
2. ✅ Add your projects
3. ✅ Deploy to Vercel

### Short Term (This Week)
1. 📝 Write your first blog post
2. 📸 Add real photos to gallery
3. 🎨 Customize colors to match your brand
4. 📧 Set up contact form backend

### Long Term (This Month)
1. 📊 Add analytics
2. 🔍 Optimize for SEO
3. 📱 Create project detail pages
4. 💬 Add testimonials section

## 📚 Learn More

- **Full Documentation**: See [README.md](README.md)
- **Customization Guide**: See [CUSTOMIZATION.md](CUSTOMIZATION.md)
- **Deployment Guide**: See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Features List**: See [FEATURES.md](FEATURES.md)

## 🆘 Common Issues

### Port 2999 Already in Use
```bash
# Kill the process
npx kill-port 2999

# Or use a different port
npm run dev -- -p 3000
```

### Changes Not Showing
```bash
# Clear cache and restart
rm -rf .next
npm run dev
```

### Build Errors
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## 💡 Pro Tips

1. **Use Git**: Commit changes frequently
2. **Test Locally**: Always test before deploying
3. **Mobile First**: Design for mobile, then desktop
4. **Keep It Simple**: Less is more
5. **Update Regularly**: Fresh content = more visitors

## 🎓 Resources

### Learning
- [Next.js Tutorial](https://nextjs.org/learn)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### Inspiration
- [Awwwards](https://www.awwwards.com/)
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)

### Tools
- [Coolors](https://coolors.co/) - Color palette generator
- [Google Fonts](https://fonts.google.com/) - Free fonts
- [Unsplash](https://unsplash.com/) - Free images

## 🎉 You're All Set!

Your portfolio is ready to showcase your work to the world!

**Questions?** Open an issue or check the documentation.

**Happy coding! 💻✨**

---

Made with ❤️ by Fitra Rizky
