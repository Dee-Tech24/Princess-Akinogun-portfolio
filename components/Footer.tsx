
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-paper-cream border-t border-stone-100 py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-24">
          <div className="md:col-span-1 space-y-12">
            <h2 className="font-serif text-5xl leading-[0.85] tracking-tighter">
              PA<span className="text-terracotta">.</span>
            </h2>
            <div className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold">Navigation</p>
              <ul className="space-y-3">
                <li><Link to="/author" className="text-xs uppercase tracking-widest font-black hover:text-terracotta transition-colors">Author</Link></li>
                <li><Link to="/founder" className="text-xs uppercase tracking-widest font-black hover:text-terracotta transition-colors">Founder</Link></li>
                <li><Link to="/coach" className="text-xs uppercase tracking-widest font-black hover:text-terracotta transition-colors">Coach</Link></li>
                <li><Link to="/speaker" className="text-xs uppercase tracking-widest font-black hover:text-terracotta transition-colors">Speaker</Link></li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-1 space-y-12">
            <div className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold">Correspondence</p>
              <p className="font-journal text-xl leading-relaxed text-stone-600">
                For enquiries or collaborations, please reach out via <a href="mailto:princessakinogun@gmail.com" className="text-terracotta underline">princessakinogun@gmail.com</a>
              </p>
              <p className="font-journal text-lg leading-relaxed text-stone-600">
                WhatsApp / Phone: <a href="https://wa.me/2349067750825" className="text-terracotta underline">+234 906 775 0825</a>
              </p>
              <p className="font-journal text-lg leading-relaxed text-stone-600">Location: Lagos, Nigeria</p>
            </div>
            <div className="flex space-x-8">
              <a href="https://instagram.com/princessakinogun" target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-[0.2em] font-black border-b border-stone-200 pb-1">@princessakinogun</a>
              <a href="#" className="text-[10px] uppercase tracking-[0.2em] font-black border-b border-stone-200 pb-1">LinkedIn</a>
            </div>
          </div>

          <div className="md:col-span-1 bg-white p-10 border border-stone-100 shadow-sm">
            <p className="text-[10px] uppercase tracking-[0.4em] text-terracotta font-black mb-6">Colophon</p>
            <p className="font-journal text-sm leading-relaxed text-stone-500 italic mb-8">
              Designed in collaboration with the spirit of quiet inquiry. Typography set in Playfair Display and Inter. Printed digitally on felt paper.
            </p>
            <div className="pt-4 border-t border-stone-50">
               <p className="text-[9px] uppercase tracking-widest text-stone-400 font-bold">&copy; 2024 Evelyn Thorne Studios</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
