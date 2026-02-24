
import React from 'react';
import { Link } from 'react-router-dom';

const Speaking: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      <div className="lg:col-span-5 space-y-12">
        <header className="space-y-6">
          <h2 className="text-terracotta text-[10px] uppercase tracking-[0.5em] font-black">Presence & Discourse</h2>
          <h3 className="font-serif text-5xl md:text-7xl leading-[0.9] text-white">
            Booking & <br />
            <span className="italic">Speaking.</span>
          </h3>
        </header>
        
        <p className="font-journal text-2xl text-stone-400 leading-relaxed italic max-w-md">
          "The conversation is where the work truly begins. I invite you to join me in exploring the spaces between our stories."
        </p>

        <div className="flex flex-wrap gap-8 pt-8">
          <Link to="/author" className="text-[10px] uppercase tracking-[0.3em] text-stone-300 hover:text-terracotta transition-colors duration-300 font-bold">Author</Link>
          <Link to="/founder" className="text-[10px] uppercase tracking-[0.3em] text-stone-300 hover:text-terracotta transition-colors duration-300 font-bold">Founder</Link>
          <Link to="/coach" className="text-[10px] uppercase tracking-[0.3em] text-stone-300 hover:text-terracotta transition-colors duration-300 font-bold">Coach</Link>
          <Link to="/speaker" className="text-[10px] uppercase tracking-[0.3em] text-stone-300 hover:text-terracotta transition-colors duration-300 font-bold">Speaker</Link>
        </div>

        <div className="space-y-8 pt-6">
          <div className="group border-b border-white/10 pb-6 hover:border-terracotta transition-colors duration-500">
            <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-2">Keynote Engagements</p>
            <p className="text-stone-300 font-medium">Global conferences on leadership, ethics, and narrative therapy.</p>
          </div>
          <div className="group border-b border-white/10 pb-6 hover:border-terracotta transition-colors duration-500">
            <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-2">Workshop Facilitation</p>
            <p className="text-stone-300 font-medium">Bespoke sessions for executive boards and creative collectives.</p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 relative">
        <div className="bg-white/5 p-1 px-1 lg:p-12 lg:px-16 border border-white/10 relative z-10">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-stone-500 font-bold">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none focus:border-terracotta transition-colors font-journal text-lg"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-stone-500 font-bold">Organization</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none focus:border-terracotta transition-colors font-journal text-lg"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-stone-500 font-bold">Subject of Inquiry</label>
              <select className="w-full bg-transparent border-b border-white/20 py-2 text-stone-400 outline-none focus:border-terracotta transition-colors font-journal text-lg">
                <option className="bg-charcoal">Speaking Engagement</option>
                <option className="bg-charcoal">Executive Coaching</option>
                <option className="bg-charcoal">The Hearthstone Project</option>
                <option className="bg-charcoal">Media / Interview</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[9px] uppercase tracking-widest text-stone-500 font-bold">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none focus:border-terracotta transition-colors font-journal text-lg resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2 pt-6">
              <button className="w-full py-5 bg-terracotta text-white text-[10px] uppercase tracking-[0.4em] font-black hover:bg-white hover:text-charcoal transition-all duration-700">
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
        
        {/* Decorative background accent */}
        <div className="absolute top-24 -right-12 w-64 h-96 border border-terracotta/20 -z-0 hidden xl:block"></div>
      </div>
    </div>
  );
};

export default Speaking;
