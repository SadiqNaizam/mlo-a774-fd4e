import React from 'react';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className={cn('pt-16', className)}>
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
