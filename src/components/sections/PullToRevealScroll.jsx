import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../../data/wedding';
import { Calendar, ChevronDown, Sparkles } from 'lucide-react';

export default function PullToRevealScroll({ isUnrolled, onUnroll }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const handlePullTassel = () => {
    if (!isUnrolled) {
      onUnroll();
      try {
        confetti({
          particleCount: 110,
          spread: 90,
          origin: { y: 0.55 },
          colors: ['#C5A059', '#6E1F2F', '#E5C278', '#FAF6F0', '#F59E0B'],
          scalar: 1.2,
        });
      } catch {
        // fallback
      }
    }
  };

  // Real-time countdown
  useEffect(() => {
    const target = new Date(weddingConfig.mainCeremonyDate).getTime();
    const updateTime = () => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const { dateDisplay, venue } = weddingConfig;
  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Jay Singh & Neha Kunwar Wedding (Pheras)')}&dates=20270129T043000Z/20270129T103000Z&details=${encodeURIComponent('Pheras at Kothar, Tehsil Bali, Jila Pali, Rajasthan. Contact: 9867436558')}&location=${encodeURIComponent(venue.fullAddress)}`;

  return (
    <section id="save-the-date-section" className="py-14 px-4 bg-[#FAF6F0] relative overflow-hidden flex flex-col items-center">
      
      {/* Section Header */}
      <div className="text-center mb-6">
        <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-bold">
          SAVE THE DATE
        </span>
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#6E1F2F] mt-1">
          {isUnrolled ? "Auspicious Shubh Muhurat" : "Pull to Reveal Date"}
        </h2>
        {!isUnrolled && (
          <p className="font-montserrat text-xs text-[#2C2223]/60 mt-1 max-w-xs mx-auto">
            Drag down or tap the royal silk tassel to unroll the sacred date & unlock festivities
          </p>
        )}
      </div>

      {/* ROYAL SCROLL MECHANISM */}
      <div className="relative w-full max-w-[340px] sm:max-w-[380px] flex flex-col items-center select-none">
        
        {/* Top Golden Rod with Finials */}
        <div className="relative w-full h-5 rounded-full bg-gradient-to-r from-[#8C6D37] via-[#F3E5AB] to-[#8C6D37] shadow-md z-30 flex items-center justify-between px-1">
          <div className="w-5 h-5 -ml-2.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#8C6D37] border border-[#F3E5AB] shadow-sm"></div>
          <div className="w-5 h-5 -mr-2.5 rounded-full bg-gradient-to-l from-[#C5A059] to-[#8C6D37] border border-[#F3E5AB] shadow-sm"></div>
        </div>

        {/* Scroll Body (Expands dynamically on pull) */}
        <motion.div
          initial={false}
          animate={isUnrolled ? { height: 'auto', opacity: 1 } : { height: '84px', opacity: 0.95 }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="w-[94%] bg-[#FFFDF9] border-x-2 border-[#C5A059]/70 shadow-2xl overflow-hidden relative"
        >
          {/* Gold border insets */}
          <div className="absolute inset-2 border border-[#C5A059]/40 pointer-events-none"></div>

          <div className="p-6 text-center flex flex-col items-center justify-center">
            
            {/* Medallion */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#8C273B] to-[#420E18] p-1 border border-[#C5A059] shadow-sm mb-3">
              <img src="/ornaments/ganesh.svg" alt="Lord Ganesha" className="w-full h-full object-contain filter drop-shadow" />
            </div>

            <p className="font-rozha text-[#6E1F2F] text-xs tracking-widest mb-1">
              ॥ श्री गणेशाय नमः ॥
            </p>

            <span className="text-[11px] font-montserrat uppercase tracking-[0.25em] text-[#C5A059] font-bold">
              {dateDisplay.day}
            </span>

            {/* Giant 29 Date */}
            <div className="my-1">
              <span className="font-playfair text-6xl sm:text-7xl font-bold text-[#6E1F2F] tracking-tight">
                {dateDisplay.date}
              </span>
            </div>

            <h3 className="font-playfair text-2xl font-bold text-[#6E1F2F]">
              {dateDisplay.month}
            </h3>

            <p className="font-montserrat text-sm font-semibold text-[#C5A059] tracking-wider mb-2">
              {dateDisplay.year}
            </p>

            {/* Pheras Timing & Venue */}
            <div className="w-full pt-3 mt-2 border-t border-[#C5A059]/30 text-xs font-montserrat text-[#2C2223]/80 space-y-1">
              <p className="font-bold text-[#6E1F2F] text-sm">
                {dateDisplay.pherasTiming}
              </p>
              <p className="font-medium text-[#2C2223]/70">
                {venue.fullAddress}
              </p>
            </div>

          </div>

          <div className="h-2 w-full bg-gradient-to-r from-[#8C6D37] via-[#F3E5AB] to-[#8C6D37]"></div>
        </motion.div>

        {/* Hanging Royal Tassel (Interactive Pull Handle) */}
        {!isUnrolled && (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            onClick={handlePullTassel}
            className="cursor-pointer -mt-2 z-40 flex flex-col items-center group"
          >
            <img 
              src="/ornaments/tassel.svg" 
              alt="Hanging Tassel" 
              className="w-8 h-20 filter drop-shadow-md group-hover:scale-110 active:scale-95 transition-transform" 
            />
            
            <div className="bg-[#6E1F2F] text-[#FAF6F0] px-4 py-1.5 rounded-full text-[10px] font-montserrat uppercase tracking-widest font-bold shadow-lg -mt-2 group-hover:bg-[#8C273B] transition-colors flex items-center gap-1.5">
              <span>Pull to Open</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            </div>
          </motion.div>
        )}

      </div>

      {/* ONE-LINE COUNTDOWN & CALENDAR (Appears once unrolled) */}
      <AnimatePresence>
        {isUnrolled && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md mx-auto mt-8 text-center px-4"
          >
            <p className="font-cormorant italic text-sm text-[#2C2223]/75 mb-3">
              See you on Friday, 29th January 2027
            </p>

            <div className="flex items-center justify-center gap-2 sm:gap-4 font-montserrat text-xs sm:text-sm font-semibold text-[#6E1F2F] bg-[#FFFDF9] py-3 px-4 rounded-xl border border-[#C5A059]/40 shadow-xs">
              <span>{timeLeft.days} <span className="text-[10px] text-[#C5A059] font-normal">DAYS</span></span>
              <span className="text-[#C5A059]">·</span>
              <span>{String(timeLeft.hours).padStart(2, '0')} <span className="text-[10px] text-[#C5A059] font-normal">HRS</span></span>
              <span className="text-[#C5A059]">·</span>
              <span>{String(timeLeft.minutes).padStart(2, '0')} <span className="text-[10px] text-[#C5A059] font-normal">MIN</span></span>
              <span className="text-[#C5A059]">·</span>
              <span>{String(timeLeft.seconds).padStart(2, '0')} <span className="text-[10px] text-[#C5A059] font-normal">SEC</span></span>
            </div>

            <div className="mt-4">
              <a
                href={gcalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#6E1F2F] to-[#8C273B] text-[#FAF6F0] text-xs font-montserrat uppercase tracking-wider font-semibold shadow-sm hover:brightness-110 active:scale-95 transition-all"
              >
                <Calendar className="w-3.5 h-3.5 text-[#E5C278]" />
                <span>Add to Google Calendar</span>
              </a>
            </div>

            {/* Prompt to scroll to newly unlocked cards */}
            <div className="mt-8 flex flex-col items-center justify-center text-[#6E1F2F]/70 animate-bounce">
              <span className="text-[10px] font-montserrat uppercase tracking-widest font-semibold">
                Explore Themed Festivities Below
              </span>
              <ChevronDown className="w-4 h-4 text-[#C5A059] mt-0.5" />
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
