import { motion } from "framer-motion";
import type { Category } from "@/data/mockData";

interface CategoryIconProps {
  category: Category;
  index: number;
}

const CategoryIcon = ({ category, index }: CategoryIconProps) => {
  const Icon = category.icon;

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      whileHover={{ y: -6, scale: 1.05 }}
      whileTap={{ scale: 0.93 }}
      className="flex flex-col items-center gap-2 p-3 rounded-2xl cursor-pointer group transition-shadow hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center group-hover:bg-primary/15 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <span className="text-xs font-medium text-foreground text-center leading-tight">
        {category.name}
      </span>
    </motion.button>
  );
};

export default CategoryIcon;
