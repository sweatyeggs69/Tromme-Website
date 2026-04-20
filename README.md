# Tromme Website

Marketing site for Tromme, built as a Vite + React SPA and deployed to **Cloudflare Workers** as a static-assets-only Worker.

## Stack

- Vite + React 18
- React Router (for `/` and `/privacy`)
- Tailwind CSS
- Cloudflare Workers Static Assets (no custom Worker script)

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
├── wrangler.toml           # Cloudflare Workers config (assets-only)
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Local development

```bash
npm install
npm run dev            # Vite dev server on http://localhost:5173
```

## Deploy to Cloudflare Workers

Build, then deploy. Vite outputs to `dist/`, and `wrangler.toml` points the assets binding at that directory with SPA fallback enabled:

```bash
npm run build
npx wrangler deploy --assets ./dist --compatibility-date 2026-03-16
```

Or use the shortcut:

```bash
npm run deploy
```

### Notes

- `not_found_handling = "single-page-application"` in `wrangler.toml` makes client-side routes (e.g. `/privacy`) fall back to `index.html` on a hard refresh. That setting must live in `wrangler.toml` — there is no CLI flag for it.
- If you run `wrangler deploy` without `--assets`, it picks up the `[assets].directory` value from `wrangler.toml`, which is also `./dist`. The `--assets ./dist` flag is optional but harmless.
- Don't run `wrangler deploy --assets .` from the repo root — that would upload the source tree instead of the built site.

## Custom domain

After the first deploy, attach your domain in the Cloudflare dashboard: **Workers & Pages → tromme-website → Settings → Domains & Routes**.
