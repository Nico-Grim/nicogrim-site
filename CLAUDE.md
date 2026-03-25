# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal developer portfolio and product showcase for nicogrim.com. Built with Astro (static site generation), Tailwind CSS v4, TypeScript, deployed on Vercel.

## Commands

- `npm run dev` — Start dev server (localhost:4321)
- `npm run build` — Production build (output: `dist/` and `.vercel/output/`)
- `npx astro check` — TypeScript checking
- `npx astro add <integration>` — Add Astro integrations

## Architecture

### Content-Driven with Astro Content Collections (v6 API)

The site is content-driven. Products and blog posts are Markdown files with frontmatter — adding new content means creating a new `.md` file.

- **Collection config**: `src/content.config.ts` (NOT `src/content/config.ts` — this is the Astro v6 location)
- **Products**: `src/content/products/*.md` — each file is a product with full schema (name, tagline, features array, screenshots, links, techStack, status, category)
- **Blog**: `src/content/blog/*.md` — posts with title, date, excerpt, tags

Collections use `glob` loader from `astro/loaders` and Zod schemas for validation.

### Layout & Component Structure

- `src/layouts/BaseLayout.astro` — Single base layout wrapping all pages. Includes Header, Footer, SEO meta, JSON-LD slot, Google Fonts, and an IntersectionObserver script for scroll animations (`data-animate` attribute).
- `src/components/` — Header (sticky glass with mobile hamburger), Footer, SEO meta component, ProductCard.
- `src/styles/global.css` — All custom design tokens in `@theme`, component classes (badges, buttons, cards, prose), and animation keyframes. Uses Tailwind v4 syntax (no tailwind.config — everything is CSS-first).

### Key Design Decisions

- **Tailwind v4**: No `tailwind.config.js`. All theme values are defined via `@theme` in `global.css`. Custom component classes use `@apply` within `@layer components`. Note: you cannot `@apply` a custom class defined in the same layer — use shared selectors instead (see badge pattern in global.css).
- **Scroll animations**: Elements with `data-animate` attribute get fade-in-up animation on scroll via IntersectionObserver in BaseLayout. Variants: `data-animate="fade"`, `"slide-left"`, `"slide-right"`, `"scale"`.
- **Product pages** (`/products/[slug]`) are the core — designed as full landing pages with hero, features grid, screenshot gallery, markdown content, tech stack, and CTA sections. Feature icons are SVG paths mapped by name in the template.
- **Static output**: `output: 'static'` in astro.config. All pages are pre-rendered at build time.

### Pages

| Route | File |
|-------|------|
| `/` | `src/pages/index.astro` |
| `/products` | `src/pages/products/index.astro` (client-side category filter) |
| `/products/[slug]` | `src/pages/products/[slug].astro` |
| `/blog` | `src/pages/blog/index.astro` |
| `/blog/[slug]` | `src/pages/blog/[slug].astro` |
| `/about` | `src/pages/about.astro` |
| `/contact` | `src/pages/contact.astro` |
| `/impressum` | `src/pages/impressum.astro` (German, Austrian law) |
| `/datenschutz` | `src/pages/datenschutz.astro` (German, DSGVO) |

### Adding a New Product

Create `src/content/products/my-product.md` with frontmatter matching the schema in `content.config.ts`. Required fields: name, tagline, description, category (app/game/tool/website), status (development/beta/live/discontinued), techStack, releaseDate. Set `featured: true` to show on homepage.

### Adding a Blog Post

Create `src/content/blog/my-post.md` with frontmatter: title, date (YYYY-MM-DD), excerpt, tags array.

## Conventions

- Site language: English. Legal pages (Impressum, Datenschutz) are in German.
- Color scheme: Dark theme default. Accent color: `#6c63ff` (purple).
- Path alias: `@/*` maps to `src/*` (configured in tsconfig).
- Images go in `public/images/products/`.
