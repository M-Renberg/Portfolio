import { Link } from 'react-router-dom';

export default function AboutProductionFeature() {
  return (
    <section className="w-full mb-14 text-left">
      {/* Section Header */}
      <div className="w-full mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF] animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#B0E4CC] drop-shadow-[0_2px_10px_rgba(0,0,0,1)] tracking-wide">
            Commercial Production Spotlight
          </h2>
        </div>
        <span className="hidden sm:inline-block text-xs font-mono text-[#408A71]">
          ENTERPRISE_SYSTEM // ATS
        </span>
      </div>

      {/* Main Feature Card */}
      <div className="relative group p-6 sm:p-8 rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/80 hover:border-[#2DD4BF]/70 transition-all duration-300 shadow-xl overflow-hidden">
        {/* Top glowing accent */}
        <div className="w-12 h-0.5 rounded-full bg-[#408A71] group-hover:w-full group-hover:bg-[#2DD4BF] transition-all duration-500 mb-6" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Summary (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-[#061211] text-[#2DD4BF] border border-[#2DD4BF]/40">
                🏢 Devotion Ventures
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-[#061211] text-[#B0E4CC]/80 border border-[#045757]/60">
                Full-Stack & AI Developer Intern
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-[#061211] text-[#408A71]">
                2025 - Present
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#B0E4CC] transition-colors">
              Applicant Tracking System (ATS) & Candidate Pipeline Platform
            </h3>

            <p className="text-sm sm:text-base text-[#F0F5F0]/85 leading-relaxed">
              Designed and implemented an automated candidate intake and evaluation platform for Devotion Ventures. Built with a reactive backend and modern UI to eliminate recruitment bottlenecks and streamline candidate evaluation.
            </p>

            {/* Architecture Highlights Pill Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-[#061211]/80 border border-[#045757]/60 flex items-start gap-2">
                <span className="text-[#2DD4BF]">⚡</span>
                <div>
                  <strong className="text-white block">Reactive Cloud (Convex)</strong>
                  <span className="text-[#F0F5F0]/70">Real-time state sync & background worker crons.</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#061211]/80 border border-[#045757]/60 flex items-start gap-2">
                <span className="text-[#2DD4BF]">🤖</span>
                <div>
                  <strong className="text-white block">Automated AI Screening</strong>
                  <span className="text-[#F0F5F0]/70">Structured skill parsing & candidate evaluations.</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#061211]/80 border border-[#045757]/60 flex items-start gap-2">
                <span className="text-[#2DD4BF]">🛡️</span>
                <div>
                  <strong className="text-white block">Human-in-the-Loop (HITL)</strong>
                  <span className="text-[#F0F5F0]/70">Approval gate for outgoing correspondence.</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#061211]/80 border border-[#045757]/60 flex items-start gap-2">
                <span className="text-[#2DD4BF]">⏱️</span>
                <div>
                  <strong className="text-white block">SLA Monitoring & Sync</strong>
                  <span className="text-[#F0F5F0]/70">Automated candidate response timers & alerts.</span>
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
                "Proves hands-on commercial experience building the exact software talent acquisition teams use every single day."
              </p>
            </div>

            <Link
              to="/work/ats-devotion-ventures"
              className="w-full py-2.5 px-4 rounded-xl bg-[#045757]/60 text-xs font-mono font-bold text-[#2DD4BF] border border-[#2DD4BF]/50 hover:bg-[#2DD4BF] hover:text-[#091413] transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Inspect Full ATS Case Study</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

