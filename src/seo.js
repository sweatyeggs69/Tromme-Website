// Per-route head metadata. scripts/prerender.js writes these into each page's
// static HTML, and AppRoutes keeps document.title in sync on client navigation.
export const SITE_URL = 'https://tromme.app';
export const SITE_NAME = 'Tromme';
const IMAGE = `${SITE_URL}/screenshots/tromme-icon.png`;

export const pages = {
  '/': {
    title: 'Tromme - Music Player for Plex',
    description:
      'Tromme is a dedicated iPhone and iPad music player for Plex Media Server with lossless streaming, CarPlay and offline downloads. No Plex Pass required.',
  },
  '/support': {
    title: 'Support - Tromme',
    description:
      'Get help with Tromme: answers to common questions, troubleshooting tips for connecting to Plex Media Server, and how to contact support.',
  },
  '/privacy': {
    title: 'Privacy Policy - Tromme',
    description:
      'Tromme does not collect, store or transmit personal data. Read how the app handles your Plex sign-in, library data and downloads.',
  },
  '/terms': {
    title: 'Terms of Use - Tromme',
    description:
      'The terms for downloading and using Tromme, the Plex music player for iPhone and iPad, including the license, your Plex content and contact details.',
  },
};

export const notFound = {
  title: 'Page Not Found - Tromme',
  description: 'This page could not be found. Go back to Tromme, the dedicated music player for Plex Media Server.',
};

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function structuredData(path, page) {
  const url = `${SITE_URL}${path}`;
  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: 'en-US',
  };
  const graph = [
    website,
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      inLanguage: 'en-US',
    },
  ];
  if (path === '/') {
    graph.push({
      '@type': 'MobileApplication',
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      description: page.description,
      operatingSystem: 'iOS 26, iPadOS 26',
      applicationCategory: 'MusicApplication',
      image: IMAGE,
      downloadUrl: 'https://apps.apple.com/us/app/tromme/id6762415193',
    });
  }
  // Escape "<" so the JSON can never close the script element early.
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}

// Returns the head tags for one route. Pass path = null for the 404 page.
export function headTags(path) {
  const page = path === null ? notFound : pages[path];
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
  ];
  if (path === null) {
    tags.push('<meta name="robots" content="noindex" />');
  } else {
    const url = `${SITE_URL}${path}`;
    tags.push(
      `<link rel="canonical" href="${url}" />`,
      '<meta property="og:type" content="website" />',
      `<meta property="og:site_name" content="${SITE_NAME}" />`,
      `<meta property="og:title" content="${title}" />`,
      `<meta property="og:description" content="${description}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:image" content="${IMAGE}" />`,
      '<meta name="twitter:card" content="summary_large_image" />',
      `<meta name="twitter:title" content="${title}" />`,
      `<meta name="twitter:description" content="${description}" />`,
      `<meta name="twitter:image" content="${IMAGE}" />`,
      `<script type="application/ld+json">${structuredData(path, page)}</script>`,
    );
  }
  return tags.join('\n    ');
}
