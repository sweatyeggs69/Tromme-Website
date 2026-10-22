import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';

export default function NotFound() {
  return (
    <Layout>
      <div className="flex items-center justify-center px-5 py-28">
        <div className="max-w-[560px] text-center">
          <p className="eyebrow">Error 404</p>
          <h1 className="font-display mt-4" style={{ fontSize: 'clamp(40px, 6vw, 60px)' }}>
            Page not found
          </h1>
          <p className="mt-4 text-[19px]" style={{ color: 'var(--ink-soft)', lineHeight: 1.5 }}>
            The page you are looking for does not exist or has moved.
          </p>
          <p className="mt-8">
            <Link to="/" className="btn">Go to the Tromme home page</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
