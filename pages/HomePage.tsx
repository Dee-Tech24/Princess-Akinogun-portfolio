import React, { useState } from 'react';
import Hero from '../components/Hero';
import Quartet from '../components/Quartet';
import EditorialFeed from '../components/EditorialFeed';
import Speaking from '../components/Speaking';

const HomePage: React.FC = () => {
  const [manifesto] = useState<string>("Helping you turn life's misfortunes into divine triggers for destiny.");

  return (
    <main className="space-y-32">
      <section id="hero">
        <Hero manifesto={manifesto} />
      </section>

      <section id="pillars" className="py-32 px-6 md:px-20 bg-stone-50/50">
        <div className="max-w-7xl mx-auto">
          <header className="mb-24 text-center animate-reveal">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-stone-400 mb-6 font-black">The Core Quartet</h2>
            <p className="font-serif text-5xl md:text-7xl italic text-charcoal max-w-4xl mx-auto leading-[1.1]">
              Four disciplines. One mission.
            </p>
          </header>
          <Quartet />
        </div>
      </section>

      <section id="desk" className="py-32 px-6 md:px-20 border-t border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <EditorialFeed />
        </div>
      </section>

      <section id="booking" className="py-40 bg-charcoal text-paper-cream overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt-paper.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
          <Speaking />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
