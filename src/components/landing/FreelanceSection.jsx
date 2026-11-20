import { Bio, freelanceEngagement, freelanceServices } from '../../data/Contants';

export default function FreelanceSection() {
  return (
    <section className="w-full relative py-space-2xl border-t border-white/[0.04]" id="freelance">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-xs flex-wrap">
              <span className="w-3 h-3 rounded-sm bg-secondary inline-block" />
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                Freelance Developer
              </span>
              <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-secondary/15 text-secondary font-label-code text-label-code uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                Open for projects
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Hire Me for Freelance &amp; Contract Work
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              I work with founders, agencies, and businesses on freelance engagements — from greenfield builds to
              production fixes. Clear communication, on-time milestones, and code you can hand off to any team.
            </p>
            <ul className="flex flex-col gap-space-sm pt-space-xs">
              {freelanceEngagement.map((item) => (
                <li key={item} className="flex items-center gap-space-sm font-body-md text-body-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-body-md">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-space-md pt-space-sm">
              <a
                href="#contact"
                className="inline-flex items-center gap-space-sm px-space-lg py-space-md rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-container font-headline-sm text-body-md font-semibold shadow-[0_0_24px_rgba(160,120,255,0.35)] hover:scale-[1.02] transition-all"
              >
                <span>Start a Project</span>
                <span className="material-symbols-outlined text-body-md">handshake</span>
              </a>
              <a
                href={Bio.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-space-sm px-space-lg py-space-md rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 font-headline-sm text-body-md font-semibold transition-all"
              >
                <span>Chat on WhatsApp</span>
                <span className="material-symbols-outlined text-body-md">chat</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            {freelanceServices.map((service) => (
              <div
                key={service.title}
                className="rounded-xl bg-surface-container p-space-lg flex flex-col gap-space-sm shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:bg-surface-container-high transition-colors border border-white/[0.04]"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-container/15 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-headline-sm">{service.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">{service.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}