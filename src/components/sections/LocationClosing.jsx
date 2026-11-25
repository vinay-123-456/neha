import React, { useState } from 'react';
import { weddingConfig } from '../../data/wedding';
import { Navigation, Copy, Check, Phone, MessageCircle } from 'lucide-react';

export default function LocationClosing() {
  const { venue, couple } = weddingConfig;
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${venue.fullAddress}. Contact: ${venue.contactPhone}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `You're cordially invited to celebrate the royal wedding of Jay Singh & Neha Kunwar! Check out the invitation: ${window.location.href}`
  )}`;

  return (
    <footer id="location-section" className="py-16 px-4 bg-[#FAF6F0] relative border-t border-[#C5A059]/30">
      <div className="max-w-md mx-auto text-center">
        
        {/* LOCATION HEADER */}
        <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-bold">
          LOCATION
        </p>
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#6E1F2F] mt-1">
          How to Reach
        </h2>

        {/* Illustrated Map Card */}
        <div className="mt-6 rounded-2xl bg-[#FFFDF9] border-2 border-[#C5A059]/50 p-6 shadow-lg text-left">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <span className="text-[10px] font-montserrat uppercase tracking-wider text-[#C5A059] font-bold">
                Wedding Destination
              </span>
              <h3 className="font-playfair text-xl font-bold text-[#6E1F2F]">
                {venue.title}
              </h3>
            </div>
            <a
              href={`tel:${venue.contactPhone}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#6E1F2F]/10 text-[#6E1F2F] text-xs font-montserrat font-semibold hover:bg-[#6E1F2F]/20"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
          </div>

          <p className="text-xs font-montserrat text-[#2C2223]/80 leading-relaxed">
            {venue.fullAddress}
          </p>

          <p className="text-xs font-montserrat text-[#6E1F2F] font-semibold mt-2">
            Contact: {venue.contactPhone}
          </p>

          {/* Action Buttons: Get Directions & Copy Address */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-[#6E1F2F] text-[#FAF6F0] font-montserrat text-xs font-semibold uppercase tracking-wider shadow-sm hover:bg-[#8C273B] transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-[#E5C278]" />
              <span>Directions</span>
            </a>

            <button
              type="button"
              onClick={handleCopyAddress}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-[#F5EFEB] border border-[#C5A059] text-[#6E1F2F] font-montserrat text-xs font-semibold uppercase tracking-wider hover:bg-[#FAF6F0] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* CLOSING FAMILY LINE & SIGN-OFF */}
        <div className="mt-14 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#8C273B] to-[#420E18] p-1 border border-[#C5A059] shadow-sm mb-3">
            <img src="/ornaments/ganesh.svg" alt="Lord Ganesha" className="w-full h-full object-contain filter drop-shadow" />
          </div>

          <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#6E1F2F]">
            We can't wait to celebrate with you
          </h3>

          <p className="font-cormorant italic text-base sm:text-lg text-[#2C2223]/80 mt-2">
            "{couple.closingLine}"
          </p>

          {/* WhatsApp Share Action */}
          <div className="mt-6 w-full">
            <a
              href={whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white py-3 px-6 font-montserrat text-xs font-semibold uppercase tracking-wider shadow-md hover:brightness-105 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Share Invite on WhatsApp</span>
            </a>
          </div>

          <p className="text-[10px] font-montserrat text-[#2C2223]/50 mt-8">
            Digital Wedding Invitation Studio · Jay Singh & Neha Kunwar
          </p>
        </div>

      </div>
    </footer>
  );
}
