import React from 'react';

const FounderPage: React.FC = () => {
  const missionPillars = [
    {
      title: "The Voice of Grace",
      description: "Creating resources and edifying materials for young women to remind them that their source is God, not their background."
    },
    {
      title: "Empowerment through Identity",
      description: "Hosting outreach programs that help women identify their God-given roles and maintain the drive needed for their spiritual journey."
    },
    {
      title: "Community Restoration",
      description: "Bridging the gap between brokenness and service by providing a community of support."
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
                Impact <br />
                <span className="italic relative ml-6 md:ml-16 inline-block mt-4">
                  Beyond the Self
                  <span className="absolute -bottom-6 left-0 w-full h-[2px] bg-terracotta/40 hidden md:block"></span>
                </span>
              </h1>
            </div>
            
            <div className="relative pl-10 border-l-2 border-terracotta/40">
              <p className="font-journal text-3xl md:text-5xl leading-[1.2] italic text-gray-800 tracking-tight">
                &ldquo;Princess Akinogun believes that true wholeness results in service. Her non-profit initiatives focus on spiritual edification and providing a voice for those who have been silenced by abuse, poverty, or depression.&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 relative mt-16 lg:mt-0 px-6 lg:px-0">
          <div className="relative w-full h-[80vh] lg:h-full overflow-hidden shadow-[40px_40px_80px_rgba(0,0,0,0.1)] rounded-sm group">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=90&w=1600&h=2000" 
              alt="Community Impact" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale-[40%] contrast-110 brightness-95 group-hover:scale-110 transition-transform duration-[30000ms] ease-linear"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/20 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Mission Pillars */}
      <section className="py-32 px-6 md:px-20 bg-stone-50/50">
        <div className="max-w-7xl mx-auto">
          <header className="mb-24 text-center">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-stone-400 mb-6 font-black">The Mission Pillars</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {missionPillars.map((pillar, idx) => (
              <div key={idx} className="space-y-6 group">
                <div className="h-1 w-12 bg-terracotta group-hover:w-16 transition-all"></div>
                <h3 className="font-serif text-3xl text-charcoal leading-[0.9]">
                  {pillar.title}
                </h3>
                <p className="font-journal text-lg text-stone-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Gallery */}
      <section className="py-32 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <header className="mb-24 text-center">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-stone-400 mb-6 font-black">Moments of Impact</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Community Outreach",
              "Distribution of Edifying Materials",
              "Team Photos"
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

export default FounderPage;
