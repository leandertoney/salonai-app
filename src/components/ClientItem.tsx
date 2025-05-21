import React from 'react';
import { Client } from '../types';
import { formatDate } from '../utils/helpers';
import { User, Calendar, DollarSign } from 'lucide-react';

interface ClientItemProps {
  client: Client;
  onClick?: () => void;
}

export const ClientItem: React.FC<ClientItemProps> = ({ client, onClick }) => {
  const { name, avatar, lastVisit, upcomingAppointment, totalVisits, totalSpent } = client;
  
  return (
    <div 
      className="border border-neutral-200 p-4 rounded-lg mb-3 hover:border-primary-300 cursor-pointer transition-all"
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-4">
          {avatar ? (
            <img 
              src={avatar} 
              alt={name} 
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700">
              <User size={20} />
            </div>
          )}
        </div>
        <div className="flex-grow">
          <h4 className="font-medium text-neutral-900">{name}</h4>
          <div className="flex mt-1 text-sm text-neutral-600 flex-wrap">
            {lastVisit && (
              <div className="flex items-center mr-4 mb-1">
                <Calendar size={14} className="mr-1" />
                Last visit: {formatDate(lastVisit)}
              </div>
            )}
            {upcomingAppointment && (
              <div className="flex items-center mr-4 mb-1">
                <Calendar size={14} className="mr-1 text-primary-600" />
                Next: {formatDate(upcomingAppointment)}
              </div>
            )}
          </div>
          <div className="flex mt-1 text-sm text-neutral-600">
            <div className="mr-4">
              Visits: {totalVisits}
            </div>
            <div className="flex items-center">
              <DollarSign size={14} className="mr-1" />
              ${totalSpent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};