import React, { useState } from 'react';
import { Card, CardHeader, CardTitle } from '../components/Card';
import { Button } from '../components/Button';
import { CalendarTimeSlot } from '../components/CalendarTimeSlot';
import { appointments } from '../data/mockData';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const Calendar: React.FC = () => {
  // States for calendar view
  const [currentDate, setCurrentDate] = useState(new Date('2025-04-15'));
  const [viewMode, setViewMode] = useState<'day' | 'week'>('week');
  
  // Generate dates for the week view
  const getWeekDates = (date: Date) => {
    const day = date.getDay(); // 0 = Sunday, 6 = Saturday
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust for starting on Monday
    
    const monday = new Date(date);
    monday.setDate(diff);
    
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const nextDay = new Date(monday);
      nextDay.setDate(monday.getDate() + i);
      weekDates.push(nextDay);
    }
    
    return weekDates;
  };
  
  const weekDates = getWeekDates(currentDate);
  
  // Format dates for display
  const formatDateHeader = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };
  
  const formatDateSubheader = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };
  
  const formatDayForAppointments = (date: Date) => {
    return date.toISOString().split('T')[0];
  };
  
  // Generate time slots
  const businessHours = [];
  for (let i = 9; i <= 18; i++) {
    businessHours.push(i);
  }
  
  // Navigation handlers
  const goToPreviousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };
  
  const goToNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };
  
  const goToToday = () => {
    setCurrentDate(new Date('2025-04-15'));
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-neutral-900">Calendar</h1>
        <Button variant="primary" icon={<Plus size={16} />}>
          New Appointment
        </Button>
      </div>
      
      <Card variant="elevated" className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={goToPreviousWeek}>
              <ChevronLeft size={16} />
            </Button>
            <Button variant="outline" size="sm" onClick={goToToday}>
              Today
            </Button>
            <Button variant="outline" size="sm" onClick={goToNextWeek}>
              <ChevronRight size={16} />
            </Button>
          </div>
          
          <div className="text-lg font-medium">
            {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant={viewMode === 'day' ? 'primary' : 'outline'} 
              size="sm"
              onClick={() => setViewMode('day')}
            >
              Day
            </Button>
            <Button 
              variant={viewMode === 'week' ? 'primary' : 'outline'} 
              size="sm"
              onClick={() => setViewMode('week')}
            >
              Week
            </Button>
          </div>
        </CardHeader>
      </Card>
      
      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Day headers */}
          <div className="grid grid-cols-8 border-b border-neutral-200">
            <div className="p-4"></div> {/* Empty cell for time column */}
            {weekDates.map((date, index) => (
              <div 
                key={index} 
                className={`p-4 text-center border-r border-neutral-200 ${
                  formatDayForAppointments(date) === '2025-04-15' 
                    ? 'bg-primary-50'
                    : ''
                }`}
              >
                <div className="font-medium">{formatDateHeader(date)}</div>
                <div className="text-sm text-neutral-500">{formatDateSubheader(date)}</div>
              </div>
            ))}
          </div>
          
          {/* Time slots and appointments */}
          {businessHours.map((hour) => (
            <div key={hour} className="grid grid-cols-8">
              <div className="border-b border-r border-neutral-200 p-2 text-xs text-neutral-500 relative">
                <div className="absolute top-0 -left-2">
                  {hour === 12 ? '12 PM' : hour < 12 ? `${hour} AM` : `${hour - 12} PM`}
                </div>
              </div>
              
              {weekDates.map((date, index) => (
                <CalendarTimeSlot
                  key={`${hour}-${index}`}
                  hour={hour}
                  day={formatDayForAppointments(date)}
                  appointments={appointments}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;