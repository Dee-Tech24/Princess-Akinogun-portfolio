import React from 'react';

const SpeakerPage: React.FC = () => {
  const speakingTopics = [
    {
      title: "Triggers of Destiny",
      description: "How to use your greatest challenges as the fuel for your future."
    },
    {
      title: "Identity vs. Location",
      description: "Why who you are in God matters more than the physical or social location you are coming from."
    },
    {
      title: "Living the Life of Wholeness",
      description: "Practical spiritual steps to maintaining a life of 'Living Full.'"
    }
  ];

  return (
    <main className="min-h-[calc(100vh-200px)]">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col lg:flex-row items-stretch pt-24 pb-12 overflow-hidden bg-[#FDFCF8]">
        <div className="flex-1 flex flex-col justify-center px-6 md:px-20 py-20 lg:py-0 z-20">
          <div className="space-y-16 max-w-3xl animate-reveal">
            <div className="relative">
              <h1 className="font-serif text-8xl md:text-[10rem] leading-[0.75] tracking-tighter text-charcoal">
                The Voice <br />
                <span className="italic relative ml-6 md:ml-16 inline-block mt-4">
                  of Purpose
                  <span className="absolute -bottom-6 left-0 w-full h-[2px] bg-terracotta/40 hidden md:block"></span>
                </span>
              </h1>
            </div>
            
            <div className="relative pl-10 border-l-2 border-terracotta/40">
              <p className="font-journal text-3xl md:text-5xl leading-[1.2] italic text-gray-800 tracking-tight">
                &ldquo;Princess is a sought-after speaker for conferences and spiritual gatherings. Her messages focus on the intersection of personal healing and divine destiny, delivered with a grace that permeates the hardest of hearts.&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 relative mt-16 lg:mt-0 px-6 lg:px-0">
          <div className="relative w-full h-[80vh] lg:h-full overflow-hidden shadow-[40px_40px_80px_rgba(0,0,0,0.1)] rounded-sm group">
            <img 
              src="https://images.unsplash.com/photo-1475721027785-f74dea327912?auto=format&fit=crop&q=90&w=1600&h=2000" 
              alt="Speaker" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale-[40%] contrast-110 brightness-95 group-hover:scale-110 transition-transform duration-[30000ms] ease-linear"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/20 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Speaking Topics */}
      <section className="py-32 px-6 md:px-20 bg-stone-50/50">
        <div className="max-w-7xl mx-auto">
          <header className="mb-24 text-center">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-stone-400 mb-6 font-black">Key Speaking Topics</h2>
          </header>
          
          <div className="space-y-8">
            {speakingTopics.map((topic, idx) => (
              <div key={idx} className="bg-white p-8 md:p-12 border border-stone-100 shadow-sm hover:shadow-md transition-all group">
                <h3 className="font-serif text-3xl text-charcoal mb-4 group-hover:text-terracotta transition-colors">
                  {topic.title}
                </h3>
                <p className="font-journal text-lg text-stone-600 leading-relaxed">
                  {topic.description}
                </p>
                <div className="w-8 h-[2px] bg-terracotta mt-6 group-hover:w-12 transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On the Stage Gallery */}
      <section className="py-32 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <header className="mb-24 text-center">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-stone-400 mb-6 font-black">On the Stage</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Keynote Photos",
              "Stage-Wide Shots",
              "Post-Speaking Interactions"
            ].map((item, idx) => (
              <div key={idx} className="aspect-square bg-gradient-to-br from-stone-200 to-stone-300 rounded-sm shadow-sm hover:shadow-md transition-all group cursor-pointer flex items-center justify-center">
                <p className="text-stone-500 text-center px-4 font-journal text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SpeakerPage;
