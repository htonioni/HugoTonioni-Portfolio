# Personal Portfolio - Showcase

This repository contains the source code for my personal portfolio website, built with **Next.js (React + TypeScript)** and styled using **Tailwind CSS**.
The goal of this project is to create a **professional and interactive platform** to highlight my work, present my resume, and provide simple ways to get in touch.

---

## 🎯 Project Goals

- Establish a strong digital presence.
- Showcase projects in a clear and visually appealing way.
- Make my resume easily accessible online.
- Provide simple and intuitive contact options.
- Demonstrate proficiency with modern tools (React, Next.js, Tailwind, UI Libraries).

---

## 🛠️ Tech Stack

- **Next.js** → Framework for React applications, routing, and optimizations.
- **React + TypeScript** → Development foundation.
- **Tailwind CSS** → Utility-first CSS framework for fast and responsive styling.
- **Aceternity UI** → Modern UI components for a polished interface.
- **Vercel** → Deployment and hosting platform.

---

## 💻📈 Development Roadmap

This portfolio is being built in **phases**, with progress tracked through checklists.
To keep the process organized, each feature or milestone is developed in its **own branch**.

### 🔀 Build process

- Every branch represents a step of the roadmap. focusing only on that specific milestone
  Example: `feat/step-01-navbar`, `fix/step-02-about`.
- Once completed, the branch is merged into `main`.
- Progress is tracked in this README using checkboxes (`- [ ]` → `- [x]`).

### Step 0 — Setup

- [X] Repository initialized.
- [X] Dependencies set up (`npm install` / `pnpm install`).
- [X] Development server configured (`npm run dev`).
- [X] Base structure created: `src/app`, `src/components`, `public/images`.

### Step 1 — Layout & Core Components

- [X] **Global Layout** (`src/app/layout.tsx`) with `<html>`, `<body>`, and global styles.
- [ ] **Navbar** (`src/components/Navbar/Navbar.tsx`) with navigation links and mobile toggle.
- [ ] **Footer** (`src/components/Footer/Footer.tsx`).
- [ ] **Container/Main** wrapper to centralize content.
- [ ] **ThemeToggle** (`src/components/ThemeToggle.tsx`) for dark/light mode.

### Step 2 — Pages (App Router)

- [ ] **Home** (`src/app/page.tsx`) with Hero and main sections.
- [ ] **About** (`src/app/about/page.tsx`).
- [ ] **Projects (list)** (`src/app/projects/page.tsx`).
- [ ] **Project (dynamic)** (`src/app/projects/[slug]/page.tsx`).
- [ ] **Blog (list)** (`src/app/blog/page.tsx`).
- [ ] **Blog Post (dynamic)** (`src/app/blog/[slug]/page.mdx` or `page.tsx`).
- [ ] **Resume** (`src/app/resume/page.tsx`).
- [ ] **Contact** (`src/app/contact/page.tsx`) with a simple form.

### Step 3 — Page Components

- [ ] **Hero** section with headline, short description, and CTA.
- [ ] **AboutSection** with text and photo.
- [ ] **TechStack** with technology logos.
- [ ] **ProjectCard** with thumbnail, title, summary, and tags.
- [ ] **ProjectsGrid** (optional filter).
- [ ] **BlogCard** for post previews.
- [ ] **PostContent** for rendering MDX/HTML blog posts.

### Step 4 — Content & Data

- [ ] **TypeScript Types** (`src/types/*`) for Project, BlogPost, NavLink.
- [ ] **Constants** (`src/constants/navlinks.tsx`, `socials.tsx`).
- [ ] **Content folder** for blog posts and projects (`content/blog/{slug}.mdx`, `content/projects/{slug}.md`).
- [ ] **Libs** (`src/lib/getAllBlogs.ts`, `getAllProjects.ts`, `formatDate.ts`).

### Step 5 — Styling, Fonts & Responsiveness

- [ ] **Tailwind** configuration (`tailwind.config.ts`) and global styles (`globals.css`).
- [ ] **Fonts** in `public/fonts` configured via CSS or `next/font`.
- [ ] **Responsive navigation** for mobile devices.
- [ ] **Accessibility** improvements (ARIA attributes, semantic HTML, color contrast).

### Step 6 — SEO, Metadata & Images

- [ ] **SEO/Head Component** with meta tags, titles, and OG tags.
- [ ] **Optimized Images** with `next/image` and assets in `public/images`.
- [ ] **Sitemap / robots.txt** (optional).
- [ ] **Open Graph images** for social sharing (optional).

### Step 7 — Integrations & Deployment

- [ ] **Contact Form backend** integrated with API/service (Email API, Netlify Forms, etc.).
- [ ] **Analytics** via Google Analytics, Plausible, or similar.
- [ ] **CI/CD pipeline** with Vercel or GitHub Actions.
- [ ] **Deployment** with custom domain and environment variables.

### Step 8 — Final Polish

- [ ] Manual testing: links, images, mobile view, SEO basics.
- [ ] ESLint & Prettier setup.
- [ ] Update README with screenshots and deployment instructions.
- [ ] First release: `v1.0`.

### Optional Enhancements

- [ ] Automatic dark-mode detection from system preferences.
- [ ] Smooth animations and transitions.
- [ ] Custom 404 page.
- [ ] Internationalization (i18n).

---

## 📬 Contact

For questions or suggestions about this project:
📧 **Email**: htonioni@outlook.com
🔗 **LinkedIn**: [linkedin.com/in/htonioni](https://linkedin.com/in/htonioni)
