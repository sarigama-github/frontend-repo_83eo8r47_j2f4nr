import React from 'react';

const projects = [
  {
    title: 'Fin-Tech Onboarding Optimization',
    desc: 'Reduced drop‑off by 28% through research-led redesign of KYC and onboarding flows.',
    tags: ['Research', 'UX Strategy', 'Design System'],
  },
  {
    title: 'Fashion Mobile App Revamp',
    desc: 'Increased conversion by 18% with improved navigation, PDP clarity, and size guidance.',
    tags: ['IA', 'Interaction', 'UI'],
  },
  {
    title: 'Sustainable E‑commerce',
    desc: 'Built a transparent checkout experience with carbon insights to drive conscious purchases.',
    tags: ['UX Writing', 'Data Viz', 'Testing'],
  },
];

const FeaturedWork = () => {
  return (
    <section id="work" className="relative bg-gradient-to-b from-gray-900 to-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-white/90">Featured Work</h2>
          <a href="#contact" className="text-sm text-emerald-300 hover:text-emerald-200">Get case study →</a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
