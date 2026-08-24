import React, { useState } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from 'recharts';

interface ChartItem {
  day: string;
  plan: number;
  planUntilToday: number | null;
  fact: number | null;
  forecast: number | null;
}

const data: ChartItem[] = [
  { day: '01', plan: 160, planUntilToday: 160, fact: 120, forecast: 120 },
  { day: '02', plan: 320, planUntilToday: 320, fact: 240, forecast: 240 },
  { day: '03', plan: 480, planUntilToday: 480, fact: 370, forecast: 370 },
  { day: '04', plan: 640, planUntilToday: 640, fact: 500, forecast: 500 },
  { day: '05', plan: 800, planUntilToday: 800, fact: 620, forecast: 620 },
  { day: '06', plan: 960, planUntilToday: 960, fact: 740, forecast: 740 },
  { day: '07', plan: 1120, planUntilToday: 1120, fact: 870, forecast: 870 },
  { day: '08', plan: 1280, planUntilToday: 1280, fact: 1000, forecast: 1000 },
  { day: '09', plan: 1440, planUntilToday: 1440, fact: 1120, forecast: 1120 },
  { day: '10', plan: 1600, planUntilToday: 1600, fact: 1240, forecast: 1240 },
  { day: '11', plan: 1760, planUntilToday: 1760, fact: 1370, forecast: 1370 },
  { day: '12', plan: 1920, planUntilToday: 1920, fact: 1500, forecast: 1500 },
  { day: '13', plan: 2080, planUntilToday: 2080, fact: 1620, forecast: 1620 },
  { day: '14', plan: 2240, planUntilToday: 2240, fact: 1740, forecast: 1740 },
  { day: '15', plan: 2400, planUntilToday: 2400, fact: 1870, forecast: 1870 },
  { day: '16', plan: 2560, planUntilToday: 2560, fact: 2000, forecast: 2000 },
  { day: '17', plan: 2720, planUntilToday: 2720, fact: 2120, forecast: 2120 },
  { day: '18', plan: 2880, planUntilToday: 2880, fact: 2240, forecast: 2240 },
  { day: '19', plan: 3040, planUntilToday: 3040, fact: 2360, forecast: 2360 },
  { day: '20', plan: 3350, planUntilToday: 3350, fact: 2500, forecast: 2500 },
  { day: '21', plan: 3510, planUntilToday: null, fact: null, forecast: 2710 },
  { day: '22', plan: 3670, planUntilToday: null, fact: null, forecast: 2920 },
  { day: '23', plan: 3830, planUntilToday: null, fact: null, forecast: 3130 },
  { day: '24', plan: 3990, planUntilToday: null, fact: null, forecast: 3340 },
  { day: '25', plan: 4150, planUntilToday: null, fact: null, forecast: 3550 },
  { day: '26', plan: 4310, planUntilToday: null, fact: null, forecast: 3760 },
  { day: '27', plan: 4470, planUntilToday: null, fact: null, forecast: 3970 },
  { day: '28', plan: 4630, planUntilToday: null, fact: null, forecast: 4180 },
  { day: '29', plan: 4790, planUntilToday: null, fact: null, forecast: 4390 },
  { day: '30', plan: 4920, planUntilToday: null, fact: null, forecast: 4600 },
  { day: '31', plan: 5050, planUntilToday: null, fact: null, forecast: 4800 },
];

