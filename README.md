# Tromme Website

Marketing site for Tromme, built as a Vite + React SPA and deployed to **Cloudflare Workers** via the Workers Static Assets binding.

## Stack

- Vite + React 18
- React Router (for `/` and `/privacy`)
- Tailwind CSS
- Cloudflare Workers + Static Assets (`[assets]` binding)

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
├── worker/
│   └── index.js            # Worker entry — forwards to ASSETS
├── wrangler.toml           # Cloudflare Workers config
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Local development

```bash
npm install
npm run dev            # Vite dev server on http://localhost:5173
```

To run the built site through Wrangler (simulates Workers runtime):

```bash
npm run build
npm run wrangler:dev
```

## Deploy to Cloudflare Workers

1. Install Wrangler and log in once:
   ```bash
   npx wrangler login
   ```
2. Build and deploy:
   ```bash
   npm run deploy
   ```

`npm run deploy` runs `vite build` (which outputs to `dist/`) and then `wrangler deploy`. The Worker in `worker/index.js` simply forwards every request to the `ASSETS` binding, and `wrangler.toml` sets `not_found_handling = "single-page-application"` so client-side routes (e.g. `/privacy`) are served `index.html` on a hard refresh.

## Custom domain

After the first deploy, attach your domain in the Cloudflare dashboard: **Workers & Pages → tromme-website → Settings → Domains & Routes**.
