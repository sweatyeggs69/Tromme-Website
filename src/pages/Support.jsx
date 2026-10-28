import React from 'react';
import { Link } from 'react-router-dom';
import Layout, { DocHeader } from '../components/Layout.jsx';

export default function TrommeSupport() {
  return (
    <Layout>
      <DocHeader
        title="Support"
        intro="Answers to common questions, plus a direct line to us when you need more help."
      />

              {/* CONTACT CARD */}
        <section className="px-5 pb-12">
          <div className="max-w-[720px] mx-auto">
            <div
              className="rounded-[16px] p-8"
              style={{ background: '#fff', border: '1px solid var(--line)' }}
            >
              <h2
                className="text-[13px] mb-4"
                style={{
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--ink-soft)',
                  textTransform: 'uppercase',
                }}
              >
                Get in touch
              </h2>
              <p
                className="text-[22px]"
                style={{ color: 'var(--ink)', fontWeight: 600, letterSpacing: '-0.01em' }}
              >
                Email us at{' '}
                <a
                  href="mailto:support@tromme.app"
                  style={{ color: 'var(--orange)', textDecoration: 'none' }}
                >
                  support@tromme.app
                </a>
              </p>
              <p
                className="mt-3 text-[15px]"
                style={{ color: 'var(--ink-soft)', lineHeight: 1.5 }}
              >
                We read every message. Please include your iOS version, Plex Media Server
                version, and a description of what you expected to happen.
              </p>
              <p
                className="mt-3 text-[15px]"
                style={{ color: 'var(--ink-soft)', lineHeight: 1.5 }}
              >
                Feature requests go to{' '}
                <a
                  href="mailto:feature@tromme.app"
                  style={{ color: 'var(--orange)', textDecoration: 'none' }}
                >
                  feature@tromme.app
                </a>
                .
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
                  running iOS/iPadOS 27 or later.
                </p>
                <p>
                  <strong>2. Sign in to Plex.</strong> Tap <em>Sign in</em> and authenticate
                  directly with Plex. Tromme uses Plex's own sign-in flow, so your password
                  is never seen by the app.
                </p>
                <p>
                  <strong>3. Pick a server.</strong> Tromme will list the Plex Media Servers
                  available to your account. Choose the one that hosts your music library.
                </p>
                <p>
                  <strong>4. Start listening.</strong> Browse by artist, album, song, or
                  playlist, or start a Magic Mix from anything that's playing.
                </p>
              </div>
            </Section>

            <Section heading="Frequently asked questions">
              <div className="space-y-6">
                <FAQ question="Do I need Plex Pass?">
                  No. Tromme works with any standard Plex account.
                </FAQ>
                <FAQ question="Why can't Tromme see my server?">
                  Make sure your device and Plex Media Server can reach each other on the
                  network. If you're away from home, remote access must be enabled on the
                  server. Signing out and back into Tromme will refresh the server list.
                </FAQ>
                <FAQ question="Why does a song play at a lower quality on cellular?">
                  Check and make sure cellular transcoding is not toggled in Settings.
                  On Wi-Fi, playback defaults to lossless.
                </FAQ>
                <FAQ question="Does Tromme support FLAC?">
                  Yes, but with somne limitations. FLAC files on your server are transcoded
                  to lossless ALAC for playback on iOS and iPadOS.
                </FAQ>
                <FAQ question="Is CarPlay supported?">
                  Yes. Tromme ships full CarPlay support.
                </FAQ>
                <FAQ question="What is Magic Mix?">
                  Magic Mix generates an infinite playlist based on the style and genre
                  of the track you're playing.
                </FAQ>
                <FAQ question="Is my data private?">
                  Yes. Tromme does not collect, store, or transmit any personal data.
                  Your Plex token is stored in the iOS Keychain on your device. See the{' '}
                  <Link to="/privacy/">Privacy Policy</Link> for details.
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
                  <strong>The Magic Mix button is grayed out.</strong> Magic Mix references the
                  Similar Artists defined in the Artist page. This data is usually provided by
                  Plex's music metadata agent, If the playing track's artist does not have any
                  similar artists listed, Magic Mix will be disabled. The more music you have in
                  your library, the better.
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
                  <a href="mailto:feature@tromme.app">feature@tromme.app</a>. We read
                  every email and the best ideas tend to make it into the app.
                </p>
              </div>
            </Section>

            <Section heading="System requirements">
              <div className="tromme-body">
                <p>
                  Tromme requires iOS or iPadOS 27 or later and a Plex Media Server that
                  you can sign in to.
                </p>
              </div>
            </Section>

          </div>
        </section>
    </Layout>
  );
}

/* ───── Components ───── */

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
        style={{ fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--ink)', marginBottom: 6 }}
      >
        {question}
      </h3>
      <div className="tromme-body">
        <p>{children}</p>
      </div>
    </div>
  );
}
