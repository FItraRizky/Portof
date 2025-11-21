# Customization Guide

This guide will help you customize the Fitra Rizky Portfolio website to make it your own.

## 🎨 Quick Start Customization

### 1. Personal Information

#### Update Name and Title
**File**: `app/layout.tsx`
```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your description here",
  // ...
};
```

**File**: `components/Header.tsx`
```typescript
<Link href="/" className="...">
  Your Name
</Link>
```

**File**: `components/Hero.tsx`
```typescript
<h1>
  I'm Your Name, your professional title from Your Location.
</h1>
```

#### Update Contact Information
**File**: `components/Contact.tsx`
```typescript
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  // Update phone and location
];
```

**File**: `components/Footer.tsx`
```typescript
<h3>Your Name</h3>
<p>Your tagline here</p>
```

### 2. Social Media Links

**File**: `components/Hero.tsx` and `components/Footer.tsx`
```typescript
<a href="https://github.com/yourusername">
<a href="https://linkedin.com/in/yourusername">
<a href="mailto:your.email@example.com">
```

### 3. Add Your Projects

**File**: `components/Projects.tsx`
```typescript
const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project Name',
    description: 'Detailed description of your project',
    link: 'https://project-url.com',
    tags: ['Technology', 'Stack', 'Used'],
  },
  // Add more projects...
];
```

### 4. Add Your Blog Posts

**File**: `components/Blog.tsx`
```typescript
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Your Blog Post Title',
    excerpt: 'Brief summary of your post',
    date: 'Nov 21, 2025',
    readTime: '5 min read',
    link: '/blog/your-post-slug',
  },
  // Add more posts...
];
```

### 5. Update About Section

**File**: `components/About.tsx`
```typescript
// Update bio
<p>
  Your personal bio here...
</p>

// Update skills
const skills = [
  {
    icon: Code2,
    title: 'Your Skill',
    description: 'Description of your skill',
  },
  // Add more skills...
];

// Update technologies
const technologies = [
  'Your', 'Tech', 'Stack', 'Here'
];
```

## 🎨 Design Customization

### Colors

**File**: `app/globals.css`

#### Light Mode Colors
```css
:root {
  --background: #ffffff;     /* Page background */
  --foreground: #1a1a1a;     /* Text color */
  --muted: #6b7280;          /* Secondary text */
  --border: #e5e7eb;         /* Border color */
  --accent: #3b82f6;         /* Accent/link color */
  --accent-hover: #2563eb;   /* Accent hover */
}
```

#### Dark Mode Colors
```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #f5f5f5;
    --muted: #9ca3af;
    --border: #262626;
    --accent: #60a5fa;
    --accent-hover: #3b82f6;
  }
}
```

#### Popular Color Schemes

**Blue Theme** (Default)
```css
--accent: #3b82f6;
--accent-hover: #2563eb;
```

**Purple Theme**
```css
--accent: #8b5cf6;
--accent-hover: #7c3aed;
```

**Green Theme**
```css
--accent: #10b981;
--accent-hover: #059669;
```

**Orange Theme**
```css
--accent: #f59e0b;
--accent-hover: #d97706;
```

**Pink Theme**
```css
--accent: #ec4899;
--accent-hover: #db2777;
```

### Typography

**File**: `app/globals.css`

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', ...;
  /* Change to your preferred font */
}
```

#### Using Google Fonts

1. **Import in layout.tsx**
```typescript
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });
```

2. **Apply to body**
```typescript
<body className={inter.className}>
```

### Spacing

Adjust spacing in components using Tailwind classes:
- `py-20` → `py-16` (reduce vertical padding)
- `px-6` → `px-8` (increase horizontal padding)
- `gap-6` → `gap-8` (increase gap between items)

### Border Radius

**File**: `app/globals.css` or component files

```css
/* Rounded corners */
.rounded-lg { border-radius: 0.5rem; }  /* Default */
.rounded-xl { border-radius: 0.75rem; } /* More rounded */
.rounded-2xl { border-radius: 1rem; }   /* Very rounded */
```

## 🖼️ Adding Images

### Profile Photo

1. **Add image to public folder**
   ```
   public/images/profile.jpg
   ```

2. **Update Hero component**
   ```typescript
   import Image from 'next/image';
   
   <Image
     src="/images/profile.jpg"
     alt="Your Name"
     width={200}
     height={200}
     className="rounded-full"
   />
   ```

### Project Images

1. **Add images to public folder**
   ```
   public/images/projects/project-1.jpg
   ```

2. **Update Projects component**
   ```typescript
   interface Project {
     // ... existing fields
     image?: string;
   }
   
   const projects: Project[] = [
     {
       // ... existing fields
       image: '/images/projects/project-1.jpg',
     },
   ];
   ```

3. **Display in card**
   ```typescript
   {project.image && (
     <Image
       src={project.image}
       alt={project.title}
       width={400}
       height={250}
       className="rounded-lg mb-4"
     />
   )}
   ```

### Photo Gallery

**File**: `components/Photos.tsx`

Replace placeholder colors with real images:
```typescript
const photos: Photo[] = [
  {
    id: '1',
    src: '/images/gallery/photo-1.jpg',
    alt: 'Description',
  },
  // ...
];
```

## 🎭 Animation Customization

### Animation Speed

**File**: Component files with Framer Motion

```typescript
// Slower animations
transition={{ duration: 1.0 }}  // Default: 0.5-0.6

