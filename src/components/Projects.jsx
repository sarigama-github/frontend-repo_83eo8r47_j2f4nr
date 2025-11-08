import React from 'react';

const items = [
  'UX for GCC eCommerce platform',
  'FinTech product interfaces (Invoice Discounting, Trading, Vendor dashboard)',
  'Meat products eCommerce usability',
  'HRMS and Payroll dashboards',
  'CMS and POS modules for efficiency improvements',
  'Branding, web interfaces, investment decks',
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-gradient-to-b from-gray-900 to-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold">Projects & Case Studies</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((it) => (
            <div key={it} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/85">{it}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
