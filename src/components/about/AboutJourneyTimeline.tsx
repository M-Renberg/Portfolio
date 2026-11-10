import { Link } from 'react-router-dom';

export default function AboutJourneyTimeline() {
  const milestones = [
    {
      period: '2025',
      role: 'Full-Stack Developer',
      organization: 'Devotion Ventures',
      badge: 'COMMERCIAL_EXPERIENCE',
      badgeColor: 'text-[#2DD4BF] border-[#2DD4BF]/40 bg-[#061211]',
      desc: 'Engineered a reactive full-stack internal platform with React, TypeScript, and Convex. Focused on real-time state synchronization, asynchronous worker pipelines, and safeguarded operator review queues.',
      skills: ['React', 'TypeScript', 'Convex', 'Tailwind CSS', 'Cloud Architecture'],
    },
    {
      period: '2024 - 2026',
      role: 'Software & AI Development Degree',
      organization: 'NBI-Handelsakademin (Malmö)',
      badge: 'ACADEMIC_SPECIALIZATION',
      badgeColor: 'text-[#B0E4CC] border-[#045757]/60 bg-[#061211]',
      desc: 'Rigorous 2-year vocational program specializing in applied machine learning, deep learning (PyTorch), Python microservices (FastAPI), C# .NET architecture, and database normalization (3NF).',
      skills: ['PyTorch', 'Scikit-Learn', 'FastAPI', 'C# / .NET', 'SQL (3NF)'],
    },
    {
      period: '2024 - Present',
      role: 'Independent R&D & Open Source Crafter',
      organization: 'Self-Directed Velocity',
      badge: 'COMMUNITY_&_TOOLING',
      badgeColor: 'text-[#408A71] border-[#408A71]/50 bg-[#061211]',
      desc: 'Authored and published Chill Night Mode on the VS Code Marketplace, engineered Oracle-LLM for offline CPU inference with SmolLM2, built Slime Helper Desktop in WPF with OS hooks, and developed test-driven multiplayer games.',
      skills: ['Local SLM', 'WPF / Desktop', 'TDD & CI/CD', 'VS Code Themes', 'Supabase'],
    },
  ];

  return (
    <section className="w-full mb-14 text-left">
      {/* Header */}
      <div className="w-full mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF] animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#B0E4CC] drop-shadow-[0_2px_10px_rgba(0,0,0,1)] tracking-wide">
            Career Trajectory // Milestones
          </h2>
        </div>
        <span className="text-xs font-mono text-[#408A71]">
          ROADMAP // MOMENTUM
        </span>
      </div>

      {/* Vertical Cyber Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-[#045757]/70 flex flex-col gap-8">
        {milestones.map((item) => (
          <div key={item.organization} className="relative group">
            {/* Glowing Node Dot on the timeline */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#061211] border-2 border-[#2DD4BF] group-hover:bg-[#2DD4BF] transition-all duration-300 shadow-[0_0_10px_rgba(45,212,191,0.5)] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] group-hover:bg-[#091413]" />
            </div>

            {/* Timeline Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/70 group-hover:border-[#2DD4BF]/70 transition-all duration-300 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono text-[#2DD4BF] font-semibold">
                  {item.period}
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#B0E4CC] transition-colors">
                {item.role}
              </h3>
              <p className="text-xs font-mono text-[#2DD4BF]/90 font-medium mb-3">
                {item.organization}
              </p>

              <p className="text-sm text-[#F0F5F0]/85 leading-relaxed mb-4 font-sans">
                {item.desc}
              </p>

              {item.organization === 'Devotion Ventures' && (
                <div className="mb-4">
                  <Link
                    to="/work/ats-devotion-ventures"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#2DD4BF] hover:underline"
                  >
                    <span>View Architecture Case Study</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-[#061211] text-[#B0E4CC]/80 border border-[#045757]/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
