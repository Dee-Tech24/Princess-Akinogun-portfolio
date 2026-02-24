import React from 'react';

const AuthorPage: React.FC = () => {
  return (
    <main className="min-h-[calc(100vh-200px)]">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col lg:flex-row items-stretch pt-24 pb-12 overflow-hidden bg-[#FDFCF8]">
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-20 py-20 lg:py-0 z-20">
          <div className="space-y-16 max-w-3xl animate-reveal">
            <div className="relative">
              <h1 className="font-serif text-8xl md:text-[10rem] leading-[0.75] tracking-tighter text-charcoal">
                The Voice <br />
                <span className="italic relative ml-6 md:ml-16 inline-block mt-4">
                  in the Pages
                  <span className="absolute -bottom-6 left-0 w-full h-[2px] bg-terracotta/40 hidden md:block"></span>
                </span>
              </h1>
            </div>
            
            <div className="relative pl-10 border-l-2 border-terracotta/40">
              <p className="font-journal text-3xl md:text-5xl leading-[1.2] italic text-gray-800 tracking-tight">
                &ldquo;Princess Akinogun writes to heal. Her literary work serves as a 'Wholeness Chamber' where readers are invited to confront their shadows and emerge as vessels fit for the Master's use.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 relative mt-16 lg:mt-0 px-6 lg:px-0">
          <div className="relative w-full h-[80vh] lg:h-full overflow-hidden shadow-[40px_40px_80px_rgba(0,0,0,0.1)] rounded-sm group">
            <img 
              src="https://images.unsplash.com/photo-1491841573634-28fb1d3fb4d5?auto=format&fit=crop&q=90&w=1600&h=2000" 
              alt="The Author" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale-[40%] contrast-110 brightness-95 group-hover:scale-110 transition-transform duration-[30000ms] ease-linear"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/20 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Book Section */}
      <section className="py-32 px-6 md:px-20 bg-stone-50/50">
        <div className="max-w-7xl mx-auto">
          <header className="mb-24 text-center">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-stone-400 mb-6 font-black">Featured Work</h2>
            <p className="font-serif text-5xl md:text-7xl italic text-charcoal max-w-4xl mx-auto leading-[1.1]">
              Becoming a Woman of Purpose
            </p>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Book Image/Placeholder */}
            <div className="lg:col-span-5">
              <div className="aspect-[3/4] bg-gradient-to-br from-stone-200 to-stone-300 rounded-sm shadow-lg flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <p className="text-stone-500 font-serif text-3xl italic">Becoming a Woman</p>
                  <p className="text-stone-500 font-serif text-3xl italic">of Purpose</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <p className="text-[10px] uppercase tracking-[0.5em] text-terracotta font-black">The Mission</p>
                <p className="font-journal text-xl text-stone-600 leading-relaxed">
                  This book was written to help you see beyond the pain you have faced. It is a manual for the young woman who has struggled with challenges and wondered why certain painful experiences exist in her story.
                </p>
              </div>

              <div className="space-y-8 pt-8 border-t border-stone-200">
                <p className="text-[10px] uppercase tracking-[0.5em] text-stone-400 font-black">The Framework</p>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-terracotta pl-6">
                    <h3 className="font-serif text-2xl text-charcoal mb-3">Part 1: The Wholeness Chamber</h3>
                    <p className="text-stone-600 leading-relaxed text-sm">
                      A deep dive into the process of submitting pain and allowing God to excavate every area of your existence.
                    </p>
                  </div>

                  <div className="border-l-4 border-terracotta pl-6">
                    <h3 className="font-serif text-2xl text-charcoal mb-3">Part 2: Triggers of Purpose</h3>
                    <p className="text-stone-600 leading-relaxed text-sm">
                      Identifying how specific challenges were designed to launch you into your calling.
                    </p>
                  </div>

                  <div className="border-l-4 border-terracotta pl-6">
                    <h3 className="font-serif text-2xl text-charcoal mb-3">Part 3: The Beauty of Mixology</h3>
                    <p className="text-stone-600 leading-relaxed text-sm">
                      How God blends your gifts, your history, and your scars into a unique, purposeful life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chronicles Gallery */}
      <section className="py-32 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <header className="mb-24 text-center">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-stone-400 mb-6 font-black">Chronicles of a Writer</h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="aspect-square bg-gradient-to-br from-stone-200 to-stone-300 rounded-sm shadow-sm hover:shadow-md transition-all group cursor-pointer">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-stone-500 text-center px-4 font-journal">
                    {idx === 1 && "Book Launch Events"}
                    {idx === 2 && "Signing Sessions"}
                    {idx === 3 && "Handwritten Excerpts"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AuthorPage;
