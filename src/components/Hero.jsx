import React from 'react';
import Spline from '@splinetool/react-spline';
import { MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to improve contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
          <MapPin size={14} className="text-emerald-300" />
          <span className="text-white/90">Bengaluru, India</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
          <span className="block text-white">Gurupriyan A K</span>
          <span className="mt-2 block bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
            UX Designer | Researcher
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
          Seasoned UX/UI Designer and Researcher with 11+ years in Fin-Tech, Fashion, Food & Beverage, Retail, and Sustainable E-commerce. Specializes in building user-friendly, impactful designs driven by extensive research and data insights. Passionate about solving complex problems to boost usability and conversion.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-white/90"
          >
            View Experience
            <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
