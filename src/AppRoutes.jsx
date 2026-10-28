import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import Support from './pages/Support.jsx';
import Status from './pages/Status.jsx';
import NotFound from './pages/NotFound.jsx';
import { pages, notFound } from './seo.js';

// Keeps the document title in step with client-side navigation. The full head
// for each route is in its prerendered HTML.
function DocumentTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = pages[pathname.replace(/\/*$/, '/')] || notFound;
    document.title = page.title;
  }, [pathname]);
  return null;
}

// Client-side navigation keeps the old scroll position, so reset it on each
// route change (or jump to the #anchor when the link has one).
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function AppRoutes() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <DocumentTitle />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/support" element={<Support />} />
        <Route path="/status" element={<Status />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
