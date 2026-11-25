import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioController({ isPlaying, toggleAudio }) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? "Mute Royal Music" : "Play Royal Music"}
        className="flex items-center gap-2.5 bg-[#58111A]/95 text-[#FAF6F0] px-3.5 py-2.5 rounded-full border border-[#C5A059] shadow-lg backdrop-blur-md hover:bg-[#7A1C28] transition-all duration-300 group"
      >
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <Volume2 className="w-5 h-5 text-[#E5C278] animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 text-[#FAF6F0]/70" />
          )}
        </div>
        
        {/* Animated Soundwave bars when playing */}
        {isPlaying && (
          <div className="flex items-end gap-0.5 h-4 px-0.5">
            <span className="w-0.5 h-3 bg-[#E5C278] animate-[bounce_1s_infinite_100ms] rounded-full"></span>
            <span className="w-0.5 h-4 bg-[#E5C278] animate-[bounce_1s_infinite_300ms] rounded-full"></span>
            <span className="w-0.5 h-2 bg-[#E5C278] animate-[bounce_1s_infinite_200ms] rounded-full"></span>
            <span className="w-0.5 h-3.5 bg-[#E5C278] animate-[bounce_1s_infinite_400ms] rounded-full"></span>
          </div>
        )}

        <span className="text-xs font-medium tracking-wider uppercase text-[#FAF6F0]/90 font-outfit hidden sm:inline">
          {isPlaying ? "Shehnai Playing" : "Play Music"}
        </span>
      </button>
    </div>
  );
}
