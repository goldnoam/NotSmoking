
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Clean Air Background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in-up">
          העתיד שלך נקי מעשן
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          גלו את האמת על סיגריות ואלקטרוניות, חסכו אלפי שקלים והצילו את הריאות שלכם. אנחנו כאן כדי לעזור לכם לנשום לרווחה.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl"
          >
            חשב כמה תחסוך
          </button>
          <button 
            onClick={() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all"
          >
            השוואת סוגי עישון
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
