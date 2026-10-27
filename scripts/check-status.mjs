// Checks every service in src/statusServices.js and appends the result to a
// history file. Run by .github/workflows/status.yml.
// Usage: node scripts/check-status.mjs <path to history.json>
import fs from 'node:fs';
import { services } from '../src/statusServices.js';

const file = process.argv[2];
if (!file) throw new Error('Usage: node scripts/check-status.mjs <history.json>');

const KEEP_DAYS = 30;
const KEEP_SAMPLES = 96;
const TIMEOUT_MS = 10000;

async function check(service) {
  const started = Date.now();
  try {
    const res = await fetch(service.url, {
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { 'user-agent': 'tromme-status/1.0 (+https://tromme.app/status)' },
    });
    const ms = Date.now() - started;
    if (res.status >= 500) return { state: 'down', ms };
    if (service.read) {
      const body = await res.json().catch(() => null);
      return { state: service.read(body), ms };
    }
    return { state: 'up', ms };
  } catch {
    return { state: 'down', ms: Date.now() - started };
  }
}

let history = { updated: null, services: {} };
try {
  history = JSON.parse(fs.readFileSync(file, 'utf8'));
} catch {}

const now = new Date();
const day = now.toISOString().slice(0, 10);
const cutoff = new Date(now.getTime() - KEEP_DAYS * 86400000).toISOString().slice(0, 10);

const results = await Promise.all(services.map(async (s) => [s.id, await check(s)]));
for (const [id, { state, ms }] of results) {
  const entry = (history.services[id] ??= { days: {}, recent: [] });
  // days[date] = [checks that were up, degraded checks, total checks]
  const d = (entry.days[day] ??= [0, 0, 0]);
  if (state === 'up') d[0]++;
  if (state === 'degraded') d[1]++;
  d[2]++;
  entry.recent.push([now.toISOString(), state, ms]);
  entry.recent = entry.recent.slice(-KEEP_SAMPLES);
  for (const k of Object.keys(entry.days)) if (k < cutoff) delete entry.days[k];
  console.log(`${id}: ${state} ${ms}ms`);
}
for (const id of Object.keys(history.services)) {
  if (!services.some((s) => s.id === id)) delete history.services[id];
}
history.updated = now.toISOString();
fs.writeFileSync(file, JSON.stringify(history));
