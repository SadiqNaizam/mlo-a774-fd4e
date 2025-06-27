import React from 'react';
import StatCard from './StatCard';
import type { StatCardProps } from './StatCard';
import { DollarSign, Users, TrendingDown } from 'lucide-react';

const StatsCardGrid: React.FC = () => {

  const statIcons: React.ReactElement[] = [
    <div key="revenue-icon" className="p-2 bg-blue-100 rounded-lg">
      <DollarSign className="h-5 w-5 text-blue-600" />
    </div>,
    <div key="users-icon" className="p-2 bg-emerald-100 rounded-lg">
      <Users className="h-5 w-5 text-emerald-600" />
    </div>,
    <div key="churn-icon" className="p-2 bg-yellow-100 rounded-lg">
      <TrendingDown className="h-5 w-5 text-yellow-600" />
    </div>,
  ];

  const statsData: Omit<StatCardProps, 'icon'>[] = [
    {
      title: 'Monthly Recurring Revenue',
      value: '£48,320',
      change: '3.2%',
      changeType: 'increase' as const,
      timeframe: 'vs last month',
    },
    {
      title: 'Active Users',
      value: '1,245',
      change: '+122',
      changeType: 'increase' as const,
      timeframe: 'this week',
    },
    {
      title: 'Churn Rate',
      value: '1.8%',
      change: '0.2%',
      changeType: 'decrease' as const,
      timeframe: 'vs last month',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 px-4 sm:px-6">
      {statsData.map((stat, index) => (
        <StatCard key={stat.title} {...stat} icon={statIcons[index]} />
      ))}
    </div>
  );
};

export default StatsCardGrid;
