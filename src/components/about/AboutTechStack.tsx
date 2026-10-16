export interface TechCategory {
  title: string;
  icon: string;
  items: string[];
}

const defaultTechCategories: TechCategory[] = [
  {
    title: 'Core Languages & Logic',
    icon: '⚡',
    items: ['C#', 'TypeScript', 'JavaScript', 'Python', 'SQL & NoSQL'],
  },
  {
    title: 'Frontend & UI',
    icon: '🎨',
    items: ['React', 'Tailwind CSS', 'HTML5 & CSS3', 'XAML & XML'],
  },
  {
    title: 'Frameworks & Platforms',
    icon: '🛠️',
    items: ['.NET', '.NET MAUI', 'Vite', 'REST APIs'],
  },
  {
    title: 'Cloud & Environment',
    icon: '☁️',
    items: ['Azure', 'Supabase', 'Convex', 'Git & GitHub', 'VS Code & Rider'],
  },
];

interface AboutTechStackProps {
  categories?: TechCategory[];
}

export default function AboutTechStack({
  categories = defaultTechCategories,
}: AboutTechStackProps) {
  return (
    <div className="w-full">
      {/* Tech Stack Header */}
      <div className="w-full mb-6 flex items-center gap-3 text-left">
        <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF] animate-pulse" />
        <h2 className="text-2xl sm:text-3xl font-bold text-[#B0E4CC] drop-shadow-[0_2px_10px_rgba(0,0,0,1)] tracking-wide">
          Technical Stack & Tools
        </h2>
      </div>

      {/* Frosted HUD Cards for Tech Categories */}
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        {categories.map((category) => (
          <div
            key={category.title}
            className="group p-6 rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/70 hover:border-[#2DD4BF]/70 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(40,90,72,0.35)] flex flex-col justify-between text-left"
          >
            {/* Top accent bar */}
            <div className="w-8 h-0.5 rounded-full bg-[#408A71] group-hover:w-full group-hover:bg-[#2DD4BF] transition-all duration-500 mb-4" />

            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-[#B0E4CC] group-hover:text-white transition-colors">
                  {category.title}
                </h3>
              </div>

              <ul className="flex flex-col gap-2 pt-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm font-mono text-[#F0F5F0]/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]/60 group-hover:bg-[#2DD4BF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

