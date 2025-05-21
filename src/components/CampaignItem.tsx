import React from 'react';
import { MarketingCampaign } from '../types';
import { formatDate, getStatusColor } from '../utils/helpers';
import { Mail, MessageSquare, Users, BarChart2 } from 'lucide-react';

interface CampaignItemProps {
  campaign: MarketingCampaign;
}

export const CampaignItem: React.FC<CampaignItemProps> = ({ campaign }) => {
  const { name, type, status, audience, recipients, date, openRate, clickRate } = campaign;
  
  return (
    <div className="border border-neutral-200 p-4 rounded-lg mb-3 hover:border-primary-300 transition-all">
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <div className="mr-3 p-2 bg-primary-100 rounded-md text-primary-700">
            {type === 'email' ? <Mail size={18} /> : <MessageSquare size={18} />}
          </div>
          <div>
            <h4 className="font-medium text-neutral-900">{name}</h4>
            <p className="text-sm text-neutral-500 capitalize">{type} Campaign</p>
          </div>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
          {status}
        </div>
      </div>
      
      <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
        <div className="flex items-center text-neutral-600">
          <Users size={14} className="mr-1" />
          <span className="capitalize">{audience}</span> · {recipients} recipients
        </div>
        {date && (
          <div className="text-neutral-600">
            {status === 'scheduled' ? 'Scheduled for:' : 'Sent on:'} {formatDate(date)}
          </div>
        )}
        
        {status === 'sent' && openRate !== undefined && clickRate !== undefined && (
          <div className="col-span-2 mt-2 flex items-center">
            <BarChart2 size={14} className="mr-1 text-primary-600" />
            <span className="text-neutral-700 mr-3">
              <span className="font-medium">{openRate}%</span> open rate
            </span>
            <span className="text-neutral-700">
              <span className="font-medium">{clickRate}%</span> click rate
            </span>
          </div>
        )}
      </div>
      
      {status !== 'sent' && (
        <div className="mt-3 pt-3 border-t border-neutral-100 flex justify-end space-x-2">
          <button className="text-xs text-neutral-600 hover:text-neutral-700 font-medium">
            Edit
          </button>
          {status === 'draft' && (
            <button className="text-xs text-primary-600 hover:text-primary-700 font-medium">
              Schedule
            </button>
          )}
          {status === 'scheduled' && (
            <button className="text-xs text-error-600 hover:text-error-700 font-medium">
              Cancel
            </button>
          )}
        </div>
      )}
    </div>
  );
};