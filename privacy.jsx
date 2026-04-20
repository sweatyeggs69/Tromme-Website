import React, { useState, useEffect } from 'react';

export default function TrommePrivacy() {
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
          <a href="/" className="flex items-center gap-2">
            <TrommeLogo size={20} />
            <span className="text-[17px]" style={{ fontWeight: 500, letterSpacing: '-0.01em', color: '#1d1d1f' }}>
              Tromme
            </span>
          </a>
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
            <a href="/" style={{ color: '#86868b' }} className="hover:opacity-70 transition-opacity">
              Tromme
            </a>
            <span className="mx-2">›</span>
            <span>Privacy Policy</span>
          </div>

          <h1
            className="tromme-display mt-6"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600 }}
          >
            Privacy Policy
          </h1>
          <p
            className="mt-4 text-[19px]"
            style={{ color: '#86868b', letterSpacing: '-0.003em', lineHeight: 1.4 }}
          >
            Tromme is designed to respect your privacy. We don't collect your data — because we don't need to.
          </p>
          <p
            className="mt-6 text-[13px]"
            style={{ color: '#86868b', letterSpacing: '0.01em' }}
          >
            Last updated: April 20, 2026
          </p>
        </div>
      </section>

      {/* KEY POINTS CARD */}
      <section className="px-5 pb-12">
        <div className="max-w-[720px] mx-auto">
          <div
            className="rounded-[20px] p-8"
            style={{ background: '#fff', border: '0.5px solid rgba(0,0,0,0.06)' }}
          >
            <h2
              className="text-[13px] mb-5"
              style={{
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: '#86868b',
                textTransform: 'uppercase',
              }}
            >
              The short version
            </h2>
            <div className="space-y-4">
              <KeyPoint>
                Tromme does not collect, store, or transmit your personal data.
              </KeyPoint>
              <KeyPoint>
                Your Plex server credentials are stored only on your device.
              </KeyPoint>
              <KeyPoint>
                No analytics. No tracking. No third-party services.
              </KeyPoint>
              <KeyPoint>
                Your music stays between you and your Plex Media Server.
              </KeyPoint>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED POLICY */}
      <section className="px-5 pb-24">
        <div className="max-w-[720px] mx-auto space-y-14">

          <Section heading="Information we collect">
            <div className="tromme-body">
              <p>
                <strong>We do not collect any personal information.</strong> Tromme is
                designed to operate entirely on your device and in direct communication
                with the Plex Media Server that you choose to connect to.
              </p>
              <p>
                There are no accounts to create with Tromme. There is no server
                infrastructure operated by us that processes your listening activity,
                library contents, or usage patterns.
              </p>
            </div>
          </Section>

          <Section heading="How Tromme works">
            <div className="tromme-body">
              <p>
                When you sign in to Plex within Tromme, you authenticate directly with
                Plex's servers using Plex's own authentication flow. Tromme receives an
                authentication token which is stored securely on your device using the
                iOS Keychain.
              </p>
              <p>
                Once authenticated, Tromme communicates directly with your Plex Media
                Server to browse your library and stream your music. This traffic does
                not pass through any servers operated by us.
              </p>
            </div>
          </Section>

          <Section heading="Data stored on your device">
            <div className="tromme-body">
              <p>
                The following information is stored locally on your device and is never
                transmitted to us:
              </p>
              <p>
                <strong>Plex authentication token</strong> — stored in the iOS Keychain,
                used only to communicate with your Plex Media Server.
              </p>
              <p>
                <strong>App preferences</strong> — your settings, favorites, and
                cellular transcoding preferences, stored in standard iOS app storage.
              </p>
              <p>
                <strong>Cached metadata and artwork</strong> — album art and library
                metadata may be cached locally to improve performance. This is retrieved
                from your Plex server, not from us.
              </p>
              <p>
                All of this data is removed when you uninstall Tromme.
              </p>
            </div>
          </Section>

          <Section heading="Analytics and tracking">
            <div className="tromme-body">
              <p>
                Tromme does not use any analytics services, tracking pixels, advertising
                SDKs, or third-party data collection tools. We don't know when you open
                the app, what you listen to, or how you use it — and we prefer it that way.
              </p>
            </div>
          </Section>

          <Section heading="Third-party services">
            <div className="tromme-body">
              <p>
                <strong>Plex Media Server.</strong> Tromme connects to Plex on your behalf.
                Your use of Plex is governed by Plex's own privacy policy, which you can
                review at{' '}
                <a href="https://www.plex.tv/about/privacy-legal/privacy-policy/" target="_blank" rel="noopener noreferrer">
                  plex.tv/about/privacy-legal/privacy-policy
                </a>.
              </p>
              <p>
                <strong>Apple.</strong> Tromme is distributed through the Apple App Store.
                Apple may collect information related to app downloads and crashes as
                part of its platform. This data is not shared with us in a way that
                identifies individual users.
              </p>
            </div>
          </Section>

          <Section heading="Children's privacy">
            <div className="tromme-body">
              <p>
                Tromme is not directed at children under 13. Because we do not collect
                personal information from anyone, we do not knowingly collect information
                from children.
              </p>
            </div>
          </Section>

          <Section heading="Changes to this policy">
            <div className="tromme-body">
              <p>
                If this policy changes, the updated version will be posted on this page
                with a revised "Last updated" date. Material changes will be highlighted
                in the app's release notes.
              </p>
            </div>
          </Section>

          <Section heading="Contact">
            <div className="tromme-body">
              <p>
                Questions about this privacy policy? Reach out at{' '}
                <a href="mailto:support@tromme.app">support@tromme.app</a>.
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
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms of Use</a>
            <a href="/support" className="hover:underline">Support</a>
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

function Section({ heading, children }) {
  return (
    <div>
      <h2 className="section-heading">{heading}</h2>
      {children}
    </div>
  );
}

function KeyPoint({ children }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
        style={{ background: '#ff6600' }}
      />
      <div
        className="text-[16px]"
        style={{ color: '#1d1d1f', letterSpacing: '-0.003em', lineHeight: 1.5, fontWeight: 500 }}
      >
        {children}
      </div>
    </div>
  );
}