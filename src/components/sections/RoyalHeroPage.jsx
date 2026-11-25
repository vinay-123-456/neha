import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../../data/wedding';
import { ChevronDown } from 'lucide-react';

export default function RoyalHeroPage({ onScrollNext }) {
  const { couple, spiritualQuote } = weddingConfig;

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between items-center text-center px-4 py-8 bg-[#FAF6F0] overflow-hidden">
      
      {/* Background Palace Watermark & Soft Blush Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] opacity-[0.05] pointer-events-none select-none">
        <img src="/ornaments/mandala.svg" alt="Royal Mandala" className="w-full h-full animate-[spin_160s_linear_infinite]" />
      </div>

      {/* TOP HEADER: Auspicious Ganesh Medallion & Shloka */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="pt-2 flex flex-col items-center"
      >
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-[#8C273B] to-[#420E18] p-1 border border-[#C5A059] shadow-md mb-2">
          <img src="/ornaments/ganesh.svg" alt="Lord Ganesha" className="w-full h-full object-contain filter drop-shadow" />
        </div>
        <p className="font-rozha text-[#6E1F2F] text-xs sm:text-sm tracking-widest">
          {spiritualQuote.sanskrit}
        </p>
        <p className="font-montserrat text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mt-1">
          TOGETHER WITH THEIR FAMILIES
        </p>
      </motion.div>

      {/* CENTER: Couple Names & Lineage (Exactly one phone screen high, perfectly centred) */}
      <div className="my-auto py-4 max-w-lg mx-auto w-full">
        
        {/* GROOM */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold tracking-tight text-[#6E1F2F]">
            {couple.groom.fullName}
          </h1>
          <p className="font-montserrat text-xs sm:text-sm text-[#2C2223]/75 mt-1 font-medium">
            Son of {couple.groom.fatherName}
          </p>
          <span className="inline-block text-[10px] font-montserrat uppercase tracking-wider text-[#C5A059] font-semibold">
            {couple.groom.clan}
          </span>
        </motion.div>

        {/* ELEGANT AMPERSAND & DIVIDER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="my-3 flex items-center justify-center gap-3"
        >
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5A059]"></span>
          <span className="font-cormorant italic text-3xl sm:text-4xl text-[#C5A059] font-light">&</span>
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C5A059]"></span>
        </motion.div>

        {/* BRIDE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold tracking-tight text-[#6E1F2F]">
            {couple.bride.fullName}
          </h1>
          <p className="font-montserrat text-xs sm:text-sm text-[#2C2223]/75 mt-1 font-medium">
            Daughter of {couple.bride.fatherName}
          </p>
          <span className="inline-block text-[10px] font-montserrat uppercase tracking-wider text-[#C5A059] font-semibold">
            {couple.bride.clan}
          </span>
        </motion.div>

        {/* INVITATION LINE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 px-4"
        >
          <p className="font-cormorant italic text-sm sm:text-base text-[#2C2223]/80 max-w-sm mx-auto leading-relaxed">
            "{couple.inviteLine}"
          </p>
        </motion.div>

      </div>

      {/* BOTTOM: Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="pb-2 flex flex-col items-center justify-center cursor-pointer text-[#6E1F2F]/70 hover:text-[#6E1F2F]"
        onClick={onScrollNext}
      >
        <span className="text-[10px] font-montserrat uppercase tracking-[0.25em] font-medium mb-1">
          Pull to Reveal Date
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce text-[#C5A059]" />
      </motion.div>

    </section>
  );
}
