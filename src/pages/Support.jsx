import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TrommeSupport() {
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
        .tromme-body {
          font-size: 17px;
          line-height: 1.5;
          letter-spacing: -0.003em;
          color: #424245;
        }
        .tromme-body p { margin: 0 0 1.2em 0; }
        .tromme-body p:last-child { margin-bottom: 0; }
        .tromme-body a {
          color: #ff6600;
          text-decoration: none;
        }
        .tromme-body a:hover { text-decoration: underline; }
        .tromme-body strong { color: #1d1d1f; font-weight: 600; }
        .section-heading {
          font-size: 28px;
          font-weight: 600;
          letter-spacing: -0.015em;
          color: #1d1d1f;
          margin-bottom: 16px;
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
          <Link to="/" className="flex items-center gap-2">
            <TrommeLogo size={20} />
            <span className="text-[17px]" style={{ fontWeight: 500, letterSpacing: '-0.01em', color: '#1d1d1f' }}>
              Tromme
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-7 text-[12px]" style={{ color: '#1d1d1f', opacity: 0.88 }}>
            <a href="/#overview" className="hover:opacity-60 transition-opacity">Overview</a>
            <a href="/#features" className="hover:opacity-60 transition-opacity">Features</a>
            <a href="/#download" className="hover:opacity-60 transition-opacity">Download</a>
          </div>
          <a
            href="/#download"
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

      {/* HEADER */}
      <section className="pt-28 pb-12 px-5">
        <div className="max-w-[720px] mx-auto">
          <div
            className="text-[13px]"
            style={{ color: '#86868b', fontWeight: 500, letterSpacing: '0.01em' }}
          >
            <Link to="/" style={{ color: '#86868b' }} className="hover:opacity-70 transition-opacity">
              Tromme
            </Link>
            <span className="mx-2">›</span>
            <span>Support</span>
          </div>

          <h1
            className="tromme-display mt-6"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600 }}
          >
            Support
          </h1>
          <p
            className="mt-4 text-[19px]"
            style={{ color: '#86868b', letterSpacing: '-0.003em', lineHeight: 1.4 }}
          >
            Answers to common questions, plus a direct line to us when you need more help.
          </p>
        </div>
      </section>

      {/* CONTACT CARD */}
      <section className="px-5 pb-12">
        <div className="max-w-[720px] mx-auto">
          <div
            className="rounded-[20px] p-8"
            style={{ background: '#fff', border: '0.5px solid rgba(0,0,0,0.06)' }}
          >
            <h2
              className="text-[13px] mb-4"
              style={{
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: '#86868b',
                textTransform: 'uppercase',
              }}
            >
              Get in touch
            </h2>
            <p
              className="text-[22px]"
              style={{ color: '#1d1d1f', fontWeight: 600, letterSpacing: '-0.01em' }}
            >
              Email us at{' '}
              <a
                href="mailto:support@tromme.app"
                style={{ color: '#ff6600', textDecoration: 'none' }}
              >
                support@tromme.app
              </a>
            </p>
            <p
              className="mt-3 text-[15px]"
              style={{ color: '#86868b', lineHeight: 1.5 }}
            >
              We read every message. Please include your iOS version, Plex Media Server
              version, and a description of what you expected to happen.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-5 pb-24">
        <div className="max-w-[720px] mx-auto space-y-14">

          <Section heading="Getting started">
            <div className="tromme-body">
              <p>
                <strong>1. Install Tromme</strong> from the App Store on your iPhone or iPad
                running iOS/iPadOS 26 or later.
              </p>
              <p>
                <strong>2. Sign in to Plex.</strong> Tap <em>Sign in</em> and authenticate
                directly with Plex. Tromme uses Plex's own sign-in flow — your password
                is never seen by the app.
              </p>
              <p>
                <strong>3. Pick a server.</strong> Tromme will list the Plex Media Servers
                available to your account. Choose the one that hosts your music library.
              </p>
              <p>
                <strong>4. Start listening.</strong> Browse by artist, album, song, or
                playlist — or pull up a Magic Mix from anything that's playing.
              </p>
            </div>
          </Section>

          <Section heading="Frequently asked questions">
            <div className="space-y-6">
              <FAQ question="Do I need Plex Pass?">
                No. Tromme works with any standard Plex account — no subscription
                required.
              </FAQ>
              <FAQ question="Why can't Tromme see my server?">
                Make sure your device and Plex Media Server can reach each other on the
                network. If you're away from home, remote access must be enabled on the
                server. Signing out and back in will refresh the server list.
              </FAQ>
              <FAQ question="Why does a song play at a lower quality on cellular?">
                Cellular transcoding is optional and can be toggled in Settings. When
                enabled, Tromme asks your Plex server to transcode audio over cellular
                to protect your data plan. On Wi-Fi, playback defaults to lossless.
              </FAQ>
              <FAQ question="Does Tromme support FLAC?">
                Yes. FLAC files on your server are transcoded to lossless ALAC for
                bit-perfect playback on iOS. The original files on your server are not
                modified.
              </FAQ>
              <FAQ question="Does CarPlay work?">
                Yes. Tromme ships full CarPlay support with Home, Artists, Albums, and
                Playlists tabs, plus alphabet-jump navigation for large libraries.
              </FAQ>
              <FAQ question="What is Magic Mix?">
                Magic Mix generates an infinite playlist based on the style and genre
                of the track you're playing. Enable Infinite Mode in the queue and
                Tromme will keep adding new tracks automatically.
              </FAQ>
              <FAQ question="Is my data private?">
                Yes. Tromme does not collect, store, or transmit any personal data.
                Your Plex token is stored in the iOS Keychain on your device. See the{' '}
                <Link to="/privacy">Privacy Policy</Link> for details.
              </FAQ>
            </div>
          </Section>

          <Section heading="Troubleshooting">
            <div className="tromme-body">
              <p>
                <strong>Playback won't start.</strong> Confirm the track plays from
                another Plex client. If it does, force-quit Tromme and try again.
                Restarting your Plex Media Server resolves most transient issues.
              </p>
              <p>
                <strong>Library looks empty or out of date.</strong> Your Plex server
                needs to have finished scanning your music library. Pull to refresh in
                Tromme after the scan completes.
              </p>
              <p>
                <strong>Can't sign in.</strong> Check that you can sign in at{' '}
                <a href="https://app.plex.tv" target="_blank" rel="noopener noreferrer">
                  app.plex.tv
                </a>{' '}
                in a browser. If that works but Tromme doesn't, sign out of Tromme and
                try again.
              </p>
              <p>
                <strong>Still stuck?</strong> Email{' '}
                <a href="mailto:support@tromme.app">support@tromme.app</a> with your
                iOS version, Plex Media Server version, and any error messages.
              </p>
            </div>
          </Section>

          <Section heading="Feature requests and feedback">
            <div className="tromme-body">
              <p>
                Tromme is built by listeners, for listeners. If there's a feature you'd
                love to see, send us a note at{' '}
                <a href="mailto:support@tromme.app">support@tromme.app</a>. We read
                every email and the best ideas tend to make it into the app.
              </p>
            </div>
          </Section>

          <Section heading="System requirements">
            <div className="tromme-body">
              <p>
                Tromme requires iOS or iPadOS 26 or later and a Plex Media Server that
                you can sign in to. Any standard Plex account works — a Plex Pass
                subscription is not required.
              </p>
            </div>
          </Section>

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
            <Link to="/support" className="hover:underline">Support</Link>
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
    <img
      src="/apple-touch-icon.png"
      alt="Tromme"
      width={size}
      height={size}
      style={{ borderRadius: '22%', display: 'block' }}
    />
  );
}

function Section({ heading, children }) {
  return (
    <div>
      <h2 className="section-heading">{heading}</h2>
      {children}
    </div>
  );
}

function FAQ({ question, children }) {
  return (
    <div>
      <h3
        className="text-[17px]"
        style={{ fontWeight: 600, letterSpacing: '-0.01em', color: '#1d1d1f', marginBottom: 6 }}
      >
        {question}
      </h3>
      <div className="tromme-body">
        <p>{children}</p>
      </div>
    </div>
  );
}
