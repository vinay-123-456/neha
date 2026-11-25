import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../../data/wedding';
import { ChevronLeft, ChevronRight, Clock, MapPin, Sparkles, Sun, Music, Flame, Wine, Heart } from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  Sun: Sun,
  Music: Music,
  Flame: Flame,
  Wine: Wine,
  Heart: Heart,
};

export default function FestivitiesCarousel() {
  const { functions } = weddingConfig;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? functions.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === functions.length - 1 ? 0 : prev + 1));
  };

  const current = functions[currentIndex];
  const IconComponent = iconMap[current.icon] || Sparkles;

  return (
    <section id="festivities-section" className="py-16 px-4 bg-[#F5EFEB] relative overflow-hidden">
      
      {/* Header */}
      <div className="text-center mb-8">
        <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-bold">
          WEDDING FESTIVITIES
        </p>
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#6E1F2F] mt-1">
          Celebration Timeline
        </h2>
        <p className="font-montserrat text-xs text-[#2C2223]/70 mt-1">
          Swipe or tap arrows to explore ceremonies
        </p>
      </div>

      {/* SWIPEABLE CARD CAROUSEL */}
      <div className="max-w-[360px] sm:max-w-[400px] mx-auto relative">
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Function"
          className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#FFFDF9] border border-[#C5A059] text-[#6E1F2F] flex items-center justify-center shadow-md active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Function"
          className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#FFFDF9] border border-[#C5A059] text-[#6E1F2F] flex items-center justify-center shadow-md active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Function Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="rounded-2xl bg-[#FFFDF9] border-2 border-[#C5A059]/60 p-6 sm:p-7 shadow-xl relative overflow-hidden"
          >
            {/* Top Function Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-montserrat uppercase tracking-wider font-semibold bg-[#6E1F2F]/10 text-[#6E1F2F]">
                <IconComponent className="w-3.5 h-3.5 text-[#6E1F2F]" />
                <span>{current.name}</span>
              </span>

              <span className="text-[11px] font-montserrat text-[#2C2223]/60 font-medium">
                {currentIndex + 1} of {functions.length}
              </span>
            </div>

            {/* Function Name */}
            <h3 className="font-playfair text-2xl font-bold text-[#6E1F2F] mb-1">
              {current.name}
            </h3>

            <p className="font-cormorant italic text-sm text-[#2C2223]/80 mb-5">
              {current.description}
            </p>

            {/* Timing & Location Details */}
            <div className="space-y-3 pt-3 border-t border-[#C5A059]/30 text-xs font-montserrat text-[#2C2223]/80">
              
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#6E1F2F]">{current.dayDate}</p>
                  <p className="text-[#2C2223]/70">{current.time}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#6E1F2F]">Venue</p>
                  <p className="text-[#2C2223]/70">{current.place}</p>
                </div>
              </div>

              {/* DRESS CODE WITH COLOR SWATCH (As specified in prompt) */}
              <div className="pt-2 border-t border-[#C5A059]/20 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#2C2223]/60 font-semibold">
                    Dress Code
                  </p>
                  <p className="font-semibold text-[#6E1F2F] text-xs">
                    {current.dressCode}
                  </p>
                </div>

                {/* Color Swatch Badge */}
                <div className="flex items-center gap-2 bg-[#F5EFEB] px-3 py-1.5 rounded-full border border-[#C5A059]/30">
                  <span className="text-[10px] font-semibold text-[#2C2223]/80">
                    {current.colourTheme}
                  </span>
                  <div className="flex -space-x-1">
                    <span 
                      className="w-4 h-4 rounded-full border border-white shadow-xs" 
                      style={{ backgroundColor: current.colorHex }}
                    />
                    {current.secondaryColorHex && (
                      <span 
                        className="w-4 h-4 rounded-full border border-white shadow-xs" 
                        style={{ backgroundColor: current.secondaryColorHex }}
                      />
                    )}
                  </div>
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          {functions.map((fn, idx) => (
            <button
              key={fn.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to ${fn.name}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? 'w-6 bg-[#6E1F2F]' : 'w-2 bg-[#C5A059]/40'
              }`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
