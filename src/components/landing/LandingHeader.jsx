import { Bio } from '../../data/Contants';

const NAV = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'freelance', label: 'Freelance', href: '#freelance' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

const profileImg = `${process.env.PUBLIC_URL}/person_image.jpg`;
const resumeUrl = `${process.env.PUBLIC_URL}/${Bio.resumeFile}`;

export default function LandingHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0a0e18]/70 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_20px_rgba(109,59,215,0.12)]">
      <div className="h-20 max-w-[1440px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-gutter">
        <a className="flex items-center gap-space-sm group" href="#home">
          <span className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center font-label-code text-label-code text-secondary group-hover:bg-surface-container-highest transition-colors">
            NS
          </span>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors">
              {Bio.name}
            </span>
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
              {Bio.tagline}
            </span>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-space-xs bg-surface-container-lowest/80 px-space-sm py-space-xs rounded-full backdrop-blur-md">
          {NAV.map((item, i) => (
            <a
              key={item.id}
              href={item.href}
              className={
                i === 0
                  ? 'transition-colors bg-surface-container-high text-on-surface font-semibold rounded-full px-space-md py-space-xs'
                  : 'font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface px-space-md py-space-xs rounded-full transition-colors'
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-space-sm">
          <a
            className="hidden sm:inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm transition-all shadow-[0_1px_8px_rgba(0,0,0,0.15)]"
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-secondary text-body-md">terminal</span>
            <span>GitHub</span>
          </a>
          <a
            className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-container font-headline-sm text-body-sm shadow-[0_0_24px_rgba(160,120,255,0.35)] hover:shadow-[0_0_32px_rgba(76,215,246,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            href={resumeUrl}
            download={Bio.resumeFile}
          >
            <span className="material-symbols-outlined text-body-md">download</span>
            <span className="font-semibold">Download Resume</span>
          </a>
          <img
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover shadow-[0_0_12px_rgba(208,188,255,0.25)]"
            src={profileImg}
          />
        </div>
      </div>
    </header>
  );
}