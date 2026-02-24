import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  {
    category: 'ESSAY',
    date: 'OCT 2024',
    title: 'The Quiet Resistance of Deep Reading',
    excerpt: 'In an era of fragmental attention, the act of long-form contemplation becomes a radical reclaiming of our cognitive sovereignty.',
    readTime: '12 MIN',
  },
  {
    category: 'KEYNOTE',
    date: 'SEP 2024',
    title: 'Architecture of the Hearth',
    excerpt: 'A reflection on the social fabric of cities and how we build spaces that truly hold our collective vulnerabilities.',
    readTime: '18 MIN',
  },
  {
    category: 'MANIFESTO',
    date: 'AUG 2024',
    title: 'Why We Founded The Hearthstone',
    excerpt: 'The mission was never just about charity. It was about dignity, narrative, and the slow work of trust.',
    readTime: '5 MIN',
  }
];

const EditorialFeed: React.FC = () => {
  return (
    <div className="space-y-32">
      {/* Featured Entry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 relative order-2 lg:order-1">
          <div className="aspect-[4/3] bg-stone-200 overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&q=80&w=1200" 
              alt="Featured writing" 
              className="w-full h-full object-cover filter grayscale"
            />
            <div className="absolute inset-0 bg-terracotta/5 mix-blend-multiply"></div>
          </div>
          <div className="absolute -bottom-8 -right-8 bg-paper-cream p-12 border border-gray-100 hidden md:block max-w-sm shadow-sm">
            <p className="text-[10px] uppercase tracking-[0.3em] text-terracotta mb-4 font-bold">Featured Essay</p>
            <h3 className="font-serif text-2xl italic leading-tight mb-4 text-charcoal">"Writing as an Act of Memory and Mercy"</h3>
            <p className="text-xs text-gray-500 font-journal leading-relaxed uppercase tracking-wider">The Journal of Humanities, Vol. 14</p>
          </div>
        </div>
        <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
          <h2 className="text-xs uppercase tracking-[0.4em] text-gray-400 font-bold">From the Desk</h2>
          <h3 className="font-serif text-5xl md:text-6xl text-charcoal leading-none">Archives of a <br/><span className="italic">Curious Mind.</span></h3>
          <p className="font-journal text-xl text-gray-600 leading-relaxed italic max-w-md">
            "We do not write to find ourselves, but to build the worlds we wish to inhabit."
          </p>
          <div className="h-[1px] w-24 bg-terracotta/30"></div>
          
          <div className="flex flex-wrap gap-8 pt-4">
            <Link to="/author" className="text-[10px] uppercase tracking-[0.3em] text-charcoal/60 hover:text-terracotta transition-colors duration-300 font-bold">Author</Link>
            <Link to="/founder" className="text-[10px] uppercase tracking-[0.3em] text-charcoal/60 hover:text-terracotta transition-colors duration-300 font-bold">Founder</Link>
            <Link to="/coach" className="text-[10px] uppercase tracking-[0.3em] text-charcoal/60 hover:text-terracotta transition-colors duration-300 font-bold">Coach</Link>
            <Link to="/speaker" className="text-[10px] uppercase tracking-[0.3em] text-charcoal/60 hover:text-terracotta transition-colors duration-300 font-bold">Speaker</Link>
          </div>
        </div>
      </div>

      {/* List Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-gray-100 border-y border-gray-100">
        {articles.map((article, idx) => (
          <div 
            key={idx} 
            className="lg:col-span-4 bg-paper-cream p-12 group hover:bg-white transition-all duration-500 flex flex-col h-full"
          >
            <div className="mb-12 flex justify-between items-start">
               <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-terracotta font-bold mb-1">{article.category}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">{article.date}</p>
              </div>
              <span className="text-[9px] uppercase tracking-widest text-gray-300 italic">{article.readTime}</span>
            </div>
            
            <h3 className="font-serif text-3xl text-charcoal leading-tight mb-6 group-hover:text-terracotta transition-colors">
              {article.title}
            </h3>
            
            <p className="text-gray-500 font-journal text-lg leading-relaxed mb-auto">
              {article.excerpt}
            </p>

            <div className="pt-12">
              <button className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold group/btn">
                <span>Read Article</span>
                <span className="w-8 h-[1px] bg-charcoal/20 group-hover/btn:w-12 group-hover/btn:bg-terracotta transition-all duration-500"></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorialFeed;
