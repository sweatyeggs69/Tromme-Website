import React from 'react';
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
  return (
    <Layout>
      {/* Hero */}
      <section className="px-5 pt-14 md:pt-20 pb-16 overflow-hidden">
        <div className="max-w-[1080px] mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <p className="eyebrow">A music player for Plex</p>
            <h1 className="font-display mt-4" style={{ fontSize: 'clamp(44px, 7vw, 84px)' }}>
              Your Plex music, played properly.
            </h1>
            <p className="mt-6 text-[19px] max-w-[520px]" style={{ color: 'var(--ink-soft)', lineHeight: 1.55 }}>
              Lossless streaming, Magic Mix, CarPlay and offline downloads for iPhone, iPad and Mac.
              Free to use, and no Plex Pass required.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={APP_STORE_URL} className="btn">Download on the App Store</a>
              <a href="#features" className="btn btn-ghost">See what it does</a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div
              aria-hidden="true"
              className="absolute inset-x-6 top-10 bottom-0 rounded-[40px]"
              style={{ background: 'linear-gradient(160deg, var(--orange-bright), #e8421f)' }}
            />
            <img
              src="/screenshots/hero-portrait.png"
              alt="Tromme Now Playing screen"
              className="relative block w-[78%] max-w-[360px]"
              style={{ marginTop: 0 }}
            />
          </div>
        </div>
      </section>

      {/* Screenshot strip */}
      <section aria-label="Screenshots" style={{ background: 'var(--ink)' }} className="py-14">
        <div
          className="shots max-w-[1080px] mx-auto px-5 flex gap-6 overflow-x-auto snap-x md:justify-center"
          style={{ scrollbarWidth: 'none' }}
        >
          <img
            src="/screenshots/album-details.png"
            alt="Tromme album details screen"
            className="snap-center flex-shrink-0 w-[230px] md:w-[300px] block"
          />
          <img
            src="/screenshots/artist-details.png"
            alt="Tromme artist details screen"
            className="snap-center flex-shrink-0 w-[230px] md:w-[300px] block"
          />
        </div>
      </section>

      {/* Showcase */}
      <section id="features" className="px-5 py-20">
        <div className="max-w-[1080px] mx-auto space-y-20 md:space-y-28">
          {showcase.map((s, i) => (
            <div key={s.eyebrow} className="grid md:grid-cols-2 gap-10 items-center">
              <div className={i % 2 ? 'md:order-2' : ''}>
                <p className="eyebrow">{s.eyebrow}</p>
                <h2 className="font-display mt-3" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)' }}>
                  {s.title}
                </h2>
                <p className="mt-4 text-[18px] max-w-[460px]" style={{ color: 'var(--ink-soft)', lineHeight: 1.6 }}>
                  {s.text}
                </p>
              </div>
              <div
                className={`rounded-[28px] pt-10 flex justify-center overflow-hidden ${i % 2 ? 'md:order-1' : ''}`}
                style={{ background: 'var(--paper-deep)' }}
              >
                <img src={s.img} alt={s.alt} className="block w-[62%] max-w-[280px]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature list */}
      <section className="px-5 pb-20">
        <div className="max-w-[1080px] mx-auto">
          <h2 className="font-display" style={{ fontSize: 'clamp(30px, 4vw, 44px)' }}>
            Everything you'd want.
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {features.map((f) => (
              <div key={f.title} style={{ borderTop: '2px solid var(--ink)', paddingTop: 14 }}>
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
          className="max-w-[1080px] mx-auto rounded-[28px] p-8 md:p-12"
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
          className="max-w-[1080px] mx-auto rounded-[28px] px-6 py-16 text-center"
          style={{ background: 'linear-gradient(160deg, var(--orange-bright), #e8421f)', color: '#1b1612' }}
        >
          <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>Get Tromme.</h2>
          <p className="mt-4 text-[19px]">Point it at your Plex server and you're listening in seconds.</p>
          <p className="mt-8">
            <a href={APP_STORE_URL} className="btn" style={{ background: 'var(--ink)' }}>
              Download on the App Store
            </a>
          </p>
          <p className="text-[13px] mt-6">
            Requires iOS/iPadOS 26 or later. A Plex Media Server is required.
          </p>
        </div>
      </section>
    </Layout>
  );
}
