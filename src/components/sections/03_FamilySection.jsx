import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../../data/wedding';
import GoldDivider from '../common/GoldDivider';

export default function FamilySection() {
  const { bride, groom } = weddingConfig.couple;
  const { family } = weddingConfig;

  return (
    <section id="family-section" className="py-20 px-4 bg-[#F5EFEB] relative overflow-hidden">
      
      {/* Decorative Border Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-outfit uppercase tracking-[0.25em] text-[#7A1C28] font-semibold">
            With Joyous Hearts & Ancestral Blessings
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#58111A] mt-2">
            The Families
          </h2>
          <GoldDivider />
          <p className="font-cormorant text-base sm:text-lg italic text-[#2C2223]/80 max-w-xl mx-auto mb-10">
            {family.warmWelcomeNote}
          </p>
        </motion.div>

        {/* Two Families Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-center">
          
          {/* Bride's Family Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-[#FAF6F0] p-6 sm:p-8 border border-[#C5A059]/40 shadow-sm relative group hover:shadow-md transition-shadow"
          >
            <div className="h-2 w-16 bg-[#7A1C28] mx-auto rounded-full mb-4"></div>
            <span className="text-[11px] font-outfit uppercase tracking-widest text-[#7A1C28] font-bold">
              Bride's Family
            </span>
            <h3 className="font-cinzel text-2xl font-bold text-[#58111A] mt-2 mb-1">
              {family.brideFamilyTitle}
            </h3>
            <p className="font-cinzel text-lg font-medium text-[#C5A059] mb-4">
              {bride.fullName}
            </p>
            <div className="space-y-2 text-sm font-outfit text-[#2C2223]/85 border-t border-[#C5A059]/20 pt-4">
              <p className="font-medium text-[#58111A]">
                {family.brideParentsLine}
              </p>
              <p className="text-xs text-[#2C2223]/70 italic font-cormorant text-base">
                {family.brideBlessingsLine}
              </p>
              <p className="text-xs uppercase tracking-wider text-[#7A1C28]/80 font-medium">
                {bride.city}
              </p>
            </div>
          </motion.div>

          {/* Groom's Family Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-[#FAF6F0] p-6 sm:p-8 border border-[#C5A059]/40 shadow-sm relative group hover:shadow-md transition-shadow"
          >
            <div className="h-2 w-16 bg-[#7A1C28] mx-auto rounded-full mb-4"></div>
            <span className="text-[11px] font-outfit uppercase tracking-widest text-[#7A1C28] font-bold">
              Groom's Family
            </span>
            <h3 className="font-cinzel text-2xl font-bold text-[#58111A] mt-2 mb-1">
              {family.groomFamilyTitle}
            </h3>
            <p className="font-cinzel text-lg font-medium text-[#C5A059] mb-4">
              {groom.fullName}
            </p>
            <div className="space-y-2 text-sm font-outfit text-[#2C2223]/85 border-t border-[#C5A059]/20 pt-4">
              <p className="font-medium text-[#58111A]">
                {family.groomParentsLine}
              </p>
              <p className="text-xs text-[#2C2223]/70 italic font-cormorant text-base">
                {family.groomBlessingsLine}
              </p>
              <p className="text-xs uppercase tracking-wider text-[#7A1C28]/80 font-medium">
                {groom.city}
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
