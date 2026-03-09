import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const EmergencyButton = () => {
  return (
    <motion.button
      whileTap={{ scale: 0.93 }}
      whileHover={{ scale: 1.03 }}
      className="relative w-full max-w-md mx-auto flex items-center justify-center gap-3 py-4 px-8 rounded-2xl bg-emergency text-emergency-foreground font-bold text-lg shadow-lg animate-pulse-glow cursor-pointer"
    >
      <span className="absolute inset-0 rounded-2xl bg-emergency-glow/20 animate-ping opacity-30" />
      <Phone className="w-6 h-6" />
      <span>🚨 Emergency Service 24x7</span>
    </motion.button>
  );
};

export default EmergencyButton;
