import { useState } from 'react';
import pfp from '../../Images/pfp.webp';

export default function AboutDossier() {
  const [activeTab, setActiveTab] = useState<'overview' | 'production' | 'beyond'>('overview');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="w-full mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* LEFT COLUMN (4 cols): Holographic Operator Profile Card */}
        <div
          className="group lg:col-span-4 relative rounded-2xl p-px transition-all duration-300"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Subtle cursor-following spotlight */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 lg:group-hover:opacity-100 -z-10"
            style={{
              background: isHovered
                ? `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(45, 212, 191, 0.35), transparent 70%)`
                : 'none',
            }}
          />

          <div className="h-full p-6 sm:p-7 rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/70 shadow-lg flex flex-col justify-between text-left">
            <div>
              {/* Corner accents */}
              <div className="flex justify-between items-center text-[10px] font-mono text-[#408A71] pb-3 mb-4 border-b border-[#045757]/40">
                <span>SYS_ID // 084-MR</span>
                <span className="flex items-center gap-1.5 text-[#2DD4BF] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
                  OPEN FOR LIA & ROLES
                </span>
              </div>

              {/* Photo with glowing ring */}
              <div className="relative mx-auto w-44 sm:w-48 mb-5 group">
                <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-[#2DD4BF]/40 via-[#408A71]/30 to-[#2DD4BF]/40 blur-md group-hover:blur-lg transition-all" />
                <img
                  className="relative block w-full h-auto rounded-2xl border-2 border-[#045757] group-hover:border-[#2DD4BF] transition-all duration-300 shadow-xl object-cover"
                  src={pfp}
                  alt="Mikael Renberg"
                />
              </div>

              {/* Name & Title */}
              <div className="text-center mb-5">
                <h3 className="text-2xl font-bold text-[#B0E4CC] tracking-tight">
                  Mikael Renberg
                </h3>
                <p className="text-xs font-mono text-[#2DD4BF] font-semibold mt-1">
                  Full-Stack & Applied AI Developer
                </p>
              </div>

              {/* System Specs List */}
              <div className="flex flex-col gap-2 text-xs font-mono pt-3 border-t border-[#045757]/40 text-[#F0F5F0]/85">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-[#408A71]">INTERNSHIP:</span>
                  <span className="text-white font-medium">Devotion Ventures</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-[#408A71]">EDUCATION:</span>
                  <span className="text-white font-medium">NBI-Handelsakademin</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-[#408A71]">LOCATION:</span>
                  <span className="text-white font-medium">Malmö, Sweden</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#408A71]">LANGUAGES:</span>
                  <span className="text-white font-medium">Swedish, English</span>
                </div>
              </div>
            </div>

            {/* Quick Links Footer */}
            <div className="pt-4 mt-5 border-t border-[#045757]/40 flex justify-between items-center text-xs font-mono">
              <span className="text-[#408A71]">PORTFOLIO_PROJECTS:</span>
              <span className="px-2 py-0.5 rounded-md bg-[#061211] text-[#2DD4BF] border border-[#2DD4BF]/30 font-bold">
                20+ Shipped
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (8 cols): Interactive Narrative Terminal */}
        <div className="lg:col-span-8 flex flex-col rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/70 shadow-lg p-6 sm:p-8 text-left">
          {/* Top Bar Accent */}
          <div className="w-12 h-0.5 rounded-full bg-[#408A71] mb-5" />

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-4 mb-6 border-b border-[#045757]/50 font-mono text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'overview'
                  ? 'bg-[#045757]/70 text-white border border-[#2DD4BF] shadow-[0_0_15px_rgba(45,212,191,0.25)] font-semibold'
                  : 'text-[#B0E4CC]/75 hover:text-white hover:bg-[#061211]/80 border border-transparent'
              }`}
            >
              <span>⚡</span>
              <span>Overview // The Pitch</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('production')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'production'
                  ? 'bg-[#045757]/70 text-white border border-[#2DD4BF] shadow-[0_0_15px_rgba(45,212,191,0.25)] font-semibold'
                  : 'text-[#B0E4CC]/75 hover:text-white hover:bg-[#061211]/80 border border-transparent'
              }`}
            >
              <span>🏢</span>
              <span>Production // Devotion Ventures</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('beyond')}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'beyond'
                  ? 'bg-[#045757]/70 text-white border border-[#2DD4BF] shadow-[0_0_15px_rgba(45,212,191,0.25)] font-semibold'
                  : 'text-[#B0E4CC]/75 hover:text-white hover:bg-[#061211]/80 border border-transparent'
              }`}
            >
              <span>☕</span>
              <span>Beyond Code // Ergonomics</span>
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="flex-1 flex flex-col justify-between">
            {activeTab === 'overview' && (
              <div className="fade-in flex flex-col gap-4 text-[#F0F5F0]/90 text-sm sm:text-base leading-relaxed">
                <p>
                  Hey! I'm <strong className="text-white font-semibold">Mikael Renberg</strong>, a software development and AI engineering student based in Malmö, Sweden, studying at{' '}
                  <span className="text-[#2DD4BF] font-semibold">NBI-Handelsakademin</span> while interning at{' '}
                  <span className="text-[#2DD4BF] font-semibold">Devotion Ventures</span>.
                </p>
                <p>
                  My focus is where <strong className="text-white">reactive full-stack architecture meets applied AI systems</strong>. Rather than relying on fragile prompt engineering or isolated scripts, I build deterministic software around machine learning models—with type-safe APIs, structured schema validation, and responsive user experiences.
                </p>
                <p>
                  My toolkit spans both modern web ecosystems (<span className="text-[#2DD4BF] font-mono text-sm">React, TypeScript, Tailwind, Convex</span>) and structured backend systems (<span className="text-[#2DD4BF] font-mono text-sm">C#, .NET, Python, FastAPI, SQL</span>). Across 20+ shipped projects, I've tackled everything from local quantized LLMs on CPU to relational 3NF databases and TDD multiplayer games.
                </p>

                <div className="mt-2 p-3.5 rounded-xl bg-[#061211]/70 border border-[#045757]/60 flex items-center justify-between text-xs font-mono text-[#B0E4CC]">
                  <span>💡 Core Belief:</span>
                  <span className="text-white/80">An AI model is only as valuable as the software architecture wrapped around it.</span>
                </div>
              </div>
            )}

            {activeTab === 'production' && (
              <div className="fade-in flex flex-col gap-4 text-[#F0F5F0]/90 text-sm sm:text-base leading-relaxed">
                <div className="flex items-center gap-2 text-xs font-mono text-[#2DD4BF] uppercase tracking-wider mb-1">
                  <span>ENTERPRISE CASE STUDY // INTERNAL ATS</span>
                </div>
                <p>
                  At <strong className="text-white">Devotion Ventures</strong>, I was tasked with engineering an automated, end-to-end <strong className="text-white">Applicant Tracking System (ATS)</strong> to streamline high-volume talent intake and candidate evaluation.
                </p>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-mono text-[#F0F5F0]/85 pl-1">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2DD4BF]">▹</span>
                    <span><strong className="text-[#B0E4CC]">Reactive Architecture:</strong> Engineered using React, TypeScript, and Convex for real-time state synchronization without polling overhead.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2DD4BF]">▹</span>
                    <span><strong className="text-[#B0E4CC]">AI Candidate Screening:</strong> Integrated automated workflows that parse and evaluate candidate qualifications against structured criteria.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2DD4BF]">▹</span>
                    <span><strong className="text-[#B0E4CC]">Human-in-the-Loop Safeguards:</strong> High-stakes actions (such as outgoing communications) route through an approval queue before dispatch.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2DD4BF]">▹</span>
                    <span><strong className="text-[#B0E4CC]">Automated Background Pipelines:</strong> Scheduled cron jobs and notification systems for SLA tracking.</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'beyond' && (
              <div className="fade-in flex flex-col gap-4 text-[#F0F5F0]/90 text-sm sm:text-base leading-relaxed">
                <p>
                  Great software engineering isn't just about code compiling—it's about <strong className="text-white">developer ergonomics, empathy for users, and team collaboration</strong>.
                </p>
                <p>
                  I'm passionate about developer tools and workspaces. I created and published{' '}
                  <span className="text-[#2DD4BF] font-semibold">Chill Night Mode</span> on the VS Code Marketplace to minimize eye fatigue during late-night coding sessions, built a custom version for Obsidian, and engineered{' '}
                  <span className="text-[#2DD4BF] font-semibold">Slime Helper</span> (an animated desktop companion in WPF that monitors git churn and reminds developers to take breaks).
                </p>
                <p>
                  Outside the terminal, I value clear communication, egoless code reviews, dark roast coffee, and continuous curiosity. In any team, I strive to be a dependable, proactive, and positive colleague.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#061211] text-[#2DD4BF] border border-[#045757]">
                    ☕ Specialty Coffee
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#061211] text-[#2DD4BF] border border-[#045757]">
                    🎨 VS Code Themes
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#061211] text-[#2DD4BF] border border-[#045757]">
                    🧠 Local LLMs & Agents
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#061211] text-[#2DD4BF] border border-[#045757]">
                    🤝 Swedish Fika & Team Culture
                  </span>
                </div>
              </div>
            )}

            {/* Terminal Status bar at bottom */}
            <div className="mt-6 pt-4 border-t border-[#045757]/40 flex flex-wrap justify-between items-center text-xs font-mono text-[#408A71]">
              <span>ACTIVE_TAB // {activeTab.toUpperCase()}</span>
              <span className="text-[#2DD4BF]">READY FOR INSPECTION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
