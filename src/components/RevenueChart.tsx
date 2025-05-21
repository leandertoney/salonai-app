import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import { Revenue } from '../types';

interface RevenueChartProps {
  data: Revenue[];
}

export const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  const maxAmount = Math.max(...data.map(item => item.amount));
  
  return (
    <Card variant="elevated" className="mb-6">
      <CardHeader className="pb-0">
        <CardTitle>Revenue Overview</CardTitle>
        <p className="text-sm text-neutral-500">Last 14 days</p>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-64 relative mt-4">
          <div className="absolute inset-0 flex items-end">
            {data.map((item, index) => {
              const height = (item.amount / maxAmount) * 100;
              const isToday = index === data.length - 1;
              
              return (
                <div 
                  key={index}
                  className="flex-1 flex flex-col items-center justify-end"
                >
                  <div 
                    className={`w-4/5 rounded-t ${isToday ? 'bg-primary-600' : 'bg-primary-200'}`}
                    style={{ height: `${height}%` }}
                  ></div>
                  <div className="text-xs mt-1 text-neutral-500">
                    {index === 0 || index === data.length - 1 || index % 3 === 0 ? item.day : ''}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Revenue amount labels */}
          <div className="absolute top-0 right-0 h-full flex flex-col justify-between text-xs text-neutral-500 pb-6">
            <div>${maxAmount}</div>
            <div>${Math.floor(maxAmount / 2)}</div>
            <div>$0</div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-neutral-200">
          <div>
            <p className="text-sm text-neutral-500">Total Revenue</p>
            <p className="text-xl font-bold">$7,865</p>
          </div>
          <div>
            <span className="text-sm text-success-600 font-medium px-2 py-1 bg-success-50 rounded-full">
              ↑ 18% from previous period
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};