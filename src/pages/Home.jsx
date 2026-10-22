import React, { useEffect, useRef } from 'react';
import Layout, { APP_STORE_URL } from '../components/Layout.jsx';

const features = [
  { title: 'No Plex Pass required', desc: 'Works with any standard Plex account. No subscription needed.' },
  { title: 'Full CarPlay support', desc: 'Home, Artists, Albums, and Playlists tabs with alphabet-jump navigation.' },
  { title: 'Offline downloads', desc: 'Download your entire library or use Dynamic mode to save on space.' },
  { title: 'Lossless streaming', desc: 'FLAC files transcoded to lossless ALAC for bit-perfect iOS playback.' },
  { title: 'Magic Mix', desc: 'An infinite playlist generated from the style and genre of your current track.' },
  { title: 'Infinite Mode', desc: 'Keeps the music going by automatically extending your queue.' },
  { title: 'Word-synced lyrics', desc: 'Lyrics highlight word by word as the song plays, pulled automatically from LRCLIB.' },
  { title: 'Album details', desc: 'See album information, format, bit-depth, and genre details on every album.' },
  { title: 'Cellular-aware', desc: 'Optional cellular transcoding for data-saving.' },
  { title: 'Sound Check', desc: 'Keep audio levels consistent with automatic gain adjustments like ReplayGain.' },
];

const heroShots = [
  { src: '/screenshots/album-details.png', alt: 'Tromme album details screen' },
  { src: '/screenshots/hero-portrait.png', alt: 'Tromme Now Playing screen' },
  { src: '/screenshots/artist-details.png', alt: 'Tromme artist details screen' },
];

const showcase = [
  {
    eyebrow: 'Your library',
    title: 'Browse everything. Find anything.',
    text: 'Artists, albums, songs, and playlists organized the way you expect. Search across your entire collection instantly.',
    img: '/screenshots/library-portrait.png',
    alt: 'Tromme library browsing view',
  },
  {
    eyebrow: 'Playback',
    title: 'Lossless, by default.',
    text: 'High-fidelity streaming with ALAC transcoding for your FLAC files. Optional cellular transcoding. Advanced queue management.',
    img: '/screenshots/playback-portrait.png',
    alt: 'Tromme now playing screen with word-synced lyrics',
  },
  {
    eyebrow: 'Discover',
    title: 'The music keeps going.',
    text: "Magic Mix generates an infinite playlist from what you're playing. Infinite Mode keeps your queue flowing automatically.",
    img: '/screenshots/discover-portrait.png',
    alt: 'Tromme Playing Next queue with shuffle, repeat, and Magic Mix controls',
  },
];

