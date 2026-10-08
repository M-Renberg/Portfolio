import { Link } from "react-router-dom";
import ScrambleText from "../util/ScrambleText";
import '../tailwind/glitch-fx.css';

function NavRow({ to, label, detail }: { to: string; label: string; detail: string }) {
    return (
        <div className="group flex items-center gap-2 transition-all duration-200 border-2 border-transparent 
        hover:border-gray-500 hover:rounded-[7px] hover:p-[0.3em_0.5em_0.6em_0.5em] hover:shadow-[0_0_15px_rgba(40,90,72,0.4)]">
            <Link to={to} className="flex flex-col items-center gap-2">
                <h4 className="text-2xl sm:text-3xl text-shadow-lg/80">{label}</h4>
                <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 blur-sm transition-all duration-400 group-hover:max-w-xs group-hover:opacity-100 group-hover:blur-none">
                    {detail}
                </span>
            </Link>
        </div>
    );
}

export default function LandingPage() {
    return (
        <div className="relative min-h-[calc(100vh-2rem)] w-full flex flex-col items-center justify-center">
            {/* Initial solid black backdrop that fades away */}
            <div className="fixed inset-0 bg-black -z-20 pointer-events-none animate-black-fade" aria-hidden="true" />

            {/* Container that expands and fades in from the center out */}
            <div className="center-fade-in relative w-full flex flex-col items-center justify-center py-10">
                {/* Glowing light ball in top right */}
                <div 
                    className="pointer-events-none absolute -top-16 -right-10 sm:-top-24 sm:-right-16 w-72 h-72 sm:w-[480px] sm:h-[480px] rounded-full 
                    bg-[radial-gradient(circle,_rgba(64,138,113,0.55)_0%,_rgba(40,90,72,0.3)_40%,_transparent_70%)] 
                    blur-3xl -z-10" 
                    aria-hidden="true"
                />

                <article className="flex flex-col items-center justify-center px-4 w-full">
                    {/* Big title with symbol-cycling scramble effect that resolves sequentially */}
                    <ScrambleText 
                        text="Mikael Renberg" 
                        className="text-5xl sm:text-7xl text-center text-shadow-lg/85 mt-4 sm:mt-10 mb-8 sm:mb-10" 
                        delayMs={250} 
                        speedMs={35} 
                    />

                    <div className="fade-in-delayed-1 max-w-xl mx-auto">
                        <p className="text-xl sm:text-2xl text-center mb-2 font-medium">Hey, I'm Mikael.</p>
                        <p className="text-base sm:text-lg text-center mb-1 text-[#F0F5F0]/90">A full-stack AI/ML Engineer.</p>
                        <p className="text-base sm:text-lg text-center mb-1 text-[#F0F5F0]/90">I bridge the gap between robust software and intelligent AI features</p>
                        <p className="text-base sm:text-lg text-center mb-1 text-[#F0F5F0]/90">Always with a strong focus clean code on quality.</p>
                        <p className="text-base sm:text-lg text-center mb-12 sm:mb-16 text-[#F0F5F0]/90">Welcome to my portfolio.</p>
                    </div>

                    <div className="fade-in-delayed-2 flex flex-col items-center gap-3 w-full">
                        <NavRow to="/projects" label="⦾ My Projects" detail="Personal projects and school work." />
                        <NavRow to="/aboutme" label="⦾ About me" detail="Get to know me and my tech stack." />
                        <NavRow to="/contact" label="⦾ Contact" detail="All the ways to get in contact with me." />
                    </div>
                </article>
            </div>
        </div>
    );
}