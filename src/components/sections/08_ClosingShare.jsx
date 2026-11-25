import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../../data/wedding';
import GoldDivider from '../common/GoldDivider';
import { Share2, Copy, Check, MessageCircle, Heart } from 'lucide-react';

export default function ClosingShare() {
  const { couple, share } = weddingConfig;
  const [copied, setCopied] = useState(false);

  // Generate WhatsApp Share link
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://ananya-weds-kabir.com';
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(share.whatsappText + currentUrl)}`;

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <footer className="py-20 px-4 bg-[#FAF6F0] text-[#2C2223] relative border-t border-[#C5A059]/30">
      
      {/* Top Palace Arch Ornament */}
      <div className="flex justify-center mb-6">
        <img src="/ornaments/palace-arch.svg" alt="Palace Arch" className="h-10 w-auto opacity-70" />
      </div>

      <div className="max-w-2xl mx-auto text-center">
        
        {/* Monogram Badge */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#C5A059] bg-[#58111A] text-[#E5C278] font-cinzel text-lg font-bold mb-4 shadow-md">
          {couple.monogram}
        </div>

        <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#58111A]">
          We Eagerly Await Your Blessings
        </h2>

        <GoldDivider />

        <p className="font-cormorant italic text-base sm:text-xl text-[#2C2223]/80 max-w-lg mx-auto mb-6">
          "Two families united by love, two souls entwined forever. Your presence makes our celebration truly complete."
        </p>

        {/* Family Sign-off */}
        <p className="font-cinzel text-sm sm:text-base font-semibold text-[#7A1C28] tracking-wider mb-2">
          With Best Compliments & Regards
        </p>
        <p className="font-outfit text-xs sm:text-sm text-[#2C2223]/70 mb-8">
          The Rathore & Singhania Families
        </p>

        {/* Wedding Hashtag */}
        <div className="mb-8">
          <span className="inline-block px-5 py-2 rounded-full border border-[#C5A059] bg-[#F5EFEB] font-outfit text-xs uppercase tracking-widest font-semibold text-[#58111A]">
            {couple.weddingHashtag}
          </span>
        </div>

        {/* Share Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-12">
          <a
            href={whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white py-3.5 px-6 font-outfit text-xs font-semibold uppercase tracking-wider shadow-md hover:brightness-105 active:scale-98 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Share on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={handleCopyLink}
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-[#FAF6F0] border border-[#C5A059] text-[#58111A] py-3.5 px-6 font-outfit text-xs font-semibold uppercase tracking-wider hover:bg-[#F5EFEB] active:scale-98 transition-all cursor-pointer shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#C5A059]" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>

        {/* Studio Signature */}
        <div className="pt-8 border-t border-[#C5A059]/20 text-[11px] font-outfit text-[#2C2223]/50 flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>Digital Wedding Invitation Studio</span>
          <span className="hidden sm:inline">·</span>
          <span>Crafted with regal elegance for Ananya & Kabir</span>
        </div>

      </div>
    </footer>
  );
}
