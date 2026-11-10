import { Link } from 'react-router-dom';
import { Icon } from '../../util/Icons';

export default function AboutRecruiterCta() {
  return (
    <section className="w-full mb-8 text-left">
      <div className="relative p-6 sm:p-10 rounded-2xl bg-linear-to-b from-[#0b1a18] to-[#061211] border border-[#045757]/80 hover:border-[#2DD4BF]/70 transition-all duration-300 shadow-xl text-center flex flex-col items-center">
        {/* Glowing badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061211] border border-[#2DD4BF]/40 text-xs font-mono text-[#2DD4BF] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
          <span>LIA INTERNSHIP & CAREER CONVERSATIONS</span>
        </div>

        <h3 className="text-2xl sm:text-4xl font-bold text-[#B0E4CC] mb-3 drop-shadow-md">
          Ready to Build Something High-Impact Together?
        </h3>

        <p className="max-w-2xl text-sm sm:text-base text-[#F0F5F0]/85 leading-relaxed mb-8 font-sans">
          Whether you're looking for an autonomous LIA intern, an applied AI engineer, or a dependable full-stack developer who values code craft and team spirit—I'd love to connect.
        </p>

        {/* Buttons Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-lg mb-6">
          <Link
            to="/contact?intent=lia"
            className="flex-1 min-w-44 py-3 px-6 rounded-xl bg-[#2DD4BF] text-[#091413] font-bold font-mono text-sm hover:bg-[#B0E4CC] transition-all shadow-[0_0_20px_rgba(45,212,191,0.35)] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>✉️</span>
            <span>Send Direct Message</span>
          </Link>

          <a
            href="https://www.linkedin.com/in/mikael-renberg-98b062178/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-5 rounded-xl bg-[#061211] text-[#2DD4BF] border border-[#045757] hover:border-[#2DD4BF] hover:text-white transition-all font-mono text-sm flex items-center gap-2"
          >
            <Icon name="linkedin" className="m-0 w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/M-Renberg"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-5 rounded-xl bg-[#061211] text-[#2DD4BF] border border-[#045757] hover:border-[#2DD4BF] hover:text-white transition-all font-mono text-sm flex items-center gap-2"
          >
            <Icon name="github" className="m-0 w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Direct Email fallback */}
        <div className="text-xs font-mono text-[#408A71]">
          Direct Email: <a href="mailto:mikael.k.renberg@hotmail.com" className="text-[#2DD4BF] hover:underline">mikael.k.renberg@hotmail.com</a>
        </div>
      </div>
    </section>
  );
}

