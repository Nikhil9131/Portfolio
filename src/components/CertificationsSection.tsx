// src/components/CertificationsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge: string;
  description: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    id: '01',
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'ORACLE',
    date: 'APR 2026',
    badge: 'ORACLE CLOUD AI',
    description:
      'Certified proficiency in Oracle Cloud Infrastructure AI Foundations, covering Generative AI principles, Oracle Database solutions, and serverless Cloud Functions.',
    skills: ['Generative AI', 'Oracle DB', 'Cloud Functions'],
  },
  {
    id: '02',
    title: 'Generative AI Fluency',
    issuer: 'NASSCOM',
    date: 'FEB 2026',
    badge: 'GENAI CREDENTIAL',
    description:
      'Certified understanding of Large Language Model (LLM) architectures, prompt engineering strategies, and conversational AI application workflows.',
    skills: ['Generative AI', 'Prompt Engineering', 'LLMs'],
  },
  {
    id: '03',
    title: 'Operating System Fundamentals',
    issuer: 'SWAYAM NPTEL',
    date: 'JUL 2025 – OCT 2025',
    badge: 'CORE SYSTEMS',
    description:
      'Rigorous foundation in operating systems architecture, process mapping, scheduling algorithms, networking, and Docker containers.',
    skills: ['Docker', 'Networking', 'Process Mapping', 'Time Management'],
  },
  {
    id: '04',
    title: 'Python for Data Analysis',
    issuer: 'COURSERA',
    date: 'MAY 2025 – JUN 2025',
    badge: 'DATA SCIENCE',
    description:
      'Specialized training in data manipulation, exploratory data analysis (EDA), data visualization tools, and scientific computation with NumPy and Pandas.',
    skills: ['Python', 'Pandas', 'NumPy', 'Data Visualization Tools'],
  },
  {
    id: '05',
    title: 'Concepts in SQL',
    issuer: 'COURSERA',
    date: 'MAY 2025',
    badge: 'DATABASE ARCHITECTURE',
    description:
      'Relational database querying, schema modeling, and high-performance data processing across MySQL, PostgreSQL, and Apache Spark.',
    skills: ['MySQL', 'PostgreSQL', 'Spark', 'Relational Queries'],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-8 pb-28 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 right-1/4 w-[32rem] h-[32rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            05 / ACCREDITATIONS &amp; CERTIFICATIONS
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              CERTIFIED EXPERTISE.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              STANDARDS ATTAINED.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Recognized industry credentials spanning Generative AI, Machine Learning, Geospatial computation, and Database architecture.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative p-7 sm:p-8 rounded-sm border border-[#8C6D4F]/35 bg-[#100D0B]/90 backdrop-blur-xl flex flex-col justify-between group overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/80 hover:shadow-[0_16px_45px_rgba(212,175,55,0.12)] cursor-pointer"
            >
              {/* Gold Top Light Line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Minimal Corner Brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors" />

              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9.5px] font-mono tracking-[0.22em] uppercase text-[#D4AF37]">
                    {cert.badge}
                  </span>
                  <span className="text-[9.5px] font-mono px-2 py-0.5 border border-[#8C6D4F]/30 bg-[#16120E] text-[#A8988B] group-hover:text-white group-hover:border-[#D4AF37]/40 transition-all">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl sm:text-3xl font-normal tracking-wide text-white mb-2 group-hover:text-[#F7E7C4] transition-colors leading-[1.05]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {cert.title}
                </h3>

                {/* Issuer */}
                <span
                  className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C4B29E] mb-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {cert.issuer}
                </span>

                {/* Description */}
                <p
                  className="text-xs text-[#9E8F82] font-light leading-[1.75] mb-6 group-hover:text-[#C5B7A9] transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {cert.description}
                </p>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#8C6D4F]/20">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-[9.5px] font-mono uppercase rounded-sm border border-[#8C6D4F]/30 bg-[#15110E] text-[#E8D7C5] group-hover:border-[#D4AF37]/40 group-hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CertificationsSection;
