import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{
        background: '#fbfbfd',
        color: '#1d1d1f',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <main id="main" tabIndex={-1} className="outline-none flex-1 flex items-center justify-center px-5 py-24">
        <div className="max-w-[560px] text-center">
          <p className="text-[13px]" style={{ color: '#6e6e73', fontWeight: 500, letterSpacing: '0.01em' }}>
            Error 404
          </p>
          <h1
            className="mt-4"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, letterSpacing: '-0.022em', lineHeight: 1.05 }}
          >
            Page not found
          </h1>
          <p className="mt-4 text-[19px]" style={{ color: '#424245', lineHeight: 1.4 }}>
            The page you are looking for does not exist or has moved.
          </p>
          <p className="mt-8">
            <Link
              to="/"
              className="inline-block text-[17px] px-5 py-2 rounded-full"
              style={{ background: '#b34400', color: '#fff' }}
            >
              Go to the Tromme home page
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
