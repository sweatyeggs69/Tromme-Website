import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import Support from './pages/Support.jsx';
import NotFound from './pages/NotFound.jsx';
import { pages, notFound } from './seo.js';

// Keeps the document title in step with client-side navigation. The full head
// for each route is in its prerendered HTML.
function DocumentTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = pages[pathname.replace(/\/+$/, '') || '/'] || notFound;
    document.title = page.title;
  }, [pathname]);
  return null;
}

export default function AppRoutes() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <DocumentTitle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
