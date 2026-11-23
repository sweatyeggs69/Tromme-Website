import React from 'react';
import { Link } from 'react-router-dom';
import Layout, { DocHeader } from '../components/Layout.jsx';

export default function TrommePrivacy() {
  return (
    <Layout>
      <DocHeader
        title="Privacy Policy"
        intro="Tromme has no accounts, no analytics and no ads. Some features look things up online, and this page explains exactly what they send and where." updated="November 23, 2026"
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
                  No Tromme account, no analytics, no ads and no tracking.
                </KeyPoint>
                <KeyPoint>
                  Your Plex sign-in is stored only on your device and is only ever sent to Plex.
                </KeyPoint>
                <KeyPoint>
                  Your music streams straight from your own Plex Media Server.
                </KeyPoint>
                <KeyPoint>
                  Lyrics, artwork, tags and concert lookups send only artist, album or song
                  names to the services listed below. Never your name, email or library.
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
                  <strong>We do not collect personal information.</strong> There is no
                  Tromme account to create, and we do not keep a record of who you are,
                  what you listen to, or how you use the app.
                </p>
                <p>
                  Some features need information from the internet, such as lyrics, album
                  artwork, genre tags, popular songs and upcoming concerts. To find these,
                  Tromme sends the name of the artist, album or song you are looking at to
                  the services described below. These lookups are not linked to you,
                  your Plex account or your device.
                </p>
              </div>
            </Section>

            <Section heading="How Tromme works">
              <div className="tromme-body">
                <p>
                  When you sign in to Plex within Tromme, you authenticate directly with
                  Plex using Plex's own sign-in flow. Tromme receives an authentication
                  token, which is stored on your device in the iOS Keychain. Tromme also
                  asks plex.tv for your list of servers and, if you use Plex Home, your
                  Home users so you can switch between them.
                </p>
                <p>
                  Once signed in, Tromme talks to your Plex Media Server to browse your
                  library, stream and download music, and report what is playing so Plex
                  can keep your play history and resume position. Plex may route this
                  connection through its own relay when a direct connection to your server
                  is not possible. This traffic never passes through servers operated by us.
                </p>
                <p>
                  If you own the Plex server, optional metadata tools can save artwork,
                  tags, album types and artist details that Tromme finds back to your own
                  server.
                </p>
              </div>
            </Section>

            <Section heading="Data stored on your device">
              <div className="tromme-body">
                <p>
                  The following information is kept on your device and is never sent to us:
                </p>
                <p>
                  <strong>Plex authentication token.</strong> Stored in the iOS Keychain and
                  used only to talk to Plex and your Plex Media Server.
                </p>
                <p>
                  <strong>App preferences.</strong> Your settings, layout choices and per-song
                  adjustments such as lyrics timing and trim markers.
                </p>
                <p>
                  <strong>Downloads and caches.</strong> Songs you download for offline
                  listening, plus cached artwork, lyrics and library details that help the
                  app load quickly.
                </p>
                <p>
                  Uninstalling Tromme removes its downloads, caches and preferences from
                  your device.
                </p>
              </div>
            </Section>

            <Section heading="iCloud sync">
              <div className="tromme-body">
                <p>
                  Tromme uses iCloud to keep your settings, lyrics timing adjustments and
                  trim markers the same across your devices. This data is stored in your
                  own iCloud account by Apple, under Apple's privacy policy. We cannot see
                  it. Your Plex sign-in is not synced. You can turn off iCloud for Tromme in
                  your device's iCloud settings.
                </p>
              </div>
            </Section>

            <Section heading="Analytics and tracking">
              <div className="tromme-body">
                <p>
                  Tromme does not use any analytics services, tracking pixels, advertising
                  SDKs, or third-party data collection tools. We don't know when you open
                  the app, what you listen to, or how you use it, and we prefer it that way.
                </p>
              </div>
            </Section>

            <Section heading="Tromme's own servers">
              <div className="tromme-body">
                <p>
                  Some lookups go through two small services we run, so that the app never
                  needs to hold third-party API keys and results can be cached for everyone.
                </p>
                <p>
                  <strong>api.tromme.app</strong> runs on Cloudflare and passes requests on
                  to Last.fm, Ticketmaster and our artwork service. It receives the artist,
                  album or song names in the request and, like any website, your IP address.
                  Your IP address is used only to limit how many requests one device can
                  make, and is not stored by us. Results are cached by name so repeat
                  lookups are faster. Request logging is turned off.
                </p>
                <p>
                  <strong>Our artwork service</strong> looks up album artwork, animated
                  covers, album types, artist photos and artist logos in the Apple Music
                  catalog. It receives the artist and album names, and your IP address from
                  api.tromme.app so it can apply the same per-device limit, kept in memory
                  only. It stores the artwork results it finds by artist and album name so
                  they can be reused. It does not store IP addresses or anything that
                  identifies you.
                </p>
                <p>
                  Neither service receives your Plex token, your Plex account details, or
                  your library.
                </p>
              </div>
            </Section>

            <Section heading="Third-party services">
              <div className="tromme-body">
                <p>
                  <strong>Plex.</strong> Tromme connects to plex.tv and your Plex Media
                  Server on your behalf. Your use of Plex is governed by Plex's own privacy
                  policy, which you can review at{' '}
                  <a href="https://www.plex.tv/about/privacy-legal/" target="_blank" rel="noopener noreferrer">
                    plex.tv/about/privacy-legal
                  </a>.
                </p>
                <p>
                  <strong>LRCLIB and lrc.red.</strong> To find lyrics, Tromme sends the song
                  title and artist name directly from your device to these lyrics services,
                  which can see your IP address.
                </p>
                <p>
                  <strong>Last.fm.</strong> Popular songs, similar artists and genre or mood
                  tags come from Last.fm through api.tromme.app. Last.fm receives only the
                  artist or album name, and does not see your IP address.
                </p>
                <p>
                  <strong>Ticketmaster.</strong> When you open an artist page, Tromme looks
                  up that artist's upcoming concerts through api.tromme.app. Ticketmaster
                  receives only the artist name, and does not see your IP address or your
                  location. If you open a ticket link, that page is governed by
                  Ticketmaster's own privacy policy.
                </p>
                <p>
                  <strong>Apple.</strong> Tromme is distributed through the Apple App Store.
                  Apple may collect information related to app downloads and crashes as
                  part of its platform. This data is not shared with us in a way that
                  identifies individual users. Apple Music catalog lookups are made by our
                  artwork service, not your device. The artwork and animated covers it finds
                  are then loaded from Apple's servers, which can see your IP address.
                </p>
              </div>
            </Section>

            <Section heading="Purchases">
              <div className="tromme-body">
                <p>
                  Tromme Plus is sold through the App Store. Apple handles payment, and
                  Tromme only checks with Apple on your device whether a purchase or
                  subscription is active. We never see your payment details or Apple
                  Account. You can manage or cancel a subscription in your Apple Account
                  settings.
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