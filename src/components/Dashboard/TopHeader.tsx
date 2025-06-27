import React from 'react';
import { Menu, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TopHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-4 sm:px-6 h-16 bg-background border-b">
      {/* Left side: Menu Icon */}
      <Button variant="ghost" size="icon">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle Menu</span>
      </Button>

      {/* Right side: Notifications and User Profile */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          {/* Notification Badge */}
          <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-destructive ring-2 ring-background" />
        </div>

        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://i.pravatar.cc/150?u=eleanorvance" alt="Eleanor Vance" />
            <AvatarFallback>EV</AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5 text-sm">
            <div className="font-semibold text-foreground">Eleanor Vance</div>
            <div className="text-muted-foreground">Data Analyst</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
