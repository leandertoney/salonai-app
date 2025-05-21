import React from 'react';
import { Transaction } from '../types';
import { formatDate, getStatusColor } from '../utils/helpers';
import { CreditCard, Banknote, DollarSign } from 'lucide-react';

interface TransactionItemProps {
  transaction: Transaction;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const { clientName, date, amount, services, paymentMethod, status } = transaction;
  
  const paymentMethodIcons = {
    credit: <CreditCard size={16} />,
    cash: <Banknote size={16} />,
    venmo: <DollarSign size={16} />,
    paypal: <DollarSign size={16} />,
    other: <DollarSign size={16} />
  };

  return (
    <div className="border border-neutral-200 p-4 rounded-lg mb-3">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium text-neutral-900">{clientName}</h4>
          <p className="text-sm text-neutral-500">{services.join(', ')}</p>
        </div>
        <div className="flex items-center">
          <span className="font-medium text-neutral-900">${amount}</span>
          <div className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
            {status}
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-2 text-sm text-neutral-600">
        <span>{formatDate(date)}</span>
        <div className="flex items-center">
          {paymentMethodIcons[paymentMethod]}
          <span className="ml-1 capitalize">{paymentMethod}</span>
        </div>
      </div>
    </div>
  );
};