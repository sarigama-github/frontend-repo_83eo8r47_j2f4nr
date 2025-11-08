import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedWork from './components/FeaturedWork';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter">
      <NavBar />
      <main className="w-full">
        <Hero />
        <About />
        <FeaturedWork />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black py-8 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Gurupriyan A K — Designed with research and care.
      </footer>
    </div>
  );
}

export default App;
