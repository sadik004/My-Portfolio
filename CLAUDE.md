# CLAUDE.md — Portfolio of Md. Moynul Hasan Sadik

This file provides context and operational instructions for Claude Code and Anthropic assistants working within this repository.

---

## 1. Project Overview & Identity
Personal portfolio and creative developer showcase for **Md. Moynul Hasan Sadik** (Software Engineer & Creative Developer).
* **Aesthetic Philosophy:** Dennis Snellenberg inspired dark editorial minimalism, bold typography, and tactile spring physics.
* **Core Technologies:** Next.js 16 (App Router + Turbopack), React 19, TypeScript, Tailwind CSS v4, Framer Motion 13+, Lucide React, Shadcn UI primitives.

---

## 2. Essential Commands

Always run commands from the project root (`c:\Users\User\my-portfolio`):

```bash
# Development Server (defaults to port 3000)
npm run dev

# Code Quality & Linter (Required to pass with 0 errors before any commit)
npm run lint

# Production Build & Static Page Generation (Validates TypeScript & Turbopack)
npm run build

# Start Production Server
npm start
```

---

## 3. Directory Layout & Architecture

```
my-portfolio/
├── app/
│   ├── about/page.tsx       # Bio, engineering background, story & skill matrix
│   ├── contact/page.tsx     # Dennis Snellenberg numbered questionnaire & contact info
│   ├── work/page.tsx        # Selected works & engineering gallery
│   ├── globals.css          # Tailwind CSS v4 @theme tokens and baseline resets
│   ├── layout.tsx           # Root HTML, Geist fonts, and page metadata
│   ├── page.tsx             # Homepage composition (Hero, Marquee, Projects, Footer)
│   └── template.tsx         # Next.js route transition wrapper invoking <Curve />
├── components/
│   ├── motion/
│   │   ├── curve.tsx        # Dennis Snellenberg full-viewport curved SVG page transition
│   │   ├── magnetic.tsx     # Spring physics magnetic attraction wrapper
│   │   ├── marquee.tsx      # Infinite horizontal typographic ticker
│   │   └── preloader.tsx    # Multi-language greeting preloader (session-cached)
│   ├── sections/
│   │   ├── hero.tsx         # Hero section with display typography & status badge
│   │   ├── navbar.tsx       # Floating island pill navigation (Home, Work, About, Contact)
│   │   ├── project-list.tsx # Interactive project table with cursor-following modal
│   │   ├── footer.tsx       # Dennis Snellenberg parallax scroll footer with live clock & liquid button
│   │   └── about.tsx        # Reusable skills breakdown grid
│   └── ui/
│       └── button.tsx       # Shadcn button primitives with class-variance-authority
├── lib/
│   └── utils.ts             # cn() classnames helper utility (clsx + tailwind-merge)
├── AGENTS.md                # General AI agent instructions
├── CLAUDE.md                # Anthropic Claude Code specific operational guide
├── DESIGN.md                # Comprehensive semantic design system documentation
└── package.json             # Dependencies and scripts
```

---

## 4. Code & Styling Standards

### TypeScript
- Strict mode is enabled (`strict: true` in `tsconfig.json`).
- Avoid `any`. Explicitly type props, variants, and event handlers.
- Use `type` imports when importing types: `import type { Metadata } from "next";`.

### React 19 & Next.js 16 Conventions
- **Client Components:** Add `"use client";` at the very top of files utilizing hooks, state, DOM events, or Framer Motion animations.
- **Never call `setState` synchronously in an effect body:**
  ```tsx
  // ❌ INCORRECT (Triggers react-hooks/set-state-in-effect and fails build)
  useEffect(() => {
    setIsLoading(true);
  }, []);

  // ✅ CORRECT (Defers render tick to avoid cascading renders)
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setIsLoading(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);
  ```
- **Image Optimization:** If using standard `<img>` tags, ensure proper fallbacks and `alt` tags. Prefer `next/image` when static dimensions are known.

### Styling & Tailwind CSS v4
- Use Tailwind CSS v4 utilities. Avoid arbitrary uncurated hex values when tokens exist.
- Standard Palette:
  - Dark Canvas: `#141517` / `#0a0a0c`
  - Light Editorial Canvas: `#fafafa`
  - Primary CTA Accent: `#334BD3` / `#455ce9` (Electric Cobalt)
  - Live Status: `#10b981` (Signal Emerald)

---

## 5. Motion & UX Rules (Do Not Break)

1. **Preloader (`components/motion/preloader.tsx`):**
   - Must only run on the first visit per browser session (`sessionStorage.getItem("portfolio_preloader_seen")`).
   - Words progression: *Hello, Bonjour, Ciao, Olà, やあ, Hallå, Guten Tag* (~160ms) → **"• হ্যালো বাংলাদেশ"** (800ms) → **"• Hello World"** (1000ms).
   - Exit curve must be smooth and slow (`duration: 1.4s`, `cubic-bezier(0.76, 0, 0.24, 1)`).
2. **Page Transitions (`components/motion/curve.tsx`):**
   - Full-page curved curtain slides up over `1.15s`.
   - The route title (`• Work`, `• About`, `• Contact`, `• Home`) must dwell comfortably so the user can read the destination.
3. **Magnetic Buttons (`components/motion/magnetic.tsx`):**
   - Physics: `stiffness: 350, damping: 25`. Wrap primary CTAs and brand links with `<Magnetic>`.

---

## 6. Pre-Commit Validation Checklist

Before finishing any task or committing changes:
1. Run `npm run lint` — Must exit with **0 errors**.
2. Run `npm run build` — Must compile all static pages (7/7) cleanly with Turbopack.
3. Never commit large binary files (`*.mp4`, `*.webm`) to git (ensure `.gitignore` rules are respected).
4. Use concise, descriptive semantic commit messages (`feat:`, `fix:`, `docs:`, `chore:`).
