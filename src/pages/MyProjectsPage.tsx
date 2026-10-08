import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetchJson from '../hooks/useFetchJson';
import type { ProjectInterface } from '../util/projectInterface';
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
    <Link
      to={`/work/${project.id}`}
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
      <div className="relative flex flex-col justify-between h-full min-h-[300px] p-6 rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/70 group-hover:border-[#2DD4BF]/70 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_25px_rgba(40,90,72,0.35)] overflow-hidden text-left">
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
          {/* Optional Project Image */}
          {project.image && (
            <div className="relative w-full h-44 sm:h-48 mb-4 overflow-hidden rounded-xl border border-[#045757]/60 group-hover:border-[#2DD4BF]/60 transition-colors bg-[#061211]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/projects/project-placeholder.svg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a18] via-transparent to-transparent opacity-60" />
              {project.employer && (
                <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md text-xs font-mono bg-[#061211]/90 text-[#2DD4BF] border border-[#2DD4BF]/40 backdrop-blur-sm shadow-md">
                  {project.employer}
                </span>
              )}
            </div>
          )}

          {/* Header with Title + External arrow indicator */}
          <div className="flex items-start justify-between gap-3 mb-1">
            <h3 className="text-xl sm:text-2xl font-bold text-[#B0E4CC] group-hover:text-white transition-colors flex items-center gap-2">
              {project.title}
            </h3>
            <span className="text-sm font-mono text-[#2DD4BF] opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5">
              &rarr;
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm font-mono text-[#2DD4BF]/90 font-medium mb-3">
            {project.subtitle}
          </p>

          {/* Short Description */}
          <p className="text-sm text-[#F0F5F0]/80 leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Footer: Badges + View details hint */}
        <div className="mt-auto pt-4 border-t border-white/5 flex flex-col gap-3">
          <ul className="flex flex-row flex-wrap gap-1.5">
            {project.badges.map((badge) => (
              <Badge key={badge} tech={badge} />
            ))}
          </ul>

          <div className="flex justify-between items-center text-xs font-mono pt-1 text-[#408A71] group-hover:text-[#2DD4BF] transition-colors">
            <span>{project.category === 'work' ? 'Arbete åt arbetsgivare' : 'Se detaljer & dokumentation'}</span>
            <span className="group-hover:translate-x-1 transition-transform">Läs mer &rarr;</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function MyProjects() {
  const employerWork = useFetchJson<ProjectInterface[]>('/data/employerwork.json');
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
            En samling av professionella uppdrag åt arbetsgivare, intelligenta AI-lösningar och egna mjukvaruprojekt.
          </p>
          <p className="text-xs sm:text-sm font-mono text-[#2DD4BF] mt-2 tracking-wide">
            ⦾ Klicka på ett kort för att läsa mer om projektet, se skärmdumpar och tekniska detaljer
          </p>
        </div>

        {/* Section 1: Work (Arbeten åt arbetsgivare) */}
        <section className="w-full mb-16 text-left">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF] animate-pulse" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#B0E4CC] drop-shadow-[0_2px_10px_rgba(0,0,0,1)] tracking-wide">
              Work
            </h2>
          </div>
          <p className="text-sm font-mono text-[#F0F5F0]/70 mb-6">
            Professionella arbeten, integrationer och systemlösningar utvecklade åt arbetsgivare och uppdragsgivare.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {employerWork ? (
              employerWork.map((project) => (
                <WorkCard key={project.id} project={project} />
              ))
            ) : (
              <p className="col-span-full text-center text-sm font-mono text-[#F0F5F0]/60 py-8">
                Laddar arbeten...
              </p>
            )}
          </div>
        </section>

        {/* Section 2: Independent & Personal Projects */}
        <section className="w-full mb-16 text-left">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF] animate-pulse" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#B0E4CC] drop-shadow-[0_2px_10px_rgba(0,0,0,1)] tracking-wide">
              Independent &amp; Personal Projects
            </h2>
          </div>
          <p className="text-sm font-mono text-[#F0F5F0]/70 mb-6">
            Egna projekt och mjukvaror utvecklade för att utforska nya tekniker, arkitekturer och idéer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myPrivateProjects ? (
              myPrivateProjects.map((project) => (
                <WorkCard key={project.id} project={project} />
              ))
            ) : (
              <p className="col-span-full text-center text-sm font-mono text-[#F0F5F0]/60 py-8">
                Laddar projekt...
              </p>
            )}
          </div>
        </section>

        {/* Section 3: Collaborative & Academic Work */}
        <section className="w-full mb-16 text-left">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF] animate-pulse" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#B0E4CC] drop-shadow-[0_2px_10px_rgba(0,0,0,1)] tracking-wide">
              Collaborative &amp; Academic Work
            </h2>
          </div>
          <p className="text-sm font-mono text-[#F0F5F0]/70 mb-6">
            Teamprojekt och examinationsuppgifter under min utbildning inom mjukvaru- och AI-utveckling.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mySchoolProjects ? (
              mySchoolProjects.map((project) => (
                <WorkCard key={project.id} project={project} />
              ))
            ) : (
              <p className="col-span-full text-center text-sm font-mono text-[#F0F5F0]/60 py-8">
                Laddar projekt...
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}