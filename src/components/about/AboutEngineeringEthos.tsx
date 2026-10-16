export default function AboutEngineeringEthos() {
  const principles = [
    {
      title: 'Deterministic & Applied AI',
      icon: '🧠',
      tag: 'SYSTEMS // HITL',
      desc: 'AI models are probabilistic; production software must be deterministic. I wrap machine learning in strict schema boundaries (Pydantic), enforce human-in-the-loop review for high-stakes workflows, and deploy lightweight offline models (SmolLM2 on CPU) when data privacy is paramount.',
      quote: '"An AI model is only as dependable as the validation pipeline surrounding it."',
    },
    {
      title: 'Reactive & Structured Architecture',
      icon: '⚡',
      tag: 'ARCHITECTURE // TYPES',
      desc: 'Choose the simplest architecture that solves the business challenge. I leverage reactive cloud backends (Convex, Supabase) for live user sync without polling fatigue, alongside structured relational design (MySQL 3NF, EF Core) when strict consistency and data integrity are required.',
      quote: '"End-to-end type safety protects velocity and prevents runtime surprises."',
    },
    {
      title: 'Developer Ergonomics & Team Empathy',
      icon: '🛠️',
      tag: 'CRAFT // HUMAN',
      desc: 'Great engineering respects the humans building and using the software. From publishing Chill Night Mode on the VS Code Marketplace to designing desktop companions and CLI tools, I believe clear documentation, egoless code reviews, and positive team energy create high-impact software.',
      quote: '"Code is read far more often than it is written—write for your future teammates."',
    },
  ];

  return (
    <section className="w-full mb-14 text-left">
      {/* Header */}
      <div className="w-full mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF] animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#B0E4CC] drop-shadow-[0_2px_10px_rgba(0,0,0,1)] tracking-wide">
            Engineering Ethos // How I Build
          </h2>
        </div>
        <span className="text-xs font-mono text-[#408A71]">
          PHILOSOPHY // 3 PILLARS
        </span>
      </div>

      {/* Grid of 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {principles.map((principle) => (
          <div
            key={principle.title}
            className="group relative p-6 rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/70 hover:border-[#2DD4BF]/70 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(40,90,72,0.35)] flex flex-col justify-between"
          >
            {/* Top accent bar */}
            <div className="w-10 h-0.5 rounded-full bg-[#408A71] group-hover:w-full group-hover:bg-[#2DD4BF] transition-all duration-500 mb-5" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{principle.icon}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#061211] text-[#2DD4BF] border border-[#2DD4BF]/30 font-semibold">
                  {principle.tag}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#B0E4CC] group-hover:text-white transition-colors mb-3">
                {principle.title}
              </h3>

              <p className="text-sm text-[#F0F5F0]/85 leading-relaxed mb-6 font-sans">
                {principle.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-white/5 text-xs font-mono text-[#2DD4BF]/90 italic">
              {principle.quote}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

