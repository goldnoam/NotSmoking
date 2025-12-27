
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import DamagesGrid from './components/DamagesGrid';
import EconomicCalculator from './components/EconomicCalculator';
import ICAPromotion from './components/ICAPromotion';
import PeerPressure from './components/PeerPressure';
import ComparisonTable from './components/ComparisonTable';
import QuitResources from './components/QuitResources';
import { SMOKING_DAMAGES } from './constants';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-gray-100 flex items-center ${
          isScrolled 
            ? 'h-12 bg-white/60 backdrop-blur-xl shadow-md' 
            : 'h-20 bg-white/95 backdrop-blur-md shadow-sm'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className={`flex items-center gap-2 transition-transform duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
            <span className="text-2xl">🫁</span>
            <span className="text-xl font-black text-indigo-900">נשימה נקייה</span>
          </div>
          
          <div className="flex items-center gap-6">
            <nav className={`hidden md:flex gap-8 font-medium transition-all duration-300 ${isScrolled ? 'text-sm text-gray-800' : 'text-base text-gray-600'}`}>
              {/* Dropdown Menu for Health Impacts */}
              <div className="relative group">
                <button 
                  className="flex items-center gap-1 hover:text-indigo-600 transition-colors focus:outline-none py-2"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span>נזקי בריאות</span>
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className="absolute right-0 top-full w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right group-hover:translate-y-1">
                  <div className="p-2 space-y-1">
                    <a 
                      href="#damages" 
                      className="block px-4 py-3 text-sm font-bold text-indigo-900 border-b border-gray-50 hover:bg-indigo-50 rounded-xl transition-colors"
                    >
                      כל נזקי הבריאות
                    </a>
                    {SMOKING_DAMAGES.map((damage, index) => (
                      <a 
                        key={index}
                        href={`#damage-${index}`} 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-colors"
                      >
                        {damage.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a href="#comparison" className="hover:text-indigo-600 transition-colors py-2">השוואה</a>
              <a href="#calculator" className="hover:text-indigo-600 transition-colors py-2">מחשבון עלויות</a>
            </nav>

            <button 
              onClick={() => document.getElementById('quit-now')?.scrollIntoView({ behavior: 'smooth' })}
              className={`bg-indigo-600 text-white font-bold rounded-full transition-all hover:bg-indigo-700 hover:shadow-lg hover:scale-105 active:scale-95 ${
                isScrolled ? 'px-4 py-1.5 text-xs' : 'px-6 py-2.5 text-sm'
              }`}
            >
              להפסיק עכשיו
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Hero />
        
        <div id="damages">
          <DamagesGrid />
        </div>

        <ComparisonTable />

        <EconomicCalculator />
        
        <PeerPressure />

        <ICAPromotion />

        <QuitResources />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-8 border-b border-gray-800 pb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🫁</span>
                <span className="text-xl font-black">נשימה נקייה</span>
              </div>
              <p className="text-gray-400">פרויקט הסברה למניעת עישון וקידום אורח חיים בריא ללא מוצרי טבק וניקוטין.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">קישורים חשובים</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://www.cancer.org.il" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">האגודה למלחמה בסרטן</a></li>
                <li><a href="https://www.health.gov.il" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">משרד הבריאות</a></li>
                <li><a href="#" className="hover:text-white transition-colors">מרכזי גמילה</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">צרו קשר</h4>
              <p className="text-gray-400">מוקד התמיכה הארצי לגמילה: <span className="text-white font-bold">*6800</span></p>
              <p className="text-gray-400">זמינים 24/6 לכל שאלה.</p>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} נשימה נקייה - כל הזכויות שמורות. נבנה עבור קהילת המניעה והבריאות.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
