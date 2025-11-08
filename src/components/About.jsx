import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900/20" />
      <div className="relative mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-semibold text-white/90">About</h2>
        <p className="mt-4 max-w-3xl text-white/80 leading-relaxed">
          I craft intuitive, research-driven experiences that balance business goals and user needs. With 11+ years across Fin-Tech, Fashion, F&B, Retail, and Sustainable E‑commerce, my approach blends qualitative and quantitative insights to drive better usability, accessibility, and conversion.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-medium text-white">User Research</p>
            <p className="mt-2 text-sm text-white/70">Interviews, usability testing, JTBD, survey design, heuristic evaluation.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-medium text-white">Product Design</p>
            <p className="mt-2 text-sm text-white/70">Information architecture, wireframes, interaction design, design systems.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-medium text-white">Impact</p>
            <p className="mt-2 text-sm text-white/70">Focused on measurable outcomes: engagement, retention, and conversion uplift.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
