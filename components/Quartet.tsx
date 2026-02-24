
import React from 'react';
import { Feather, Users, Sparkles, Mic2 } from 'lucide-react';

interface Pillar {
  id: string;
  title: string;
  role: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  colSpan: string;
  aspect: string;
  marginTop?: string;
}

const pillars: Pillar[] = [
  {
    id: 'Author',
    title: 'The Written Word',
    role: 'Author',
    description: 'Bridging the gap between the internal landscape and the public narrative through essays, memoirs, and cultural criticism.',
    icon: <Feather size={16} />,
    image: 'https://images.unsplash.com/photo-1491843384429-171f1f20790a?auto=format&fit=crop&q=80&w=800',
    colSpan: 'md:col-span-7',
    aspect: 'aspect-[16/10]',
  },
  {
    id: 'founder',
    title: 'Kinship & Action',
    role: 'Founder',
    description: 'Leading The Hearthstone Project: Bridging policy and presence through narrative therapy and urban resilience.',
    icon: <Users size={16} />,
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800',
    colSpan: 'md:col-span-5',
    aspect: 'aspect-[4/5]',
    marginTop: 'md:mt-32'
  },
  {
    id: 'Coach',
    title: 'Soul Architecture',
    role: 'Coach',
    description: 'High-level strategic mentorship for visionary leaders ready to trade traditional success for resonant significance.',
    icon: <Sparkles size={16} />,
    image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&q=80&w=800',
    colSpan: 'md:col-span-5',
    aspect: 'aspect-[3/4]',
    marginTop: 'md:-mt-24'
  },
  {
    id: 'Speaker',
    title: 'Public Discourse',
    role: 'Speaker',
    description: 'Transformative keynotes exploring the intersection of institutional leadership, vulnerability, and collective future.',
    icon: <Mic2 size={16} />,
    image: 'https://images.unsplash.com/photo-1475721027785-f74dea327912?auto=format&fit=crop&q=80&w=800',
    colSpan: 'md:col-span-7',
    aspect: 'aspect-[16/8]',
  }
];

const Quartet: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-32 items-start pb-20">
      {pillars.map((pillar) => (
        <div 
          key={pillar.id}
          id={pillar.id}
          className={`${pillar.colSpan} ${pillar.marginTop || ''} group relative`}
        >
          <div className={`${pillar.aspect} relative overflow-hidden bg-stone-50 mb-10 border border-stone-100 shadow-sm transition-all duration-1000 group-hover:shadow-3xl`}>
            <img 
              src={pillar.image} 
              alt={pillar.title} 
              className="absolute inset-0 w-full h-full object-cover filter grayscale-[70%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors duration-700"></div>
          </div>

          <div className="space-y-6 max-w-lg px-2">
            <div className="flex items-center gap-4">
              <span className="p-2 border border-stone-200 text-terracotta/60 group-hover:text-terracotta transition-colors duration-500">{pillar.icon}</span>
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-stone-300 group-hover:text-stone-400 transition-colors">
                {pillar.role}
              </span>
            </div>

            <h3 className="font-serif text-4xl lg:text-5xl text-charcoal leading-[0.9] group-hover:italic group-hover:translate-x-3 transition-all duration-700 ease-out">
              {pillar.title}
            </h3>
            
            <p className="font-journal text-xl text-stone-500 leading-relaxed max-w-sm group-hover:text-stone-700 transition-colors">
              {pillar.description}
            </p>

            <div className="pt-6">
              <button className="text-[9px] uppercase tracking-[0.4em] font-black pb-2 border-b border-stone-200 hover:border-terracotta hover:text-terracotta transition-all inline-flex items-center gap-4">
                View Portfolio
                <span className="w-0 group-hover:w-8 h-[1px] bg-terracotta transition-all duration-500"></span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Quartet;
