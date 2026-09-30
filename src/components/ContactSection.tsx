// src/components/ContactSection.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-5"
              >
                <span
                  className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  06 / CONTACT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    INITIALIZE
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    TRANSMISSION.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Have an ambitious system to architect, an engineering opportunity, or a collaborative inquiry? Send a direct dispatch or connect directly.
              </p>

              {/* Direct Channels */}
              <div className="space-y-3">
                <a
                  href="mailto:nikhilrathore10b@gmail.com"
                  className="p-3.5 rounded-sm border border-[#8C6D4F]/30 bg-[#0E0C0A] flex items-center justify-between group hover:border-[#D4AF37] transition-all"
                >
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono tracking-widest text-[#8C6D4F] uppercase">
                      DIRECT EMAIL
                    </span>
                    <span className="text-xs text-[#E8D7C5] font-mono group-hover:text-[#F7E7C4] transition-colors">
                      nikhilrathore10b@gmail.com
                    </span>
                  </div>
                  <span className="text-xs text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors">↗</span>
                </a>

                <div className="p-3.5 rounded-sm border border-[#8C6D4F]/30 bg-[#0E0C0A] flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono tracking-widest text-[#8C6D4F] uppercase">
                      PHONE / WHATSAPP
                    </span>
                    <span className="text-xs text-[#E8D7C5] font-mono">
                      +91 9131344990
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#8C6D4F]">IN</span>
                </div>

                <div className="p-3.5 rounded-sm border border-[#8C6D4F]/30 bg-[#0E0C0A] flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono tracking-widest text-[#8C6D4F] uppercase">
                      LOCATION
                    </span>
                    <span className="text-xs text-[#E8D7C5] font-mono">
                      Korba, Chhattisgarh, India
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#8C6D4F]">LOCAL</span>
                </div>

                <div className="grid grid-cols-3 gap-2.5 pt-2">
                  <a
                    href="https://github.com/Nikhil9131"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-sm border border-[#8C6D4F]/30 bg-[#0E0C0A] flex items-center justify-between group hover:border-[#D4AF37] transition-all"
                  >
                    <span className="text-[10px] font-mono text-[#E8D7C5] group-hover:text-[#F7E7C4]">
                      GITHUB
                    </span>
                    <span className="text-xs text-[#8C6D4F] group-hover:text-[#D4AF37]">↗</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/nikhil-kumar-rathore-b50029281/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-sm border border-[#8C6D4F]/30 bg-[#0E0C0A] flex items-center justify-between group hover:border-[#D4AF37] transition-all"
                  >
                    <span className="text-[10px] font-mono text-[#E8D7C5] group-hover:text-[#F7E7C4]">
                      LINKEDIN
                    </span>
                    <span className="text-xs text-[#8C6D4F] group-hover:text-[#D4AF37]">↗</span>
                  </a>

                  <a
                    href="https://leetcode.com/u/Nikhil2012/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-sm border border-[#8C6D4F]/30 bg-[#0E0C0A] flex items-center justify-between group hover:border-[#D4AF37] transition-all"
                  >
                    <span className="text-[10px] font-mono text-[#E8D7C5] group-hover:text-[#F7E7C4]">
                      LEETCODE
                    </span>
                    <span className="text-xs text-[#8C6D4F] group-hover:text-[#D4AF37]">↗</span>
                  </a>
                </div>

                {/* Direct Resume Download Link */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Nikhil_Kumar_Rathore_Resume.pdf"
                  className="p-3.5 rounded-sm border border-[#D4AF37]/50 bg-[#16120E] flex items-center justify-between group hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.08)] mt-3"
                >
                  <div className="flex items-center space-x-2.5">
                    <span className="text-xs text-[#D4AF37]">↓</span>
                    <span className="text-[10.5px] font-mono font-medium tracking-wider text-[#F7E7C4] uppercase">
                      DOWNLOAD RESUME (PDF)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#D4AF37] group-hover:translate-y-0.5 transition-transform">
                    VERIFIED CV ↗
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Monolith Terminal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

            {sent ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37] text-sm">
                  ✓
                </div>
                <h3 className="text-3xl text-white font-normal uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  PACKET DELIVERED
                </h3>
                <p className="text-xs text-[#A8988B] font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Transmission registered successfully.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      // SENDER
                    </span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter name"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      // CHANNEL
                    </span>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter email"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                    // PAYLOAD
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter transmission payload..."
                    className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 p-4 outline-none rounded-sm transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] hover:bg-[#1A1510] text-[#E8DFD8] hover:text-[#F7E7C4] text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  EXECUTE DISPATCH ↗
                </button>

              </form>
            )}
          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            PORTFOLIO // EDITION 2026
          </span>
          <span className="text-[10px] font-mono text-[#8C6D4F]">
            © {new Date().getFullYear()} • ENGINEERED WITH PRECISION
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;