import { useState } from 'react';

interface TechItem {
  name: string;
  category: 'ai' | 'frontend' | 'backend' | 'craft';
  proof: string;
  icon: string;
}

const techItems: TechItem[] = [
  // Applied AI & ML
  { name: 'PyTorch', category: 'ai', proof: 'Neural network training & academic pipelines', icon: '🔥' },
  { name: 'Scikit-Learn', category: 'ai', proof: 'Telco Churn predictive classification', icon: '📈' },
  { name: 'Hugging Face (SmolLM2)', category: 'ai', proof: 'Local offline SLM inference in Oracle-LLM', icon: '🤗' },
  { name: 'FastAPI & Pydantic', category: 'ai', proof: 'Typed ML microservices & schema validation', icon: '⚡' },
  { name: 'LLM Orchestration', category: 'ai', proof: 'Automated candidate screening workflows', icon: '🤖' },
  { name: 'Streamlit', category: 'ai', proof: 'Interactive ML exploration dashboards', icon: '📊' },

  // Frontend & UI
  { name: 'React', category: 'frontend', proof: 'Devotion Ventures ATS & reactive SPAs', icon: '⚛️' },
  { name: 'TypeScript', category: 'frontend', proof: 'Strict end-to-end typing across portfolio', icon: '🔷' },
  { name: 'Tailwind CSS v4', category: 'frontend', proof: 'Cyberpunk HUD & frosted-glass styling', icon: '🎨' },
  { name: 'Vite', category: 'frontend', proof: 'Fast modern build tooling & bundling', icon: '⚡' },
  { name: 'XAML & XML', category: 'frontend', proof: 'WPF & desktop interfaces in Slime Helper', icon: '🪟' },

  // Backend & Cloud Systems
  { name: 'Convex', category: 'backend', proof: 'Reactive cloud DB & crons in Devotion ATS', icon: '🌐' },
  { name: 'C# & .NET', category: 'backend', proof: 'Slime Helper Desktop & Minimal APIs', icon: '🟣' },
  { name: 'Python', category: 'backend', proof: 'Data pipelines, FastAPI services & ML', icon: '🐍' },
  { name: 'PostgreSQL & Supabase', category: 'backend', proof: 'Words and Di(c)e multiplayer state', icon: '🐘' },
  { name: 'MySQL & 3NF Design', category: 'backend', proof: 'Relational normalization in RestaurangDB', icon: '🐬' },
  { name: 'REST APIs & OpenAPI', category: 'backend', proof: 'Swagger documentation & clean endpoints', icon: '🔌' },

  // Engineering Craft & Developer Tooling
  { name: 'TDD & Automated CI/CD', category: 'craft', proof: 'GitHub Actions test suites in Words and Di(c)e', icon: '🧪' },
  { name: 'Git & GitHub Workflows', category: 'craft', proof: '20+ version-controlled repositories', icon: '🐙' },
  { name: 'VS Code & JetBrains Rider', category: 'craft', proof: 'Creator of Chill Night Mode theme on Marketplace', icon: '🛠️' },
  { name: 'Starship & PowerShell', category: 'craft', proof: 'Customized terminal & developer ergonomics', icon: '💻' },
  { name: 'WPF & OS Hooks', category: 'craft', proof: 'Slime Helper global hooks & git churn detection', icon: '👾' },
];

export default function AboutLivingStack() {
  const [filter, setFilter] = useState<'all' | 'ai' | 'frontend' | 'backend' | 'craft'>('all');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const filteredItems = filter === 'all' ? techItems : techItems.filter((item) => item.category === filter);

  return (
    <section className="w-full mb-14 text-left">
      {/* Header with Counter */}
      <div className="w-full mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF] animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#B0E4CC] drop-shadow-[0_2px_10px_rgba(0,0,0,1)] tracking-wide">
            Living Tech Matrix // Practical Skills
          </h2>
        </div>

        <span className="text-xs font-mono text-[#408A71]">
          TOOLKIT_PROOF // {filteredItems.length} SKILLS
        </span>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-6 font-mono text-xs">
        {[
          { id: 'all' as const, label: 'All Stacks (22)' },
          { id: 'ai' as const, label: 'Applied AI & ML (6)' },
          { id: 'frontend' as const, label: 'Frontend & UI (5)' },
          { id: 'backend' as const, label: 'Backend & Cloud (6)' },
          { id: 'craft' as const, label: 'Engineering Craft (5)' },
        ].map((tab) => {
          const isActive = filter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#2DD4BF] text-[#091413] font-bold shadow-[0_0_15px_rgba(45,212,191,0.3)]'
                  : 'bg-[#0b1a18]/70 text-[#B0E4CC]/80 hover:text-white hover:bg-[#061211] border border-[#045757]/60'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Living Stack Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filteredItems.map((item) => {
          const isHovered = hoveredTech === item.name;
          return (
            <div
              key={item.name}
              onMouseEnter={() => setHoveredTech(item.name)}
              onMouseLeave={() => setHoveredTech(null)}
              className={`group p-4 rounded-xl bg-[#0b1a18]/75 backdrop-blur-md border transition-all duration-200 shadow-md flex flex-col justify-between text-left cursor-default ${
                isHovered
                  ? 'border-[#2DD4BF] shadow-[0_0_20px_rgba(45,212,191,0.25)]'
                  : 'border-[#045757]/70 hover:border-[#2DD4BF]/70'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-base">{item.icon}</span>
                  <span className="text-sm font-bold font-mono text-[#F0F5F0] group-hover:text-[#2DD4BF] transition-colors">
                    {item.name}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#061211] text-[#408A71] border border-white/5 uppercase">
                  {item.category}
                </span>
              </div>

              {/* Context / Proof tooltip box */}
              <div className="mt-2 pt-2 border-t border-white/5 flex items-start gap-1.5 text-xs font-mono text-[#B0E4CC]/85">
                <span className="text-[#2DD4BF] shrink-0 font-bold">↳</span>
                <span className="leading-snug text-[#F0F5F0]/80">
                  {item.proof}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 text-right text-[11px] font-mono text-[#408A71]">
        💡 Hover or inspect skills to view tangible project implementations
      </div>
    </section>
  );
}
