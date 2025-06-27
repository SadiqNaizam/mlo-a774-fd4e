import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';

export interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactElement;
  change: string;
  changeType: 'increase' | 'decrease';
  timeframe: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  change,
  changeType,
  timeframe,
  className,
}) => {
  const isIncrease = changeType === 'increase';

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold text-foreground">{value}</div>
        <p className="text-sm text-muted-foreground mt-1">
          <span
            className={cn(
              'mr-1 font-medium',
              isIncrease ? 'text-success' : 'text-destructive'
            )}
          >
            {isIncrease ? (
              <ArrowUp className="inline-block h-4 w-3" />
            ) : (
              <ArrowDown className="inline-block h-4 w-3" />
            )}
            {' '}{change}
          </span>
          {timeframe}
        </p>
      </CardContent>
    </Card>
  );
};

export default StatCard;
