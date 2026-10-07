// Renders every route to static HTML after `vite build`, so the page content
// (headings, landmarks, text) is in the HTML before any JavaScript runs.
// "/" becomes dist/index.html; "/privacy" becomes dist/privacy.html, which
// Cloudflare serves at /privacy. Each page gets its own title, description,
// canonical and JSON-LD from src/seo.js. dist/404.html is served with a 404
// status for unknown paths (wrangler.toml not_found_handling = "404-page").
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, routes, headTags } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) {
  throw new Error(`Could not find ${placeholder} in dist/index.html`);
}
const headPlaceholder = '<!--head-meta-->';
if (!template.includes(headPlaceholder)) {
  throw new Error(`Could not find ${headPlaceholder} in dist/index.html`);
}

function page(url, head) {
  return template
    .replace(headPlaceholder, head)
    .replace(placeholder, `<div id="root">${render(url)}</div>`);
}

for (const url of routes) {
  const html = page(url, headTags(url));
  const file = url === '/' ? 'index.html' : `${url.slice(1)}.html`;
  fs.writeFileSync(path.join(dist, file), html);
  console.log(`prerendered ${url} -> dist/${file}`);
}

fs.writeFileSync(path.join(dist, '404.html'), page('/404', headTags(null)));
console.log('prerendered 404 -> dist/404.html');

fs.rmSync(ssrDir, { recursive: true, force: true });
