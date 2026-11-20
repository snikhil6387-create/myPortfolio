import { Bio } from '../../data/Contants';
import ShaderCanvas from './ShaderCanvas';

const profileImg = `${process.env.PUBLIC_URL}/person_image.jpg`;
const resumeUrl = `${process.env.PUBLIC_URL}/${Bio.resumeFile}`;

export default function LandingHero() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full opacity-[0.72] pointer-events-none">
        <ShaderCanvas />
      </div>
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-primary-container/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] bg-tertiary-container/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-space-xl lg:py-space-2xl min-h-[calc(100vh-5rem)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center w-full">
          <div className="lg:col-span-7 flex flex-col gap-space-md z-10">
            <div className="inline-flex items-center gap-space-sm px-space-md py-space-xs rounded-full bg-surface-container-high/80 backdrop-blur-xl w-fit shadow-[0_0_16px_rgba(76,215,246,0.12)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
              </span>
              <span className="font-label-code text-label-code text-secondary tracking-wider uppercase">
                FREELANCE &amp; FULL-TIME — AVAILABLE
              </span>
            </div>

            <div className="flex flex-col gap-space-xs">
              <h1 className="font-display text-display md:text-display max-md:text-[36px] max-md:leading-[44px] font-bold text-on-surface tracking-tight">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-primary via-[#e9ddff] to-secondary bg-clip-text text-transparent">
                  {Bio.name}
                </span>
              </h1>
              <div className="flex items-center gap-space-sm flex-wrap">
                <span className="font-headline-md text-headline-md text-primary font-semibold">
                  Freelance Developer
                </span>
                <span className="text-outline-variant font-light text-headline-md">/</span>
                <span className="font-headline-md text-headline-md text-secondary font-semibold">
                  Full Stack Engineer
                </span>
              </div>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              I&apos;m a results-driven Full Stack Developer with 3 years of professional experience in designing,
              developing, and maintaining scalable, responsive, and high-performance web applications. I specialize in
              PHP, Laravel, MySQL, JavaScript, HTML, CSS, and modern frontend technologies. Experienced in building
              RESTful APIs, developing dynamic user interfaces, database optimization, and integrating third-party
              services. Passionate about writing clean, maintainable code, solving complex technical challenges, and
              delivering end-to-end digital solutions that create real business value.
            </p>

            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <a
                className="inline-flex items-center gap-space-sm px-space-lg py-space-md rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-container font-headline-sm text-body-md font-semibold shadow-[0_0_30px_rgba(160,120,255,0.4)] hover:shadow-[0_0_40px_rgba(76,215,246,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                href="#freelance"
              >
                <span>Hire for Freelance</span>
                <span className="material-symbols-outlined text-body-md">handshake</span>
              </a>
              <a
                className="inline-flex items-center gap-space-sm px-space-lg py-space-md rounded-xl bg-surface-container-high/80 hover:bg-surface-container-highest text-on-surface font-headline-sm text-body-md font-semibold backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                href="#projects"
              >
                <span>Explore My Work</span>
                <span className="material-symbols-outlined text-body-md text-secondary">arrow_downward</span>
              </a>
              <a
                className="inline-flex items-center gap-space-sm px-space-lg py-space-md rounded-xl bg-surface-container-high/80 hover:bg-surface-container-highest text-on-surface font-headline-sm text-body-md font-semibold backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                href={resumeUrl}
                download={Bio.resumeFile}
              >
                <span className="material-symbols-outlined text-secondary text-body-md">download</span>
                <span>Download Resume</span>
              </a>
            </div>

            <div className="flex items-center gap-space-sm pt-space-sm flex-wrap">
              <span className="font-label-code text-label-code text-on-surface-variant uppercase mr-space-xs">
                Connect:
              </span>
              <a
                className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container/70 hover:bg-surface-container-high text-on-surface-variant hover:text-secondary text-body-sm transition-all"
                href={Bio.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-body-sm text-secondary">code</span>
                <span className="font-label-code text-label-code">GitHub</span>
              </a>
              <a
                className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container/70 hover:bg-surface-container-high text-on-surface-variant hover:text-primary text-body-sm transition-all"
                href={Bio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-body-sm text-primary">badge</span>
                <span className="font-label-code text-label-code">LinkedIn</span>
              </a>
              <a
                className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container/70 hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface text-body-sm transition-all"
                href={`mailto:${Bio.email}`}
              >
                <span className="material-symbols-outlined text-body-sm text-primary">alternate_email</span>
                <span className="font-label-code text-label-code">Email</span>
              </a>
              <a
                className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container/70 hover:bg-surface-container-high text-on-surface-variant hover:text-[#25D366] text-body-sm transition-all"
                href={Bio.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-body-sm text-[#25D366]">chat</span>
                <span className="font-label-code text-label-code">WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="absolute w-[440px] h-[440px] sm:w-[500px] sm:h-[500px] rounded-full bg-surface-container-low/40 blur-2xl pointer-events-none" />
            <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full bg-surface-container-high/20 pointer-events-none animate-[spin_40s_linear_infinite]" />

            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl bg-surface-container-low p-space-sm shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-surface-container">
                <img
                  alt={`${Bio.name} - Backend Engineer`}
                  className="w-full h-full object-cover object-center filter saturate-[1.08] hover:scale-105 transition-transform duration-700"
                  src={profileImg}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 px-space-md py-space-sm rounded-xl bg-surface-container-high/90 backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex items-center gap-space-sm">
                <div className="w-9 h-9 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-body-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface leading-tight font-bold">
                    3+ Years
                  </span>
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                    Industry Experience
                  </span>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-6 px-space-md py-space-sm rounded-xl bg-surface-container-high/90 backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex items-center gap-space-sm">
                <div className="w-9 h-9 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-body-lg">database</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-body-md text-on-surface font-semibold">Freelance Ready</span>
                  <span className="font-label-caps text-label-caps text-secondary uppercase">Remote · IST</span>
                </div>
              </div>

              <div className="absolute top-1/2 -left-8 -translate-y-1/2 hidden sm:flex items-center justify-center w-11 h-11 rounded-xl bg-surface-container-highest/90 text-primary shadow-[0_8px_20px_rgba(0,0,0,0.4)] backdrop-blur-md">
                <span className="font-label-code text-label-code font-bold">PHP</span>
              </div>
              <div className="absolute top-1/4 -right-6 hidden sm:flex items-center justify-center w-11 h-11 rounded-xl bg-surface-container-highest/90 text-secondary shadow-[0_8px_20px_rgba(0,0,0,0.4)] backdrop-blur-md">
                <span className="material-symbols-outlined text-body-md">storage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}