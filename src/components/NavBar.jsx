import React from 'react';
import { Rocket } from 'lucide-react';

const NavBar = () => {
  return (
    <header className="fixed top-0 z-40 w-full bg-gradient-to-b from-black/60 to-transparent backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
        <a href="#" className="flex items-center gap-2">
          <Rocket className="text-emerald-300" size={20} />
          <span className="font-semibold">Gurupriyan</span>
        </a>
        <nav className="hidden gap-6 text-sm text-white/80 md:flex">
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
