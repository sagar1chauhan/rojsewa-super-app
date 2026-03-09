import { motion } from "framer-motion";
import { Star, ShieldCheck } from "lucide-react";
import type { FeaturedService } from "@/data/mockData";

interface ServiceCardProps {
  service: FeaturedService;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="min-w-[260px] md:min-w-[280px] snap-start"
    >
      <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative h-40 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {service.originalPrice && (
            <span className="absolute top-2 left-2 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded-lg">
              {Math.round(((service.originalPrice - service.price) / service.originalPrice) * 100)}% OFF
            </span>
          )}
          {service.isVerified && (
            <span className="absolute top-2 right-2 bg-primary text-primary-foreground p-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
            </span>
          )}
        </div>
        <div className="p-3">
          <p className="text-xs text-muted-foreground">{service.category}</p>
          <h3 className="font-semibold text-foreground text-sm mt-0.5 truncate">{service.title}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{service.provider}</p>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
              <span className="text-xs font-semibold text-foreground">{service.rating}</span>
              <span className="text-xs text-muted-foreground">({service.reviews})</span>
            </div>
            <div className="flex items-center gap-1.5">
              {service.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">₹{service.originalPrice}</span>
              )}
              <span className="text-sm font-bold text-primary">₹{service.price}</span>
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full mt-3 bg-primary text-primary-foreground text-sm font-semibold py-2 rounded-xl hover:bg-primary/90 transition-colors"
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
