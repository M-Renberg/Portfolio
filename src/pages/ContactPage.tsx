import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Icon } from '../util/Icons';
import ScrambleText from '../util/ScrambleText';
import '../tailwind/glitch-fx.css';

const CONTACT_EMAIL = 'mikael.k.renberg@hotmail.com';
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjggvzjd';

type InquiryIntent = 'lia' | 'ai' | 'fullstack' | 'chat';

const VALID_INTENTS: InquiryIntent[] = ['lia', 'ai', 'fullstack', 'chat'];

const isValidIntent = (val: string | null): val is InquiryIntent => {
  return val !== null && VALID_INTENTS.includes(val as InquiryIntent);
};

interface IntentConfig {
  id: InquiryIntent;
  label: string;
  icon: string;
  placeholder: string;
  subjectPrefix: string;
}

const intentConfigs: IntentConfig[] = [
  {
    id: 'lia',
    label: 'LIA Internship',
    icon: '💼',
    placeholder: 'Tell me about the team, tech stack, and your target LIA internship period...',
    subjectPrefix: '[LIA Internship Inquiry]',
  },
  {
    id: 'ai',
    label: 'Applied AI & LLM',
    icon: '🤖',
    placeholder: 'Describe your machine learning use-case, privacy/offline needs, or architecture challenges...',
    subjectPrefix: '[Applied AI Inquiry]',
  },
  {
    id: 'fullstack',
    label: 'Full-Stack Project',
    icon: '⚡',
    placeholder: 'Tell me about your application scope, reactive DB / backend requirements, or timeline...',
    subjectPrefix: '[Full-Stack Inquiry]',
  },
  {
    id: 'chat',
    label: 'Tech Chat & Fika',
    icon: '☕',
    placeholder: 'What would you like to discuss? (Local SLMs, developer ergonomics, software patterns...)',
    subjectPrefix: '[Tech Chat / Fika]',
  },
];

