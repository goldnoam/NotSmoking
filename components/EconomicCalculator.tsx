
import React, { useState, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const EconomicCalculator: React.FC = () => {
  const [packsPerWeek, setPacksPerWeek] = useState<number>(7);
  const [pricePerPack, setPricePerPack] = useState<number>(35);

  const data = useMemo(() => {
    const years = [1, 5, 10, 20, 30];
    const weeklyCost = packsPerWeek * pricePerPack;
    const yearlyCost = weeklyCost * 52;
    
    return years.map(year => ({
      year: `שנה ${year}`,
      cost: yearlyCost * year,
      label: `${year} שנים`
    }));
  }, [packsPerWeek, pricePerPack]);

  const total30Years = data[data.length - 1].cost;

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">הנזק הכלכלי: לא רק בריאות</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-50 p-8 rounded-3xl shadow-inner border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-indigo-700">כמה אתם מוציאים?</h3>
            
            <div className="space-y-8">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">כמות קופסאות/מחסניות בשבוע:</label>
                <input 
                  type="range" 
                  min="1" 
                  max="21" 
                  value={packsPerWeek} 
                  onChange={(e) => setPacksPerWeek(parseInt(e.target.value))}
                  className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-500 font-bold">
                  <span>1</span>
                  <span className="text-indigo-600 text-lg">{packsPerWeek}</span>
                  <span>21+</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">מחיר ממוצע ליחידה (₪):</label>
                <input 
                  type="number" 
                  value={pricePerPack} 
                  onChange={(e) => setPricePerPack(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full p-3 border-2 border-indigo-100 rounded-xl focus:border-indigo-500 outline-none text-xl font-bold text-indigo-600"
                />
              </div>

              <div className="mt-8 p-6 bg-indigo-600 rounded-2xl text-white">
                <p className="text-lg opacity-80">ב-30 השנים הקרובות, תוכלו לחסוך:</p>
                <p className="text-5xl font-black mt-2">₪{total30Years.toLocaleString()}</p>
                <p className="mt-2 text-sm font-light">*בסכום זה תוכלו לקנות דירה קטנה, 5 מכוניות יוקרה, או לטייל מסביב לעולם עשרות פעמים.</p>
              </div>
            </div>
          </div>

          <div className="h-[400px]">
            <h3 className="text-xl font-bold mb-4 text-gray-600">גרף הצטברות העלויות</h3>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => `₪${value/1000}k`} />
                <Tooltip 
                  formatter={(value: number) => [`₪${value.toLocaleString()}`, 'עלות מצטברת']}
                  contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="cost" stroke="#4f46e5" fillOpacity={1} fill="url(#colorCost)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EconomicCalculator;
