import { Bio } from '../../data/Contants';

const NAV = [
  'Home',
  'About',
  'Skills',
  'Freelance',
  'Experience',
  'Projects',
  'Education',
  'Contact',
];

const hrefs = ['#', '#about', '#skills', '#freelance', '#experience', '#projects', '#education', '#contact'];

export default function LandingFooter() {
  return (
    <footer className="relative w-full py-space-2xl mt-space-2xl border-t border-white/[0.06] bg-[#070a12]/60 backdrop-blur-sm shadow-[0_-1px_24px_rgba(109,59,215,0.08)]">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          <div className="md:col-span-5 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <span className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center font-label-code text-label-code text-secondary">
                NS
              </span>
              <span className="font-headline-md text-headline-md text-on-surface">{Bio.name}</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              {Bio.tagline} — Laravel, APIs, and full-stack builds for startups, agencies, and businesses. Freelance and
              full-time engagements welcome.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#4cd7f6]" />
              <span className="font-label-code text-label-code text-on-surface-variant">
                Open for freelance projects &amp; contract work
              </span>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Quick Navigation</span>
            <nav className="grid grid-cols-2 gap-space-xs">
              {NAV.map((item, i) => (
                <a
                  key={item}
                  href={hrefs[i]}
                  className={
                    i === 0
                      ? 'transition-colors py-space-xs text-on-surface font-semibold'
                      : 'font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors py-space-xs'
                  }
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3 flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
              Telemetry &amp; Social
            </span>
            <div className="flex flex-col gap-space-xs">
              <a
                className="flex items-center gap-space-sm font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors py-space-xs"
                href={Bio.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-body-md text-primary">code</span>
                <span>GitHub Profile</span>
              </a>
              <a
                className="flex items-center gap-space-sm font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors py-space-xs"
                href={Bio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-body-md text-primary">badge</span>
                <span>LinkedIn Network</span>
              </a>
              <a
                className="flex items-center gap-space-sm font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors py-space-xs"
                href={`mailto:${Bio.email}`}
              >
                <span className="material-symbols-outlined text-body-md text-secondary">alternate_email</span>
                <span>{Bio.email}</span>
              </a>
              <a
                className="flex items-center gap-space-sm font-body-sm text-body-sm text-on-surface-variant hover:text-[#25D366] transition-colors py-space-xs"
                href={Bio.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-body-md text-[#25D366]">chat</span>
                <span>+91 {Bio.whatsapp}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-lg bg-surface-container-lowest">
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            © {new Date().getFullYear()} {Bio.name}. All rights reserved. Precision computational craft.
          </span>
          <div className="flex items-center gap-space-md">
            <span className="font-label-code text-label-code text-on-surface-variant">v4.19.0-prod</span>
            <span className="font-label-code text-label-code text-secondary">TLS 1.3 encrypted</span>
          </div>
        </div>
      </div>
    </footer>
  );
}