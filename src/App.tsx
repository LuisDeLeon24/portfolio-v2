import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AwardsPage from './pages/AwardsPage';
import { Layout } from './components/Layout';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  return (
    <Router>
      <ScrollToTop />
      <Layout lang={lang} setLang={setLang}>
        <Routes>
          <Route path="/" element={<HomePage lang={lang} />} />
          <Route path="/projects" element={<ProjectsPage lang={lang} />} />
          <Route path="/awards" element={<AwardsPage lang={lang} />} />
        </Routes>
      </Layout>
    </Router>
  );
}
