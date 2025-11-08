import React from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';

const roles = [
  {
    title: 'Lead UI/UX Designer',
    company: 'Gravity Engineering Services (Remote)',
    period: 'Feb 2024 – Present',
    bullets: [
      'Led UI/UX for e‑commerce and vendor CMS portals',
      'Orchestrated design systems and UX across full lifecycle',
      'Improved design consistency and conducted developer handoff',
    ],
  },
  {
    title: 'UX Webflow Consultant',
    company: 'The Kreatr, Bengaluru',
    period: 'Mar 2023 – Feb 2024',
    bullets: [
      'UX design and consulting for web projects',
      'Built prototypes, gathered feedback, improved usability',
    ],
  },
  {
    title: 'Senior User Experience Designer',
    company: 'Screenroot',
    period: 'Nov 2022 – Feb 2023',
    bullets: ['User research, prototyping, and usability testing'],
  },
  {
    title: 'UX Researcher',
    company: 'Anatta',
    period: 'Jun 2021 – Sep 2022',
    bullets: ['E‑commerce UX for GCC region, fin‑tech, usability studies'],
  },
  {
    title: 'Senior UX Designer',
    company: 'Modista Box, Bengaluru',
    period: 'Jan 2020 – May 2021',
    bullets: [],
  },
  {
    title: 'User Experience Designer‑III',
    company: 'KredX, Bengaluru',
    period: 'Dec 2018 – Mar 2020',
    bullets: [],
  },
  {
    title: 'Senior User Interface Designer',
    company: 'Licious, Bengaluru',
    period: 'Jun 2016 – Dec 2018',
    bullets: [],
  },
  {
    title: 'Web & Graphic Designer',
    company: 'Rasbor EDEM Total Recall Slyds',
    period: 'Sep 2013 – Apr 2016',
    bullets: [],
  },
];

const achievements = [
  'Increased conversion and reduced bounce through design improvements',
  'Developed user personas, journeys, and interactive prototypes',
  'Led usability testing (A/B, card sorting, heuristic reviews)',
  'Collaborated with cross‑functional teams in iterative cycles',
];

const projects = [
  'UX for GCC eCommerce platform',
  'FinTech product interfaces (Invoice Discounting, Trading, Vendor dashboard)',
  'Meat products eCommerce usability',
  'HRMS and Payroll dashboards',
  'CMS and POS modules for efficiency improvements',
  'Branding, web interfaces, investment decks',
];

const Experience = () => {
  return (
    <section id="experience" className="relative bg-gradient-to-b from-black to-gray-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3">
          <Briefcase className="text-emerald-300" />
          <h2 className="text-2xl font-semibold">Experience</h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            {roles.map((r) => (
              <article key={`${r.title}-${r.company}`} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-medium">{r.title}</h3>
                <p className="text-sm text-white/70">{r.company} · {r.period}</p>
                {r.bullets && r.bullets.length > 0 && (
                  <ul className="mt-3 list-inside space-y-1 text-sm text-white/75">
                    {r.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-0.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-medium">Key Achievements</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {achievements.map((a) => (
                  <li key={a} className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 text-emerald-300" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-medium">Projects & Case Studies</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/80">
                {projects.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
