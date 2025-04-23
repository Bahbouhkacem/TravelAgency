import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
  availableDates: number[];
}

const Calendar: React.FC<CalendarProps> = ({ availableDates }) => {
  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];
  
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };
  
  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    
    // Adjust for Sunday as first day (0)
    const startingDay = firstDay === 0 ? 6 : firstDay - 1;
    
    const prevMonthDays = currentMonth === 0 
      ? getDaysInMonth(11, currentYear - 1) 
      : getDaysInMonth(currentMonth - 1, currentYear);
    
    const days = [];
    
    // Previous month days
    for (let i = startingDay - 1; i >= 0; i--) {
      days.push(
        <div key={`prev-${i}`} className="py-2 text-[#9D9D9D]">
          {prevMonthDays - i}
        </div>
      );
    }
    
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const isAvailable = availableDates.includes(i);
      
      days.push(
        <div key={`current-${i}`} className="py-2 relative">
          {i}
          {isAvailable && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-black"></div>
          )}
        </div>
      );
    }
    
    // Next month days
    const totalCells = 42; // 6 rows * 7 columns
    const nextMonthDays = totalCells - days.length;
    
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push(
        <div key={`next-${i}`} className="py-2 text-[#9D9D9D]">
          {i}
        </div>
      );
    }
    
    return days;
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <button 
          className="p-2 hover:bg-[#F5F5F5] transition" 
          onClick={previousMonth}
          aria-label="Mois précédent"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h3 className="text-xl font-bold">{months[currentMonth]} {currentYear}</h3>
        <button 
          className="p-2 hover:bg-[#F5F5F5] transition" 
          onClick={nextMonth}
          aria-label="Mois suivant"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2 text-center">
        <div className="font-medium">Lun</div>
        <div className="font-medium">Mar</div>
        <div className="font-medium">Mer</div>
        <div className="font-medium">Jeu</div>
        <div className="font-medium">Ven</div>
        <div className="font-medium">Sam</div>
        <div className="font-medium">Dim</div>
      </div>
      
      <div className="grid grid-cols-7 gap-2 text-center">
        {renderCalendar()}
      </div>

      <div className="mt-6 flex items-center">
        <div className="flex items-center mr-6">
          <div className="w-3 h-3 rounded-full bg-black mr-2"></div>
          <span className="text-sm">Départs disponibles</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