// Faster animations
transition={{ duration: 0.3 }}
```

### Disable Animations

For accessibility or preference:

```typescript
// Remove motion components
<motion.div> → <div>

// Or use reduced motion
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;
```

### Custom Animations

Add new animation variants:
```typescript
const customVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -10 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6 }
  },
};
```

## 📱 Layout Customization

### Change Grid Columns

**Projects Grid**
```typescript
// 4 columns on large screens
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"

// 2 columns on large screens
className="grid grid-cols-1 lg:grid-cols-2 gap-6"
```

### Max Width

Change container max width:
```typescript
// Wider
className="max-w-7xl mx-auto"  // Default
className="max-w-full mx-auto" // Full width

// Narrower
className="max-w-5xl mx-auto"
className="max-w-4xl mx-auto"
```

### Section Order

**File**: `app/page.tsx`

Reorder sections:
```typescript
<main>
  <Header />
  <Hero />
  <About />      {/* Moved up */}
  <Projects />
  <Photos />
  <Blog />
  <Contact />
  <Footer />
</main>
```

## 🔧 Advanced Customization

### Add New Section

1. **Create component**
   ```typescript
   // components/NewSection.tsx
   export default function NewSection() {
     return (
       <section className="py-20 px-6">
         <div className="max-w-7xl mx-auto">
           <h2>New Section</h2>
           {/* Your content */}
         </div>
       </section>
     );
   }
   ```

2. **Import and use**
   ```typescript
   // app/page.tsx
   import NewSection from '@/components/NewSection';
   
   <NewSection />
   ```

### Custom Scrollbar

**File**: `app/globals.css`

```css
::-webkit-scrollbar {
  width: 12px;  /* Wider scrollbar */
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  border-radius: 10px;
}
```

### Add Favicon

1. **Replace favicon**
   ```
   app/favicon.ico
   ```

2. **Add multiple sizes**
   ```
   public/favicon-16x16.png
   public/favicon-32x32.png
   public/apple-touch-icon.png
   ```

3. **Update metadata**
   ```typescript
   // app/layout.tsx
   export const metadata: Metadata = {
     icons: {
       icon: '/favicon.ico',
       apple: '/apple-touch-icon.png',
     },
   };
   ```

## 📊 Analytics Setup

### Google Analytics

1. **Install package**
   ```bash
   npm install @next/third-parties
   ```

2. **Add to layout**
   ```typescript
   import { GoogleAnalytics } from '@next/third-parties/google'
   
   <GoogleAnalytics gaId="G-XXXXXXXXXX" />
   ```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

```typescript
import { Analytics } from '@vercel/analytics/react'

<Analytics />
```

## 🎯 Tips & Best Practices

1. **Keep it Simple**: Don't over-customize
2. **Test Responsively**: Check all screen sizes
3. **Maintain Consistency**: Use design system
4. **Optimize Images**: Compress before uploading
5. **Update Regularly**: Keep content fresh
6. **Backup First**: Before major changes
7. **Version Control**: Commit often

## 🆘 Troubleshooting

### Styles Not Applying
- Clear `.next` cache: `rm -rf .next`
- Restart dev server
- Check Tailwind class names

### Images Not Loading
- Verify file path
- Check file permissions
- Use correct Next.js Image syntax

### Animations Laggy
- Reduce animation complexity
- Check browser performance
- Use `will-change` CSS property

---

Need help? Check the [README](README.md) or open an issue!
