import React from 'react';
import { PricingTier } from '../types';
import { Button } from './Button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  tier: PricingTier;
}

export const PricingCard: React.FC<PricingCardProps> = ({ tier }) => {
  const { name, price, features, recommended } = tier;
  
  return (
    <div className={`relative border rounded-xl p-6 ${recommended ? 'border-primary-400 shadow-md' : 'border-neutral-200'}`}>
      {recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white text-xs font-bold py-1 px-3 rounded-full">
          Most Popular
        </div>
      )}
      
      <h3 className="text-xl font-bold text-neutral-900 mb-2">{name}</h3>
      
      <div className="mb-6">
        <span className="text-3xl font-bold">${price}</span>
        <span className="text-neutral-600">/month</span>
      </div>
      
      <div className="mb-8">
        <p className="text-neutral-600 mb-2">7-day free trial</p>
        <Button 
          variant={recommended ? 'primary' : 'outline'} 
          fullWidth 
          className={!recommended ? 'border-primary-500 text-primary-700' : ''}
        >
          Try {name} Free
        </Button>
      </div>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 mt-0.5 text-primary-600">
              <Check size={16} />
            </span>
            <span className="text-neutral-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};