export const NakopitelniPlan: React.FC = () => {
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs">
      {/* Sarlavha va Legend */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <h2 className="text-base font-bold text-gray-900 tracking-tight">
          Накопительный план / факт
        </h2>

        <div className="flex items-center mr-80 gap-20 text-xs text-gray-600 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-5 border-t-2 border-dashed border-blue-400 inline-block" />
            <span>План накопительно</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-5 border-t-2 border-solid border-[#0f6cbd] inline-block" />
            <span>Факт накопительно</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-5 border-t-2 border-dotted border-[#0f6cbd] inline-block" />
            <span>Прогноз</span>
          </div>
        </div>
      </div>

      {/* Recharts Grafik */}
      <div className="w-full h-80 relative">
        {/* Y o'qi birligi */}
        <span className="absolute left-6 -top-1 text-xs font-medium text-gray-400 select-none">
          т
        </span>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 28, right: 35, left: -10, bottom: 20 }}
            onMouseMove={(e) => {
              if (e?.activeLabel) setHoveredDay(String(e.activeLabel));
            }}
            onMouseLeave={() => setHoveredDay(null)}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={true}
              tick={({ x, y, payload }) => {
                const isHovered = hoveredDay === payload.value;
                const is20 = payload.value === '20';
                return (
                  <text
                    x={Number(x)}
                    y={Number(y) + 12}
                    textAnchor="middle"
                    className={`text-[11px] ${
                      isHovered || is20 ? 'fill-[#0f6cbd] font-bold' : 'fill-gray-500 font-normal'
                    }`}
                  >
                    {payload.value}
                  </text>
                );
              }}
            />

            <YAxis
              domain={[0, 6000]}
              ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000]}
              tickLine={false}
              axisLine={true}
              tickFormatter={(val) => (val === 0 ? '0' : `${val / 1000} 000`)}
              tick={{ fill: '#94a3b8', fontSize: 11 }}
            />

            <Tooltip
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                const d = payload[0].payload as ChartItem;
                const dev = d.fact !== null ? d.fact - d.plan : null;

                return (
                  <div className="bg-white/95 backdrop-blur-xs border border-gray-200 rounded-lg shadow-xl p-3 text-xs min-w-44 z-50">
                    <div className="font-bold text-gray-900 mb-2">{d.day} августа</div>
                    <div className="flex flex-col gap-1 text-gray-600">
                      <div className="flex justify-between">
                        <span className="text-gray-500">План нак.:</span>
                        <span className="font-semibold text-gray-800">{d.plan.toLocaleString('ru-RU')} т</span>
                      </div>
                      {d.fact !== null && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Факт нак.:</span>
                          <span className="font-semibold text-gray-800">{d.fact.toLocaleString('ru-RU')} т</span>
                        </div>
                      )}
                      {d.forecast !== null && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Прогноз:</span>
                          <span className="font-semibold text-blue-600">{d.forecast.toLocaleString('ru-RU')} т</span>
                        </div>
                      )}
                      {dev !== null && (
                        <div className="flex justify-between pt-1 border-t border-gray-100">
                          <span className="text-gray-500">Отклонение:</span>
                          <span className={`font-semibold ${dev >= 0 ? 'text-green-600' : 'text-rose-500'}`}>
                            {dev > 0 ? `+${dev.toLocaleString('ru-RU')}` : dev.toLocaleString('ru-RU')} т
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              }}
            />

            {/* Hover bo'lganda chiqadigan vertikal chiziq */}
            {hoveredDay && (
              <ReferenceLine
                x={hoveredDay}
                stroke="#3b82f6"
                strokeDasharray="3 3"
                strokeWidth={1.5}
              />
            )}

            {/* Reja va Fakt orasidagi qizil orqada qolish sohasi */}
            <Area
              type="monotone"
              dataKey="planUntilToday"
              fill="#ffe4e6"
              stroke="none"
              fillOpacity={0.7}
              isAnimationActive={false}
            />
            <Area
              type="monotone"
              dataKey="fact"
              fill="#ffffff"
              stroke="none"
              fillOpacity={1}
              isAnimationActive={false}
            />

            {/* 1. План накопительно */}
            <Line
              type="monotone"
              dataKey="plan"
              stroke="#e5e5f0"
              strokeDasharray="5 5"
              strokeWidth={2}
              dot={false}
            />

            {/* 2. Прогноз */}
            <Line
              type="monotone"
              dataKey="forecast"
              stroke="#0f6cbd"
              strokeDasharray="2 2"
              strokeWidth={2}
              dot={false}
            />

            {/* 3. Факт накопительно */}
            <Line
              type="monotone"
              dataKey="fact"
              stroke="#0f6cbd"
              strokeWidth={2.8}
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>

        {/* X o'qi ostidagi oy nomi */}
        <div className="text-center -mt-3 text-xs text-gray-500 font-medium select-none">
          Август
        </div>
      </div>
    </div>
  );
};

export default NakopitelniPlan;
