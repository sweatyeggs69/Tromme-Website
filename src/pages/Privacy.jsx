import React from 'react';
import { Link } from 'react-router-dom';
import Layout, { DocHeader } from '../components/Layout.jsx';

export default function TrommePrivacy() {
  return (
    <Layout>
      <DocHeader
        title="Privacy Policy"
        intro="Tromme is designed to respect your privacy. We don't collect your data, because we don't need to." updated="April 20, 2026"
      />

              {/* KEY POINTS CARD */}
        <section className="px-5 pb-12">
          <div className="max-w-[720px] mx-auto">
            <div
              className="rounded-[16px] p-8"
              style={{ background: '#fff', border: '1px solid var(--line)' }}
            >
              <h2
                className="text-[13px] mb-5"
                style={{
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--ink-soft)',
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
                  <a href="https://www.plex.tv/about/privacy-legal/" target="_blank" rel="noopener noreferrer">
                    plex.tv/about/privacy-legal
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

function KeyPoint({ children }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
        style={{ background: 'var(--orange)' }}
      />
      <div
        className="text-[16px]"
        style={{ color: 'var(--ink)', letterSpacing: '-0.003em', lineHeight: 1.5, fontWeight: 500 }}
      >
        {children}
      </div>
    </div>
  );
}