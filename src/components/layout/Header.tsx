import React from 'react';
import { Menu, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex h-16 items-center justify-between border-b bg-card px-4 sm:px-6">
      {/* Left side: Menu Icon */}
      <Button variant="ghost" size="icon" aria-label="Toggle Menu">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle Menu</span>
      </Button>

      {/* Right side: Notifications and User Profile */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Button variant="ghost" size="icon" aria-label="View Notifications">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          {/* Notification Badge */}
          <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-destructive ring-2 ring-card" />
        </div>

        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://i.pravatar.cc/150?u=eleanorvance" alt="Eleanor Vance" />
            <AvatarFallback>EV</AvatarFallback>
          </Avatar>
          <div className="hidden grid-cols-1 gap-0.5 text-sm sm:grid">
            <div className="font-semibold text-card-foreground">Eleanor Vance</div>
            <div className="text-muted-foreground">Data Analyst</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
