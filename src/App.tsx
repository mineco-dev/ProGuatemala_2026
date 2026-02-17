import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import GDPRBar from './components/GDPRBar';
import LoadingScreen from './components/LoadingScreen';
import ChatBot from './components/ChatBot';

const Home = lazy(() => import('./pages/Home'));
const WhyGuatemala = lazy(() => import('./pages/WhyGuatemala'));
const Services = lazy(() => import('./pages/Services'));
const StrategicSectors = lazy(() => import('./pages/StrategicSectors'));
const SectorDetail = lazy(() => import('./pages/SectorDetail'));
const LegalIncentives = lazy(() => import('./pages/LegalIncentives'));
const Resources = lazy(() => import('./pages/Resources'));
const News = lazy(() => import('./pages/News'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can adjust this or tie it to actual loading events)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <LanguageProvider>
        <LoadingScreen />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Suspense fallback={<LoadingScreen />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/why-guatemala" element={<WhyGuatemala />} />
                <Route path="/services" element={<Services />} />
                <Route path="/strategic-sectors" element={<StrategicSectors />} />
                <Route path="/strategic-sectors/:sector" element={<SectorDetail />} />
                <Route path="/legal-incentives" element={<LegalIncentives />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/news" element={<News />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <GDPRBar />
          <ChatBot />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
