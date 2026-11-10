import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AboutProductionFeature() {
  const [selectedSpotlight, setSelectedSpotlight] = useState<'bam' | 'devotion'>('bam');

  return (
    <section className="w-full mb-14 text-left">
      {/* Section Header */}
      <div className="w-full mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF] animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#B0E4CC] drop-shadow-[0_2px_10px_rgba(0,0,0,1)] tracking-wide">
            Commercial Production Spotlight
          </h2>
        </div>
        <span className="hidden sm:inline-block text-xs font-mono text-[#408A71]">
          ENTERPRISE_SYSTEM // PRODUCTION_WORK
        </span>
      </div>

      {/* Spotlight Switcher Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-4 font-mono text-xs">
        <button
          type="button"
          onClick={() => setSelectedSpotlight('bam')}
          className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
            selectedSpotlight === 'bam'
              ? 'bg-[#045757]/80 text-white border border-[#2DD4BF] shadow-[0_0_15px_rgba(45,212,191,0.25)] font-semibold'
              : 'text-[#B0E4CC]/75 hover:text-white hover:bg-[#061211]/80 border border-[#045757]/50'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-ping" />
          <span>Brand About Me (BAM) // Current LIA</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedSpotlight('devotion')}
          className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
            selectedSpotlight === 'devotion'
              ? 'bg-[#045757]/80 text-white border border-[#2DD4BF] shadow-[0_0_15px_rgba(45,212,191,0.25)] font-semibold'
              : 'text-[#B0E4CC]/75 hover:text-white hover:bg-[#061211]/80 border border-[#045757]/50'
          }`}
        >
          <span>🏢</span>
          <span>Devotion Ventures // Enterprise Platform</span>
        </button>
      </div>

      {/* Main Feature Card */}
      <div className="relative group p-6 sm:p-8 rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/80 hover:border-[#2DD4BF]/70 transition-all duration-300 shadow-xl overflow-hidden">
        {/* Top glowing accent */}
        <div className="w-12 h-0.5 rounded-full bg-[#408A71] group-hover:w-full group-hover:bg-[#2DD4BF] transition-all duration-500 mb-6" />

        {selectedSpotlight === 'bam' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Summary (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-[#061211] text-[#2DD4BF] border border-[#2DD4BF]/40">
                  ⚡ Brand About Me (BAM)
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-[#061211] text-[#B0E4CC]/80 border border-[#045757]/60">
                  Full-Stack &amp; AI Developer
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-[#061211] text-[#408A71] border border-[#045757]/40">
                  🟢 Active LIA Internship
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#B0E4CC] transition-colors">
                Marketing Intelligence AI Engine &amp; Digital Platform
              </h3>

              <p className="text-sm sm:text-base text-[#F0F5F0]/85 leading-relaxed">
                Architected and integrated the core AI engine powering Brand About Me&apos;s digital marketing platform. Built with React and TypeScript, bridging modern full-stack web applications with intelligent, automated marketing pipelines.
              </p>

              {/* Architecture Highlights Pill Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-[#061211]/80 border border-[#045757]/60 flex items-start gap-2">
                  <span className="text-[#2DD4BF]">🧠</span>
                  <div>
                    <strong className="text-white block">Core AI Engine</strong>
                    <span className="text-[#F0F5F0]/70">Engineered modular AI processing pipelines for platform marketing flows.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#061211]/80 border border-[#045757]/60 flex items-start gap-2">
                  <span className="text-[#2DD4BF]">⚡</span>
                  <div>
                    <strong className="text-white block">React &amp; TypeScript UI</strong>
                    <span className="text-[#F0F5F0]/70">Strict type safety, responsive operator interfaces, and reusable components.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#061211]/80 border border-[#045757]/60 flex items-start gap-2">
                  <span className="text-[#2DD4BF]">🔄</span>
                  <div>
                    <strong className="text-white block">Automated Workflows</strong>
                    <span className="text-[#F0F5F0]/70">Accelerating marketing campaign turnaround and content intelligence.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#061211]/80 border border-[#045757]/60 flex items-start gap-2">
                  <span className="text-[#2DD4BF]">🛡️</span>
                  <div>
                    <strong className="text-white block">Full-Stack Reliability</strong>
                    <span className="text-[#F0F5F0]/70">Clean API integration, modular architecture, and deterministic validation.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Action / Metrics Card (4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full p-5 rounded-xl bg-[#061211]/90 border border-[#045757]/70 text-left">
              <div>
                <span className="text-[11px] font-mono text-[#408A71] uppercase tracking-wider block mb-2">
                  CORE STACK DEPLOYED
                </span>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['React', 'TypeScript', 'AI Engine', 'Full-Stack', 'Applied AI', 'REST APIs'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-[#0b1a18] text-[#2DD4BF] border border-[#2DD4BF]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-[#F0F5F0]/75 leading-relaxed mb-6 font-mono">
                  &quot;Demonstrates current commercial production work designing and integrating proprietary AI engines into live customer-facing platforms.&quot;
                </p>
              </div>

              <Link
                to="/work/brand-about-me"
                className="w-full py-2.5 px-4 rounded-xl bg-[#045757]/60 text-xs font-mono font-bold text-[#2DD4BF] border border-[#2DD4BF]/50 hover:bg-[#2DD4BF] hover:text-[#091413] transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Inspect Architecture Case Study</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Summary (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-[#061211] text-[#2DD4BF] border border-[#2DD4BF]/40">
                  🏢 Devotion Ventures
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-[#061211] text-[#B0E4CC]/80 border border-[#045757]/60">
                  Full-Stack Developer
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-[#061211] text-[#408A71] border border-[#045757]/40">
                  🔒 Private Internal Platform
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#B0E4CC] transition-colors">
                Internal Enterprise Workflow &amp; Operations Platform
              </h3>

              <p className="text-sm sm:text-base text-[#F0F5F0]/85 leading-relaxed">
                Designed and implemented a reactive full-stack internal platform for Devotion Ventures to coordinate operational workflows. Built with a real-time cloud backend and modern web UI to automate task orchestration and data synchronization.
              </p>

              {/* Architecture Highlights Pill Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-[#061211]/80 border border-[#045757]/60 flex items-start gap-2">
                  <span className="text-[#2DD4BF]">⚡</span>
                  <div>
                    <strong className="text-white block">Reactive Cloud (Convex)</strong>
                    <span className="text-[#F0F5F0]/70">Real-time state synchronization &amp; reactive queries.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#061211]/80 border border-[#045757]/60 flex items-start gap-2">
                  <span className="text-[#2DD4BF]">🔄</span>
                  <div>
                    <strong className="text-white block">Automated Pipelines</strong>
                    <span className="text-[#F0F5F0]/70">Scheduled cron jobs &amp; asynchronous task processing.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#061211]/80 border border-[#045757]/60 flex items-start gap-2">
                  <span className="text-[#2DD4BF]">🚦</span>
                  <div>
                    <strong className="text-white block">Operator Review Gates</strong>
                    <span className="text-[#F0F5F0]/70">Multi-step validation safeguards for sensitive actions.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#061211]/80 border border-[#045757]/60 flex items-start gap-2">
                  <span className="text-[#2DD4BF]">🛡️</span>
                  <div>
                    <strong className="text-white block">Type-Safe Architecture</strong>
                    <span className="text-[#F0F5F0]/70">Strict schema validation &amp; deterministic state models.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Action / Metrics Card (4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full p-5 rounded-xl bg-[#061211]/90 border border-[#045757]/70 text-left">
              <div>
                <span className="text-[11px] font-mono text-[#408A71] uppercase tracking-wider block mb-2">
                  CORE STACK DEPLOYED
                </span>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['React', 'TypeScript', 'Convex', 'Tailwind CSS', 'REST APIs'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-[#0b1a18] text-[#2DD4BF] border border-[#2DD4BF]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-[#F0F5F0]/75 leading-relaxed mb-6 font-mono">
                  &quot;Demonstrates hands-on commercial experience building scalable, reactive enterprise platforms and mission-critical internal tools.&quot;
                </p>
              </div>

              <Link
                to="/work/ats-devotion-ventures"
                className="w-full py-2.5 px-4 rounded-xl bg-[#045757]/60 text-xs font-mono font-bold text-[#2DD4BF] border border-[#2DD4BF]/50 hover:bg-[#2DD4BF] hover:text-[#091413] transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Inspect Architecture Case Study</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
