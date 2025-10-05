import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import NotFound from './pages/NotFound';
import KeyboardHelp from './components/KeyboardHelp';
import { useTheme } from './hooks/useTheme';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { useCursorGlow } from './hooks/useCursorGlow';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const { showHelp, setShowHelp } = useKeyboardShortcuts();
  useCursorGlow();
  const location = useLocation();

  // Close help modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showHelp) {
        setShowHelp(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showHelp, setShowHelp]);

  const showHeaderFooter = location.pathname !== '/404';

  return (
    <div className="app">
      <AnimatedBackground />
      {showHeaderFooter && <Header theme={theme} toggleTheme={toggleTheme} />}
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {showHeaderFooter && <Footer />}
      
      <KeyboardHelp show={showHelp} onClose={() => setShowHelp(false)} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
