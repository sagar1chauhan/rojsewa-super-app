import { motion } from "framer-motion";
import { Home, Search, CalendarCheck, User } from "lucide-react";
import { useState } from "react";

const tabs = [
  { id: "home", label: "Home", icon: Home },
  { id: "search", label: "Search", icon: Search },
  { id: "bookings", label: "Bookings", icon: CalendarCheck },
  { id: "profile", label: "Profile", icon: User },
];

const BottomNavBar = () => {
  const [active, setActive] = useState("home");

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-border/50">
      <div className="flex items-center justify-around py-2 pb-[env(safe-area-inset-bottom)]">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.id;
          return (
            <motion.button
              key={tab.id}
              whileTap={{ scale: 0.85 }}
              onClick={() => setActive(tab.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{tab.label}</span>
              {isActive && (
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="w-1 h-1 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavBar;
