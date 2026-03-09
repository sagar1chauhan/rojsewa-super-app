import { Bell, User } from "lucide-react";
import LocationHeader from "./LocationHeader";

const TopNavbar = () => {
  return (
    <header className="hidden md:flex items-center justify-between px-6 lg:px-10 py-3 bg-card border-b border-border sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-extrabold tracking-tight">
          <span className="text-primary">Roj</span>
          <span className="text-secondary">Sewa</span>
        </h1>
        <LocationHeader />
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-xl hover:bg-muted transition-colors relative">
          <Bell className="w-5 h-5 text-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-emergency rounded-full" />
        </button>
        <button className="flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-xl hover:bg-primary/20 transition-colors">
          <User className="w-4 h-4" />
          Login
        </button>
      </div>
    </header>
  );
};

export default TopNavbar;
