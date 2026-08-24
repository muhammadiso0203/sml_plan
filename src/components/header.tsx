import React, { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPeriod?: string;
  onPeriodChange?: (period: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPeriod = 'Август 2026',
  onPeriodChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState(currentPeriod);

  const periods = [
    'Июнь 2026',
    'Июль 2026',
    'Август 2026',
    'Сентябрь 2026',
    'Октябрь 2026',
    'Ноябрь 2026',
    'Декабрь 2026',
  ];

  const handleSelect = (period: string) => {
    setSelectedPeriod(period);
    setIsOpen(false);
    if (onPeriodChange) {
      onPeriodChange(period);
    }
  };

  return (
    <header className="w-full px-6 py-3.5 flex items-center justify-between border-b border-gray-200">
      {/* Left side: Logo and Title */}
      <div className="flex items-center gap-6">
        <span className="text-2xl font-bold text-[#0f6cbd]">
          SML
        </span>
        <h1 className="text-lg font-semibold text-gray-800 tracking-tight">
          Производство — План / Факт
        </h1>
      </div>

      {/* Right side: Period Selector */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-3 py-1.5 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-xs transition-colors cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-gray-500" />
          <span>{selectedPeriod}</span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute right-0 mt-1.5 w-44 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-20">
              {periods.map((period) => (
                <button
                  key={period}
                  onClick={() => handleSelect(period)}
                  className={`w-full text-left px-3.5 py-2 text-sm transition-colors cursor-pointer hover:bg-gray-50 ${
                    selectedPeriod === period
                      ? 'text-[#0f6cbd] font-semibold bg-blue-50/60'
                      : 'text-gray-700'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
