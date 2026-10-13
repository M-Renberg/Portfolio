import pfp from '../Images/pfp.webp';
import ScrambleText from '../util/ScrambleText';
import '../tailwind/glitch-fx.css';

export default function AboutMe() {
  const techCategories = [
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

  return (
    <div className="relative min-h-[calc(100vh-2rem)] w-full flex flex-col items-center">
      {/* Glowing light ball in top right */}
      <div
        className="pointer-events-none absolute -top-16 -right-10 sm:-top-24 sm:-right-16 w-72 h-72 sm:w-120 sm:h-120 rounded-full 
        bg-[radial-gradient(circle,rgba(64,138,113,0.55)_0%,rgba(40,90,72,0.3)_40%,transparent_70%)] 
        blur-3xl -z-10"
        aria-hidden="true"
      />

      {/* Main container with center fade-in */}
      <div className="center-fade-in relative z-10 w-full max-w-5xl flex flex-col items-center py-8 sm:py-12 px-4 sm:px-8">
        {/* Title */}
        <div className="relative mb-2">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-black/60 blur-3xl scale-125" aria-hidden="true" />
          <ScrambleText
            text="About Me"
            className="text-4xl sm:text-6xl text-center mt-2 mb-4 drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]"
            delayMs={200}
            speedMs={35}
          />
        </div>

        {/* Intro subtitle */}
        <div className="fade-in-delayed-1 max-w-2xl mx-auto text-center mb-10 drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
          <p className="text-base sm:text-lg text-[#F0F5F0]/90 leading-relaxed">
            Get to know my journey, academic background, and technical toolkit.
          </p>
        </div>

        {/* Profile Card with Frosted Glass HUD styling */}
        <section className="w-full mb-14 p-6 sm:p-10 rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/70 hover:border-[#2DD4BF]/60 transition-all duration-300 shadow-lg shadow-[0_0_25px_rgba(4,87,87,0.2)]">
          {/* Top accent line */}
          <div className="w-12 h-0.5 rounded-full bg-[#408A71] hover:w-full transition-all duration-500 mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* PFP Photo Column */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-teal-500/30 to-emerald-500/30 blur-md group-hover:blur-lg transition-all" />
                <img
                  className="relative block w-56 sm:w-64 h-auto rounded-2xl border-2 border-[#045757]/80 group-hover:border-[#2DD4BF]/80 transition-all duration-300 shadow-2xl object-cover"
                  src={pfp}
                  alt="Selfie of Mikael Renberg"
                />
              </div>
            </div>

            {/* Bio Text Column */}
            <div className="md:col-span-8 flex flex-col gap-4 text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#B0E4CC] drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
                Software & AI Development Student
              </h3>

              <div className="flex flex-col gap-3 text-base sm:text-lg text-[#F0F5F0]/85 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                <p>
                  Hey! I'm <strong className="text-white">Mikael</strong>, a software development student based in Sweden, currently majoring in AI development at <span className="text-[#2DD4BF] font-semibold">NBI-Handelsakademin</span>.
                </p>
                <p>
                  I am currently in my first year of studies. Much of what I share on GitHub represents both rigorous academic coursework and independent side projects where I explore new architectural ideas.
                </p>
                <p>
                  My greatest passion lies at the intersection of <span className="text-[#2DD4BF] font-semibold">AI integration and modern software systems</span> — turning complex algorithms into reliable, intuitive, and high-impact web and mobile applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Header */}
        <div className="w-full mb-6 flex items-center gap-3 text-left">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF] animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#B0E4CC] drop-shadow-[0_2px_10px_rgba(0,0,0,1)] tracking-wide">
            Technical Stack & Tools
          </h2>
        </div>

        {/* 4 Frosted HUD Cards for Tech Categories */}
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {techCategories.map((category) => (
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
    </div>
  );
}