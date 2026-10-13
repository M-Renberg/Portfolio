import { Link, useParams } from 'react-router-dom';
import useProjectDetail from '../hooks/useProjectDetail';
import { Badge } from '../util/Badges';
import { Icon } from '../util/Icons';
import ScrambleText from '../util/ScrambleText';
import '../tailwind/glitch-fx.css';

export default function WorkDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { project, loading, error } = useProjectDetail(id);

  return (
    <div className="relative min-h-[calc(100vh-2rem)] w-full flex flex-col items-center">
      {/* Glowing light ball in top right */}
      <div
        className="pointer-events-none absolute -top-16 -right-10 sm:-top-24 sm:-right-16 w-72 h-72 sm:w-120 sm:h-120 rounded-full 
        bg-[radial-gradient(circle,rgba(64,138,113,0.55)_0%,rgba(40,90,72,0.3)_40%,transparent_70%)] 
        blur-3xl -z-10"
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="center-fade-in relative z-10 w-full max-w-5xl flex flex-col items-center py-8 sm:py-12 px-4 sm:px-8">
        {/* Top Breadcrumb / Back Navigation */}
        <div className="w-full flex justify-between items-center mb-8">
          <Link
            to="/work"
            className="group flex items-center gap-2 text-xs sm:text-sm font-mono text-[#2DD4BF] hover:text-white transition-colors px-3 py-1.5 rounded-lg bg-[#061211]/80 border border-[#045757]/70 hover:border-[#2DD4BF]"
          >
            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
            <span>Back to My Work</span>
          </Link>

          {project && (
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#045757]/30 border border-[#045757]/60 text-[#B0E4CC]">
              {project.category === 'work'
                ? 'WORK // CLIENT & EMPLOYER'
                : project.category === 'academic'
                ? 'ACADEMIC // COURSEWORK'
                : 'PERSONAL // SIDE PROJECT'}
            </span>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center min-h-[40vh] gap-4">
            <div className="w-10 h-10 border-2 border-[#2DD4BF] border-t-transparent rounded-full animate-spin" />
            <p className="text-sm font-mono text-[#B0E4CC] animate-pulse">
              Loading project details...
            </p>
          </div>
        )}

        {/* Error / Not Found State */}
        {!loading && (error || !project) && (
          <div className="w-full p-10 sm:p-14 rounded-2xl bg-[#0b1a18]/80 border border-[#045757]/80 backdrop-blur-md text-center flex flex-col items-center gap-4 my-10">
            <span className="text-4xl">⚠️</span>
            <h2 className="text-2xl font-bold text-[#B0E4CC]">Project Not Found</h2>
            <p className="text-sm text-[#F0F5F0]/80 max-w-md">
              Could not find the requested project or work experience. It may have been moved or removed.
            </p>
            <Link
              to="/work"
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#045757]/50 hover:bg-[#2DD4BF] text-[#2DD4BF] hover:text-[#091413] font-semibold text-sm border border-[#2DD4BF]/60 transition-all cursor-pointer"
            >
              Back to all projects
            </Link>
          </div>
        )}

        {/* Project Content */}
        {!loading && project && (
          <article className="w-full flex flex-col gap-8">
            {/* Header Section */}
            <header className="w-full flex flex-col gap-3 text-left">
              {/* Employer / Role Meta */}
              {(project.employer || project.role || project.period) && (
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-[#2DD4BF]">
                  {project.employer && (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#061211] border border-[#2DD4BF]/40 text-[#2DD4BF]">
                      🏢 {project.employer}
                    </span>
                  )}
                  {project.role && (
                    <span className="text-[#B0E4CC] font-semibold">{project.role}</span>
                  )}
                  {project.period && (
                    <span className="text-[#F0F5F0]/60">({project.period})</span>
                  )}
                </div>
              )}

              {/* Title with Scramble effect */}
              <div className="relative mt-2">
                <ScrambleText
                  text={project.title}
                  className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#B0E4CC] drop-shadow-[0_4px_20px_rgba(0,0,0,1)] text-left"
                  delayMs={150}
                  speedMs={30}
                />
              </div>

              {/* Subtitle */}
              <p className="text-base sm:text-xl font-mono text-[#2DD4BF] font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {project.subtitle}
              </p>

              {/* Action buttons (Repo / External link) */}
              {project.link ? (
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#045757]/40 hover:bg-[#2DD4BF] text-[#2DD4BF] hover:text-[#091413] border border-[#2DD4BF]/60 font-semibold text-sm transition-all duration-300 shadow-[0_0_15px_rgba(45,212,191,0.2)] hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] cursor-pointer"
                  >
                    {project.link.includes('github') ? (
                      <Icon name="github" className="w-4 h-4 m-0" />
                    ) : (
                      <span className="text-sm">🌐</span>
                    )}
                    <span>{project.link.includes('github') ? 'View Repository' : 'Open Live Application'}</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              ) : (
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#061211]/80 border border-[#045757]/60 text-xs font-mono text-[#B0E4CC]/80">
                    <span>🔒</span>
                    <span>Private Enterprise Tool // Proprietary to {project.employer || 'Employer'}</span>
                  </span>
                </div>
              )}
            </header>

            {/* Main Hero Image Banner */}
            {project.image && (
              <div className="relative w-full rounded-2xl overflow-hidden border border-[#045757]/80 bg-[#061211] shadow-2xl group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto max-h-115 object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/projects/project-placeholder.svg';
                  }}
                />
                <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-[#0b1a18] via-transparent to-transparent opacity-40" />
              </div>
            )}

            {/* Grid of details: About & Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
              {/* Detailed Description */}
              <section className="md:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/70 text-left flex flex-col justify-between shadow-lg">
                <div>
                  <div className="w-12 h-0.5 rounded-full bg-[#408A71] hover:w-full transition-all duration-500 mb-6" />
                  <h3 className="text-xl sm:text-2xl font-bold text-[#B0E4CC] mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
                    About the Project &amp; Work
                  </h3>
                  <div className="text-sm sm:text-base text-[#F0F5F0]/90 leading-relaxed flex flex-col gap-4">
                    {project.longDescription ? (
                      project.longDescription.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))
                    ) : (
                      <p>{project.description}</p>
                    )}
                  </div>
                </div>

                {/* Highlights List if available */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-white/5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF] mb-3">
                      Key Results &amp; Responsibilities
                    </h4>
                    <ul className="flex flex-col gap-2.5">
                      {project.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2.5 text-sm text-[#F0F5F0]/85"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#2DD4BF] mt-1.5 shrink-0 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>

              {/* Sidebar: Tech Stack & Specs */}
              <aside className="md:col-span-4 flex flex-col gap-6">
                {/* Tech Stack Card */}
                <div className="p-6 rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/70 text-left shadow-lg">
                  <div className="w-8 h-0.5 rounded-full bg-[#408A71] mb-4" />
                  <h3 className="text-lg font-bold text-[#B0E4CC] mb-4">Technologies &amp; Tools</h3>
                  <ul className="flex flex-wrap gap-2">
                    {project.badges.map((badge) => (
                      <Badge key={badge} tech={badge} />
                    ))}
                  </ul>
                </div>

                {/* Quick Info / Context Card */}
                <div className="p-6 rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/70 text-left shadow-lg">
                  <div className="w-8 h-0.5 rounded-full bg-[#408A71] mb-4" />
                  <h3 className="text-lg font-bold text-[#B0E4CC] mb-3">Project Details</h3>
                  <div className="flex flex-col gap-2 text-xs font-mono text-[#F0F5F0]/80">
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-[#408A71]">Type:</span>
                      <span className="text-[#2DD4BF] capitalize">{project.category || 'Project'}</span>
                    </div>
                    {project.employer && (
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-[#408A71]">Employer:</span>
                        <span className="text-white">{project.employer}</span>
                      </div>
                    )}
                    {project.period && (
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-[#408A71]">Period:</span>
                        <span className="text-white">{project.period}</span>
                      </div>
                    )}
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-[#408A71]">Access:</span>
                      <span className="text-white/80">{project.link ? 'Public' : 'Private / Proprietary'}</span>
                    </div>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="p-6 rounded-2xl bg-[#061211]/90 border border-[#2DD4BF]/40 text-left flex flex-col gap-3 shadow-lg">
                  <h4 className="text-sm font-bold text-[#B0E4CC]">Interested in Learning More?</h4>
                  <p className="text-xs text-[#F0F5F0]/80">
                    I would be happy to share more details about the implementation, architecture, and technology behind this work.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-1 text-xs font-mono text-[#2DD4BF] hover:text-white flex items-center gap-1 group"
                  >
                    <span>Get in touch</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                </div>
              </aside>
            </div>

            {/* Extra Gallery Section (if multiple images provided) */}
            {project.images && project.images.length > 1 && (
              <section className="w-full p-6 sm:p-8 rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/70 text-left shadow-lg">
                <div className="w-12 h-0.5 rounded-full bg-[#408A71] mb-6" />
                <h3 className="text-xl font-bold text-[#B0E4CC] mb-6">Screenshots &amp; Previews</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.images.map((imgSrc, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden border border-[#045757]/80 bg-[#061211]"
                    >
                      <img
                        src={imgSrc}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="w-full h-auto object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/projects/project-placeholder.svg';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Bottom Navigation */}
            <div className="w-full flex justify-between items-center pt-8 border-t border-white/5">
              <Link
                to="/work"
                className="text-xs sm:text-sm font-mono text-[#2DD4BF] hover:text-white transition-colors flex items-center gap-2"
              >
                <span>&larr;</span>
                <span>All projects &amp; work</span>
              </Link>
              <Link
                to="/contact"
                className="text-xs sm:text-sm font-mono text-[#B0E4CC] hover:text-[#2DD4BF] transition-colors"
              >
                Get in touch &rarr;
              </Link>
            </div>
          </article>
        )}
      </div>
    </div>
  );
}
