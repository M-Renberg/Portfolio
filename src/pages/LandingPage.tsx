import { useState } from "react";
import { Link } from "react-router-dom";
import ScrambleText from "../util/ScrambleText";
import AiThoughtStream from "../util/AiThoughtStream";
import '../tailwind/glitch-fx.css';

function HudCard({
    to,
    tag,
    title,
    desc,
    cta,
    icon,
}: {
    to: string;
    tag: string;
    title: string;
    desc: string;
    cta: string;
    icon: React.ReactNode;
}) {
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
            to={to}
            className="group relative block w-full rounded-2xl p-px transition-all duration-300 hover:-translate-y-1.5 focus:outline-none"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Outer border glow following cursor on hover */}
            <div
                className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 -z-10"
                style={{
                    background: isHovered
                        ? `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(45, 212, 191, 0.4), transparent 70%)`
                        : "none",
                }}
            />

            {/* Card Body */}
            <div className="relative flex flex-col justify-between h-full min-h-[210px] p-6 rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/70 group-hover:border-[#2DD4BF]/70 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_25px_rgba(40,90,72,0.35)] overflow-hidden text-left">
                {/* Subtle inner spotlight */}
                <div
                    className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    style={{
                        background: isHovered
                            ? `radial-gradient(240px circle at ${mousePos.x}px ${mousePos.y}px, rgba(64, 138, 113, 0.18), transparent 70%)`
                            : "none",
                    }}
                />

                {/* Top bar accent */}
                <div className="w-10 h-0.5 rounded-full bg-[#408A71] group-hover:w-full group-hover:bg-[#2DD4BF] transition-all duration-500 mb-4" />

                {/* Top header row: Icon + Tag */}
                <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#285A48]/30 border border-[#285A48]/60 text-[#2DD4BF] group-hover:scale-105 group-hover:border-[#2DD4BF]/60 group-hover:bg-[#285A48]/50 transition-all duration-300">
                        {icon}
                    </div>
                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full border border-teal-500/30 bg-teal-950/50 text-[#2DD4BF] shadow-xs">
                        {tag}
                    </span>
                </div>

                {/* Text content */}
                <div className="flex-1 flex flex-col mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#B0E4CC] group-hover:text-white transition-colors mb-2">
                        {title}
                    </h3>
                    <p className="text-sm text-[#F0F5F0]/75 leading-relaxed">
                        {desc}
                    </p>
                </div>

                {/* Bottom CTA - appears smoothly on hover */}
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#2DD4BF] group-hover:text-teal-200 transition-all duration-300 pt-3 border-t border-white/5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                    <span>{cta}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">➔</span>
                </div>
            </div>
        </Link>
    );
}

export default function LandingPage() {
    return (
        <div className="relative min-h-[calc(100vh-2rem)] w-full flex flex-col items-center justify-center">
            {/* Ambient Thinking AI text stream curving through the background */}
            <AiThoughtStream />

            {/* Initial solid black backdrop that fades away */}
            <div className="fixed inset-0 bg-black -z-20 pointer-events-none animate-black-fade" aria-hidden="true" />

            {/* Container that expands and fades in from the center out */}
            <div className="center-fade-in relative z-10 w-full flex flex-col items-center justify-center py-10">
                {/* Glowing light ball in top right */}
                <div 
                    className="pointer-events-none absolute -top-16 -right-10 sm:-top-24 sm:-right-16 w-72 h-72 sm:w-120 sm:h-120 rounded-full 
                    bg-[radial-gradient(circle,rgba(64,138,113,0.55)_0%,rgba(40,90,72,0.3)_40%,transparent_70%)] 
                    blur-3xl -z-10" 
                    aria-hidden="true"
                />

                <article className="flex flex-col items-center justify-center px-4 w-full">
                    {/* Big title with symbol-cycling scramble effect that resolves sequentially */}
                    <div className="relative">
                        {/* Ambient dark backing behind title to separate from background thoughts */}
                        <div className="pointer-events-none absolute inset-0 -z-10 bg-black/60 blur-3xl scale-125" aria-hidden="true" />
                        <ScrambleText 
                            text="Mikael Renberg" 
                            className="text-5xl sm:text-7xl text-center mt-4 sm:mt-10 mb-8 sm:mb-10 drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]" 
                            delayMs={250} 
                            speedMs={35} 
                        />
                    </div>

                    {/* Free-floating organic bio rows without box - shadows on text only */}
                    <div className="fade-in-delayed-1 flex flex-col items-center gap-3.5 sm:gap-4.5 my-6 sm:my-8 max-w-2xl text-center px-4">
                        {/* Floating Row 1: Role */}
                        <div className="float-row-1 transition-all duration-300 hover:scale-105 cursor-default drop-shadow-[0_0_20px_rgba(0,0,0,0.95)]">
                            <p className="text-xl sm:text-2xl font-semibold tracking-wide text-white">
                                A full-stack <span className="text-[#2DD4BF] font-bold">AI/ML Engineer</span>.
                            </p>
                        </div>

                        {/* Floating Row 2: Mission */}
                        <div className="float-row-2 transition-all duration-300 hover:scale-105 cursor-default drop-shadow-[0_0_20px_rgba(0,0,0,0.95)]">
                            <p className="text-base sm:text-xl text-[#F0F5F0]/90 leading-relaxed">
                                I bridge the gap between <span className="text-[#B0E4CC] font-medium">robust software</span> and <span className="text-[#2DD4BF] font-medium">intelligent AI features</span>.
                            </p>
                        </div>

                        {/* Floating Row 3: Quality */}
                        <div className="float-row-3 transition-all duration-300 hover:scale-105 cursor-default drop-shadow-[0_0_20px_rgba(0,0,0,0.95)]">
                            <p className="text-base sm:text-lg text-[#F0F5F0]/80">
                                Always with a strong focus on <span className="text-[#B0E4CC] font-medium">clean code</span> and <span className="text-[#2DD4BF] font-medium">high quality</span>.
                            </p>
                        </div>

                        {/* Floating Row 4: Subtle Welcome beacon */}
                        <div className="float-row-4 transition-all duration-300 hover:scale-105 cursor-default pt-2 drop-shadow-[0_0_20px_rgba(0,0,0,0.95)]">
                            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-[#408A71] uppercase">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
                                Welcome to my portfolio
                            </span>
                        </div>
                    </div>

                    <div className="fade-in-delayed-2 grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-5xl px-2 sm:px-4 mt-2 mb-10">
                        <HudCard
                            to="/work"
                            tag="Repos & Projects"
                            title="My Work"
                            desc="Production-grade machine learning models, local AI inference, and robust full-stack applications."
                            cta="Explore work"
                            icon={
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            }
                        />
                        <HudCard
                            to="/aboutme"
                            tag="AI & Fullstack"
                            title="About Me"
                            desc="Background, NBI studies, core skills & complete tech stack."
                            cta="View profile"
                            icon={
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            }
                        />
                        <HudCard
                            to="/contact"
                            tag="Connect"
                            title="Contact"
                            desc="Open for collaborations, internships, or a friendly chat."
                            cta="Get in touch"
                            icon={
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            }
                        />
                    </div>
                </article>
            </div>
        </div>
    );
}