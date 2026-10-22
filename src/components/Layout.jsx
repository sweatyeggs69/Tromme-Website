import React from 'react';
import { Link } from 'react-router-dom';

export const APP_STORE_URL = 'https://apps.apple.com/us/app/tromme/id6762415193';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="max-w-[1080px] mx-auto px-5 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/apple-touch-icon.png"
              alt=""
              width={32}
              height={32}
              style={{ borderRadius: 8, display: 'block' }}
            />
            <span className="font-display text-[24px]">Tromme</span>
          </Link>
          <nav className="flex items-center gap-6 text-[15px] font-medium" aria-label="Main">
            <Link to="/support" className="hidden sm:inline hover:underline underline-offset-4">Support</Link>
            <a href={APP_STORE_URL} className="btn" style={{ padding: '8px 16px', fontSize: 14 }}>
              Get the app
            </a>
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1} className="outline-none flex-1">
        {children}
      </main>

      <footer style={{ borderTop: '1px solid var(--line)', background: 'var(--paper-deep)' }}>
        <div className="max-w-[1080px] mx-auto px-5 py-10 grid gap-6 md:grid-cols-[1fr_auto] items-start">
          <div>
            <p className="font-display text-[22px]">Tromme</p>
            <p className="text-[13px] mt-2 max-w-[520px]" style={{ color: 'var(--ink-soft)', lineHeight: 1.6 }}>
              Copyright © 2026 Tromme. All rights reserved. Not affiliated with Plex, Inc.
              Plex and Plex Media Server are trademarks of Plex, Inc.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] font-medium">
            <Link to="/privacy" className="hover:underline underline-offset-4">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline underline-offset-4">Terms of Use</Link>
            <Link to="/support" className="hover:underline underline-offset-4">Support</Link>
            <a href="mailto:support@tromme.app" className="hover:underline underline-offset-4">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function DocHeader({ title, intro, updated }) {
  return (
    <section className="px-5 pt-16 pb-10">
      <div className="max-w-[720px] mx-auto">
        <p className="eyebrow">Tromme</p>
        <h1 className="font-display mt-3" style={{ fontSize: 'clamp(40px, 6vw, 60px)' }}>{title}</h1>
        <p className="mt-4 text-[19px]" style={{ color: 'var(--ink-soft)', lineHeight: 1.5 }}>{intro}</p>
        {updated && (
          <p className="mt-5 text-[13px]" style={{ color: 'var(--ink-soft)' }}>Last updated: {updated}</p>
        )}
      </div>
    </section>
  );
}
