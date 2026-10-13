import { useState } from 'react';
import { Icon } from '../util/Icons';
import ScrambleText from '../util/ScrambleText';
import '../tailwind/glitch-fx.css';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
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

      {/* Main container with center fade-in */}
      <div className="center-fade-in relative z-10 w-full max-w-5xl flex flex-col items-center py-8 sm:py-12 px-4 sm:px-8">
        {/* Title */}
        <div className="relative mb-2">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-black/60 blur-3xl scale-125" aria-hidden="true" />
          <ScrambleText
            text="Contact"
            className="text-4xl sm:text-6xl text-center mt-2 mb-4 drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]"
            delayMs={200}
            speedMs={35}
          />
        </div>

        {/* Subtitle */}
        <div className="fade-in-delayed-1 max-w-2xl mx-auto text-center mb-10 drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
          <p className="text-base sm:text-lg text-[#F0F5F0]/90 leading-relaxed">
            Looking to collaborate, have a question, or want to discuss a project? Reach out below.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch w-full mb-14">
          {/* Left Column: Connect Channels HUD Card */}
          <section className="md:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/70 hover:border-[#2DD4BF]/60 transition-all duration-300 shadow-lg shadow-[0_0_25px_rgba(4,87,87,0.2)] flex flex-col justify-between text-left">
            <div>
              <div className="w-12 h-0.5 rounded-full bg-[#408A71] hover:w-full transition-all duration-500 mb-6" />
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF] animate-pulse" />
                <h2 className="text-2xl sm:text-3xl font-bold text-[#B0E4CC] drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
                  Let's Connect
                </h2>
              </div>
              <p className="text-[#F0F5F0]/85 text-base leading-relaxed mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                Feel free to connect with me on GitHub or LinkedIn.
              </p>
              <p className="text-[#F0F5F0]/80 text-sm leading-relaxed mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                I'm always open to new opportunities, collaborations, and building innovative software systems.
              </p>
            </div>

            {/* Interactive channel links */}
            <div className="flex flex-col gap-3.5">
              <a
                href="https://www.linkedin.com/in/mikael-renberg-98b062178/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 px-4 rounded-xl bg-[#061211]/80 border border-[#045757]/70 hover:border-[#2DD4BF] hover:bg-[#0c2421] text-[#F0F5F0] hover:text-[#2DD4BF] transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(45,212,191,0.25)]"
              >
                <div className="flex items-center gap-3">
                  <Icon name="linkedin" className="text-[#2DD4BF] group-hover:scale-110 transition-transform m-0" />
                  <span className="font-semibold text-sm sm:text-base">LinkedIn</span>
                </div>
                <span className="text-xs font-mono text-[#408A71] group-hover:text-[#2DD4BF] transition-colors">Profile &rarr;</span>
              </a>

              <a
                href="https://github.com/M-Renberg"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 px-4 rounded-xl bg-[#061211]/80 border border-[#045757]/70 hover:border-[#2DD4BF] hover:bg-[#0c2421] text-[#F0F5F0] hover:text-[#2DD4BF] transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(45,212,191,0.25)]"
              >
                <div className="flex items-center gap-3">
                  <Icon name="github" className="text-[#2DD4BF] group-hover:scale-110 transition-transform m-0" />
                  <span className="font-semibold text-sm sm:text-base">GitHub</span>
                </div>
                <span className="text-xs font-mono text-[#408A71] group-hover:text-[#2DD4BF] transition-colors">Repositories &rarr;</span>
              </a>

              <a
                href="mailto:mikael.k.renberg@hotmail.com"
                className="group flex items-center justify-between p-3.5 px-4 rounded-xl bg-[#061211]/80 border border-[#045757]/70 hover:border-[#2DD4BF] hover:bg-[#0c2421] text-[#F0F5F0] hover:text-[#2DD4BF] transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(45,212,191,0.25)]"
              >
                <div className="flex items-center gap-3">
                  <Icon name="email" className="text-[#2DD4BF] group-hover:scale-110 transition-transform m-0" />
                  <span className="font-semibold text-sm sm:text-base">Email</span>
                </div>
                <span className="text-xs font-mono text-[#408A71] group-hover:text-[#2DD4BF] transition-colors">Write &rarr;</span>
              </a>
            </div>
          </section>

          {/* Right Column: Direct Message Form HUD Card */}
          <section className="md:col-span-7 p-6 sm:p-10 rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/70 hover:border-[#2DD4BF]/60 transition-all duration-300 shadow-lg shadow-[0_0_25px_rgba(4,87,87,0.2)] text-left flex flex-col justify-between">
            <div>
              <div className="w-12 h-0.5 rounded-full bg-[#408A71] hover:w-full transition-all duration-500 mb-6" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#B0E4CC] mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
                Send a Message
              </h2>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-[#045757]/30 border border-[#2DD4BF]/60 text-center flex flex-col items-center gap-4 my-8">
                  <span className="text-4xl">✨</span>
                  <p className="text-xl font-bold text-[#B0E4CC]">Tack för ditt meddelande!</p>
                  <p className="text-sm text-[#F0F5F0]/80 max-w-md">
                    Detta är ett demoformulär. Kontakta mig gärna direkt via e-post eller LinkedIn för snabbast svar.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-3 px-5 py-2 rounded-lg bg-[#061211] border border-[#2DD4BF]/50 text-xs font-mono text-[#2DD4BF] hover:text-white hover:border-[#2DD4BF] transition-colors cursor-pointer"
                  >
                    Skicka ett nytt meddelande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name-input" className="block text-xs font-mono text-[#B0E4CC] uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name-input"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full p-3.5 rounded-xl bg-[#061211]/80 border border-[#045757]/70 text-[#F0F5F0] placeholder-white/30 focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email-input" className="block text-xs font-mono text-[#B0E4CC] uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email-input"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full p-3.5 rounded-xl bg-[#061211]/80 border border-[#045757]/70 text-[#F0F5F0] placeholder-white/30 focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message-input" className="block text-xs font-mono text-[#B0E4CC] uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      id="message-input"
                      name="message"
                      rows={4}
                      required
                      placeholder="Write your message here..."
                      className="w-full p-3.5 rounded-xl bg-[#061211]/80 border border-[#045757]/70 text-[#F0F5F0] placeholder-white/30 focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF] transition-all resize-y min-h-30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto self-start px-8 py-3.5 rounded-xl bg-[#045757]/50 hover:bg-[#2DD4BF] text-[#2DD4BF] hover:text-[#091413] font-semibold text-base border border-[#2DD4BF]/60 hover:border-[#2DD4BF] transition-all duration-300 shadow-[0_0_15px_rgba(45,212,191,0.2)] hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] cursor-pointer flex items-center justify-center gap-2 group mt-2"
                  >
                    <span>Send Message</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </button>
                </form>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}