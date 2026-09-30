import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'AegisAI',
    category: 'ENTERPRISE AI / MULTI-AGENT AUTOMATION & RAG PLATFORM',
    description:
      'Architected an enterprise-grade AI support and business automation platform combining Generative AI, Retrieval-Augmented Generation (RAG), Agentic AI, and enterprise APIs. Built on a LangGraph multi-agent architecture where autonomous agents handle internal knowledge retrieval, SQL/database queries, REST API integrations, and IT ticket automation. Features a dual-stack setup coupling a CodeIgniter 3/PHP business application with a Python/FastAPI AI microservice communicating over secure REST APIs.',
    githubUrl: 'https://github.com/Nikhil9131/AegisAI-Enterprise-AI-Support-Automation-Agent.git',
    liveUrl: 'https://aegisai-enterprise-ai-support-autom-xi.vercel.app/',
    tech: [
      'LangGraph',
      'Python',
      'FastAPI',
      'Agentic AI',
      'RAG & GenAI',
      'CodeIgniter 3',
      'PHP',
      'REST APIs',
    ],
    metrics: [
      { label: 'AGENTIC FRAMEWORK', value: 'LangGraph Multi-Agent' },
      { label: 'AI MICROSERVICE', value: 'Python / FastAPI & RAG' },
      { label: 'ENTERPRISE CORE', value: 'CodeIgniter 3 / PHP & REST' },
    ],
  },
  {
    number: '02',
    title: 'DevHire AI',
    category: 'GENAI / AI-POWERED CAREER HIRING PLATFORM',
    description:
      'Built an AI-powered hiring platform connecting developers and recruiters through intelligent job matching. Implemented candidate evaluation, developer profiles, job applications, and recruiter workflows, integrating Gemini AI, REST APIs, PostgreSQL, and Prisma with a React/Node.js full-stack architecture.',
    githubUrl: 'https://github.com/Nikhil9131',
    liveUrl: 'https://dev-hire-ai-ai-powered-career-hirin.vercel.app/',
    tech: [
      'React.js',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'Gemini AI',
      'Express.js',
      'REST APIs',
      'JavaScript',
    ],
    metrics: [
      { label: 'AI ENGINE', value: 'Google Gemini AI' },
      { label: 'DATABASE & ORM', value: 'PostgreSQL & Prisma' },
      { label: 'DEPLOYMENT', value: 'Live on Vercel' },
    ],
  },
  {
    number: '03',
    title: 'Sol and Sands',
    category: 'FULL STACK / FEASIBILITY & ESTIMATION',
    description:
      'Created a comprehensive web platform to evaluate hotel and tourism project viability and financials. Optimized data workflows for subsidies, regulations, and procurement information. Built responsive interfaces and integrated APIs with React.js, Node.js, Express.js, and MongoDB.',
    githubUrl: 'https://github.com/Nikhil9131',
    liveUrl: 'https://sol-and-sands.onrender.com',
    tech: [
      'React.js',
      'Node.js',
      'MongoDB',
      'Express.js',
      'JavaScript',
      'REST APIs',
      'HTML/CSS',
    ],
    metrics: [
      { label: 'STATUS', value: 'Live on Render' },
      { label: 'DOMAIN', value: 'Hotel & Tourism Financials' },
      { label: 'ARCHITECTURE', value: 'MERN Stack' },
    ],
  },
  {
    number: '04',
    title: 'Agri-Power',
    category: 'AGRI-TECH / ACCESSIBLE LEARNING PLATFORM',
    description:
      'Built an accessible web platform to make modern farming techniques and agricultural innovations easily understandable, offering interactive courses and a direct contact system to support farmers with a clean, usability-focused design.',
    githubUrl: 'https://github.com/Nikhil9131/Agri-Power',
    liveUrl: 'https://nikhil9131.github.io/Agri-Power/',
    tech: [
      'HTML/CSS',
      'JavaScript',
      'Web Architecture',
      'UI/UX Design',
      'GitHub Pages',
    ],
    metrics: [
      { label: 'DOMAIN', value: 'Modern Agriculture' },
      { label: 'PURPOSE', value: 'Farmer Learning & Courses' },
      { label: 'STATUS', value: 'Live on GitHub Pages' },
    ],
  },
  {
    number: '05',
    title: 'Cloud-Efficiency System',
    category: 'PATENTED SYSTEM / DISTRIBUTED ARCHITECTURE',
    description:
      'Co-inventor and engineer of a patented system to enhance cloud efficiency via innovative time-shifted task execution. Engineered intelligent algorithms to optimize cloud resource utilization, minimize operational overhead, and maximize computation throughput.',
    githubUrl: 'https://github.com/Nikhil9131',
    tech: [
      'Cloud Architecture',
      'Task Scheduling',
      'Distributed Systems',
      'Optimization',
      'System Design',
    ],
    metrics: [
      { label: 'CREDENTIAL', value: 'Patented System' },
      { label: 'INNOVATION', value: 'Time-Shifted Execution' },
      { label: 'BENEFIT', value: 'Cloud Resource Efficiency' },
    ],
  },
  {
    number: '06',
    title: 'Problem Solving & System Design',
    category: 'ALGORITHMS / 250+ LEETCODE PROBLEMS (C++)',
    description:
      'Solved 250+ DSA problems on LeetCode using C++. Practiced arrays, strings, linked lists, stacks, queues, trees, graphs, dynamic programming, binary search, and sliding window techniques with strong foundations in OOP, complexity optimization, caching, and scalable systems.',
    githubUrl: 'https://github.com/Nikhil9131',
    liveUrl: 'https://leetcode.com/u/Nikhil2012/',
    tech: [
      'C++',
      'Data Structures',
      'Algorithms',
      'Dynamic Programming',
      'OOP',
      'System Design',
    ],
    metrics: [
      { label: 'PROBLEMS SOLVED', value: '250+ LeetCode (C++)' },
      { label: 'PROFILE', value: 'leetcode.com/u/Nikhil2012' },
      { label: 'CORE STRENGTH', value: 'Algorithm Optimization' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
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
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the system architecture cards. Each platform was built to solve complex operational challenges.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        {/* React Bits Stacking Deck */}
<ScrollStack
  itemDistance={20}
  itemScale={0.035}
  itemStackDistance={28}
  stackPosition="15%"
  scaleEndPosition="6%"
  baseScale={0.88}
  useWindowScroll={true}
>
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-950/40 text-emerald-400 text-[10px] font-mono tracking-wider hover:bg-emerald-900/60 hover:border-emerald-400 transition-all duration-300 shadow-[0_0_12px_rgba(52,211,153,0.2)]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
                            <span>LIVE APP</span>
                            <span className="text-[9px]">↗</span>
                          </a>
                        )}
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        <a
                          href={project.liveUrl || project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#D4AF37] transition-colors inline-block"
                        >
                          {project.title}
                        </a>
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // ARCHITECTURE METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                      {project.liveUrl ? (
                        <>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center space-x-2.5 px-5 py-3.5 border border-[#D4AF37] bg-[#D4AF37] text-black font-semibold hover:bg-[#D4AF37]/90 text-[11px] tracking-[0.22em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.3)] cursor-pointer"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            <span>
                              {project.title.includes('LeetCode') || project.title.includes('Problem')
                                ? 'OPEN LEETCODE'
                                : 'OPEN LIVE PROJECT'}
                            </span>
                            <span className="text-xs">↗</span>
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center space-x-2 px-4 py-3.5 border border-[#8C6D4F]/60 bg-[#16120E] hover:border-[#D4AF37] hover:text-[#D4AF37] text-[#EAD8C7] text-[11px] font-medium tracking-[0.22em] uppercase transition-all duration-300 cursor-pointer"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            <span>GITHUB</span>
                            <span className="text-xs">↗</span>
                          </a>
                        </>
                      ) : (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)] cursor-pointer"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          <span>VIEW ON GITHUB</span>
                          <span className="text-xs">↗</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;