# Joydeep Banerjee — personal site

A design-first personal site for a product builder. Static, greyscale, built to
Dieter Rams' [ten principles for good design](https://www.vitsoe.com/us/about/good-design).

Built with [Astro](https://astro.build) — zero JavaScript shipped by default,
system fonts, Markdown-powered writing.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
```

```bash
npm run build    # static output → dist/
npm run preview  # preview the production build
```

## Publish an article

Drop a Markdown file into `src/content/writing/`:

```markdown
---
title: "Your title"
description: "One line for the index and meta tags."
date: 2026-07-01
draft: false        # set true to hide it
---

Write in plain Markdown. The design wraps it automatically.
```

The file name becomes the URL: `my-post.md` → `/writing/my-post`.

## Make it yours

Search the codebase for `[EDIT]` — name, thesis, real products, story, and links.

## Structure

```
src/
  content.config.ts      content collection schema for /writing
  styles/global.css      the whole design system (greyscale, type, spacing)
  layouts/Base.astro     <head>, header, footer — shared shell
  components/             Header, Footer
  pages/
    index.astro          home (hero · work · approach · writing · about)
    writing/index.astro  list of articles
    writing/[...slug].astro  a single article
  content/writing/       your Markdown posts
```

## Where Rams lives

- **№10 As little design as possible** — no client JS, no webfont, one stylesheet.
- **№9 Environmentally friendly** — static, tiny, fast.
- **№7 Long-lasting** — articles are portable Markdown, not locked in a CMS.
- **№6 Honest** — real type and space; no fake depth or stock imagery.
- **№3 Aesthetic** — hierarchy from scale, weight, and air; colour off the table.