export default function TrommeLanding() {
  const shotsRef = useRef(null);

  // Always start the phone carousel on the middle screenshot.
  useEffect(() => {
    const el = shotsRef.current;
    if (!el) return undefined;
    const center = () => {
      const middle = el.children[1];
      if (!middle) return;
      const left = middle.getBoundingClientRect().left - el.getBoundingClientRect().left + el.scrollLeft;
      el.scrollLeft = left - (el.clientWidth - middle.clientWidth) / 2;
    };
    center();
    const raf = requestAnimationFrame(center);
    const timeout = setTimeout(center, 150);
    window.addEventListener('pageshow', center);
    window.addEventListener('load', center);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
      window.removeEventListener('pageshow', center);
      window.removeEventListener('load', center);
    };
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="px-5 pt-16 md:pt-24 text-center overflow-hidden">
        <div className="max-w-[900px] mx-auto">
          <p className="eyebrow">Tromme for iPhone, iPad and Mac</p>
          <h1 className="font-display mt-4" style={{ fontSize: 'clamp(44px, 8vw, 88px)' }}>
            Your Plex music,
            <br />
            <span style={{ background: 'linear-gradient(90deg, var(--orange-bright), #e8421f)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              played properly.
            </span>
          </h1>
          <p className="mt-6 text-[20px] mx-auto max-w-[620px]" style={{ color: 'var(--ink-soft)', lineHeight: 1.5 }}>
            Lossless streaming, Magic Mix, CarPlay and offline downloads. Free to use, and no Plex Pass required.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={APP_STORE_URL} className="btn">Download on the App Store</a>
            <a href="#features" className="btn btn-ghost">Explore features</a>
          </div>
        </div>
        <div ref={shotsRef} className="hero-shots md:hidden mt-14 -mx-5 flex overflow-x-auto snap-x snap-mandatory gap-3" style={{ scrollbarWidth: 'none', paddingInline: 'calc(50% - 130px)', scrollPaddingInline: 'calc(50% - 130px)' }}>
          {heroShots.map((h) => (
            <img key={h.src} src={h.src} alt={h.alt} className="snap-center flex-shrink-0 block" style={{ width: 260 }} />
          ))}
        </div>
        <div className="hidden md:flex mt-14 mx-auto items-center justify-center gap-6">
          {heroShots.map((h, i) => (
            <img key={h.src} src={h.src} alt={h.alt} className="block" style={{ width: i === 1 ? 360 : 280 }} />
          ))}
        </div>
      </section>

      {/* Bento */}
      <section id="features" className="px-5 py-20" style={{ background: 'var(--paper-deep)' }}>
        <div className="max-w-[1080px] mx-auto">
          <h2 className="font-display text-center" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Built for how you listen.
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {showcase.map((s) => (
              <div key={s.eyebrow} className="rounded-[28px] bg-white pt-9 flex flex-col overflow-hidden" style={{ border: '1px solid var(--line)' }}>
                <div className="px-7">
                  <p className="eyebrow">{s.eyebrow}</p>
                  <h3 className="font-display mt-2 text-[28px]">{s.title}</h3>
                  <p className="mt-3 text-[16px]" style={{ color: 'var(--ink-soft)', lineHeight: 1.5 }}>{s.text}</p>
                </div>
                <div className="mt-auto pt-8 flex justify-center">
                  <img src={s.img} alt={s.alt} className="block w-[72%] max-w-[260px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature list */}
      <section className="px-5 py-20">
        <div className="max-w-[1080px] mx-auto">
          <h2 className="font-display" style={{ fontSize: 'clamp(30px, 4vw, 44px)' }}>
            Everything you'd want.
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {features.map((f) => (
              <div key={f.title} style={{ borderTop: '1px solid var(--line)', paddingTop: 16 }}>
                <h3 className="text-[18px] font-bold">{f.title}</h3>
                <p className="text-[15px] mt-1.5" style={{ color: 'var(--ink-soft)', lineHeight: 1.55 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tromme Plus */}
      <section className="px-5 pb-20">
        <div
          className="max-w-[1080px] mx-auto rounded-[32px] p-8 md:p-14"
          style={{ background: 'var(--ink)', color: 'var(--paper)' }}
        >
          <p className="eyebrow" style={{ color: 'var(--orange-bright)' }}>Tromme Plus</p>
          <h2 className="font-display mt-3" style={{ fontSize: 'clamp(30px, 4vw, 44px)' }}>
            Free to use. Plus if you want more.
          </h2>
          <p className="mt-4 text-[18px] max-w-[620px]" style={{ color: '#d8cdbf', lineHeight: 1.6 }}>
            Everything above is free. An optional Tromme Plus subscription adds premium app icons
            and animated album artwork.
          </p>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="px-5 pb-24">
        <div
          className="max-w-[1080px] mx-auto rounded-[32px] px-6 py-20 text-center"
          style={{ background: 'linear-gradient(160deg, var(--orange-bright), #e8421f)', color: '#fff' }}
        >
          <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>Get Tromme.</h2>
          <p className="mt-4 text-[19px]">Point it at your Plex server and you're listening in seconds.</p>
          <p className="mt-8">
            <a href={APP_STORE_URL} className="btn" style={{ background: '#fff', color: 'var(--ink)' }}>
              Download on the App Store
            </a>
          </p>
          <p className="text-[13px] mt-6">
            Requires iOS/iPadOS 27 or later. A Plex Media Server is required.
          </p>
        </div>
      </section>
    </Layout>
  );
}
