import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../../data/wedding';
import GoldDivider from '../common/GoldDivider';
import { CheckCircle2, MessageSquare, Send, Users, HeartHandshake } from 'lucide-react';

export default function RSVPSection() {
  const { rsvp } = weddingConfig;

  // Form State
  const [formData, setFormData] = useState({
    guestName: '',
    phoneOrEmail: '',
    attendance: 'attending', // 'attending' | 'regret'
    guestCount: '2',
    foodPreference: 'Vegetarian',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * ============================================================================
   * RSVP SUBMISSION LOGIC
   * ============================================================================
   * As requested: The backend API submission code is fully prepared below.
   * Currently running in interactive test/simulation mode.
   * 
   * TO CONNECT TO A REAL BACKEND LATER (e.g., PHP / MySQL / Google Sheets):
   * 1. In `src/data/wedding.js`, set `rsvp.enableBackendSubmission = true`
   * 2. Uncomment the `fetch(...)` block in `handleSubmit` below.
   * ============================================================================
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    /* 
    // -------------------------------------------------------------
    // REAL BACKEND API LOGIC (Uncomment when PHP/MySQL backend is ready)
    // -------------------------------------------------------------
    if (weddingConfig.rsvp.enableBackendSubmission) {
      try {
        const response = await fetch(weddingConfig.rsvp.apiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          throw new Error('Network error submitting RSVP');
        }
        const data = await response.json();
        console.log('RSVP Backend Success:', data);
      } catch (error) {
        console.error('Failed to submit RSVP to backend:', error);
        // Fallback: still show friendly acknowledgement to the guest
      }
    }
    // -------------------------------------------------------------
    */

    // Simulated UX delay to test smooth interaction
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  // WhatsApp 1-Click Instant RSVP message generator
  const createWhatsAppRSVPLink = () => {
    const attendanceText = formData.attendance === 'attending' ? 'Yes, delighted to attend!' : 'Sending my warm wishes and blessings from afar.';
    const guestText = formData.attendance === 'attending' ? ` (${formData.guestCount} guests)` : '';
    const nameText = formData.guestName ? formData.guestName : 'A guest';
    const msg = encodeURIComponent(
      `*Wedding RSVP for Ananya & Kabir*\nName: ${nameText}\nAttendance: ${attendanceText}${guestText}\nFood: ${formData.foodPreference}\nMessage: ${formData.message || 'Heartiest congratulations!'}`
    );
    return `https://wa.me/${rsvp.whatsappNumber}?text=${msg}`;
  };

  return (
    <section id="rsvp-section" className="py-20 px-4 bg-[#FAF6F0] relative">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-outfit uppercase tracking-[0.25em] text-[#7A1C28] font-semibold">
            Respond With Love
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#58111A] mt-2">
            Will You Grace Us?
          </h2>
          <GoldDivider />
          <p className="font-outfit text-xs sm:text-sm text-[#2C2223]/75 max-w-md mx-auto">
            {rsvp.deadline}. Your presence is the greatest blessing for our new beginning.
          </p>
        </div>

        {/* RSVP Card */}
        <div className="rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-[#F5EFEB] border border-[#C5A059]/40 p-6 sm:p-10 shadow-lg relative">
          
          {submitted ? (
            /* Post-Submission Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-[#58111A]/10 text-[#7A1C28] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#C5A059]/40">
                <CheckCircle2 className="w-8 h-8 text-[#7A1C28]" />
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#58111A] mb-2">
                Thank You, {formData.guestName || 'Dear Guest'}!
              </h3>
              <p className="font-outfit text-sm text-[#2C2223]/80 max-w-md mx-auto mb-6">
                Your response has been warmly noted. We look forward to celebrating together in royal Udaipur!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={createWhatsAppRSVPLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 font-outfit text-xs font-semibold uppercase tracking-wider shadow-sm hover:brightness-105"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Also Send on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-outfit text-[#7A1C28] underline underline-offset-4 py-2"
                >
                  Edit your response
                </button>
              </div>
            </motion.div>
          ) : (
            /* RSVP Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Attendance Toggle */}
              <div>
                <label className="block text-xs font-outfit font-semibold uppercase tracking-wider text-[#58111A] mb-2">
                  Will you be joining us?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, attendance: 'attending' }))}
                    className={`py-3 px-4 rounded-xl text-xs font-outfit font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 border cursor-pointer ${
                      formData.attendance === 'attending'
                        ? 'bg-[#58111A] text-[#FAF6F0] border-[#C5A059] shadow-sm'
                        : 'bg-[#FAF6F0] text-[#2C2223]/70 border-[#C5A059]/30 hover:bg-[#F5EFEB]'
                    }`}
                  >
                    <HeartHandshake className="w-4 h-4 text-[#E5C278]" />
                    <span>Joyfully Accept</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, attendance: 'regret' }))}
                    className={`py-3 px-4 rounded-xl text-xs font-outfit font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 border cursor-pointer ${
                      formData.attendance === 'regret'
                        ? 'bg-[#58111A] text-[#FAF6F0] border-[#C5A059] shadow-sm'
                        : 'bg-[#FAF6F0] text-[#2C2223]/70 border-[#C5A059]/30 hover:bg-[#F5EFEB]'
                    }`}
                  >
                    <span>Regretfully Decline</span>
                  </button>
                </div>
              </div>

              {/* Guest Name */}
              <div>
                <label htmlFor="guestName" className="block text-xs font-outfit font-semibold uppercase tracking-wider text-[#58111A] mb-1.5">
                  Your Full Name *
                </label>
                <input
                  id="guestName"
                  type="text"
                  required
                  name="guestName"
                  value={formData.guestName}
                  onChange={handleChange}
                  placeholder="e.g. Dr. Rajesh & Shalini Sharma"
                  className="w-full px-4 py-3 rounded-xl border border-[#C5A059]/40 bg-[#FAF6F0] font-outfit text-sm text-[#2C2223] placeholder:text-[#2C2223]/40 focus:outline-none focus:ring-2 focus:ring-[#7A1C28]"
                />
              </div>

              {/* Contact info & Guest Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phoneOrEmail" className="block text-xs font-outfit font-semibold uppercase tracking-wider text-[#58111A] mb-1.5">
                    WhatsApp or Mobile Number *
                  </label>
                  <input
                    id="phoneOrEmail"
                    type="text"
                    required
                    name="phoneOrEmail"
                    value={formData.phoneOrEmail}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-[#C5A059]/40 bg-[#FAF6F0] font-outfit text-sm text-[#2C2223] placeholder:text-[#2C2223]/40 focus:outline-none focus:ring-2 focus:ring-[#7A1C28]"
                  />
                </div>

                {formData.attendance === 'attending' && (
                  <div>
                    <label htmlFor="guestCount" className="block text-xs font-outfit font-semibold uppercase tracking-wider text-[#58111A] mb-1.5">
                      Number of Guests
                    </label>
                    <select
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#C5A059]/40 bg-[#FAF6F0] font-outfit text-sm text-[#2C2223] focus:outline-none focus:ring-2 focus:ring-[#7A1C28]"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ (Family)</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Message to Couple */}
              <div>
                <label htmlFor="message" className="block text-xs font-outfit font-semibold uppercase tracking-wider text-[#58111A] mb-1.5">
                  Blessings or Warm Note (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share a wish or blessing for Ananya & Kabir..."
                  className="w-full px-4 py-3 rounded-xl border border-[#C5A059]/40 bg-[#FAF6F0] font-outfit text-sm text-[#2C2223] placeholder:text-[#2C2223]/40 focus:outline-none focus:ring-2 focus:ring-[#7A1C28]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#58111A] to-[#7A1C28] text-[#FAF6F0] py-3.5 px-6 font-outfit text-xs font-semibold uppercase tracking-widest shadow-md hover:bg-[#7A1C28] active:scale-98 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#E5C278]" />
                  <span>{isSubmitting ? "Confirming..." : "Submit RSVP Response"}</span>
                </button>

                <a
                  href={createWhatsAppRSVPLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white py-3.5 px-6 font-outfit text-xs font-semibold uppercase tracking-widest shadow-sm hover:brightness-105 active:scale-98 transition-all"
                  title="Direct 1-tap WhatsApp response"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp RSVP</span>
                </a>
              </div>

              <p className="text-[11px] text-center font-outfit text-[#2C2223]/60 pt-2">
                Helpdesk: {rsvp.contactName} ({rsvp.contactPhone})
              </p>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
