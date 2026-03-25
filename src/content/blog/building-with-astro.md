---
title: "Why I Chose Astro for My Portfolio"
date: "2025-02-10"
excerpt: "A look at why Astro won over Next.js, SvelteKit, and plain HTML for building nicogrim.com."
tags: ["astro", "web-dev", "tooling"]
---

When I set out to rebuild my portfolio, I had a clear list of requirements: fast, simple, content-driven, and not over-engineered. After trying a few options, I landed on Astro — and I'm glad I did.

## The Contenders

**Next.js** — Great framework, but massive overkill for a mostly-static portfolio. I don't need React hydration on every page.

**SvelteKit** — Tempting. Great DX. But again, more runtime than I need for a content site.

**Plain HTML/CSS** — Considered it seriously. But managing layouts, navigation, and content collections by hand gets old fast.

**Astro** — Static by default, ships zero JS unless you need it, has built-in content collections, and the DX is excellent. Winner.

## What I Like

The content collections API is the killer feature for me. Define a schema, drop Markdown files in a folder, and everything is typed and validated. Adding a new product to my portfolio is literally creating a new `.md` file.

The island architecture means I can sprinkle in interactivity where I need it (a filter bar, a mobile menu) without paying the cost everywhere.

## The Stack

- **Astro** for static generation
- **Tailwind CSS v4** for styling
- **Vercel** for hosting
- **TypeScript** everywhere

Simple. Fast. Easy to maintain. Exactly what a portfolio should be.
