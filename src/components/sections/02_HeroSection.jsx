import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../../data/wedding';
import GoldDivider from '../common/GoldDivider';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-16 pb-12 overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#F5EFEB] to-[#FAF6F0]">
      
      {/* Background Mandala Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] opacity-[0.06] pointer-events-none select-none">
        <img src="/ornaments/mandala.svg" alt="Royal Mandala Watermark" className="w-full h-full animate-[spin_120s_linear_infinite]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        
        {/* Shubh Ganesh Invocation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#FAF6F0]/80 backdrop-blur-sm shadow-xs">
            <span className="font-rozha text-[#7A1C28] text-base sm:text-lg tracking-widest">
              {weddingConfig.spiritualQuote.sanskrit}
            </span>
          </div>
        </motion.div>

        {/* Top Arch Motif */}
        <div className="flex justify-center mb-3">
          <img src="/ornaments/palace-arch.svg" alt="Palace Arch" className="h-10 sm:h-12 w-auto opacity-70" />
        </div>

        {/* Subtitle / Invitation Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-outfit text-xs sm:text-sm uppercase tracking-[0.25em] text-[#7A1C28]/80 font-medium max-w-lg mx-auto"
        >
          {weddingConfig.couple.invitationSubtitle}
        </motion.p>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="my-5"
        >
          <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#58111A]">
            {weddingConfig.couple.bride.firstName}
          </h1>
          <div className="flex items-center justify-center gap-3 my-2">
            <span className="h-[1px] w-8 bg-[#C5A059]"></span>
            <span className="font-cormorant italic text-3xl sm:text-4xl text-[#C5A059] font-light">&</span>
            <span className="h-[1px] w-8 bg-[#C5A059]"></span>
          </div>
          <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#58111A]">
            {weddingConfig.couple.groom.firstName}
          </h1>
        </motion.div>

        <GoldDivider />

        {/* Date and Location */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-1.5"
        >
          <p className="font-cinzel text-base sm:text-xl font-medium tracking-wide text-[#2C2223]">
            {weddingConfig.dateDisplayString}
          </p>
          <p className="font-outfit text-sm text-[#7A1C28] font-medium tracking-widest uppercase">
            {weddingConfig.venue.name} · {weddingConfig.couple.bride.city}
          </p>
          <p className="font-cormorant italic text-sm sm:text-base text-[#2C2223]/75 mt-3 max-w-md mx-auto">
            "{weddingConfig.spiritualQuote.meaning}"
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-10 flex flex-col items-center justify-center text-[#7A1C28]/60 cursor-pointer"
          onClick={() => {
            const next = document.getElementById('family-section');
            if (next) next.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[11px] font-outfit uppercase tracking-widest mb-1">Explore Celebrations</span>
          <ChevronDown className="w-5 h-5 animate-bounce text-[#C5A059]" />
        </motion.div>

      </div>
    </section>
  );
}
