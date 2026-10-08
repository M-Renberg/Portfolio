import { useState } from 'react';
import useFetchJson from '../hooks/useFetchJson';
import type { ProjectInterface } from '../util/projectInterface';
import { Icon } from '../util/Icons';
import { Badge } from '../util/Badges';
import ScrambleText from '../util/ScrambleText';
import '../tailwind/glitch-fx.css';

function WorkCard({ project }: { project: ProjectInterface }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full rounded-2xl p-[1px] transition-all duration-300 hover:-translate-y-1.5 focus:outline-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer border glow following cursor on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 -z-10"
        style={{
          background: isHovered
            ? `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(45, 212, 191, 0.4), transparent 70%)`
            : 'none',
        }}
      />

      {/* Card Body */}
      <div className="relative flex flex-col justify-between h-full min-h-[250px] p-6 rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/70 group-hover:border-[#2DD4BF]/70 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_25px_rgba(40,90,72,0.35)] overflow-hidden text-left">
        {/* Subtle inner spotlight */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background: isHovered
              ? `radial-gradient(240px circle at ${mousePos.x}px ${mousePos.y}px, rgba(64, 138, 113, 0.18), transparent 70%)`
              : 'none',
          }}
        />

        {/* Top bar accent */}
        <div className="w-10 h-0.5 rounded-full bg-[#408A71] group-hover:w-full group-hover:bg-[#2DD4BF] transition-all duration-500 mb-4" />

        <div>
          {/* Header with Title + External link indicator */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#B0E4CC] group-hover:text-white transition-colors flex items-center gap-2">
              <Icon name="github" className="w-5 h-5 text-[#2DD4BF]" />
              {project.title}
            </h3>
            <span className="text-sm font-mono text-[#2DD4BF] opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5">
              ↗
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm font-mono text-[#2DD4BF]/90 font-medium mb-3">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-sm text-[#F0F5F0]/80 leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Badges footer */}
        <div className="mt-auto pt-4 border-t border-white/5">
          <ul className="flex flex-row flex-wrap gap-1.5">
            {project.badges.map((badge) => (
              <Badge key={badge} tech={badge} />
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
}

export default function MyProjects() {
  const myPrivateProjects = useFetchJson<ProjectInterface[]>('/data/myprojects.json');
  const mySchoolProjects = useFetchJson<ProjectInterface[]>('/data/schoolprojects.json');

  return (
    <div className="relative min-h-[calc(100vh-2rem)] w-full flex flex-col items-center">
      {/* Glowing light ball in top right */}
      <div
        className="pointer-events-none absolute -top-16 -right-10 sm:-top-24 sm:-right-16 w-72 h-72 sm:w-120 sm:h-120 rounded-full 
        bg-[radial-gradient(circle,_rgba(64,138,113,0.55)_0%,_rgba(40,90,72,0.3)_40%,_transparent_70%)] 
        blur-3xl -z-10"
        aria-hidden="true"
      />

      {/* Container that expands and fades in from center out */}
      <div className="center-fade-in relative z-10 w-full max-w-6xl flex flex-col items-center py-8 sm:py-12 px-4 sm:px-8">
        {/* Title */}
        <div className="relative mb-2">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-black/60 blur-3xl scale-125" aria-hidden="true" />
          <ScrambleText
            text="My Work"
            className="text-4xl sm:text-6xl text-center mt-2 mb-4 drop-shadow-[0_8px_30px_rgba(0,0,0,0.95)] drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]"
            delayMs={200}
            speedMs={35}
          />
        </div>

        {/* Intro message */}
        <div className="fade-in-delayed-1 max-w-2xl mx-auto text-center mb-12 drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
          <p className="text-base sm:text-lg text-[#F0F5F0]/90 leading-relaxed">
            A collection of production-ready applications, intelligent AI tools, and collaborative team systems.
          </p>
          <p className="text-xs sm:text-sm font-mono text-[#2DD4BF] mt-2 tracking-wide">
            ⦾ Click on any card to view the repository and documentation
          </p>
        </div>

        {/* Section 1: Independent & Personal Work */}
        <section className="w-full mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#B0E4CC] drop-shadow-[0_2px_10px_rgba(0,0,0,1)] tracking-wide">
              Independent & Personal Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myPrivateProjects ? (
              myPrivateProjects.map((project) => (
                <WorkCard key={project.id} project={project} />
              ))
            ) : (
              <p className="col-span-full text-center text-sm font-mono text-[#F0F5F0]/60 py-8">
                Loading projects...
              </p>
            )}
          </div>
        </section>

        {/* Section 2: Collaborative & Academic Work */}
        <section className="w-full mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#B0E4CC] drop-shadow-[0_2px_10px_rgba(0,0,0,1)] tracking-wide">
              Collaborative & Academic Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mySchoolProjects ? (
              mySchoolProjects.map((project) => (
                <WorkCard key={project.id} project={project} />
              ))
            ) : (
              <p className="col-span-full text-center text-sm font-mono text-[#F0F5F0]/60 py-8">
                Loading projects...
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}