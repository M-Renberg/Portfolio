import pfp from '../../Images/pfp.webp';

export default function AboutProfile() {
  return (
    <section className="w-full mb-14 p-6 sm:p-10 rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/70 hover:border-[#2DD4BF]/60 transition-all duration-300 shadow-[0_0_25px_rgba(4,87,87,0.2)]">
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
              Hey! I'm <strong className="text-white">Mikael</strong>, a software development student based in Sweden, currently majoring in AI development at{' '}
              <span className="text-[#2DD4BF] font-semibold">NBI-Handelsakademin</span>.
            </p>
            <p>
              I am currently in my first year of studies. Much of what I share on GitHub represents both rigorous academic coursework and independent side projects where I explore new architectural ideas.
            </p>
            <p>
              My greatest passion lies at the intersection of{' '}
              <span className="text-[#2DD4BF] font-semibold">AI integration and modern software systems</span> — turning complex algorithms into reliable, intuitive, and high-impact web and mobile applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

