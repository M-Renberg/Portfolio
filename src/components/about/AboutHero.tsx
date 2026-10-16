import ScrambleText from '../../util/ScrambleText';

interface AboutHeroProps {
  title?: string;
  subtitle?: string;
}

export default function AboutHero({
  title = 'About Me',
  subtitle = 'Get to know my journey, academic background, and technical toolkit.',
}: AboutHeroProps) {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Title */}
      <div className="relative mb-2">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-black/60 blur-3xl scale-125"
          aria-hidden="true"
        />
        <ScrambleText
          text={title}
          className="text-4xl sm:text-6xl text-center mt-2 mb-4 drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]"
          delayMs={200}
          speedMs={35}
        />
      </div>

      {/* Intro subtitle */}
      <div className="fade-in-delayed-1 max-w-2xl mx-auto text-center mb-10 drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
        <p className="text-base sm:text-lg text-[#F0F5F0]/90 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

