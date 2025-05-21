import React from 'react';
import { Appointment } from '../types';
import { formatTime } from '../utils/helpers';

interface CalendarTimeSlotProps {
  hour: number;
  appointments: Appointment[];
  day: string;
}

export const CalendarTimeSlot: React.FC<CalendarTimeSlotProps> = ({ 
  hour, 
  appointments,
  day 
}) => {
  // Format hour to display (e.g., 9 AM, 2 PM)
  const formattedHour = hour === 12 ? '12 PM' : hour < 12 ? `${hour} AM` : `${hour - 12} PM`;
  
  // Find appointments for this hour
  const hourAppointments = appointments.filter(app => {
    const [appHour] = app.time.split(':').map(Number);
    const appDate = app.date;
    return appHour === hour && appDate === day;
  });
  
  return (
    <div className="border-b border-r border-neutral-200 min-h-[100px] relative">
      <div className="text-xs text-neutral-500 absolute -top-2.5 -left-2 bg-white px-1">
        {formattedHour}
      </div>
      
      <div className="mt-4 px-1">
        {hourAppointments.map((appointment) => {
          // Calculate appointment duration in terms of grid rows
          const heightClass = appointment.duration <= 30 ? 'h-[90px]' :
                              appointment.duration <= 60 ? 'h-[180px]' : 'h-[270px]';
                              
          // Pick a background color based on service type (simplified version)
          const getColorClass = () => {
            if (appointment.service.includes('Color')) return 'bg-secondary-100 border-l-secondary-500';
            if (appointment.service.includes('Cut')) return 'bg-primary-100 border-l-primary-500';
            if (appointment.service.includes('Style')) return 'bg-warning-100 border-l-warning-500';
            return 'bg-success-100 border-l-success-500';
          };
          
          return (
            <div 
              key={appointment.id}
              className={`${heightClass} rounded border border-l-4 p-2 mb-1 ${getColorClass()} overflow-hidden cursor-pointer transition-all hover:shadow-md`}
            >
              <div className="text-xs font-medium">{formatTime(appointment.time)}</div>
              <div className="font-medium truncate">{appointment.clientName}</div>
              <div className="text-xs truncate">{appointment.service}</div>
              <div className="text-xs mt-1">${appointment.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};