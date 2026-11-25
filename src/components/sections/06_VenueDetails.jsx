import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../../data/wedding';
import GoldDivider from '../common/GoldDivider';
import { MapPin, Navigation, Phone, Info } from 'lucide-react';

export default function VenueDetails() {
  const { venue } = weddingConfig;

  return (
    <section id="venue-section" className="py-20 px-4 bg-[#F5EFEB] relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-outfit uppercase tracking-[0.25em] text-[#7A1C28] font-semibold">
            Location & Travel Guide
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#58111A] mt-2">
            The Palace Venue
          </h2>
          <GoldDivider />
          <p className="font-outfit text-sm text-[#2C2223]/70 max-w-lg mx-auto">
            Experience the royal heritage and majestic hospitality on the historic waters of Lake Pichola.
          </p>
        </div>

        {/* Venue Information Card */}
        <div className="rounded-2xl bg-[#FAF6F0] border border-[#C5A059]/40 p-6 sm:p-10 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#C5A059]/20">
            <div>
              <span className="text-xs font-outfit uppercase tracking-widest text-[#7A1C28] font-bold">
                Main Destination
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#58111A] mt-1">
                {venue.name}
              </h3>
              <p className="font-outfit text-sm text-[#2C2223]/80 mt-1">
                {venue.fullAddress}
              </p>
            </div>

            {/* Direct Google Maps Navigation Button */}
            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#58111A] to-[#7A1C28] text-[#FAF6F0] px-6 py-3 font-outfit text-xs uppercase tracking-widest font-semibold shadow-md hover:bg-[#7A1C28] transition-all shrink-0 cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-[#E5C278]" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Travel Tips & Jetty Note */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 text-xs sm:text-sm font-outfit text-[#2C2223]/80">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F5EFEB]/70 border border-[#C5A059]/30">
              <Info className="w-4 h-4 text-[#7A1C28] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#58111A]">Guest Boat Transfer</p>
                <p className="text-xs text-[#2C2223]/70 mt-0.5">{venue.landmark}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F5EFEB]/70 border border-[#C5A059]/30">
              <Phone className="w-4 h-4 text-[#7A1C28] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#58111A]">Wedding Hospitality Desk</p>
                <a href={`tel:${venue.conciergePhone}`} className="text-xs text-[#7A1C28] hover:underline font-medium">
                  {venue.conciergePhone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Google Maps Embed */}
        <div className="rounded-2xl overflow-hidden border border-[#C5A059]/40 shadow-md h-72 sm:h-96 relative">
          <iframe
            title="Taj Lake Palace Venue Location"
            src={venue.googleEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}
