
import React from 'react';

const ICAPromotion: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img 
            src="https://picsum.photos/800/600?nature" 
            alt="ICA Activity" 
            className="rounded-3xl shadow-2xl"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">פעילות האגודה למלחמה בסרטן</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            האגודה למלחמה בסרטן פועלת עשרות שנים להורדת שיעורי התחלואה והתמותה מסרטן בישראל. 
            הפעילות כוללת הסברה בבתי ספר, מימון מחקרים פורצי דרך, הפעלת קווי תמיכה למחלימים ושיפור זכויות החולים מול הממשלה.
          </p>
          <ul className="space-y-4 mb-8 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="text-indigo-600 text-2xl">✓</span>
              <span>קמפיינים ארציים למניעת עישון בקרב בני נוער.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-indigo-600 text-2xl">✓</span>
              <span>ייעוץ מקצועי להפסקת עישון - "טלמידע".</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-indigo-600 text-2xl">✓</span>
              <span>פעילות חקיקה להגבלת פרסום מוצרי טבק.</span>
            </li>
          </ul>
          <a 
            href="https://www.cancer.org.il" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-lg"
          >
            לאתר האגודה הרשמי
          </a>
        </div>
      </div>
    </section>
  );
};

export default ICAPromotion;
