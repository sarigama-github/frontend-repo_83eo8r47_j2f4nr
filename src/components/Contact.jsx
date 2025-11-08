import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8">
          <h2 className="text-2xl font-semibold">Let’s collaborate</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Open to full-time and consulting opportunities. If you have a challenge worth solving, I’d love to chat.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="mailto:gurupriyan@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-white/90"
            >
              <Mail size={16} /> Email Me
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200"
            >
              View portfolio
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
