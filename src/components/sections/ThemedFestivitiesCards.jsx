import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../../data/wedding';
import { 
  Sparkles, Sun, Music, Flame, Wine, Heart, Clock, MapPin, 
  ChevronLeft, ChevronRight, Calendar, Shirt 
} from 'lucide-react';

// Bespoke styling themes for each function
const themeStyles = {
  'mata-pujan': {
    containerBg: 'bg-gradient-to-b from-[#FAF5EF] via-[#F5ECE0] to-[#EEDBCA]',
    borderColor: 'border-[#C5A059]',
    primaryText: 'text-[#58111A]',
    accentText: 'text-[#92400E]',
    badgeBg: 'bg-[#58111A]/10 text-[#58111A] border-[#58111A]/20',
    swatchBg: 'bg-[#D8C5A2]',
    iconColor: 'text-[#B45309]',
    moodIllustration: (
      <div className="absolute top-0 right-0 p-4 opacity-15 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="text-[#92400E]">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4"/>
          <path d="M50 20 L50 80 M20 50 L80 50" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>
    )
  },
  'haldi': {
    containerBg: 'bg-gradient-to-b from-[#FEFCE8] via-[#FEF08A]/70 to-[#FDE047]/30',
    borderColor: 'border-[#F59E0B]',
    primaryText: 'text-[#78350F]',
    accentText: 'text-[#B45309]',
    badgeBg: 'bg-[#F59E0B]/20 text-[#78350F] border-[#F59E0B]/40',
    swatchBg: 'bg-[#F59E0B]',
    iconColor: 'text-[#D97706]',
    moodIllustration: (
      <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-[#FBBF24]/20 blur-2xl pointer-events-none">
        {/* Floating Marigold Petal Visuals */}
        <span className="absolute top-6 left-6 w-3 h-3 rounded-full bg-[#F59E0B] opacity-40 animate-ping"></span>
        <span className="absolute bottom-8 right-6 w-4 h-4 rounded-full bg-[#D97706] opacity-50"></span>
      </div>
    )
  },
  'mehendi': {
    containerBg: 'bg-gradient-to-b from-[#F0FDF4] via-[#DCFCE7]/70 to-[#BBF7D0]/30',
    borderColor: 'border-[#10B981]',
    primaryText: 'text-[#064E3B]',
    accentText: 'text-[#047857]',
    badgeBg: 'bg-[#10B981]/20 text-[#064E3B] border-[#10B981]/40',
    swatchBg: 'bg-[#10B981]',
    iconColor: 'text-[#059669]',
    moodIllustration: (
      <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full bg-[#34D399]/20 blur-2xl pointer-events-none">
        {/* Intricate Henna Vine Outline */}
        <span className="absolute top-10 left-8 w-3 h-3 rounded-full bg-[#059669] opacity-40"></span>
        <span className="absolute bottom-10 right-8 w-4 h-4 rounded-full bg-[#10B981] opacity-40 animate-pulse"></span>
      </div>
    )
  },
  'sangeet': {
    containerBg: 'bg-gradient-to-b from-[#2E1065] via-[#4C1D95] to-[#701A75]',
    borderColor: 'border-[#C084FC]',
    primaryText: 'text-[#FAF5FF]',
    accentText: 'text-[#F472B6]',
    badgeBg: 'bg-[#F472B6]/20 text-[#FDF4FF] border-[#F472B6]/40',
    swatchBg: 'bg-[#A855F7]',
    iconColor: 'text-[#FDE047]',
    moodIllustration: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sparkling Disco & Cocktail Lights */}
        <div className="absolute top-4 left-6 w-2 h-2 rounded-full bg-[#FDE047] blur-[1px] animate-ping"></div>
        <div className="absolute top-12 right-10 w-2.5 h-2.5 rounded-full bg-[#F472B6] blur-[1px] animate-pulse"></div>
        <div className="absolute bottom-8 left-12 w-3 h-3 rounded-full bg-[#A855F7] opacity-60 blur-sm"></div>
      </div>
    )
  },
  'baraat-pheras': {
    containerBg: 'bg-gradient-to-b from-[#450A0A] via-[#7F1D1D] to-[#991B1B]',
    borderColor: 'border-[#F59E0B]',
    primaryText: 'text-[#FFFBEB]',
    accentText: 'text-[#FCD34D]',
    badgeBg: 'bg-[#F59E0B]/20 text-[#FEF3C7] border-[#F59E0B]/50',
    swatchBg: 'bg-[#DC2626]',
    iconColor: 'text-[#FBBF24]',
    moodIllustration: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sacred Holy Fire & Starlight Glow */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-32 rounded-full bg-[#F59E0B]/25 blur-2xl"></div>
        <div className="absolute top-6 right-8 w-2 h-2 rounded-full bg-[#FDE047] animate-ping"></div>
      </div>
    )
  },
  'reception': {
    containerBg: 'bg-gradient-to-b from-[#3B0B14] via-[#58111A] to-[#6E1F2F]',
    borderColor: 'border-[#E5C278]',
    primaryText: 'text-[#FAF6F0]',
    accentText: 'text-[#E5C278]',
    badgeBg: 'bg-[#E5C278]/20 text-[#FAF6F0] border-[#E5C278]/50',
    swatchBg: 'bg-[#6E1F2F]',
    iconColor: 'text-[#E5C278]',
    moodIllustration: (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#E5C278]/15 blur-3xl"></div>
      </div>
    )
  }
};

const iconMap = {
  Sparkles: Sparkles,
  Sun: Sun,
  Music: Music,
  Flame: Flame,
  Wine: Wine,
  Heart: Heart,
};

export default function ThemedFestivitiesCards() {
  const { functions } = weddingConfig;
  const [activeTab, setActiveTab] = useState(0);

  const prevFunction = () => {
    setActiveTab((prev) => (prev === 0 ? functions.length - 1 : prev - 1));
  };

  const nextFunction = () => {
    setActiveTab((prev) => (prev === functions.length - 1 ? 0 : prev + 1));
  };

  const current = functions[activeTab];
  const theme = themeStyles[current.id] || themeStyles['mata-pujan'];
  const IconComponent = iconMap[current.icon] || Sparkles;

  const createCalendarUrl = (fn) => {
    const title = encodeURIComponent(`Jay Singh & Neha Kunwar - ${fn.name}`);
    const details = encodeURIComponent(`${fn.description}\nDress Code: ${fn.dressCode}\nVenue: ${fn.place}`);
    const location = encodeURIComponent(fn.place);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <section id="festivities-section" className="py-16 px-4 bg-[#FAF6F0] relative overflow-hidden">
      
      {/* SECTION HEADER */}
      <div className="text-center mb-6">
        <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-bold">
          ROYAL ITINERARY
        </span>
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#6E1F2F] mt-1">
          Wedding Festivities
        </h2>
        <p className="font-montserrat text-xs text-[#2C2223]/70 mt-1">
          Tap each ceremony below to immerse in its bespoke theme
        </p>
      </div>

      {/* HORIZONTAL THEMED CEREMONY TABS */}
      <div className="max-w-md mx-auto mb-6">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center px-1">
          {functions.map((fn, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={fn.id}
                onClick={() => setActiveTab(idx)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-[11px] font-montserrat font-semibold tracking-wider transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#6E1F2F] text-[#FAF6F0] border-[#6E1F2F] shadow-md scale-105'
                    : 'bg-[#FFFDF9] text-[#2C2223]/70 border-[#C5A059]/40 hover:bg-[#F5EFEB]'
                }`}
              >
                {fn.name.split(' ')[0]}
              </button>
            );
          })}
        </div>
      </div>

      {/* BESPOKE THEMED CEREMONY CARD */}
      <div className="max-w-[340px] sm:max-w-[380px] mx-auto relative">
        
        {/* Navigation Arrows */}
        <button
          onClick={prevFunction}
          aria-label="Previous Ceremony"
          className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 border border-[#C5A059] text-[#6E1F2F] flex items-center justify-center shadow-md active:scale-90 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={nextFunction}
          aria-label="Next Ceremony"
          className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 border border-[#C5A059] text-[#6E1F2F] flex items-center justify-center shadow-md active:scale-90 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Dynamic Themed Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`rounded-2xl border-2 ${theme.borderColor} ${theme.containerBg} p-6 sm:p-7 shadow-2xl relative overflow-hidden transition-colors duration-500`}
          >
            {/* Thematic Background Ambient Element */}
            {theme.moodIllustration}

            {/* Top Badge & Counter */}
            <div className="flex items-center justify-between mb-4 relative z-10">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-montserrat uppercase tracking-wider font-bold border ${theme.badgeBg}`}>
                <IconComponent className={`w-3.5 h-3.5 ${theme.iconColor}`} />
                <span>{current.name}</span>
              </span>

              <span className="text-[11px] font-montserrat opacity-75 font-medium">
                {activeTab + 1} of {functions.length}
              </span>
            </div>

            {/* Title */}
            <h3 className={`font-playfair text-2xl sm:text-3xl font-bold ${theme.primaryText} mb-2 relative z-10`}>
              {current.name}
            </h3>

            <p className={`font-cormorant italic text-sm sm:text-base opacity-85 mb-6 relative z-10`}>
              {current.description}
            </p>

            {/* Timing & Venue */}
            <div className="space-y-3 pt-4 border-t border-current/15 text-xs font-montserrat relative z-10">
              
              <div className="flex items-start gap-2.5">
                <Clock className={`w-4 h-4 ${theme.iconColor} shrink-0 mt-0.5`} />
                <div>
                  <p className={`font-bold ${theme.primaryText}`}>{current.dayDate}</p>
                  <p className="opacity-80">{current.time}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className={`w-4 h-4 ${theme.iconColor} shrink-0 mt-0.5`} />
                <div>
                  <p className={`font-bold ${theme.primaryText}`}>Venue</p>
                  <p className="opacity-80">{current.place}</p>
                </div>
              </div>

              {/* DRESS CODE WITH COLOR SWATCH */}
              <div className="pt-3 border-t border-current/15 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider opacity-70 font-semibold flex items-center gap-1">
                    <Shirt className="w-3 h-3" />
                    <span>Dress Code</span>
                  </p>
                  <p className={`font-bold ${theme.primaryText} text-xs mt-0.5`}>
                    {current.dressCode}
                  </p>
                </div>

                {/* Visual Swatch Pill */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-xs border border-black/10 shadow-xs">
                  <span className="text-[10px] font-semibold text-[#2C2223]">
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

            {/* Add to Calendar Action */}
            <div className="mt-6 pt-2 relative z-10">
              <a
                href={createCalendarUrl(current)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-white/90 text-[#2C2223] font-montserrat text-[11px] font-semibold uppercase tracking-wider shadow-sm hover:bg-white active:scale-98 transition-all"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Add {current.name} to Calendar</span>
              </a>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Swipe Dots Indicator */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          {functions.map((fn, idx) => (
            <button
              key={fn.id}
              onClick={() => setActiveTab(idx)}
              aria-label={`Go to ${fn.name}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                activeTab === idx ? 'w-6 bg-[#6E1F2F]' : 'w-2 bg-[#C5A059]/40'
              }`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
