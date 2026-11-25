import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../../data/wedding';
import GoldDivider from '../common/GoldDivider';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCelebrated: false,
  });

  useEffect(() => {
    const targetTime = new Date(weddingConfig.mainCeremonyDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isCelebrated: true,
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, isCelebrated: false });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#58111A] via-[#7A1C28] to-[#3D0B12] text-[#FAF6F0] relative overflow-hidden">
      
      {/* Subtle Arch Ornament Top */}
      <div className="flex justify-center mb-4 opacity-75">
        <img src="/ornaments/palace-arch.svg" alt="Palace Arch" className="h-8 w-auto" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <span className="text-xs font-outfit uppercase tracking-[0.25em] text-[#E5C278] font-semibold">
          Auspicious Muhurtham Countdown
        </span>
        
        <h2 className="font-cinzel text-3xl sm:text-4xl font-bold mt-2 text-[#FAF6F0]">
          Counting Every Blessed Second
        </h2>

        <GoldDivider />

        <p className="text-sm font-outfit text-[#FAF6F0]/80 mb-8 max-w-md mx-auto">
          Until Ananya & Kabir tie the sacred knot under the starlit sky of Udaipur.
        </p>

        {timeLeft.isCelebrated ? (
          <div className="p-6 rounded-2xl bg-[#FAF6F0]/10 border border-[#C5A059] backdrop-blur-sm">
            <h3 className="font-cinzel text-2xl font-bold text-[#E5C278]">
              The Wedding Celebrations Have Begun!
            </h3>
            <p className="font-cormorant italic text-lg text-[#FAF6F0] mt-1">
              Thank you for being part of our cherished journey.
            </p>
          </div>
        ) : (
          /* Countdown Counter Grid */
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto">
            {timeBlocks.map((block, idx) => (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-xl bg-[#FAF6F0]/10 border border-[#C5A059]/40 backdrop-blur-md shadow-lg"
              >
                <span className="font-cinzel text-2xl sm:text-4xl font-bold text-[#E5C278] tracking-tight">
                  {String(block.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-outfit uppercase tracking-widest text-[#FAF6F0]/80 mt-1">
                  {block.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
