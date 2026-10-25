# Brightloop

A concept website for a fictional school that teaches programming languages. Portfolio project: React, TypeScript and Vite, no UI libraries.

## Features
- Live code card: switch language, run the sample, copy it, hover words for notes
- Course filters, save and plan buttons with a running total of hours
- Light and dark themes, remembered between visits
- Monthly and yearly pricing toggle, footnotes, accessible keyboard focus

## Run it
```bash
npm install
npm run dev        # development server
npm run build      # type-check and production build
```

## Structure
- `src/data.ts`: typed content (languages, courses, plans, FAQ)
- `src/components/`: one component per section
- `src/hooks/useTheme.ts`: theme state with system preference fallback

## Notes
Concept demo, not a real business. Built with AI assistance (Claude) and reviewed by the author.
