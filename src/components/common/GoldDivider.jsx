import React from 'react';

export default function GoldDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center my-6 select-none ${className}`}>
      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#C5A059] to-[#C5A059]"></div>
      <div className="mx-3 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#7A1C28]"></span>
        <span className="w-2.5 h-2.5 rotate-45 border border-[#C5A059] bg-[#FAF6F0]"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#7A1C28]"></span>
      </div>
      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#C5A059] to-[#C5A059]"></div>
    </div>
  );
}
