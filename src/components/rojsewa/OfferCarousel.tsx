import { motion } from "framer-motion";
import { offerBanners } from "@/data/mockData";
import { Tag } from "lucide-react";

const OfferCarousel = () => {
  return (
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide">
      {offerBanners.map((offer, index) => (
        <motion.div
          key={offer.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="min-w-[300px] md:min-w-[340px] snap-start bg-gradient-to-br from-secondary/20 via-secondary/10 to-primary/10 border border-secondary/30 rounded-2xl p-5 flex flex-col gap-1"
        >
          <div className="flex items-center gap-2 mb-1">
            <Tag className="w-4 h-4 text-secondary-foreground" />
            <span className="text-xs font-bold text-secondary-foreground bg-secondary/30 px-2 py-0.5 rounded-md uppercase tracking-wide">
              {offer.discount}
            </span>
          </div>
          <h3 className="font-bold text-foreground">{offer.title}</h3>
          <p className="text-sm text-muted-foreground">{offer.subtitle}</p>
          <p className="text-xs text-primary font-semibold mt-1">
            Use code: <span className="bg-primary/10 px-2 py-0.5 rounded">{offer.code}</span>
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default OfferCarousel;
