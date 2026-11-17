import React from 'react';
import { Link } from 'react-router-dom';

export default function OutageBanner() {
  return (
    <div role="status" style={{ background: 'var(--orange)', color: '#fff' }}>
      <p className="max-w-[1080px] mx-auto px-5 py-2.5 text-[14px] font-medium text-center" style={{ lineHeight: 1.4 }}>
        The animated artwork and Apple Music metadata service is currently down. We are working on it.{' '}
        <Link to="/status" className="underline underline-offset-4">View status</Link>
      </p>
    </div>
  );
}
