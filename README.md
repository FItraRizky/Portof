# Fitra Rizky - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Inspired by the clean and minimalist design of [Timmy O'Mahony's portfolio](https://timmyomahony.com/).

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16, React, TypeScript, and Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **SEO Optimized**: Proper meta tags, Open Graph, and Twitter Card support
- **Clean UI/UX**: Minimalist design with focus on content and readability
- **Performance**: Optimized for fast loading and smooth scrolling

## 📦 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Ready for [Vercel](https://vercel.com/)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd fitra-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Open [http://localhost:2999](http://localhost:2999) with your browser to see the result.

## 📁 Project Structure

```
fitra-portfolio/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Homepage
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Hero.tsx              # Hero section
│   ├── Projects.tsx          # Featured projects section
│   ├── About.tsx             # About section
│   ├── Blog.tsx              # Blog posts section
│   ├── Contact.tsx           # Contact form section
│   └── Footer.tsx            # Footer
├── public/                   # Static assets
└── package.json              # Dependencies
```

## 🎨 Customization

### Update Personal Information

1. **Name and Branding**: Update in `components/Header.tsx`, `components/Hero.tsx`, and `app/layout.tsx`
2. **Contact Information**: Modify in `components/Contact.tsx` and `components/Footer.tsx`
3. **Social Links**: Update in `components/Hero.tsx` and `components/Footer.tsx`

### Add Projects

Edit the `projects` array in `components/Projects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: "1",
    title: "Your Project",
    description: "Project description",
    link: "/project-link",
    tags: ["React", "Next.js", "TypeScript"],
  },
  // Add more projects...
];
```

### Add Blog Posts

Edit the `blogPosts` array in `components/Blog.tsx`:

```typescript
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Your Blog Post",
    excerpt: "Post excerpt",
    date: "Nov 21, 2025",
    readTime: "5 min read",
    link: "/blog/post-slug",
  },
  // Add more posts...
];
```

### Customize Colors

Update CSS variables in `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #1a1a1a;
  --muted: #6b7280;
  --border: #e5e7eb;
  --accent: #3b82f6;
  --accent-hover: #2563eb;
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com/)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Sections

1. **Hero**: Introduction and personal branding
2. **Projects**: Showcase of featured work
3. **About**: Skills, technologies, and background
4. **Blog**: Latest articles and posts
5. **Contact**: Contact form and information
6. **Footer**: Links and copyright

## 🌟 Features in Detail

### Animations

- Smooth page transitions
- Scroll-triggered animations
- Hover effects on interactive elements
- Staggered entrance animations

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation

### Performance

- Optimized images
- Code splitting
- Lazy loading
- Fast page loads

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Design inspiration: [Timmy O'Mahony](https://timmyomahony.com/)
- Built by: Fitra Rizky
- Icons: [Lucide Icons](https://lucide.dev/)

## 📧 Contact

For questions or feedback, please reach out:

- Email: fitra.rizky@example.com
- GitHub: [Your GitHub]
- LinkedIn: [Your LinkedIn]

---

Made with ❤️ using Next.js & Tailwind CSS
