# Network Sentinel

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Components-000000)
![Firebase App Hosting](https://img.shields.io/badge/Firebase-App%20Hosting-FFCA28?logo=firebase&logoColor=black)
![Internationalization](https://img.shields.io/badge/i18n-18%20languages-7952B3)

Free, real-time website status checker. Paste one or many URLs or upload a JSON file and get live status, HTTP code, and response time for each.

Network Sentinel is built with Next.js App Router, TypeScript, Tailwind CSS, and shadcn/ui. It includes SEO best practices, multi-language pages, and right‑to‑left layout support.

## Table of Contents
- Features
- Demo
- Tech Stack
- Architecture
- Getting Started
- Usage
- Scripts
- Configuration
- Deployment
- Accessibility & i18n
- Limitations
- Project Structure
- Contributing

## Features
- Real-time status checks: Online, offline, or error, with HTTP status code and response time.
- Bulk input: Paste URLs (one per line) or upload a JSON file.
- Clean UI/UX: shadcn/ui components with Tailwind styling and sensible defaults.
- Multi-language pages: 18 languages with automatic locale detection and redirection.
- SEO: Canonical links, Open Graph, Twitter cards, and JSON‑LD structured data.
- Responsive design: Works across desktop and mobile.

## Demo
- Local: `http://localhost:9002/` (dev server)
- Production: Set `NEXT_PUBLIC_SITE_URL` to your deployed base URL for correct canonical and OG tags.

## Tech Stack
- `Next.js` (App Router)
- `TypeScript`
- `Tailwind CSS` and `shadcn/ui`
- `Radix UI` primitives
- `lucide-react` icons
- Optional: Firebase App Hosting configuration

## Architecture
- App Router pages: One page per locale under `src/app/<lang>/page.tsx`. Each page includes the dashboard and a localized FAQ.
- Root layout: `src/app/layout.tsx` defines metadata (Open Graph, Twitter), JSON‑LD, font links, alternate language links, and RTL support (`dir` for Arabic and Urdu).
- i18n middleware: `src/middleware.ts` detects the browser’s language and rewrites/redirects to `/<locale>`.
- Translations: `src/lib/translations.ts` provides meta titles, descriptions, keywords, Open Graph, and Twitter copy for 18 locales.
- Server action: `src/app/actions.ts` performs the URL checks on the server. It validates, normalizes URLs (adds `https://` when missing), uses a 10‑second timeout, follows redirects, and returns a typed result for each URL.
- UI components:
  - `src/components/network-sentinel/SentinelDashboard.tsx`: Coordinates input and results.
  - `src/components/network-sentinel/UrlInputForm.tsx`: Textarea input + JSON upload, validation via `zod` + `react-hook-form`.
  - `src/components/network-sentinel/StatusDisplay.tsx`: Table view with status icon, code, response time, and details.
- Types: `src/lib/types.ts` defines `UrlStatus` shape.
- Styling: `src/app/globals.css` + `tailwind.config.ts` for colors, fonts, animations.

### Data Model
`UrlStatus` returned by the server action:
```
type UrlStatus = {
  url: string;
  status: 'online' | 'offline' | 'error' | 'checking';
  statusCode?: number;
  responseTime?: number;
  error?: string;
};
```

## Getting Started
### Prerequisites
- Node.js 18+
- npm (or another package manager)

### Installation
```bash
npm install
```

### Environment Variables
- `NEXT_PUBLIC_SITE_URL`: Base URL used in canonical, Open Graph, and Twitter image links.
  - Example: `http://localhost:9002` for dev; your domain in production.

### Run Locally
```bash
npm run dev
# Opens on http://localhost:9002
```

### Build & Start
```bash
npm run build
npm start
```

### Typecheck & Lint
```bash
npm run typecheck
npm run lint
```

## Usage
1. Open the app (e.g., `http://localhost:9002/en`).
2. Paste URLs (one per line) or upload a JSON file containing an array of strings.
3. Click “Check Status”.
4. Review the table for:
   - Status: `online` (2xx), `offline` (non‑2xx), or `error` (timeouts/invalid).
   - HTTP Status Code.
   - Response Time (ms).
   - Details (error text, when relevant).

### JSON Upload Format
```json
[
  "https://google.com",
  "https://github.com",
  "example.com"
]
```

## Scripts
- `dev`: Start Next.js dev server with Turbopack on port 9002.
- `build`: Build the production bundle.
- `start`: Run the production server.
- `typecheck`: TypeScript check (no emit).
- `lint`: Run Next.js ESLint.
- `genkit:dev` / `genkit:watch`: Start the Genkit AI dev process (optional).

## Configuration
- `next.config.ts`
  - Ignores TypeScript and ESLint build errors (adjust for stricter CI).
  - Allows remote images from `placehold.co`, `images.unsplash.com`, and `picsum.photos`.
- `tailwind.config.ts`
  - Custom fonts (`Inter`, `Space Grotesk`) and theme tokens.
  - Animations for UI components.
- `components.json`
  - shadcn/ui configuration and path aliases (`@/components`, `@/lib`, `@/hooks`).
- `tsconfig.json`
  - Strict TypeScript settings and path mapping (`@/* -> ./src/*`).
- `src/middleware.ts`
  - Locale detection and routing. Skips internal paths and API/static assets.

## Deployment
### Vercel
- Zero‑config for Next.js. Set `NEXT_PUBLIC_SITE_URL` to your Vercel domain.

### Firebase App Hosting
- The repo includes `apphosting.yaml` for Firebase App Hosting.
- Steps (high‑level):
  - Create a Firebase project and enable App Hosting.
  - Install Firebase CLI and log in.
  - Build the app: `npm run build`.
  - Deploy via Firebase CLI (follow App Hosting docs).

## Accessibility & i18n
- Right‑to‑left languages supported (`dir=rtl` for Arabic and Urdu).
- 18 locales available: `en`, `es`, `pt`, `zh`, `ru`, `ar`, `fr`, `de`, `nl`, `hi`, `bn`, `ur`, `id`, `ja`, `tr`, `te`, `vi`.
- Metadata and JSON‑LD are localized per language.

## Limitations
- Timeout: Each request times out at 10 seconds.
- URL normalization: `https://` is added if missing; invalid URLs are rejected.
- Network behavior: Some sites may block automated requests or return non‑standard responses.

## Project Structure
```
src/
  app/
    <lang>/page.tsx       # Localized pages + FAQ
    layout.tsx            # Root layout, metadata, JSON‑LD
    actions.ts            # Server action (status checks)
  components/
    network-sentinel/     # Dashboard, input, status display
    ui/                   # shadcn/ui components
  lib/
    translations.ts       # i18n meta data
    types.ts              # UrlStatus types
  middleware.ts           # Locale detection/redirect
```

## Contributing
- Fork the repo and create a feature branch.
- Keep changes focused and consistent with existing style.
- Run `npm run typecheck` and `npm run lint` before opening a PR.
- Propose improvements to docs and accessibility where helpful.

---

If you deploy this project publicly, set `NEXT_PUBLIC_SITE_URL` so alternate language links and social cards resolve correctly.