import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SplashScreen } from './components/SplashScreen';
import { Hero } from './sections/Hero';
import { Investment } from './sections/Investment';
import { Features } from './sections/Features';
import { Screenshots } from './sections/Screenshots';
import { QuickStats } from './sections/QuickStats';
import { Footer } from './sections/Footer';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onComplete={handleSplashComplete} />
        ) : (
          <div key="main" className="main-content">
            <Hero />
            <Features />
            <Screenshots />
            <Investment />
            <QuickStats />
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
