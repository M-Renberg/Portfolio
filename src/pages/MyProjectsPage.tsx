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
      className="group relative block w-full h-full rounded-2xl p-px transition-all duration-300 hover:-translate-y-1.5 focus:outline-none"
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
      <div className="relative flex flex-col justify-between h-full min-h-75 p-5 sm:p-6 rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/70 group-hover:border-[#2DD4BF]/70 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_25px_rgba(40,90,72,0.35)] overflow-hidden text-left">
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
              <div className="absolute inset-0 bg-linear-to-t from-[#0b1a18] via-transparent to-transparent opacity-60" />
              {project.employer && (
                <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md text-xs font-mono bg-[#061211]/90 text-[#2DD4BF] border border-[#2DD4BF]/40 backdrop-blur-sm shadow-md">
                  {project.employer}
                </span>
              )}
            </div>
          )}

          {/* Employer badge if no image banner */}
          {project.employer && !project.image && (
            <div className="mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-[#061211]/90 text-[#2DD4BF] border border-[#2DD4BF]/40 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
                {project.employer}
              </span>
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
            <span>{project.category === 'work' ? 'Client & Employer Work' : 'Project Documentation'}</span>
            <span className="group-hover:translate-x-1 transition-transform">Inspect &rarr;</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

type FolderId = 'all' | 'ai-ml' | 'work' | 'fullstack' | 'systems';

const QUICK_TAGS = ['Machine Learning', 'Python', 'React', 'FastAPI', 'Convex', 'C#', '.NET'];

export default function MyProjects() {
  const employerWork = useFetchJson<ProjectInterface[]>('/data/employerwork.json');
  const myPrivateProjects = useFetchJson<ProjectInterface[]>('/data/myprojects.json');
  const mySchoolProjects = useFetchJson<ProjectInterface[]>('/data/schoolprojects.json');

  const [activeFolder, setActiveFolder] = useState<FolderId>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allProjects = [
    ...(employerWork || []),
    ...(myPrivateProjects || []),
    ...(mySchoolProjects || []),
  ];

  const aiMlProjects = allProjects.filter((p) =>
    p.id === 'project-telco-churn' ||
    p.id === 'orcale-llm' ||
    p.id === 'ats-devotion-ventures' ||
    p.id === 'slime-helper-desktop' ||
    p.badges.some((b) =>
      ['machine learning', 'pytorch', 'transformers', 'fastapi', 'scikit-learn', 'ai', 'gemini', 'claude'].includes(b.toLowerCase())
    )
  );

  const workProjects = employerWork || [];

  const fullstackProjects = allProjects.filter((p) =>
    p.id === 'ats-devotion-ventures' ||
    p.id === 'words-and-dice' ||
    p.id === 'filmvisarna' ||
    p.id === 'pokemon-tcg-store' ||
    p.id === 'holidaymaker' ||
    p.id === 'portfolio'
  );

  const systemsProjects = allProjects.filter((p) =>
    p.id === 'restaurang-db' ||
    p.id === 'slime-helper-desktop' ||
    p.id === 'chill-night-mode' ||
    p.id === 'chill-night-obsidian' ||
    p.id === 'chill-night-starship' ||
    p.id === 'hotel-state-manager' ||
    p.id === 'healthcare-system' ||
    p.id === 'trading-system' ||
    p.id === 'school-management' ||
    p.id === 'restaurang' ||
    p.id === 'christmas-game'
  );

  const folders = [
    {
      id: 'all' as const,
      path: '~/all/',
      name: 'All Projects',
      desc: 'Complete index directory of all commercial, machine learning, systems, and full-stack software.',
      count: allProjects.length,
      data: allProjects,
    },
    {
      id: 'ai-ml' as const,
      path: '~/ai-ml/',
      name: 'Machine Learning & AI',
      desc: 'Applied machine learning pipelines trained from scratch, local CPU language models, and AI screening workflows.',
      count: aiMlProjects.length,
      data: aiMlProjects,
    },
    {
      id: 'work' as const,
      path: '~/work/',
      name: 'Work Experience',
      desc: 'Commercial enterprise systems, client integrations, and production software developed for employers.',
      count: workProjects.length,
      data: workProjects,
    },
    {
      id: 'fullstack' as const,
      path: '~/fullstack/',
      name: 'Full-Stack & Web',
      desc: 'Reactive cloud platforms, test-driven multiplayer applications, normalized relational databases, and REST APIs.',
      count: fullstackProjects.length,
      data: fullstackProjects,
    },
    {
      id: 'systems' as const,
      path: '~/systems/',
      name: 'Systems & Developer Tools',
      desc: 'Desktop software with OS hooks, VS Code themes, terminal configurations, and object-oriented architectures.',
      count: systemsProjects.length,
      data: systemsProjects,
    },
  ];

  const currentFolder = folders.find((f) => f.id === activeFolder) || folders[0];
  const totalCount = allProjects.length;

  // Filter projects by search query
  const rawProjects = currentFolder.data;
  const filteredProjects = rawProjects
    ? rawProjects.filter((p) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase().trim();

        // Smart alias search for ML / AI terms
        const matchesAiAlias =
          (q === 'ai/ml' || q === 'ai' || q === 'ml') &&
          p.badges.some((b) =>
            ['machine learning', 'pytorch', 'transformers', 'scikit-learn', 'fastapi'].includes(b.toLowerCase())
          );

        return (
          matchesAiAlias ||
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.badges.some((b) => b.toLowerCase().includes(q))
        );
      })
    : null;

  const handleTagClick = (tag: string) => {
    if (searchQuery.toLowerCase() === tag.toLowerCase()) {
      setSearchQuery('');
    } else {
      setSearchQuery(tag);
      const tagLower = tag.toLowerCase();
      const inCurrent = currentFolder.data?.some((p) =>
        p.badges.some((b) => b.toLowerCase().includes(tagLower))
      );
      if (!inCurrent) {
        setActiveFolder('all');
      }
    }
  };

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
      <div className="center-fade-in relative z-10 w-full max-w-7xl flex flex-col items-center py-6 sm:py-10 px-4 sm:px-6">
        {/* Title */}
        <div className="relative mb-2">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-black/60 blur-3xl scale-125"
            aria-hidden="true"
          />
          <ScrambleText
            text="My Work"
            className="text-4xl sm:text-6xl text-center mt-2 mb-3 drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]"
            delayMs={200}
            speedMs={35}
          />
        </div>

        {/* Intro message */}
        <div className="fade-in-delayed-1 max-w-2xl mx-auto text-center mb-6 sm:mb-8 drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
          <p className="text-base sm:text-lg text-[#F0F5F0]/90 leading-relaxed">
            Select a directory in the filesystem to explore enterprise work, machine learning pipelines, and full-stack software systems.
          </p>
        </div>

        {/* Mobile Directory & Filter Bar (Visible on mobile & tablet: < lg) */}
        <div className="lg:hidden w-full mb-6 flex flex-col gap-3 text-left">
          {/* Horizontal scrollable directory tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar text-xs font-mono">
            {folders.map((folder) => {
              const isActive = activeFolder === folder.id;
              return (
                <button
                  key={folder.id}
                  type="button"
                  onClick={() => {
                    setActiveFolder(folder.id);
                    setSearchQuery('');
                  }}
                  className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#045757]/80 text-white border border-[#2DD4BF] shadow-[0_0_12px_rgba(45,212,191,0.25)] font-semibold'
                      : 'bg-[#061211]/80 text-[#B0E4CC]/80 border border-[#045757]/60 hover:text-white'
                  }`}
                >
                  <span>{folder.path}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                      isActive ? 'bg-[#2DD4BF] text-[#091413] font-bold' : 'bg-[#0b1a18] text-[#2DD4BF]'
                    }`}
                  >
                    {folder.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Search and Filter Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter Python, React, ML, C#..."
                className="w-full px-3.5 py-2 rounded-xl bg-[#061211]/90 border border-[#045757]/70 text-xs font-mono text-[#F0F5F0] placeholder-white/30 focus:outline-none focus:border-[#2DD4BF] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2 text-xs font-mono text-[#2DD4BF] hover:text-white"
                >
                  &times;
                </button>
              )}
            </div>

            {/* Mobile Quick Tags - horizontal scroll */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
              {QUICK_TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagClick(tag)}
                  className={`shrink-0 text-[10px] font-mono px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                    searchQuery.toLowerCase() === tag.toLowerCase()
                      ? 'bg-[#2DD4BF] text-[#091413] font-bold'
                      : 'bg-[#061211] text-[#B0E4CC]/80 border border-[#045757]/60'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Two-Column Cyberpunk OS Explorer Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDEBAR: File Tree Explorer (Desktop sticky, hidden on mobile) */}
          <aside className="hidden lg:block lg:col-span-3 w-full">
            <div className="lg:sticky lg:top-24 p-5 rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/70 shadow-lg text-left">
              {/* Explorer Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#045757]/60">
                <span className="text-xs font-mono font-bold tracking-wider text-[#2DD4BF] flex items-center gap-2">
                  <span>📂</span>
                  <span>FILESYSTEM</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
              </div>

              {/* Path & Stats */}
              <div className="flex justify-between items-center text-[11px] font-mono text-[#F0F5F0]/60 mb-3">
                <span className="text-[#408A71]">~/mikael/projects</span>
                <span className="text-[#2DD4BF] font-semibold">{totalCount} files</span>
              </div>

              {/* Folder Navigation */}
              <nav className="flex flex-col gap-1.5">
                {folders.map((folder) => {
                  const isActive = activeFolder === folder.id;
                  return (
                    <button
                      key={folder.id}
                      type="button"
                      onClick={() => {
                        setActiveFolder(folder.id);
                        setSearchQuery('');
                      }}
                      className={`group w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-mono transition-all text-left cursor-pointer ${
                        isActive
                          ? 'bg-[#045757]/70 text-white border border-[#2DD4BF] shadow-[0_0_15px_rgba(45,212,191,0.25)] font-semibold'
                          : 'text-[#B0E4CC]/80 hover:text-white hover:bg-[#061211]/80 border border-transparent hover:border-[#045757]/60'
                      }`}
                    >
                      <span className="truncate">{folder.path}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-md font-mono shrink-0 ${
                          isActive
                            ? 'bg-[#2DD4BF] text-[#091413] font-bold'
                            : 'bg-[#061211] text-[#2DD4BF] border border-[#2DD4BF]/30'
                        }`}
                      >
                        {folder.count}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Search / Filter Box */}
              <div className="mt-5 pt-4 border-t border-white/5">
                <label
                  htmlFor="explorer-search"
                  className="block text-[11px] font-mono text-[#B0E4CC]/70 uppercase tracking-wider mb-2"
                >
                  Filter directory
                </label>
                <div className="relative">
                  <input
                    id="explorer-search"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Python, React, ML..."
                    className="w-full px-3 py-2 rounded-xl bg-[#061211]/90 border border-[#045757]/70 text-xs font-mono text-[#F0F5F0] placeholder-white/30 focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF] transition-all"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-2 text-xs font-mono text-[#2DD4BF] hover:text-white"
                      title="Clear"
                    >
                      &times;
                    </button>
                  )}
                </div>
              </div>

              {/* Fast Filter Tags */}
              <div className="mt-4 pt-3 border-t border-white/5">
                <p className="text-[10px] font-mono text-[#408A71] uppercase tracking-wider mb-2">
                  Quick tags
                </p>
                <div className="flex flex-wrap gap-1">
                  {QUICK_TAGS.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleTagClick(tag)}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                        searchQuery.toLowerCase() === tag.toLowerCase()
                          ? 'bg-[#2DD4BF] text-[#091413] font-bold'
                          : 'bg-[#061211] text-[#B0E4CC]/80 border border-[#045757]/60 hover:border-[#2DD4BF]/60'
                      }`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Tip */}
              <div className="mt-5 pt-3 border-t border-white/5 text-[11px] font-mono text-[#408A71]">
                <p>Tip: Click a directory to explore specialized engineering domains.</p>
              </div>
            </div>
          </aside>

          {/* RIGHT MAIN AREA: Active Directory Project View */}
          <main className="w-full lg:col-span-9 min-w-0">
            {/* Active Folder Header Banner */}
            <div className="w-full mb-6 p-4 rounded-xl bg-[#0b1a18]/60 border border-[#045757]/60 flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-left">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#2DD4BF] font-semibold">{currentFolder.path}</span>
                  <span className="text-xs font-mono text-[#408A71]">//</span>
                  <span className="text-xs font-mono text-white/90">{currentFolder.name}</span>
                </div>
                <p className="text-xs text-[#F0F5F0]/70 mt-1 max-w-xl">{currentFolder.desc}</p>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#061211] text-[#2DD4BF] border border-[#2DD4BF]/30 shrink-0 self-start sm:self-center">
                {filteredProjects?.length || 0} {filteredProjects?.length === 1 ? 'project' : 'projects'}
              </span>
            </div>

            {/* Active Folder Grid */}
            <div key={activeFolder} className="w-full fade-in-delayed-1">
              {filteredProjects ? (
                filteredProjects.length > 0 ? (
                  <div
                    className={`grid gap-6 ${
                      filteredProjects.length === 1
                        ? 'grid-cols-1 max-w-2xl mx-auto'
                        : 'grid-cols-1 md:grid-cols-2'
                    }`}
                  >
                    {filteredProjects.map((project) => (
                      <WorkCard key={project.id} project={project} />
                    ))}
                  </div>
                ) : (
                  <div className="w-full p-12 rounded-2xl bg-[#0b1a18]/60 border border-[#045757]/60 text-center flex flex-col items-center gap-3">
                    <span className="text-xs font-mono px-3 py-1 rounded-md bg-[#061211] text-[#2DD4BF] border border-[#2DD4BF]/30">
                      [NO_MATCH]
                    </span>
                    <p className="text-base font-mono text-[#B0E4CC]">
                      No projects matching "{searchQuery}" in {currentFolder.path}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="mt-2 px-4 py-1.5 rounded-lg bg-[#045757]/40 text-xs font-mono text-[#2DD4BF] border border-[#2DD4BF]/40 hover:bg-[#2DD4BF] hover:text-[#091413] transition-colors cursor-pointer"
                    >
                      Clear filter
                    </button>
                  </div>
                )
              ) : (
                <div className="w-full py-16 text-center text-sm font-mono text-[#F0F5F0]/60 animate-pulse">
                  Loading {currentFolder.name.toLowerCase()}...
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}