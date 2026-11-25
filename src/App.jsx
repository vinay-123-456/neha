import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { weddingConfig } from './data/wedding';
import BookOpeningScreen from './components/sections/BookOpeningScreen';
import RoyalHeroPage from './components/sections/RoyalHeroPage';
import PullToRevealScroll from './components/sections/PullToRevealScroll';
import ThemedFestivitiesCards from './components/sections/ThemedFestivitiesCards';
import LocationClosing from './components/sections/LocationClosing';
import AudioController from './components/common/AudioController';

export default function App() {
  const [bookOpened, setBookOpened] = useState(false);
  const [isScrollUnrolled, setIsScrollUnrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(weddingConfig.audio.src);
    audioRef.current.loop = true;
    audioRef.current.preload = 'auto';

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleOpenBook = () => {
    setBookOpened(true);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn('Audio play restricted by browser:', err);
          setIsPlaying(false);
        });
    }
  };

  const handleSkipBook = () => {
    setBookOpened(true);
    setIsScrollUnrolled(true);
  };

  const handleTasselUnroll = () => {
    setIsScrollUnrolled(true);
    // Smooth scroll down to reveal festivities after brief moment
    setTimeout(() => {
      const el = document.getElementById('festivities-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1200);
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn('Could not resume audio:', err));
    }
  };

  const scrollToScrollSection = () => {
    const el = document.getElementById('save-the-date-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2C2223] font-montserrat relative selection:bg-[#6E1F2F] selection:text-[#FAF6F0]">
      
      {/* 1. 3D Velvet Book Opening Screen */}
      <AnimatePresence>
        {!bookOpened && (
          <BookOpeningScreen
            onOpen={handleOpenBook}
            onSkip={handleSkipBook}
          />
        )}
      </AnimatePresence>

      {/* Floating Audio Controller */}
      {bookOpened && (
        <AudioController isPlaying={isPlaying} toggleAudio={toggleAudio} />
      )}

      {/* Main Single-Scroll Guest Experience */}
      <main className="relative mx-auto max-w-lg shadow-2xl min-h-screen bg-[#FAF6F0]">
        
        {/* 2. Hero Screen (100svh, Couple names, lineage, Ganesh medallion) */}
        <RoyalHeroPage onScrollNext={scrollToScrollSection} />

        {/* 3. Pull to Reveal Royal Scroll with Tassel */}
        <PullToRevealScroll 
          isUnrolled={isScrollUnrolled} 
          onUnroll={handleTasselUnroll} 
        />

        {/* 4 & 5. Unlocked ONLY after pulling the tassel */}
        <AnimatePresence>
          {isScrollUnrolled && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            >
              {/* Bespoke Themed Ceremony Cards (Haldi in yellow, Mehendi in green, Sangeet in purple, Pheras in red/gold) */}
              <ThemedFestivitiesCards />

              {/* Location, How to Reach, Contact 9867436558 & Family Sign-off */}
              <LocationClosing />
            </motion.div>
          )}
        </AnimatePresence>

      </main>

    </div>
  );
}
