import { Link } from "react-router-dom";
import '../tailwind/glitch-fx.css';

export default function LandingPage() {

    function NavRow({ to, label, detail }: { to: string, label: string, detail: string }) {
        return (
            <div className="group flex items-center gap-2 transition-all duration-200 border-2 border-transparent 
            hover:border-gray-500 hover:rounded-[7px] hover:p-[0.3em_0.5em_0.6em_0.5em] hover:shadow-[0_0_15px_rgba(40,90,72,0.4)]">
                <Link to={to} className="flex flex-col items-center gap-2">
                    <h4 className="text-3xl text-shadow-lg/80">{label}</h4>
                    {/* <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100 text-[16px] text-[#faebd7]"> */}
                    <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 blur-sm transition-all duration-400 group-hover:max-w-xs group-hover:opacity-100 group-hover:blur-none">
                        {detail}
                    </span>
                </Link>
            </div>
        );
    }

    return (
        <article className="flex flex-col items-center justify-center">
            <h1 className="glitch-text text-7xl text-center text-shadow-lg/85 mt-20 mb-12" data-text="Mikael Renberg">Mikael Renberg</h1>
            <div>
                <p className="text-xl text-center mb-1">Hey I'm Mikael.</p>
                <p className="text-l text-center mb-1">I study software development.</p>
                <p className="text-l text-center mb-1">My biggest passion is making softwares and apps,</p>
                <p className="text-l text-center mb-1">were I always have my focus on quality.</p>
                <p className="text-l text-center mb-20">So welcome to my humble little portfolio.</p>
            </div>

            <NavRow to="/projects" label="⦾ My Projects" detail="Personal project, and school work." />
            <NavRow to="/aboutme" label="⦾ About me" detail="Get to know me, and my tech stack." />
            <NavRow to="/contact" label="⦾ Contact" detail="All the ways to get in contact with me." />
            {/* <a id="my-projects-effect" href="#my-projects" data-hover="Personal project, and school work.">⦾ My
                Projects</a>
            <a id="about-me-effect" href="#aboutme" data-hover="Get to know me, and my tech stack.">⦾ About Me</a>
            <a id="contact-effect" href="#contact" data-hover="All the ways to get in contact with me.">⦾ Contact</a> */}
        </article>
    );
}