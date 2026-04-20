# Tromme Website

Marketing site for Tromme, built as a Vite + React SPA.

The Cloudflare Worker and deployment are configured outside this repo (the repo only produces the static build).

## Stack

- Vite + React 18
- React Router (`/` and `/privacy`)
- Tailwind CSS

## Project layout

```
.
├── index.html              # Vite entry
├── src/
│   ├── main.jsx            # React/router bootstrap
│   ├── index.css           # Tailwind entry
│   └── pages/
│       ├── Home.jsx        # "/"
│       └── Privacy.jsx     # "/privacy"
├── public/
│   └── screenshots/        # static images served at /screenshots/*
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Local development

```bash
npm install
npm run dev            # Vite dev server on http://localhost:5173
```

## Build

```bash
npm run build          # output goes to ./dist
```

## Deploy

Deployment is handled by the existing Cloudflare Worker setup. Build first, then point Wrangler's `--assets` flag at `./dist` (not `.`, which would upload the source tree):

```bash
npm run build
npx wrangler deploy --assets ./dist --compatibility-date 2026-03-16
```

### SPA routing note

Because `/privacy` is a client-side route, a hard refresh or deep link to it needs the Worker to fall back to `index.html` on 404s. Make sure the Worker's Static Assets config has **Not Found Handling** set to **Single-page application** (Cloudflare dashboard → Workers & Pages → your worker → Settings → Static Assets). Without that, `/privacy` will 404 on direct load.
