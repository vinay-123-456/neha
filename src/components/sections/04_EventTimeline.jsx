import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../../data/wedding';
import GoldDivider from '../common/GoldDivider';
import { Calendar, Clock, MapPin, Sparkles, Sun, Music, Flame, Wine, Flower2 } from 'lucide-react';

// Dynamic icon mapper for each ceremony
const iconMap = {
  Flower2: Flower2,
  Sparkles: Sparkles,
  Sun: Sun,
  Music: Music,
  Flame: Flame,
  Wine: Wine,
};

export default function EventTimeline() {
  const { events } = weddingConfig;

  // Helper to open Google Calendar event creator
  const createGoogleCalendarLink = (event) => {
    const title = encodeURIComponent(`${weddingConfig.couple.bride.firstName} & ${weddingConfig.couple.groom.firstName} - ${event.title}`);
    const details = encodeURIComponent(`${event.description}\nDress Code: ${event.dressCode}\nVenue: ${event.venue}`);
    const location = encodeURIComponent(event.venue);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <section id="events-section" className="py-20 px-4 bg-[#FAF6F0] relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-outfit uppercase tracking-[0.25em] text-[#7A1C28] font-semibold">
            Wedding Itinerary
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#58111A] mt-2">
            Ceremonies & Celebrations
          </h2>
          <GoldDivider />
          <p className="font-outfit text-sm text-[#2C2223]/70 max-w-lg mx-auto">
            Please join us for every moment of love, music, laughter, and sacred traditions.
          </p>
        </div>

        {/* Timeline Events List */}
        <div className="space-y-8">
          {events.map((event, index) => {
            const IconComponent = iconMap[event.icon] || Sparkles;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl bg-gradient-to-br from-[#FFFDF9] to-[#F5EFEB] border border-[#C5A059]/40 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all group"
              >
                {/* Event Badge Top */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-outfit uppercase tracking-wider font-semibold bg-[#58111A]/10 text-[#58111A] border border-[#7A1C28]/20">
                    <IconComponent className="w-3.5 h-3.5 text-[#7A1C28]" />
                    {event.badge}
                  </span>

                  <a
                    href={createGoogleCalendarLink(event)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-outfit font-medium text-[#7A1C28] hover:text-[#58111A] bg-[#FAF6F0] px-3 py-1 rounded-full border border-[#C5A059]/50 hover:bg-[#FAF6F0]/80 transition-colors shadow-2xs"
                    title="Add this event to your Google Calendar"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Add to Calendar</span>
                  </a>
                </div>

                {/* Event Title */}
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#58111A] mb-2">
                  {event.title}
                </h3>

                <p className="font-cormorant italic text-base sm:text-lg text-[#2C2223]/80 mb-5">
                  {event.description}
                </p>

                {/* Event Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#C5A059]/25 text-xs sm:text-sm font-outfit">
                  
                  {/* Date & Time */}
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#58111A]">{event.date}</p>
                      <p className="text-[#2C2223]/70">{event.time}</p>
                    </div>
                  </div>

                  {/* Venue */}
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#58111A]">Venue</p>
                      <p className="text-[#2C2223]/70">{event.venue}</p>
                    </div>
                  </div>

                  {/* Dress Code */}
                  <div className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#58111A]">Dress Code</p>
                      <p className="text-[#7A1C28] font-medium">{event.dressCode}</p>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
