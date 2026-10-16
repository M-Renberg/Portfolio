import ScrambleText from '../../util/ScrambleText';

export default function AboutHero() {
  return (
    <div className="w-full flex flex-col items-center mb-8">
      {/* Title */}
      <div className="relative mb-2">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-black/60 blur-3xl scale-125"
          aria-hidden="true"
        />
        <ScrambleText
          text="About Me"
          className="text-4xl sm:text-6xl text-center mt-2 mb-3 drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]"
          delayMs={200}
          speedMs={35}
        />
      </div>

      {/* Intro subtitle */}
      <div className="fade-in-delayed-1 max-w-2xl mx-auto text-center drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
        <p className="text-base sm:text-lg text-[#F0F5F0]/90 leading-relaxed font-sans">
          Bridging reactive full-stack engineering with pragmatic AI systems, developer tooling, and production workflows.
        </p>
      </div>
    </div>
  );
}
