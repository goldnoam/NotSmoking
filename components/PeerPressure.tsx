
import React from 'react';
import { PEER_PRESSURE_STRATEGIES } from '../constants';

const PeerPressure: React.FC = () => {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">איך אומרים "לא" (ונשארים מגניבים)?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">לחץ חברתי הוא הגורם מספר 1 להתחלת עישון. הנה איך מתמודדים איתו בצורה בוגרת וחכמה.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PEER_PRESSURE_STRATEGIES.map((strategy, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border-b-4 border-indigo-500 shadow-sm flex flex-col">
              <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-6">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{strategy.title}</h3>
              <p className="text-gray-600 flex-grow leading-relaxed">{strategy.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center italic text-gray-500">
          "זכרו: כריזמה אמיתית מגיעה מביטחון עצמי בערכים שלכם, לא מלעשות מה שכולם עושים."
        </div>
      </div>
    </section>
  );
};

export default PeerPressure;
