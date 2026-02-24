
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  manifesto: string;
}

const Hero: React.FC<HeroProps> = ({ manifesto }) => {
  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row items-stretch pt-24 pb-12 overflow-hidden bg-[#FDFCF8]">
      {/* Background Graphic Element */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-[0.03]">
        <h1 className="text-[40rem] font-serif font-bold text-charcoal leading-none -ml-40 -mt-20">Princess</h1>
      </div>

      {/* Left Column: Typography & Mission */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-20 py-20 lg:py-0 z-20">
        <div className="space-y-16 max-w-3xl animate-reveal">
          <div className="relative">
            <h1 className="font-serif text-8xl md:text-[11rem] leading-[0.75] tracking-tighter text-charcoal">
              Princess <br />
              <span className="italic relative ml-6 md:ml-16 inline-block mt-4">
                Akinogun
                <span className="absolute -bottom-6 left-0 w-full h-[2px] bg-terracotta/40 hidden md:block"></span>
              </span>
            </h1>
          </div>
          
          <div className="relative pl-10 border-l-2 border-terracotta/40">
            <p className="font-journal text-3xl md:text-5xl leading-[1.2] italic text-gray-800 tracking-tight">
              &ldquo;{manifesto}&rdquo;
            </p>
          </div>

          <div className="pt-10 space-y-8">
            <a href="#pillars" className="group relative text-xs uppercase tracking-[0.6em] font-black flex items-center gap-10 text-charcoal/40 hover:text-charcoal transition-all">
              <span className="inline-block border-b-2 border-transparent group-hover:border-terracotta transition-all pb-3">The Archives</span>
              <div className="w-24 h-[1px] bg-charcoal/20 group-hover:w-40 group-hover:bg-terracotta transition-all duration-1000"></div>
            </a>
            
            <div className="flex flex-wrap gap-8">
              <Link to="/author" className="text-[10px] uppercase tracking-[0.3em] text-charcoal/60 hover:text-terracotta transition-colors duration-300 font-bold">Author</Link>
              <Link to="/founder" className="text-[10px] uppercase tracking-[0.3em] text-charcoal/60 hover:text-terracotta transition-colors duration-300 font-bold">Founder</Link>
              <Link to="/coach" className="text-[10px] uppercase tracking-[0.3em] text-charcoal/60 hover:text-terracotta transition-colors duration-300 font-bold">Coach</Link>
              <Link to="/speaker" className="text-[10px] uppercase tracking-[0.3em] text-charcoal/60 hover:text-terracotta transition-colors duration-300 font-bold">Speaker</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: High-Impact Visual */}
      <div className="flex-1 relative mt-16 lg:mt-0 px-6 lg:px-0">
        <div className="relative w-full h-[80vh] lg:h-full overflow-hidden shadow-[40px_40px_80px_rgba(0,0,0,0.1)] rounded-sm group">
          <img 
            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=90&w=1600&h=2000" 
            alt="Evelyn Thorne Portrait" 
            className="absolute inset-0 w-full h-full object-cover filter grayscale-[40%] contrast-110 brightness-95 group-hover:scale-110 transition-transform duration-[30000ms] ease-linear"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/20 via-transparent to-transparent pointer-events-none"></div>
          
          {/* Magazine Label Overlay */}
          <div className="absolute bottom-12 right-12 text-white/50 text-[10px] uppercase tracking-[0.5em] font-bold vertical-text hidden lg:block" style={{ writingMode: 'vertical-rl' }}>
            ESTABLISHED NINETEEN NINETY SEVEN
          </div>
        </div>
        
        {/* Floating Detail Card - High Contrast */}
        <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 hidden xl:flex flex-col items-start space-y-8 bg-white p-12 border border-stone-200 shadow-[20px_20px_40px_rgba(0,0,0,0.05)] max-w-[360px] z-30 animate-reveal" style={{ animationDelay: '0.4s' }}>
          <div className="w-12 h-[2px] bg-terracotta"></div>
          <p className="text-[10px] uppercase tracking-[0.5em] text-stone-400 font-black">Latest Monograph</p>
          <h4 className="font-serif italic text-3xl text-charcoal leading-tight">"The Cartography of Connection"</h4>
          <p className="text-sm text-stone-500 font-journal leading-relaxed">A meditation on the invisible architectures that bind us together in a fragmented world.</p>
          <button className="text-[10px] uppercase tracking-[0.4em] font-black border-b-2 border-stone-100 pb-2 hover:border-terracotta transition-all text-terracotta">Read the Prologue</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
