import AboutHero from '../components/about/AboutHero';
import AboutDossier from '../components/about/AboutDossier';
import AboutProductionFeature from '../components/about/AboutProductionFeature';
import AboutLivingStack from '../components/about/AboutLivingStack';
import AboutEngineeringEthos from '../components/about/AboutEngineeringEthos';
import AboutJourneyTimeline from '../components/about/AboutJourneyTimeline';
import AboutRecruiterCta from '../components/about/AboutRecruiterCta';
import '../tailwind/glitch-fx.css';

export default function AboutMe() {
  return (
    <div className="relative min-h-[calc(100vh-2rem)] w-full flex flex-col items-center">
      {/* Glowing light ball in top right */}
      <div
        className="pointer-events-none absolute -top-16 -right-10 sm:-top-24 sm:-right-16 w-72 h-72 sm:w-120 sm:h-120 rounded-full 
        bg-[radial-gradient(circle,rgba(64,138,113,0.55)_0%,rgba(40,90,72,0.3)_40%,transparent_70%)] 
        blur-3xl -z-10"
        aria-hidden="true"
      />

      {/* Main container with center fade-in */}
      <div className="center-fade-in relative z-10 w-full max-w-5xl flex flex-col items-center py-8 sm:py-12 px-4 sm:px-8">
        <AboutHero />
        <AboutDossier />
        <AboutProductionFeature />
        <AboutLivingStack />
        <AboutEngineeringEthos />
        <AboutJourneyTimeline />
        <AboutRecruiterCta />
      </div>
    </div>
  );
}