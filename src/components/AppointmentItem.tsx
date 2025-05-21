import React from 'react';
import { Appointment } from '../types';
import { formatTime, getStatusColor } from '../utils/helpers';
import { Card } from './Card';
import { Clock, User, DollarSign } from 'lucide-react';

interface AppointmentItemProps {
  appointment: Appointment;
  showActions?: boolean;
}

export const AppointmentItem: React.FC<AppointmentItemProps> = ({ 
  appointment,
  showActions = true
}) => {
  const { clientName, clientAvatar, service, time, duration, status, price } = appointment;
  
  return (
    <Card variant="bordered" className="mb-3 hover:border-primary-300 transition-all">
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-4">
          {clientAvatar ? (
            <img 
              src={clientAvatar} 
              alt={clientName} 
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700">
              <User size={20} />
            </div>
          )}
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-neutral-900">{clientName}</h4>
              <p className="text-sm text-neutral-500">{service}</p>
            </div>
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </div>
          </div>
          <div className="flex mt-2 text-sm text-neutral-600">
            <div className="flex items-center mr-4">
              <Clock size={14} className="mr-1" />
              {formatTime(time)} ({duration} min)
            </div>
            <div className="flex items-center">
              <DollarSign size={14} className="mr-1" />
              ${price}
            </div>
          </div>
        </div>
      </div>
      {showActions && (
        <div className="mt-3 pt-3 border-t border-neutral-100 flex justify-end space-x-2">
          <button className="text-xs text-primary-600 hover:text-primary-700 font-medium">
            Reschedule
          </button>
          <button className="text-xs text-neutral-600 hover:text-neutral-700 font-medium">
            Cancel
          </button>
          <button className="text-xs text-primary-600 hover:text-primary-700 font-medium">
            Check In
          </button>
        </div>
      )}
    </Card>
  );
};