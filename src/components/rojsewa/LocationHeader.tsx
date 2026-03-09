import { useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cities } from "@/data/mockData";

const LocationHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Delhi NCR");

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-foreground cursor-pointer"
      >
        <MapPin className="w-4 h-4 text-primary" />
        <div className="text-left">
          <p className="text-[10px] text-muted-foreground leading-none">Your Location</p>
          <p className="text-sm font-semibold leading-tight flex items-center gap-1">
            {selectedCity}
            <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
          </p>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-xl z-50 overflow-hidden"
            >
              <div className="max-h-64 overflow-y-auto p-1">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => { setSelectedCity(city); setIsOpen(false); }}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                      city === selectedCity
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LocationHeader;
