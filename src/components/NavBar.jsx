import React from 'react';
import { User, Rocket } from 'lucide-react';

const NavBar = () => {
  return (
    <header className="fixed top-0 z-40 w-full bg-gradient-to-b from-black/60 to-transparent backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
        <a href="#" className="flex items-center gap-2">
          <Rocket className="text-emerald-300" size={20} />
          <span className="font-semibold">Gurupriyan</span>
        </a>
        <nav className="hidden gap-6 text-sm text-white/80 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
        >
          <User size={16} /> Hire Me
        </a>
      </div>
    </header>
  );
};

export default NavBar;
