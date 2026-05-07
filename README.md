# Thuan Yen Thanh — Azure Cloud Solution Architect Portfolio

Static portfolio for Thuan Yen Thanh, Azure Cloud Solution Architect. Built with plain HTML, CSS, and vanilla JavaScript — no framework, no build step.

Canonical URL: <https://ytthuan.github.io/>

## Local preview

```bash
python3 -m http.server 4321 --bind 127.0.0.1
```

Then open <http://127.0.0.1:4321> and verify desktop / mobile rendering, the certifications carousel, and reduced-motion behavior.

## Project layout

```
.
├── index.html                  # Semantic page, JSON-LD, OG tags
├── styles/
│   ├── styles.css              # Design tokens, layout, typography, motion
│   └── articles.css            # Article-page chrome
├── scripts/
│   └── script.js               # Skills, certifications carousel, timeline, motion
├── articles/
│   ├── ai-trust-controls.html
│   └── agents-system-philosophy.html
├── images/
│   ├── favicon.svg
│   ├── badges/                 # Official Microsoft Learn credential SVGs
│   ├── hero/                   # Hero image (WebP + PNG fallback)
│   ├── illustrations/          # Skills-section + topology imagery
│   ├── articles/               # Article hero images (WebP + PNG fallback)
│   ├── logo/                   # Monogram sigil
│   └── og/                     # 1200×630 social card
├── robots.txt                  # Crawler directives + sitemap pointer
├── sitemap.xml                 # XML sitemap (canonical URL)
├── manifest.webmanifest        # PWA manifest (theme colour, icons)
└── llms.txt                    # LLM-crawler summary (Anthropic-style)
```

## Deploy

This site deploys to GitHub Pages as a **user site** at <https://ytthuan.github.io/>.

Repository: <https://github.com/ytthuan/ytthuan.github.io>

GitHub Pages serves the `main` branch from the repository root.

## Notes

- The site is fully static and can be deployed to GitHub Pages, Netlify, Vercel, or any static host.
- All images are served via `<picture>` with WebP first and PNG fallback; the hero image is preloaded for LCP.
- Certifications carousel is auto-advancing, pauses on hover/focus, supports keyboard arrows + swipe, and falls back to a scroll-snap row under `prefers-reduced-motion: reduce`.
