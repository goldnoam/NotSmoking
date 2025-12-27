
import React from 'react';
import { SMOKING_DAMAGES } from '../constants';

const DamagesGrid: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">נזקי העישון: האמת המרה</h2>
          <p className="text-xl text-gray-600">בין אם זה סיגריה רגילה, טבק לגלגול או וייפ - הגוף שלך משלם את המחיר. הנזקים הם לא רק לטווח הרחוק, הם קורים ברגע זה.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SMOKING_DAMAGES.map((damage, index) => (
            <div 
              key={index} 
              id={`damage-${index}`} 
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group scroll-mt-24"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {damage.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{damage.title}</h3>
              <p className="text-gray-600 leading-relaxed">{damage.description}</p>
            </div>
          ))}
        </div>

        {/* New Detailed Lung Damage Section */}
        <div id="detailed-lung-damage" className="mt-12 bg-indigo-50 rounded-[2.5rem] p-10 shadow-inner border border-indigo-100 scroll-mt-24">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/4 flex justify-center">
              <div className="w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center text-8xl">
                🌬️
              </div>
            </div>
            <div className="lg:w-3/4">
              <h3 className="text-3xl font-bold text-indigo-900 mb-6">מחלות ריאה כרוניות: אמפיזמה וברונכיטיס</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/50 p-6 rounded-2xl border border-indigo-200">
                  <h4 className="text-xl font-black text-indigo-700 mb-3">אמפיזמה (נפחת הריאות)</h4>
                  <p className="text-gray-700 leading-relaxed">
                    מצב שבו נאדיות הריאה (שקיקי האוויר הקטנים) נהרסות בהדרגה. העישון פוגע בדפנות הנאדיות, מה שמקטין את שטח הפנים של הריאה ומקשה על החמצן להגיע לדם. התוצאה היא תחושת "רעב לאוויר" גם במאמץ קל.
                  </p>
                </div>
                <div className="bg-white/50 p-6 rounded-2xl border border-indigo-200">
                  <h4 className="text-xl font-black text-indigo-700 mb-3">ברונכיטיס כרונית</h4>
                  <p className="text-gray-700 leading-relaxed">
                    דלקת קבועה בדרכי הנשימה (הסימפונות). העישון גורם לייצור מוגבר של ריר צמיגי ולפגיעה בשערות הקטנות (סיליה) שתפקידן לנקות את הריאות. זה מוביל לשיעול כרוני קשה, ליחה מרובה וזיהומים חוזרים.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-indigo-800 font-bold italic">
                * מחלות אלו מהוות יחד את מחלת ה-COPD (מחלת ריאות חסימתית כרונית), והעישון הוא הגורם הישיר ליותר מ-80% מהמקרים.
              </p>
            </div>
          </div>
        </div>

        <div id="damage-vaping" className="mt-12 bg-red-50 border-r-4 border-red-500 p-8 rounded-l-3xl scroll-mt-24">
          <h3 className="text-2xl font-bold text-red-700 mb-2">סיגריות אלקטרוניות (Vaping)</h3>
          <p className="text-lg text-red-900 leading-relaxed">
            אל תטעו - "וייפינג" הוא לא תחליף בטוח. הוא מכיל מתכות כבדות, ניקוטין בריכוזים מסוכנים וחומרי טעם שגורמים למחלות ריאות חשוכות מרפא. זהו כלי שיווקי שמטרתו למכר דור חדש של צעירים.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DamagesGrid;