export default function Contact() {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramIntent = searchParams.get('intent');
  const selectedIntent: InquiryIntent = isValidIntent(paramIntent) ? paramIntent : 'lia';

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSelectIntent = (intentId: InquiryIntent) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.set('intent', intentId);
        return next;
      },
      { replace: true }
    );
  };

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  // Submission state
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Specular radial spotlight mouse states
  const [leftMousePos, setLeftMousePos] = useState({ x: 0, y: 0 });
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [rightMousePos, setRightMousePos] = useState({ x: 0, y: 0 });
  const [isRightHovered, setIsRightHovered] = useState(false);

  const activeIntentConfig = intentConfigs.find((c) => c.id === selectedIntent) || intentConfigs[0];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Silent spam bot rejection
    if (honeypot) {
      setStatus('success');
      return;
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedOrg = organization.trim();
    const trimmedMessage = message.trim();

    // Input validation guards before dispatching
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      setStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid return email address.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const payload = {
        name: trimmedName,
        email: trimmedEmail,
        organization: trimmedOrg || 'Not specified',
        inquiry_intent: activeIntentConfig.label,
        message: trimmedMessage,
        _subject: `${activeIntentConfig.subjectPrefix} from ${trimmedName}${trimmedOrg ? ` (${trimmedOrg})` : ''}`,
        _replyto: trimmedEmail,
        _gotcha: honeypot,
      };

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData?.errors?.[0]?.message || 'Failed to dispatch transmission. Please use direct email.'
        );
        setStatus('error');
      }
    } catch {
      setErrorMessage('Network connection error. You can still reach me directly via email.');
      setStatus('error');
    }
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setOrganization('');
    setMessage('');
    setStatus('idle');
    setErrorMessage('');
  };

  // Fallback mailto generator in case of network issue
  const getFallbackMailto = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedOrg = organization.trim();
    const trimmedMessage = message.trim();

    const subject = encodeURIComponent(`${activeIntentConfig.subjectPrefix} from ${trimmedName || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${trimmedName}\nEmail: ${trimmedEmail}\nOrganization: ${trimmedOrg}\nIntent: ${activeIntentConfig.label}\n\nMessage:\n${trimmedMessage}`
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
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
            text="Let's Connect"
            className="text-4xl sm:text-6xl text-center mt-2 mb-3 drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]"
            delayMs={200}
            speedMs={35}
          />
        </div>

        {/* Subtitle */}
        <div className="fade-in-delayed-1 max-w-2xl mx-auto text-center mb-10 drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
          <p className="text-base sm:text-lg text-[#F0F5F0]/90 leading-relaxed font-sans">
            Open for LIA internships, applied AI engineering, and full-stack software collaboration. Reach out directly or dispatch a transmission below.
          </p>
        </div>

        {/* 2-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch w-full mb-14">
          {/* LEFT COLUMN: Operator Telemetry & Direct Channels (5 cols) */}
          <section
            className="group md:col-span-5 relative rounded-2xl p-px transition-all duration-300"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setLeftMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
            onMouseEnter={() => setIsLeftHovered(true)}
            onMouseLeave={() => setIsLeftHovered(false)}
          >
            {/* Cursor-following spotlight */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 -z-10"
              style={{
                background: isLeftHovered
                  ? `radial-gradient(280px circle at ${leftMousePos.x}px ${leftMousePos.y}px, rgba(45, 212, 191, 0.35), transparent 70%)`
                  : 'none',
              }}
            />

            <div className="h-full p-6 sm:p-8 rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/70 group-hover:border-[#2DD4BF]/60 transition-all duration-300 shadow-lg flex flex-col justify-between text-left">
              <div>
                {/* Corner Telemetry Marker */}
                <div className="flex justify-between items-center text-[10px] font-mono text-[#52aa8c] pb-3 mb-4 border-b border-[#045757]/40">
                  <span>SYS_ID // COMM-084</span>
                  <span className="flex items-center gap-1.5 text-[#2DD4BF] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
                    OPEN FOR LIA & ROLES
                  </span>
                </div>

                <div className="w-12 h-0.5 rounded-full bg-[#408A71] group-hover:w-full group-hover:bg-[#2DD4BF] transition-all duration-500 mb-5" />

                <h2 className="text-2xl sm:text-3xl font-bold text-[#B0E4CC] drop-shadow-[0_2px_8px_rgba(0,0,0,1)] mb-3">
                  Direct Channels
                </h2>

                <p className="text-sm text-[#F0F5F0]/85 leading-relaxed mb-6 font-sans">
                  Whether you're exploring candidates for an LIA placement, discussing applied AI systems, or connecting with a fellow builder—my inbox is always monitored.
                </p>

                {/* 1-Click Copy Email Card */}
                <div className="mb-4 p-4 rounded-xl bg-[#061211]/90 border border-[#045757]/80 hover:border-[#2DD4BF]/70 transition-all shadow-sm">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#52aa8c] mb-1.5">
                    <span>PRIMARY EMAIL</span>
                    <span>1-CLICK CLIPBOARD</span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm font-mono text-white font-medium truncate select-all">
                      {CONTACT_EMAIL}
                    </span>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                        copiedEmail
                          ? 'bg-[#2DD4BF] text-[#091413] shadow-[0_0_12px_rgba(45,212,191,0.5)]'
                          : 'bg-[#0b1a18] text-[#2DD4BF] border border-[#2DD4BF]/40 hover:bg-[#2DD4BF] hover:text-[#091413]'
                      }`}
                      title="Copy to clipboard"
                    >
                      <span>{copiedEmail ? '✓' : '📋'}</span>
                      <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* Social Network Channels */}
                <div className="flex flex-col gap-2.5 mb-6">
                  <a
                    href="https://www.linkedin.com/in/mikael-renberg-98b062178/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center justify-between p-3 px-3.5 rounded-xl bg-[#061211]/80 border border-[#045757]/70 hover:border-[#2DD4BF] hover:bg-[#0c2421] text-[#F0F5F0] hover:text-[#2DD4BF] transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <Icon name="linkedin" className="text-[#2DD4BF] group-hover/link:scale-110 transition-transform m-0" />
                      <span className="font-semibold text-xs sm:text-sm">LinkedIn Profile & InMail</span>
                    </div>
                    <span className="text-xs font-mono text-[#52aa8c] group-hover/link:text-[#2DD4BF] transition-colors">
                      Connect &rarr;
                    </span>
                  </a>

                  <a
                    href="https://github.com/M-Renberg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center justify-between p-3 px-3.5 rounded-xl bg-[#061211]/80 border border-[#045757]/70 hover:border-[#2DD4BF] hover:bg-[#0c2421] text-[#F0F5F0] hover:text-[#2DD4BF] transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <Icon name="github" className="text-[#2DD4BF] group-hover/link:scale-110 transition-transform m-0" />
                      <span className="font-semibold text-xs sm:text-sm">GitHub (20+ Repositories)</span>
                    </div>
                    <span className="text-xs font-mono text-[#52aa8c] group-hover/link:text-[#2DD4BF] transition-colors">
                      Inspect &rarr;
                    </span>
                  </a>
                </div>
              </div>

              {/* Operational SLA & Bilingual Telemetry */}
              <div className="pt-4 border-t border-[#045757]/40 flex flex-col gap-2 text-xs font-mono text-[#F0F5F0]/75">
                <div className="flex items-center justify-between">
                  <span className="text-[#52aa8c]">LOCATION:</span>
                  <span className="text-white">Malmö, Sweden (CET / UTC+1)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#52aa8c]">RESPONSE_SLA:</span>
                  <span className="text-[#2DD4BF] font-semibold">&lt; 24h on weekdays</span>
                </div>
                <div className="mt-2 pt-2 border-t border-white/5 text-[11px] text-[#B0E4CC]/80">
                  🇸🇪 <span className="italic">Skriv gärna på svenska eller engelska — båda fungerar lika bra!</span>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT COLUMN: Transmission Terminal // Formspree (7 cols) */}
          <section
            className="group md:col-span-7 relative rounded-2xl p-px transition-all duration-300"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setRightMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
            onMouseEnter={() => setIsRightHovered(true)}
            onMouseLeave={() => setIsRightHovered(false)}
          >
            {/* Cursor-following spotlight */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 -z-10"
              style={{
                background: isRightHovered
                  ? `radial-gradient(320px circle at ${rightMousePos.x}px ${rightMousePos.y}px, rgba(45, 212, 191, 0.35), transparent 70%)`
                  : 'none',
              }}
            />

            <div className="h-full p-6 sm:p-8 rounded-2xl bg-[#0b1a18]/75 backdrop-blur-md border border-[#045757]/70 group-hover:border-[#2DD4BF]/60 transition-all duration-300 shadow-lg text-left flex flex-col justify-between">
              <div>
                {/* Corner marker */}
                <div className="flex justify-between items-center text-[10px] font-mono text-[#52aa8c] pb-3 mb-4 border-b border-[#045757]/40">
                  <span>DISPATCH_TERMINAL // SEC-03</span>
                  <span className="text-[#2DD4BF] font-mono">FORMSPREE_ENCRYPTED</span>
                </div>

                <div className="w-12 h-0.5 rounded-full bg-[#408A71] group-hover:w-full group-hover:bg-[#2DD4BF] transition-all duration-500 mb-5" />

                <h2 className="text-2xl sm:text-3xl font-bold text-[#B0E4CC] mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
                  Send a Message
                </h2>
                <p className="text-xs sm:text-sm font-mono text-[#2DD4BF]/90 mb-5">
                  Direct dispatch to Mikael's inbox with zero third-party redirects.
                </p>

                {/* Intent Selection Chips */}
                <div className="mb-5">
                  <label className="block text-[11px] font-mono text-[#52aa8c] uppercase tracking-wider mb-2">
                    Inquiry Frequency // Topic
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {intentConfigs.map((config) => {
                      const isSelected = selectedIntent === config.id;
                      return (
                        <button
                          key={config.id}
                          type="button"
                          onClick={() => handleSelectIntent(config.id)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-[#2DD4BF] text-[#091413] font-bold shadow-[0_0_15px_rgba(45,212,191,0.35)]'
                              : 'bg-[#061211] text-[#B0E4CC]/80 hover:text-white border border-[#045757]/60 hover:border-[#2DD4BF]/60'
                          }`}
                        >
                          <span>{config.icon}</span>
                          <span>{config.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* SUCCESS RECEIPT STATE */}
                {status === 'success' ? (
                  <div className="p-7 rounded-2xl bg-[#061211]/90 border border-[#2DD4BF]/60 text-center flex flex-col items-center gap-4 my-4 fade-in">
                    <span className="text-4xl animate-bounce">✨</span>
                    <h3 className="text-xl font-bold text-[#B0E4CC] font-mono">
                      TRANSMISSION CONFIRMED
                    </h3>
                    <p className="text-sm text-[#F0F5F0]/90 max-w-md font-sans">
                      Thank you for reaching out, <strong className="text-white">{name}</strong>! Your message regarding <strong className="text-[#2DD4BF] font-mono">{activeIntentConfig.label}</strong> has been delivered directly to Mikael's primary inbox.
                    </p>
                    <div className="p-3 rounded-xl bg-[#0b1a18] border border-[#045757]/60 text-xs font-mono text-[#52aa8c] w-full max-w-sm">
                      STATUS: DELIVERED // RESPONSE SLA: &lt; 24H
                    </div>
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="mt-2 px-5 py-2.5 rounded-xl bg-[#045757]/40 border border-[#2DD4BF]/50 text-xs font-mono font-bold text-[#2DD4BF] hover:bg-[#2DD4BF] hover:text-[#091413] transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Silent Bot Honeypot */}
                    <input
                      type="text"
                      name="_gotcha"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    {/* Name + Organization Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name-input" className="block text-xs font-mono text-[#B0E4CC] uppercase tracking-wider mb-1.5">
                          Identity // Name *
                        </label>
                        <input
                          type="text"
                          id="name-input"
                          name="name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full p-3 rounded-xl bg-[#061211]/80 border border-[#045757]/70 text-[#F0F5F0] text-sm placeholder-white/30 focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF] transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="org-input" className="block text-xs font-mono text-[#B0E4CC] uppercase tracking-wider mb-1.5">
                          Organization // Optional
                        </label>
                        <input
                          type="text"
                          id="org-input"
                          name="organization"
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          placeholder="Company, Team or Project"
                          className="w-full p-3 rounded-xl bg-[#061211]/80 border border-[#045757]/70 text-[#F0F5F0] text-sm placeholder-white/30 focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF] transition-all"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="email-input" className="block text-xs font-mono text-[#B0E4CC] uppercase tracking-wider mb-1.5">
                        Return Comm // Email *
                      </label>
                      <input
                        type="email"
                        id="email-input"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@company.com"
                        className="w-full p-3 rounded-xl bg-[#061211]/80 border border-[#045757]/70 text-[#F0F5F0] text-sm placeholder-white/30 focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF] transition-all"
                      />
                    </div>

                    {/* Message Area */}
                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <label htmlFor="message-input" className="block text-xs font-mono text-[#B0E4CC] uppercase tracking-wider">
                          Payload // Message *
                        </label>
                        <span className="text-[10px] font-mono text-[#52aa8c]" aria-live="polite">
                          {message.length} / 1500 CHARS
                        </span>
                      </div>
                      <textarea
                        id="message-input"
                        name="message"
                        rows={5}
                        required
                        maxLength={1500}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={activeIntentConfig.placeholder}
                        className="w-full p-3.5 rounded-xl bg-[#061211]/80 border border-[#045757]/70 text-[#F0F5F0] text-sm placeholder-white/30 focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF] transition-all resize-y min-h-32 font-sans"
                      />
                    </div>

                    {/* Error State Banner with Fallback */}
                    {status === 'error' && (
                      <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/50 text-xs font-mono text-red-200 flex flex-col sm:flex-row items-center justify-between gap-2">
                        <span>⚠️ {errorMessage}</span>
                        <a
                          href={getFallbackMailto()}
                          className="px-3 py-1 rounded-lg bg-red-500 text-white font-bold hover:bg-red-400 transition-colors shrink-0"
                        >
                          Send via Mail Client &rarr;
                        </a>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto self-start px-8 py-3.5 rounded-xl bg-[#045757]/50 hover:bg-[#2DD4BF] text-[#2DD4BF] hover:text-[#091413] font-semibold text-sm sm:text-base border border-[#2DD4BF]/60 hover:border-[#2DD4BF] transition-all duration-300 shadow-[0_0_15px_rgba(45,212,191,0.2)] hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] cursor-pointer flex items-center justify-center gap-2 group mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <span className="w-3.5 h-3.5 rounded-full border-2 border-current border-t-transparent animate-spin" />
                          <span>Transmitting Payload...</span>
                        </>
                      ) : (
                        <>
                          <span>Dispatch Transmission</span>
                          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}