// Renders every route to static HTML after `vite build`, so the page content
// (headings, landmarks, text) is in the HTML before any JavaScript runs.
// "/" becomes dist/index.html; "/privacy" becomes dist/privacy.html, which
// Cloudflare serves at /privacy.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, routes } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) {
  throw new Error(`Could not find ${placeholder} in dist/index.html`);
}

for (const url of routes) {
  const html = template.replace(placeholder, `<div id="root">${render(url)}</div>`);
  const file = url === '/' ? 'index.html' : `${url.slice(1)}.html`;
  fs.writeFileSync(path.join(dist, file), html);
  console.log(`prerendered ${url} -> dist/${file}`);
}

fs.rmSync(ssrDir, { recursive: true, force: true });
