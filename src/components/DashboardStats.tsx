import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import { Calendar, Users, DollarSign, TrendingUp, Package } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: string;
    positive: boolean;
  };
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, change }) => {
  return (
    <Card variant="elevated" className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-neutral-500">{title}</CardTitle>
        <div className="p-2 bg-primary-50 rounded-md text-primary-700">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className={`text-xs font-medium mt-1 ${change.positive ? 'text-success-600' : 'text-error-600'}`}>
            {change.positive ? '↑' : '↓'} {change.value} from last week
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export const DashboardStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
      <StatsCard
        title="Today's Appointments"
        value="8"
        icon={<Calendar size={18} />}
        change={{ value: '15%', positive: true }}
      />
      <StatsCard
        title="Total Clients"
        value="156"
        icon={<Users size={18} />}
        change={{ value: '3%', positive: true }}
      />
      <StatsCard
        title="Today's Revenue"
        value="$735"
        icon={<DollarSign size={18} />}
        change={{ value: '12%', positive: true }}
      />
      <StatsCard
        title="Monthly Growth"
        value="18%"
        icon={<TrendingUp size={18} />}
        change={{ value: "5%", positive: true }}
      />
      <StatsCard
        title="Low Stock Items"
        value="3"
        icon={<Package size={18} />}
        change={{ value: "2 items", positive: false }}
      />
    </div>
  );
};