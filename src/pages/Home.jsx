import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TrommeLanding() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: '#fbfbfd',
        color: '#1d1d1f',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <style>{`
        html { scroll-behavior: smooth; }
        *::selection { background: #ff6600; color: #fff; }
        .tromme-display {
          font-weight: 600;
          letter-spacing: -0.022em;
          line-height: 1.05;
        }
        .tromme-subheading {
          font-weight: 400;
          letter-spacing: -0.003em;
          line-height: 1.3;
          color: #86868b;
        }
      `}</style>

      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(251,251,253,0.8)' : 'rgba(251,251,253,0.6)',
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          borderBottom: '0.5px solid rgba(0,0,0,0.08)',
        }}
      >
        <div className="max-w-[980px] mx-auto px-5 h-11 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrommeLogo size={20} />
            <span className="text-[17px]" style={{ fontWeight: 500, letterSpacing: '-0.01em' }}>
              Tromme
            </span>
          </div>
          <div className="hidden md:flex items-center gap-7 text-[12px]" style={{ color: '#1d1d1f', opacity: 0.88 }}>
            <a href="#overview" className="hover:opacity-60 transition-opacity">Overview</a>
            <a href="#features" className="hover:opacity-60 transition-opacity">Features</a>
            <a href="#download" className="hover:opacity-60 transition-opacity">Download</a>
          </div>
          <a
            href="#download"
            className="text-[12px] px-3 py-1 rounded-full transition-all"
            style={{
              background: '#ff6600',
              color: '#fff',
              fontWeight: 400,
            }}
          >
            Download
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="overview" className="pt-28 pb-20 px-5">
        <div className="max-w-[980px] mx-auto text-center">
          <h1
            className="tromme-display mx-auto"
            style={{
              fontSize: 'clamp(40px, 7vw, 80px)',
              fontWeight: 600,
            }}
          >
            Tromme.
          </h1>
          <h2
            className="tromme-display mx-auto mt-2"
            style={{
              fontSize: 'clamp(28px, 4.5vw, 56px)',
              fontWeight: 600,
              color: '#86868b',
            }}
          >
            Your Plex music, at last.
          </h2>
          <p
            className="tromme-subheading mx-auto mt-5"
            style={{
              fontSize: 'clamp(19px, 2vw, 24px)',
              maxWidth: '640px',
            }}
          >
            A dedicated music player for Plex Media Server.
            Lossless streaming, Magic Mix, CarPlay — no Plex Pass required.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="#download"
              className="text-[17px] transition-opacity hover:opacity-85"
              style={{
                color: '#ff6600',
                fontWeight: 400,
                letterSpacing: '-0.01em',
              }}
            >
              Download on the App Store ›
            </a>
            <a
              href="#features"
              className="text-[17px] transition-opacity hover:opacity-85"
              style={{
                color: '#ff6600',
                fontWeight: 400,
                letterSpacing: '-0.01em',
              }}
            >
              Learn more ›
            </a>
          </div>

          {/* Hero screenshot */}
          <div className="mt-16 mx-auto" style={{ maxWidth: '360px' }}>
            <img
              src="/screenshots/hero-portrait.png"
              alt="Tromme Now Playing screen"
              className="w-full rounded-[18px] block"
            />
          </div>
        </div>
      </section>

      {/* LIBRARY — FULL WIDTH LIGHT CARD */}
      <section id="features" className="px-5 pb-6">
        <SectionCard>
          <div className="px-6 pt-16 pb-4 md:pt-20 text-center">
            <EyebrowLabel>Your library</EyebrowLabel>
            <h2
              className="tromme-display mx-auto mt-3"
              style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 600, maxWidth: '720px' }}
            >
              Browse everything.
              <br />
              <span style={{ color: '#86868b' }}>Find anything.</span>
            </h2>
            <p
              className="tromme-subheading mx-auto mt-4"
              style={{ fontSize: '19px', maxWidth: '560px' }}
            >
              Artists, albums, songs, and playlists — organized the way you expect.
              Search across your entire collection instantly.
            </p>
          </div>
          <div className="mx-auto mt-4" style={{ maxWidth: '300px' }}>
            <img
              src="/screenshots/library-portrait.png"
              alt="Tromme library browsing view"
              className="w-full rounded-[18px] block"
            />
          </div>
        </SectionCard>
      </section>

      {/* TWO UP — PLAYBACK + DISCOVER */}
      <section className="px-5 pb-6">
        <div className="max-w-[980px] mx-auto grid md:grid-cols-2 gap-6">
          <SectionCard small>
            <div className="px-6 pt-12 pb-4 text-center">
              <EyebrowLabel>Playback</EyebrowLabel>
              <h3
                className="tromme-display mt-2"
                style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 600 }}
              >
                Lossless, by default.
              </h3>
              <p className="tromme-subheading mt-3" style={{ fontSize: '17px' }}>
                High-fidelity streaming with ALAC transcoding for your FLAC files.
                Optional cellular transcoding. Advanced queue management.
              </p>
            </div>
            <div className="mx-auto mt-4" style={{ maxWidth: '240px' }}>
              <img
                src="/screenshots/playback-portrait.png"
                alt="Tromme playback and queue view"
                className="w-full rounded-[18px] block"
              />
            </div>
          </SectionCard>

          <SectionCard small>
            <div className="px-6 pt-12 pb-4 text-center">
              <EyebrowLabel>Discover</EyebrowLabel>
              <h3
                className="tromme-display mt-2"
                style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 600 }}
              >
                The music keeps going.
              </h3>
              <p className="tromme-subheading mt-3" style={{ fontSize: '17px' }}>
                Magic Mix generates an infinite playlist from what you're playing.
                Infinite Mode keeps your queue flowing automatically.
              </p>
            </div>
            <div className="mx-auto mt-4" style={{ maxWidth: '240px' }}>
              <img
                src="/screenshots/discover-portrait.png"
                alt="Tromme Magic Mix and discover view"
                className="w-full rounded-[18px] block"
              />
            </div>
          </SectionCard>
        </div>
      </section>

      {/* FEATURE LIST */}
      <section className="px-5 py-20">
        <div className="max-w-[980px] mx-auto">
          <h2
            className="tromme-display text-center mx-auto"
            style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 600, maxWidth: '720px' }}
          >
            Everything you'd want.
            <br />
            <span style={{ color: '#86868b' }}>Nothing you wouldn't.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-10 mt-14 max-w-[780px] mx-auto">
            {features.map((f) => (
              <div key={f.title}>
                <h3 className="text-[17px]" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>
                  {f.title}
                </h3>
                <p
                  className="text-[15px] mt-1.5"
                  style={{ color: '#86868b', lineHeight: 1.45, letterSpacing: '-0.003em' }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="download" className="px-5 py-20 text-center">
        <div className="max-w-[680px] mx-auto">
          <h2
            className="tromme-display mx-auto"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600 }}
          >
            Get Tromme.
          </h2>
          <p
            className="tromme-subheading mx-auto mt-4"
            style={{ fontSize: '19px' }}
          >
            Point it at your Plex server and you're listening in seconds.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all hover:opacity-90"
              style={{
                background: '#ff6600',
                color: '#fff',
                fontSize: '15px',
                fontWeight: 400,
              }}
            >
              <AppleIcon />
              Download on the App Store
            </a>
          </div>
          <p className="text-[12px] mt-6" style={{ color: '#86868b' }}>
            Requires iOS 16 or later. Plex Media Server required.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-5 py-6 border-t"
        style={{ borderColor: 'rgba(0,0,0,0.08)', background: '#f5f5f7' }}
      >
        <div className="max-w-[980px] mx-auto">
          <p className="text-[12px]" style={{ color: '#86868b', lineHeight: 1.5 }}>
            Copyright © 2026 Tromme. All rights reserved. Not affiliated with Plex, Inc.
            Plex and Plex Media Server are trademarks of Plex, Inc.
          </p>
          <div className="flex flex-wrap gap-5 mt-3 text-[12px]" style={{ color: '#424245' }}>
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms of Use</Link>
            <a href="mailto:support@tromme.app" className="hover:underline">Support</a>
            <a href="mailto:support@tromme.app" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ───── Components ───── */

function TrommeLogo({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="7" fill="#1d1d1f" />
      <circle cx="16" cy="16" r="6.5" stroke="#fff" strokeWidth="1.6" fill="none" />
      <circle cx="16" cy="16" r="1.6" fill="#fff" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor">
      <path d="M11.6 8.4c0-2.3 1.9-3.4 2-3.4-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8-.7 0-1.9-.8-3.1-.8C2.1 3.2.6 4.1-.2 5.6c-1.4 2.4-.4 6 1 8 .7 1 1.5 2 2.5 2 1 0 1.4-.6 2.6-.6s1.6.6 2.6.6c1.1 0 1.8-1 2.5-1.9.8-1.1 1.1-2.2 1.1-2.3-.1 0-2.5-1-2.5-3zM9.5 1.9c.6-.7 1-1.7.9-2.7-.8 0-1.8.6-2.4 1.3-.5.6-1 1.6-.9 2.5.9.1 1.8-.5 2.4-1.1z" />
    </svg>
  );
}

function EyebrowLabel({ children, dark }) {
  return (
    <div
      style={{
        fontSize: '19px',
        fontWeight: 600,
        color: dark ? '#a1a1a6' : '#86868b',
        letterSpacing: '-0.003em',
      }}
    >
      {children}
    </div>
  );
}

function SectionCard({ children, dark, small }) {
  return (
    <div
      className="max-w-[980px] mx-auto rounded-[28px] overflow-hidden"
      style={{
        background: dark ? '#1d1d1f' : '#fff',
        color: dark ? '#f5f5f7' : '#1d1d1f',
        minHeight: small ? '560px' : '640px',
      }}
    >
      {children}
    </div>
  );
}

const features = [
  { title: 'No Plex Pass required', desc: 'Works with any standard Plex account. No subscription needed.' },
  { title: 'Lossless ALAC streaming', desc: 'FLAC files transcoded to lossless ALAC for bit-perfect iOS playback.' },
  { title: 'Magic Mix', desc: 'An infinite playlist generated from the style and genre of your current track.' },
  { title: 'Infinite Mode', desc: 'Keeps the music going by automatically extending your queue.' },
  { title: 'Full CarPlay support', desc: 'Home, Artists, Albums, and Playlists tabs with alphabet-jump navigation.' },
  { title: 'Detailed artist pages', desc: 'Top songs, albums, singles, and EPs — organized the way you think.' },
  { title: 'Codec & genre info', desc: 'See format, bit-depth, and genre details on every album.' },
  { title: 'Cellular-aware', desc: 'Optional cellular transcoding protects your data plan on the go.' },
];