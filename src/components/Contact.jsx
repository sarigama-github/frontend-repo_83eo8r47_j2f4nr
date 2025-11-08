import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 max-w-2xl text-white/70">Open to roles and collaborations. Reach out via email or connect on LinkedIn.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <a
            href="tel:+918147774970"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10"
          >
            <Phone />
            <div>
              <div className="text-sm text-white/70">Mobile</div>
              <div className="font-medium">+91 8147774970</div>
            </div>
          </a>

          <a
            href="mailto:gpak1991@gmail.com"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10"
          >
            <Mail />
            <div>
              <div className="text-sm text-white/70">Email</div>
              <div className="font-medium">gpak1991@gmail.com</div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/gurupriyan-ankarath-0b56b487"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10"
          >
            <Linkedin />
            <div>
              <div className="text-sm text-white/70">LinkedIn</div>
              <div className="font-medium">/in/gurupriyan-ankarath-0b56b487</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
