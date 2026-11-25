import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { weddingConfig } from '../../data/wedding';
import { Sparkles, Music } from 'lucide-react';

export default function BookOpeningScreen({ onOpen, onSkip }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleBookTap = () => {
    if (isOpen) return;
    setIsOpen(true);

    // Launch royal rose petal and gold foil shower
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.55 },
        colors: ['#6E1F2F', '#C5A059', '#E5C278', '#FDF8F5', '#8C6D37'],
        scalar: 1.2,
      });
    } catch {
      // safe fallback
    }

    // Smooth camera transition into the page
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF6F0] p-4 overflow-hidden select-none"
      style={{ perspective: '1400px' }}
    >
      {/* Soft blush background with subtle texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#6E1F2F 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Floating Ambient Rose Petals in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-12 left-8 w-4 h-4 rounded-full bg-[#6E1F2F]/20 blur-[1px] animate-pulse"></span>
        <span className="absolute bottom-16 right-10 w-6 h-6 rounded-full bg-[#C5A059]/25 blur-[1px] animate-bounce"></span>
        <span className="absolute top-1/3 right-8 w-3 h-3 rounded-full bg-[#6E1F2F]/15"></span>
      </div>

      {/* 3D Velvet Book Container */}
      <div className="relative w-full max-w-[340px] sm:max-w-[370px] aspect-[1/1.45] flex items-center justify-center">
        
        {/* Book Spine / Shadow Beneath */}
        <div className="absolute -bottom-6 w-[88%] h-8 bg-black/35 rounded-full blur-xl transform scale-y-50"></div>

        {/* Inner Page (revealed when cover opens) */}
        <div className="absolute inset-0 rounded-2xl bg-[#FFFDF9] border border-[#C5A059]/60 p-6 shadow-2xl flex flex-col items-center justify-center text-center">
          <img src="/ornaments/ganesh.svg" alt="Ganesh ji" className="w-16 h-16 mb-2" />
          <p className="font-rozha text-[#6E1F2F] text-sm">॥ श्री गणेशाय नमः ॥</p>
          <p className="font-playfair text-xl text-[#6E1F2F] font-bold mt-2">Jay & Neha</p>
          <p className="font-montserrat text-xs tracking-widest uppercase text-[#C5A059] mt-1">29 January 2027</p>
        </div>

        {/* 3D Swiveling Book Cover (Wine-Velvet with Gold Embossing) */}
        <motion.div
          animate={isOpen ? { rotateY: -125, x: -30, opacity: 0.15 } : { rotateY: 0, x: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
          style={{ transformOrigin: 'left center', transformStyle: 'preserve-3d' }}
          onClick={handleBookTap}
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7E2437] via-[#5A1422] to-[#3B0B14] p-6 shadow-[0_25px_50px_-12px_rgba(59,11,20,0.65)] border-2 border-[#C5A059] cursor-pointer flex flex-col items-center justify-between text-[#FAF6F0]"
        >
          {/* Inner Gold Foil Frame Inset */}
          <div className="absolute inset-2.5 rounded-xl border border-[#E5C278]/60 pointer-events-none"></div>
          <div className="absolute inset-3.5 rounded-lg border border-[#C5A059]/30 border-dashed pointer-events-none"></div>

          {/* Top Sanskrit Invocation */}
          <div className="relative z-10 text-center pt-2">
            <span className="font-rozha text-xs sm:text-sm text-[#E5C278] tracking-widest drop-shadow-sm">
              ॥ श्री गणेशाय नमः ॥
            </span>
          </div>

          {/* Center Medallion: Gold Ganesh Ji Emblem */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            
            {/* Soft pulsing glow behind medallion */}
            <div className="absolute w-32 h-32 rounded-full bg-[#E5C278]/20 blur-xl animate-pulse"></div>

            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center rounded-full bg-gradient-to-b from-[#8C273B] to-[#420E18] p-1.5 border-2 border-[#C5A059] shadow-inner group-hover:scale-105 transition-transform">
              <img 
                src="/ornaments/ganesh.svg" 
                alt="Gold Ganesh Medallion" 
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(197,160,89,0.5)]"
              />
            </div>

            <div className="mt-4 text-center">
              <span className="font-playfair text-xs tracking-[0.3em] uppercase text-[#E5C278]/90 font-semibold block">
                SHUBH VIVAAH
              </span>
              <span className="text-[10px] font-montserrat tracking-widest uppercase text-[#FAF6F0]/60 mt-0.5 block">
                A Royal Wedding Invitation
              </span>
            </div>
          </div>

          {/* Bottom Tap to Open Cue */}
          <div className="relative z-10 text-center pb-2 w-full">
            <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C5A059] via-[#E5C278] to-[#C5A059] text-[#3B0B14] shadow-md group-hover:brightness-110 active:scale-95 transition-all">
              <Sparkles className="w-3.5 h-3.5 text-[#3B0B14]" />
              <span className="text-[11px] font-montserrat font-bold tracking-widest uppercase">
                Tap Book to Open
              </span>
            </div>
            
            <p className="text-[10px] font-montserrat text-[#FAF6F0]/60 mt-2 flex items-center justify-center gap-1">
              <Music className="w-3 h-3 text-[#E5C278]" />
              <span>Plays royal sitar & shehnai</span>
            </p>
          </div>

        </motion.div>

      </div>

      {/* Discrete Skip Link */}
      <div className="absolute bottom-4 text-center">
        <button
          onClick={onSkip}
          className="text-[11px] font-montserrat text-[#6E1F2F]/70 hover:text-[#6E1F2F] underline underline-offset-4 tracking-wider transition-colors cursor-pointer"
        >
          Skip to invitation
        </button>
      </div>

    </motion.div>
  );
}
