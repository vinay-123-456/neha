import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { MailOpen, Sparkles, Volume2 } from 'lucide-react';
import { weddingConfig } from '../../data/wedding';

export default function EnvelopeScreen({ onOpen, onSkip }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);

    // Fire celebratory gold & crimson confetti
    try {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A059', '#7A1C28', '#E5C278', '#FAF6F0']
      });
    } catch {
      // ignore in environments without canvas
    }

    // Allow opening animation to play, then reveal main site
    setTimeout(() => {
      onOpen();
    }, 900);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF6F0] p-4 overflow-hidden"
    >
      {/* Background Palace Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#7A1C28 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Outer Card / Envelope Frame */}
      <div className="relative w-full max-w-md mx-auto">
        
        {/* Envelope Body */}
        <motion.div
          animate={isOpening ? { scale: 0.96, y: -20, opacity: 0 } : { scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl bg-gradient-to-b from-[#58111A] via-[#7A1C28] to-[#3D0B12] p-8 text-center text-[#FAF6F0] shadow-2xl border-2 border-[#C5A059]/60"
        >
          {/* Subtle Arch Ornament Top */}
          <div className="flex justify-center mb-4">
            <img 
              src="/ornaments/palace-arch.svg" 
              alt="Royal Arch" 
              className="h-10 w-auto opacity-80"
            />
          </div>

          {/* Auspicious Shloka */}
          <p className="font-rozha text-[#E5C278] text-sm tracking-wide mb-1">
            {weddingConfig.spiritualQuote.sanskrit}
          </p>

          <p className="text-xs font-outfit uppercase tracking-widest text-[#FAF6F0]/70 mb-5">
            Royal Wedding Invitation
          </p>

          {/* Monogram Wax Seal Button */}
          <div className="my-6 flex justify-center">
            <button
              onClick={handleOpenClick}
              disabled={isOpening}
              className="group relative flex flex-col items-center justify-center transition-transform active:scale-95 hover:scale-105 cursor-pointer focus:outline-none"
              aria-label="Tap wax seal to open wedding invitation"
            >
              {/* Outer Golden Glow Ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#C5A059] via-[#E5C278] to-[#8C6D37] opacity-60 blur-md group-hover:opacity-90 transition-opacity"></div>
              
              {/* Wax Seal Circle */}
              <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#9E2A38] to-[#58111A] border-4 border-[#C5A059] shadow-xl">
                <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-widest text-[#FAF6F0] drop-shadow">
                  {weddingConfig.couple.monogram}
                </span>
                <span className="text-[10px] font-outfit uppercase tracking-wider text-[#E5C278] mt-0.5">
                  Tap to Open
                </span>
              </div>
            </button>
          </div>

          {/* Couple Names Preview */}
          <h1 className="font-cinzel text-2xl sm:text-3xl font-semibold tracking-wide text-[#FAF6F0] mt-4">
            {weddingConfig.couple.bride.firstName} <span className="text-[#E5C278] font-cormorant italic text-xl">&</span> {weddingConfig.couple.groom.firstName}
          </h1>

          <p className="text-xs sm:text-sm font-outfit text-[#FAF6F0]/80 mt-2 tracking-wider">
            {weddingConfig.dateDisplayString}
          </p>
          <p className="text-xs font-outfit text-[#E5C278] mt-1">
            {weddingConfig.venue.area}, {weddingConfig.couple.bride.city}
          </p>

          {/* Open Action Button */}
          <div className="mt-8">
            <button
              onClick={handleOpenClick}
              disabled={isOpening}
              className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C5A059] via-[#E5C278] to-[#C5A059] py-3.5 px-6 font-outfit text-xs font-semibold uppercase tracking-widest text-[#3D0B12] shadow-lg hover:brightness-110 active:scale-98 transition-all cursor-pointer"
            >
              <MailOpen className="w-4 h-4 text-[#3D0B12]" />
              <span>Open Invitation with Music</span>
            </button>
          </div>

          {/* Audio hint */}
          <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-[#FAF6F0]/60 font-outfit">
            <Volume2 className="w-3.5 h-3.5 text-[#E5C278]" />
            <span>Includes royal ambient sitar music</span>
          </div>
        </motion.div>

        {/* Skip option */}
        <div className="mt-4 text-center">
          <button
            onClick={onSkip}
            className="text-xs font-outfit text-[#7A1C28]/80 hover:text-[#7A1C28] underline underline-offset-4 tracking-wider transition-colors cursor-pointer"
          >
            Skip directly to itinerary
          </button>
        </div>

      </div>
    </motion.div>
  );
}
