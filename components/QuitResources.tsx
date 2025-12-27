
import React from 'react';

const QuitResources: React.FC = () => {
  const resources = [
    {
      title: 'מוקד הגמילה הלאומי',
      description: 'ייעוץ אישי חינם על ידי מומחים של משרד הבריאות.',
      contact: '*6800',
      action: 'התקשרו עכשיו',
      link: 'tel:*6800',
      icon: '📞'
    },
    {
      title: 'קבוצות תמיכה - קופות החולים',
      description: 'סדנאות קבוצתיות וליווי תרופתי מסובסד דרך הקופה שלכם.',
      contact: 'פנו למרפאה שלכם',
      action: 'למידע נוסף',
      link: 'https://www.health.gov.il/Subjects/Behavior_and_Health/smoking/Pages/default.aspx',
      icon: '👥'
    },
    {
      title: 'אפליקציות גמילה',
      description: 'כלים דיגיטליים למעקב אחרי התקדמות וחיסכון בזמן אמת.',
      contact: 'זמין בחנויות האפליקציות',
      action: 'חפשו "Stop Smoking"',
      link: '#',
      icon: '📱'
    }
  ];

  return (
    <section id="quit-now" className="py-24 bg-gradient-to-b from-indigo-900 to-blue-950 text-white scroll-mt-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">מוכנים לצאת לדרך חדשה?</h2>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto">הצעד הראשון הוא הקשה ביותר, אבל אתם לא חייבים לעשות אותו לבד. הנה המשאבים שיעזרו לכם להצליח.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((res, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-all group">
              <div className="text-5xl mb-6">{res.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{res.title}</h3>
              <p className="text-indigo-100 mb-6 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                {res.description}
              </p>
              <div className="mt-auto">
                <div className="text-sm font-bold text-indigo-300 mb-4">{res.contact}</div>
                <a 
                  href={res.link}
                  target={res.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-white text-indigo-900 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors"
                >
                  {res.action}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-white text-gray-900 rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-2/3">
            <h3 className="text-3xl font-black mb-4">טיפ מהיר לרגע של דחף:</h3>
            <p className="text-lg leading-relaxed text-gray-600">
              כשהרצון לעשן עולה, נסו את שיטת ה-4D:
              <br />
              <strong>Delay</strong> (השהו את ההחלטה ב-5 דקות), 
              <strong>Deep breath</strong> (נשמו עמוק), 
              <strong>Drink water</strong> (שתו מים), 
              <strong>Do something else</strong> (הסיחו את דעתכם).
            </p>
          </div>
          <div className="md:w-1/3 text-center">
            <div className="text-6xl font-black text-indigo-600 mb-2">100%</div>
            <div className="text-gray-500 font-bold uppercase tracking-wider">סיכוי להצלחה עם תמיכה נכונה</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuitResources;
