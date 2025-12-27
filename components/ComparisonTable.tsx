
import React from 'react';

const ComparisonTable: React.FC = () => {
  const rows = [
    {
      label: 'השפעה בריאותית מיידית',
      traditional: 'שיעול, קוצר נשימה, ריח רע מהפה והבגדים.',
      electronic: 'גירוי בדרכי הנשימה, הצטברות נוזלים בריאות.',
      none: 'נשימה עמוקה ונקייה, כושר גופני מקסימלי, ריח רענן.',
      status: ['bad', 'bad', 'good']
    },
    {
      label: 'סיכונים לטווח ארוך',
      traditional: 'סרטן הריאה, מחלות לב, שבץ מוחי, פגיעה בפוריות.',
      electronic: 'מחלת EVALI, פגיעה בהתפתחות המוח, נזק לכלי דם.',
      none: 'סיכון מינימלי למחלות נשימתיות, אריכות ימים.',
      status: ['bad', 'bad', 'good']
    },
    {
      label: 'רמת התמכרות',
      traditional: 'גבוהה מאוד (ניקוטין בשאיפה עמוקה).',
      electronic: 'גבוהה מאוד (ריכוזי ניקוטין גבוהים במלחים).',
      none: 'חופש מוחלט מתלות בחומרים ממכרים.',
      status: ['bad', 'bad', 'good']
    },
    {
      label: 'עלות חודשית ממוצעת',
      traditional: '₪1,000 - ₪1,500 (לפי חפיסה ליום).',
      electronic: '₪400 - ₪800 (מחסניות ונוזלים).',
      none: '₪0 - הכסף נשאר אצלכם בכיס.',
      status: ['bad', 'medium', 'good']
    },
    {
      label: 'השפעה על הסביבה',
      traditional: 'עישון כפוי מסוכן לילדים ולסובבים.',
      electronic: 'פליטת רעלים ומתכות כבדות באדים.',
      none: 'אוויר נקי ובריא לכולם.',
      status: ['bad', 'medium', 'good']
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">טבלת השוואה: האמת במספרים ובעובדות</h2>
          <p className="text-xl text-gray-600">השוו בין האפשרויות וראו בעצמכם מהי הבחירה המשתלמת ביותר.</p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-2xl">
          <table className="w-full text-right border-collapse bg-white">
            <thead>
              <tr className="bg-indigo-900 text-white">
                <th className="p-6 text-xl font-bold">נושא ההשוואה</th>
                <th className="p-6 text-xl font-bold">סיגריות רגילות</th>
                <th className="p-6 text-xl font-bold">סיגריות אלקטרוניות</th>
                <th className="p-6 text-xl font-bold">ללא עישון כלל</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-bold text-gray-800 bg-indigo-50/30">{row.label}</td>
                  <td className={`p-6 ${row.status[0] === 'bad' ? 'text-red-600 font-medium' : ''}`}>
                    {row.traditional}
                  </td>
                  <td className={`p-6 ${row.status[1] === 'bad' ? 'text-red-600 font-medium' : row.status[1] === 'medium' ? 'text-orange-600 font-medium' : ''}`}>
                    {row.electronic}
                  </td>
                  <td className="p-6 text-green-600 font-bold bg-green-50/30">
                    {row.none}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-100 border border-red-200 rounded"></div>
            <span className="text-sm text-gray-600">סיכון גבוה</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-100 border border-orange-200 rounded"></div>
            <span className="text-sm text-gray-600">סיכון בינוני</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-100 border border-green-200 rounded"></div>
            <span className="text-sm text-gray-600">בריאות מיטבית</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
