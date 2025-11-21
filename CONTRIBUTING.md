# Contributing to Fitra Rizky Portfolio

Thank you for your interest in contributing to this portfolio project! This document provides guidelines and instructions for contributing.

## 🚀 Getting Started

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/fitra-portfolio.git
   cd fitra-portfolio
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Development Workflow

1. **Make your changes**

   - Follow the existing code style
   - Keep components modular and reusable
   - Add comments for complex logic

2. **Test your changes**

   ```bash
   npm run dev
   ```

   - Test on different screen sizes
   - Check dark mode compatibility
   - Verify animations work smoothly

3. **Lint your code**

   ```bash
   npm run lint
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

## 📋 Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:

```
feat: add new project card animation
fix: resolve mobile menu toggle issue
docs: update README with deployment instructions
```

## 🎨 Code Style Guidelines

### TypeScript/React

- Use functional components with hooks
- Use TypeScript for type safety
- Follow React best practices
- Keep components under 300 lines

### CSS/Tailwind

- Use Tailwind utility classes
- Follow mobile-first approach
- Use CSS variables for theming
- Maintain consistent spacing

### File Structure

```
components/
├── ComponentName.tsx    # Component file
└── ...

app/
├── page.tsx            # Page components
├── layout.tsx          # Layout components
└── globals.css         # Global styles
```

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Description** - Clear description of the bug
2. **Steps to Reproduce** - How to reproduce the issue
3. **Expected Behavior** - What should happen
4. **Actual Behavior** - What actually happens
5. **Screenshots** - If applicable
6. **Environment** - Browser, OS, screen size

## 💡 Suggesting Features

Feature suggestions are welcome! Please:

1. Check if the feature already exists
2. Provide a clear use case
3. Explain the expected behavior
4. Include mockups if possible

## 🔍 Pull Request Process

1. **Update documentation** - If you add features
2. **Test thoroughly** - Ensure everything works
3. **Update README** - If necessary
4. **Create PR** - With clear description

### PR Title Format

```
[Type] Brief description

Example:
[Feature] Add dark mode toggle button
[Fix] Resolve navigation menu overlap issue
```

### PR Description Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

How was this tested?

## Screenshots

If applicable

## Checklist

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No new warnings
```

## 🎯 Areas for Contribution

### High Priority

- [ ] Add blog functionality with MDX
- [ ] Implement contact form backend
- [ ] Add project detail pages
- [ ] Improve accessibility (a11y)
- [ ] Add unit tests

### Medium Priority

- [ ] Add more animations
- [ ] Implement search functionality
- [ ] Add RSS feed
- [ ] Improve SEO
- [ ] Add analytics

### Low Priority

- [ ] Add theme customization
- [ ] Add more color schemes
- [ ] Add easter eggs
- [ ] Improve loading states

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## ❓ Questions?

If you have questions, feel free to:

- Open an issue
- Start a discussion
- Contact via email

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🎉
