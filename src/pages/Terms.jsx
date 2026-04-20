import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TrommeTerms() {
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
            <span>Terms of Use</span>
          </div>

          <h1
            className="tromme-display mt-6"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600 }}
          >
            Terms of Use
          </h1>
          <p
            className="mt-4 text-[19px]"
            style={{ color: '#86868b', letterSpacing: '-0.003em', lineHeight: 1.4 }}
          >
            The rules for using Tromme. By installing or using the app, you agree to these terms.
          </p>
          <p
            className="mt-6 text-[13px]"
            style={{ color: '#86868b', letterSpacing: '0.01em' }}
          >
            Last updated: April 20, 2026
          </p>
        </div>
      </section>

      {/* DETAILED TERMS */}
      <section className="px-5 pb-24">
        <div className="max-w-[720px] mx-auto space-y-14">

          <Section heading="Acceptance of terms">
            <div className="tromme-body">
              <p>
                By downloading, installing, or using Tromme (the "app"), you agree to be
                bound by these Terms of Use. If you do not agree, do not use the app.
              </p>
            </div>
          </Section>

          <Section heading="License">
            <div className="tromme-body">
              <p>
                Tromme grants you a personal, non-exclusive, non-transferable, revocable
                license to install and use the app on devices you own or control, solely
                for your own personal, non-commercial use.
              </p>
              <p>
                You may not copy, modify, distribute, sell, or lease any part of the app,
                or reverse engineer or attempt to extract its source code, except to the
                extent that these restrictions are prohibited by applicable law.
              </p>
            </div>
          </Section>

          <Section heading="Your Plex server and content">
            <div className="tromme-body">
              <p>
                Tromme is a client for Plex Media Server. It connects to servers you
                authenticate with and plays back media that you or the server's owner
                have made available to you.
              </p>
              <p>
                <strong>You are responsible</strong> for ensuring you have the right to
                store and play the media on your Plex server. Tromme does not provide,
                host, or license any music or media content.
              </p>
            </div>
          </Section>

          <Section heading="Not affiliated with Plex">
            <div className="tromme-body">
              <p>
                Tromme is an independent third-party app and is not developed, endorsed,
                sponsored by, or affiliated with Plex, Inc. "Plex" and "Plex Media Server"
                are trademarks of Plex, Inc.
              </p>
            </div>
          </Section>

          <Section heading="No warranty">
            <div className="tromme-body">
              <p>
                The app is provided <strong>"as is"</strong> and <strong>"as available"</strong>,
                without warranties of any kind, either express or implied, including but
                not limited to merchantability, fitness for a particular purpose, or
                non-infringement.
              </p>
              <p>
                We do not warrant that the app will be uninterrupted, error-free, secure,
                or compatible with any particular Plex server configuration or future
                version of Plex Media Server.
              </p>
            </div>
          </Section>

          <Section heading="Limitation of liability">
            <div className="tromme-body">
              <p>
                To the maximum extent permitted by law, in no event shall Tromme, its
                developers, or its contributors be liable for any indirect, incidental,
                special, consequential, or punitive damages, or any loss of data, arising
                out of or in connection with your use of the app.
              </p>
            </div>
          </Section>

          <Section heading="Third-party services">
            <div className="tromme-body">
              <p>
                Tromme is distributed through the Apple App Store and is subject to
                Apple's terms in addition to these. Your use of Plex Media Server is
                governed by Plex's own terms, which you can review at{' '}
                <a href="https://www.plex.tv/about/privacy-legal/terms-of-service/" target="_blank" rel="noopener noreferrer">
                  plex.tv/about/privacy-legal/terms-of-service
                </a>.
              </p>
            </div>
          </Section>

          <Section heading="Changes to these terms">
            <div className="tromme-body">
              <p>
                We may update these terms from time to time. The updated version will be
                posted on this page with a revised "Last updated" date. Continued use of
                the app after changes take effect constitutes acceptance of the new terms.
              </p>
            </div>
          </Section>

          <Section heading="Termination">
            <div className="tromme-body">
              <p>
                The license granted in these terms ends automatically if you fail to
                comply with any of them. You may stop using the app and delete it from
                your devices at any time.
              </p>
            </div>
          </Section>

          <Section heading="Contact">
            <div className="tromme-body">
              <p>
                Questions about these terms? Reach out at{' '}
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
