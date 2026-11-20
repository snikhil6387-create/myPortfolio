import { useState } from 'react';
import { Bio, certification, education } from '../../data/Contants';
import FreelanceSection from './FreelanceSection';

const exp = certification[0];

export default function LandingSections() {
  const [formSent, setFormSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    e.target.reset();
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <>
      <section className="w-full relative py-space-2xl border-t border-white/[0.04]" id="about">
        <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <div className="flex items-center gap-space-xs">
              <span className="w-3 h-3 rounded-sm bg-primary inline-block" />
              <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">About Me</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Turning Architectural Complexity Into Scalable Digital Solutions
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Full-time engineer and freelance developer — shipping production-grade web apps for clients and teams worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
            <div className="lg:col-span-7 rounded-2xl bg-surface-container p-space-xl flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.3)] relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex flex-col gap-space-md z-10">
                <span className="font-label-code text-label-code text-secondary">ARCHITECTURAL PHILOSOPHY</span>
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">{Bio.description}</p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  I take freelance projects alongside full-time delivery — web apps, APIs, admin panels, integrations, and
                  ongoing maintenance — with transparent timelines and production-ready handoffs.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-md pt-space-xl z-10">
                <div className="flex flex-col">
                  <span className="font-label-code text-label-code text-primary">LOCATION</span>
                  <span className="font-body-md text-body-md text-on-surface font-semibold">Lucknow, India</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-code text-label-code text-secondary">ENGAGEMENT</span>
                  <span className="font-body-md text-body-md text-on-surface font-semibold">Freelance &amp; Full-Time</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-code text-label-code text-tertiary">DEGREE</span>
                  <span className="font-body-md text-body-md text-on-surface font-semibold">B.Tech CSE</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-space-md">
              {[
                {
                  title: '3+ Years Experience',
                  icon: 'schedule',
                  color: 'text-secondary',
                  text: 'Dedicated to backend web engineering, RESTful microservices, and database tuning across high-traffic production environments.',
                },
                {
                  title: 'Full Stack Developer',
                  icon: 'dns',
                  color: 'text-primary',
                  text: 'Expert in PHP/Laravel ecosystems, secure token authentication, queue workers, and complex relational schema modeling.',
                },
                {
                  title: 'Freelance Projects',
                  icon: 'handshake',
                  color: 'text-tertiary',
                  text: 'Available for freelance & contract work — MVPs, custom Laravel builds, API integrations, and long-term support for growing products.',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl bg-surface-container-low p-space-lg flex flex-col gap-space-xs hover:bg-surface-container transition-all shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">{card.title}</span>
                    <span className={`material-symbols-outlined ${card.color} text-headline-sm`}>{card.icon}</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FreelanceSection />
      <SkillsSection />
      <ExperienceSection exp={exp} />
      <ProjectsSection />
      <EducationSection items={education} />
      <ContactSection formSent={formSent} onSubmit={onSubmit} />
    </>
  );
}

function SkillChip({ icon, color, label }) {
  return (
    <span className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-body-sm font-label-code transition-all hover:scale-105">
      <span className={`material-symbols-outlined ${color} text-body-sm`}>{icon}</span>
      <span>{label}</span>
    </span>
  );
}

function SkillMeter({ label, percent, gradient }) {
  return (
    <div className="mt-auto pt-space-md flex flex-col gap-space-xs">
      <div className="flex justify-between font-label-code text-label-code text-on-surface-variant">
        <span>{label}</span>
        <span className={gradient.includes('secondary') ? 'text-secondary' : gradient.includes('tertiary') ? 'text-tertiary' : 'text-primary'}>
          {percent}%
        </span>
      </div>
      <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
        <div className={`h-full bg-gradient-to-r ${gradient} rounded-full`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <section className="w-full relative py-space-2xl border-t border-white/[0.04]" id="skills">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <div className="flex items-center gap-space-xs">
            <span className="w-3 h-3 rounded-sm bg-secondary inline-block" />
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
              Technical Expertise
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Core Technologies &amp; Developer Toolkit</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            A meticulously refined technology stack built for computational efficiency, rapid iterations, and uncompromising reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          <div className="rounded-2xl bg-surface-container p-space-lg flex flex-col gap-space-md shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
            <p className="flex items-center gap-space-sm pb-space-xs">
              <span className="w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-headline-sm">terminal</span>
              </span>
              <span className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Backend</span>
                <span className="font-label-code text-label-code text-on-surface-variant">Server, Logic &amp; Databases</span>
              </span>
            </p>
            <div className="flex flex-wrap gap-space-sm pt-space-xs">
              <SkillChip icon="code" color="text-primary" label="PHP" />
              <SkillChip icon="code" color="text-primary" label="JSP" />

              <SkillChip icon="layers" color="text-secondary" label="Laravel" />
              <SkillChip icon="database" color="text-tertiary" label="MySQL" />
              <SkillChip icon="hub" color="text-primary" label="REST APIs" />
              <SkillChip icon="conversion_path" color="text-secondary" label="Eloquent ORM" />
              <SkillChip icon="code_blocks" color="text-tertiary" label="Python" />
            </div>
            <SkillMeter label="Backend Mastery" percent={95} gradient="from-primary to-secondary" />
          </div>

          <div className="rounded-2xl bg-surface-container p-space-lg flex flex-col gap-space-md shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
            <p className="flex items-center gap-space-sm pb-space-xs">
              <span className="w-10 h-10 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-headline-sm">devices</span>
              </span>
              <span className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Frontend</span>
                <span className="font-label-code text-label-code text-on-surface-variant">Client UI &amp; Interactivity</span>
              </span>
            </p>
            <div className="flex flex-wrap gap-space-sm pt-space-xs">
              <SkillChip icon="html" color="text-primary" label="HTML5" />
              <SkillChip icon="css" color="text-secondary" label="CSS3" />
              <SkillChip icon="javascript" color="text-tertiary" label="JavaScript (ES6+)" />
              <SkillChip icon="view_quilt" color="text-primary" label="Bootstrap" />
              <SkillChip icon="palette" color="text-secondary" label="Tailwind CSS" />
              <SkillChip icon="dashboard_customize" color="text-tertiary" label="Material UI" />
            </div>
            <SkillMeter label="Frontend Proficiency" percent={88} gradient="from-secondary to-primary" />
          </div>

          <div className="rounded-2xl bg-surface-container p-space-lg flex flex-col gap-space-md shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
            <p className="flex items-center gap-space-sm pb-space-xs">
              <span className="w-10 h-10 rounded-xl bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-headline-sm">cloud</span>
              </span>
              <span className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Cloud &amp; DevOps</span>
                <span className="font-label-code text-label-code text-on-surface-variant">Infrastructure &amp; Tooling</span>
              </span>
            </p>
            <div className="flex flex-wrap gap-space-sm pt-space-xs">
              <SkillChip icon="cloud_queue" color="text-secondary" label="AWS (S3, IAM)" />
              <SkillChip icon="local_fire_department" color="text-primary" label="Firebase" />
              <SkillChip icon="commit" color="text-tertiary" label="Git &amp; GitHub" />
              <SkillChip icon="api" color="text-secondary" label="Postman" />
              <SkillChip icon="code" color="text-primary" label="VS Code" />
              <SkillChip icon="rocket_launch" color="text-tertiary" label="Netlify" />
            </div>
            <SkillMeter label="Tooling &amp; Cloud Workflows" percent={90} gradient="from-tertiary to-secondary" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection({ exp: job }) {
  const responsibilities = [
    ['Application Architecture', 'Developing Laravel-based web applications & modular architectural blueprints for stability.', 'text-primary'],
    ['High-Throughput REST APIs', 'Building high-throughput RESTful APIs, rate-limiting layers, and backend microservices.', 'text-secondary'],
    ['Database Optimization', 'Database schema design, query indexing, and performance optimization using MySQL.', 'text-tertiary'],
    ['3rd Party API Integrations', 'Seamless third-party API integrations (Payment Gateways, SMS/Email Notifications, Auth0).', 'text-primary'],
    ['Real-Time Admin Consoles', 'Developing responsive, real-time dynamic admin management dashboards with live metrics.', 'text-secondary'],
    ['Production Modernization', 'Maintaining, testing, and continuously modernizing existing mission-critical production apps.', 'text-tertiary'],
  ];

  return (
    <section className="w-full relative py-space-2xl border-t border-white/[0.04]" id="experience">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <div className="flex items-center gap-space-xs">
            <span className="w-3 h-3 rounded-sm bg-tertiary inline-block" />
            <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest">Work Experience</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Professional Journey &amp; Impact</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Real-world commercial experience architecting production systems, maintaining microservices, and leading backend feature releases.
          </p>
        </div>

        <div className="w-full rounded-2xl bg-surface-container p-space-lg lg:p-space-xl shadow-[0_4px_30px_rgba(0,0,0,0.35)] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-space-md pb-space-lg">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-sm flex-wrap">
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">{job.role}</h3>
                <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-secondary-container/20 text-secondary font-label-code text-label-code uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                  <span>Current</span>
                </span>
              </div>
              <div className="flex items-center gap-space-sm text-body-md text-primary font-semibold">
                <span className="material-symbols-outlined text-body-md">business</span>
                <span>{job.company}</span>
              </div>
            </div>
            <div className="flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-high w-fit">
              <span className="material-symbols-outlined text-body-md text-secondary">date_range</span>
              <span className="font-label-code text-label-code text-on-surface font-semibold">{job.date}</span>
            </div>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed pb-space-lg">{job.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
            {responsibilities.map(([title, desc, color]) => (
              <div key={title} className="flex items-start gap-space-sm p-space-md rounded-xl bg-surface-container-low">
                <span className={`material-symbols-outlined ${color} text-headline-sm mt-0.5`}>check_circle</span>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-body-md text-on-surface font-semibold">{title}</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      case: 'CASE #05',
      tag: 'HEALTHCARE PLATFORM',
      tagColor: 'text-tertiary',
      title: 'HealthcareBase',
      desc: 'Full-stack healthcare platform building modules, REST APIs, admin dashboards, and third-party integrations for real-world clinical and operational workflows.',
      chips: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'Admin Dashboard', 'Integrations'],
    },
    {
      case: 'CASE #01',
      tag: 'ENTERPRISE BIOMETRICS',
      tagColor: 'text-secondary',
      title: 'Smart Attendance App',
      desc: 'An automated attendance tracking platform utilizing digital biometric facial recognition and geofenced verification.',
      chips: ['Laravel', 'MySQL', 'REST API', 'Geolocation'],
    },
    {
      case: 'CASE #02',
      tag: 'SAAS INSTITUTIONAL ERP',
      tagColor: 'text-primary',
      title: 'ERP System',
      desc: 'Comprehensive School Management ERP software managing students, staff schedules, fee billing workflows, and examination results.',
      chips: ['Laravel', 'PHP', 'MySQL', 'Chart.js'],
    },
    {
      case: 'CASE #03',
      tag: 'COMMUNITY PORTAL',
      tagColor: 'text-secondary',
      title: 'Alumni Management System',
      desc: 'Centralized alumni portal facilitating university graduate networking, donation drives, event schedules, and mentorship pairing with role-based access control.',
      chips: ['PHP', 'Laravel', 'MySQL', 'Blade', 'REST APIs'],
      actionVariant: 'details',
    },
    {
      case: 'CASE #04',
      tag: 'CULTURE & TOURISM',
      tagColor: 'text-primary',
      title: 'My Lucknow Project',
      desc: 'Interactive digital tourism and local heritage discovery platform showcasing attractions, historical landmarks, culinary landmarks, and culture with location mapping.',
      chips: ['JavaScript', 'HTML5', 'CSS3', 'Responsive UI'],
      actionVariant: 'details',
    },
  ];

  return (
    <section className="w-full relative py-space-2xl border-t border-white/[0.04]" id="projects">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <div className="flex items-center gap-space-xs">
              <span className="w-3 h-3 rounded-sm bg-primary-container inline-block" />
              <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">Featured Projects</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Recent Works &amp; Engineering Cases</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Production-grade systems demonstrating end-to-end full stack execution, secure database modeling, and polished user journeys.
            </p>
          </div>
          <a
            className="inline-flex items-center gap-space-xs text-secondary hover:text-[#acedff] font-headline-sm text-body-md transition-colors w-fit"
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View All on GitHub</span>
            <span className="material-symbols-outlined text-body-md">arrow_forward</span>
          </a>
        </div>

        <div className="rounded-2xl bg-surface-container p-space-lg lg:p-space-xl flex flex-col sm:flex-row sm:items-center gap-space-lg shadow-[0_8px_32px_rgba(0,0,0,0.35)] border border-secondary/20 bg-gradient-to-r from-primary-container/10 via-surface-container to-secondary-container/10">
          <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-secondary-container/20 text-secondary shrink-0">
            <span className="font-headline-lg text-headline-lg font-bold">15+</span>
          </div>
          <div className="flex flex-col gap-space-xs flex-1">
            <div className="flex items-center gap-space-xs flex-wrap">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Impact</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold">Production Deliveries.</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Personally delivered 15+ production-ready features and releases with Laravel, optimized queries, and
              stable deployments across healthcare and enterprise products.
            </p>
          </div>
          <div className="flex flex-wrap gap-space-xs sm:max-w-xs">
            {['Laravel', 'MySQL tuning', 'REST APIs', 'Live releases'].map((item) => (
              <span
                key={item}
                className="font-label-code text-label-code px-space-sm py-space-xs rounded-lg bg-surface-container-high text-secondary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-surface-container p-space-lg lg:p-space-xl flex flex-col justify-between gap-space-md shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className={`font-label-code text-label-code ${p.tagColor} uppercase font-semibold`}>{p.tag}</span>
                  <span className="font-label-code text-label-code text-on-surface-variant">{p.case}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">{p.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-space-xs pt-space-xs">
                  {p.chips.map((c) => (
                    <span key={c} className="font-label-code text-label-code px-space-sm py-space-xs rounded bg-surface-container-high text-primary">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <CardActions variant={p.actionVariant || 'project'} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CardActions({ variant = 'project' }) {
  const isDetails = variant === 'details';

  return (
    <div className="flex items-center gap-space-md pt-space-md">
      <a
        className={
          isDetails
            ? 'inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline-sm text-body-sm font-semibold transition-all'
            : 'inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-container font-headline-sm text-body-sm font-semibold shadow-[0_0_20px_rgba(160,120,255,0.3)] hover:scale-105 transition-all'
        }
        href="#contact"
      >
        <span>{isDetails ? 'View Details' : 'View Project'}</span>
        <span className="material-symbols-outlined text-body-sm">
          {isDetails ? 'visibility' : 'launch'}
        </span>
      </a>
      <a
        className={
          isDetails
            ? 'inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant font-body-sm text-body-sm transition-all'
            : 'inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-body-sm text-body-sm transition-all'
        }
        href={Bio.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="material-symbols-outlined text-secondary text-body-sm">code</span>
        <span>GitHub</span>
      </a>
    </div>
  );
}

function EducationSection({ items }) {
  const icons = ['school', 'science', 'menu_book'];
  const colors = ['text-primary', 'text-secondary', 'text-tertiary'];

  return (
    <section className="w-full relative py-space-2xl border-t border-white/[0.04]" id="education">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <div className="flex items-center gap-space-xs">
            <span className="w-3 h-3 rounded-sm bg-primary inline-block" />
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">Education</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Academic Background &amp; Foundations</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Formative technical grounding in computer science, algorithmic problem solving, and analytical mathematics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {items.map((item, i) => (
            <div
              key={item.id}
              className="rounded-2xl bg-surface-container p-space-lg flex flex-col justify-between gap-space-md shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
            >
              <div className="flex flex-col gap-space-sm">
                <div className={`w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center ${colors[i]}`}>
                  <span className="material-symbols-outlined text-headline-sm">{icons[i]}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold pt-space-xs">{item.degree}</h3>
              </div>
              <div className="flex items-center gap-space-xs font-label-code text-label-code text-on-surface-variant pt-space-sm">
                <span className="material-symbols-outlined text-body-sm text-secondary">calendar_today</span>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ formSent, onSubmit }) {
  return (
    <section className="w-full relative py-space-2xl border-t border-white/[0.04]" id="contact">
      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
        <div className="flex flex-col gap-space-xs max-w-2xl">
          <div className="flex items-center gap-space-xs">
            <span className="w-3 h-3 rounded-sm bg-secondary inline-block" />
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Get In Touch</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Let&apos;s Build Something Amazing Together</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Need a freelance developer for your next web app, API, or product build? Share scope, timeline, and budget — I&apos;ll reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-5 flex flex-col justify-between gap-space-lg">
            <div className="flex flex-col gap-space-md">
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                Open for <strong className="text-secondary font-semibold">freelance projects</strong>, fixed-scope contracts, hourly consulting, and full-time opportunities — remote-friendly from Lucknow (IST).
              </p>
              <ContactCard href={`mailto:${Bio.email}`} icon="mail" label="Email Address" value={Bio.email} color="text-primary" />
              <ContactCard
                href={Bio.whatsappLink}
                icon="chat"
                label="WhatsApp"
                value={`+91 ${Bio.whatsapp}`}
                color="text-[#25D366]"
              />
              <div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
                <div className="w-10 h-10 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-body-lg">location_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Location</span>
                  <span className="font-body-md text-body-md text-on-surface font-semibold">Lucknow, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#4cd7f6]" />
                <span className="font-label-code text-label-code text-secondary font-semibold">Response latency: &lt; 24 hours</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Available across standard Indian Standard Time (IST) with high flexibility for global asynchronous collaboration.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl bg-surface-container p-space-lg lg:p-space-xl flex flex-col gap-space-md shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <FormField id="contact-name" label="Your Name" type="text" placeholder="e.g. Alex Morgan" />
                <FormField id="contact-email" label="Your Email" type="email" placeholder="alex@company.com" />
              </div>
              <FormField id="contact-subject" label="Subject" type="text" placeholder="Freelance Project / MVP / Maintenance" />
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-code text-label-code text-on-surface-variant uppercase font-semibold" htmlFor="contact-message">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Describe your freelance project, features needed, deadline, and budget range..."
                  className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary shadow-inner resize-none"
                />
              </div>
              {formSent && (
                <div className="px-space-md py-space-sm rounded-lg bg-secondary-container/20 text-secondary font-label-code text-label-code flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-body-md">check_circle</span>
                  <span>Message dispatched successfully! Nikhil will respond shortly.</span>
                </div>
              )}
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-space-sm px-space-xl py-space-md rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-container font-headline-sm text-body-md font-semibold shadow-[0_0_24px_rgba(160,120,255,0.35)] hover:shadow-[0_0_36px_rgba(76,215,246,0.5)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <span>Send Message</span>
                <span className="material-symbols-outlined text-body-md">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ id, label, type, placeholder }) {
  return (
    <div className="flex flex-col gap-space-xs">
      <label className="font-label-code text-label-code text-on-surface-variant uppercase font-semibold" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
      />
    </div>
  );
}

function ContactCard({ href, icon, label, value, color }) {
  const external = href?.startsWith('http');
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
    >
      <div className={`w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center ${color}`}>
        <span className="material-symbols-outlined text-body-lg">{icon}</span>
      </div>
      <div className="flex flex-col">
        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">{label}</span>
        <span className="font-body-md text-body-md text-on-surface font-semibold">{value}</span>
      </div>
    </a>
  );
}