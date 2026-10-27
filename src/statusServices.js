// External services the Tromme app depends on. Shared by the status page
// (browser checks) and scripts/check-status.mjs (scheduled history checks).
// `url` is what gets requested. `cors: true` means the response is readable
// from a browser, so `read` can look inside it; otherwise the browser only
// learns whether the host answered at all.
export const HISTORY_URL =
  'https://raw.githubusercontent.com/sweatyeggs69/Tromme-Website/status-data/history.json';

export const services = [
  {
    id: 'artwork',
    name: 'Animated artwork',
    detail: 'Apple Music animated album covers',
    url: 'https://amaa.tromme.app/api/v1/status',
    cors: true,
    // Returns { status: 'operational' | 'degraded' }. Only an explicit
    // "degraded" counts; an unreadable body still means the service answered.
    read: (body) => (body && body.status === 'degraded' ? 'degraded' : 'up'),
  },
  {
    id: 'lyrics-word',
    name: 'Synced lyrics (lrc.red)',
    detail: 'Word and line synced lyrics',
    url: 'https://lrc.red/',
  },
  {
    id: 'lyrics-lrclib',
    name: 'Lyrics (LRCLIB)',
    detail: 'Synced and plain lyrics fallback',
    url: 'https://lrclib.net/api/search?q=tromme',
  },
  {
    id: 'lastfm',
    name: 'Last.fm',
    detail: 'Popular track markers',
    // No API key on purpose: Last.fm answers with a 4xx "invalid key" error
    // when it is healthy, and only a 5xx or no answer counts as a problem.
    url: 'https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&format=json',
  },
  {
    id: 'plex',
    name: 'Plex sign-in',
    detail: 'plex.tv account and server discovery',
    url: 'https://plex.tv/',
  },
];
