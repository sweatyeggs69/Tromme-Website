// External services the Tromme app depends on, checked the way the app reaches
// them: through the Cloudflare Worker proxy at api.tromme.app, except lyrics,
// which the app calls directly (LRCLIB rate limited the shared proxy IPs). Shared by the
// status page and scripts/check-status.mjs.
//
// `url(nonce)` builds the request. The nonce goes into a query value the proxy
// forwards, so every check misses the proxy's edge cache and exercises the real
// upstream; a cached hit would hide an outage. `ok(status)` decides health from
// the response status (the script) while the browser can only tell whether the
// host answered, because the proxy sends no CORS headers.
// No API keys belong here: the proxy holds them.
export const HISTORY_URL =
  'https://raw.githubusercontent.com/sweatyeggs69/Tromme-Website/status-data/history.json';

const API = 'https://api.tromme.app';
const up200 = (s) => s === 200;
// 404 is a normal "nothing found" answer from lyrics and artwork lookups.
const upOr404 = (s) => s === 200 || s === 404;
// The proxy rate limits per IP (429); that says nothing about the upstream.
const withLimit = (fn) => (s) => s === 429 || fn(s);

export const services = [
  {
    id: 'api',
    name: 'Tromme API',
    url: () => `${API}/`,
    // The Worker answers unknown paths with 404 JSON, which proves it is running.
    ok: (s) => s === 404,
  },
  {
    id: 'artwork',
    name: 'Animated artwork',
    url: (n) => `${API}/artwork/search?artist=Daft+Punk&album=${encodeURIComponent(`Status ${n}`)}`,
    ok: withLimit(upOr404),
  },
  {
    id: 'lyrics-word',
    name: 'Synced lyrics (lrc.red)',
    url: (n) => `https://lrc.red/search.json?q=${encodeURIComponent(`tromme status ${n}`)}`,
    ok: withLimit(upOr404),
  },
  {
    id: 'lyrics-lrclib',
    name: 'Lyrics (LRCLIB)',
    url: (n) => `https://lrclib.net/api/search?q=${encodeURIComponent(`tromme status ${n}`)}`,
    ok: withLimit(upOr404),
  },
  {
    id: 'lastfm',
    name: 'Last.fm',
    url: (n) => `${API}/lastfm/top-tracks?artist=${encodeURIComponent(`tromme status ${n}`)}`,
    ok: withLimit(up200),
  },
  {
    id: 'ticketmaster',
    name: 'Ticketmaster',
    url: (n) => `${API}/ticketmaster/events?keyword=${encodeURIComponent(`tromme status ${n}`)}`,
    ok: withLimit(up200),
  },
  {
    id: 'plex',
    name: 'Plex sign-in',
    url: () => 'https://plex.tv/',
    ok: (s) => s < 500,
  },
];
