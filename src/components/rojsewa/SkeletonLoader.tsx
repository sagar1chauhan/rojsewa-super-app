import { cn } from "@/lib/utils";

interface SkeletonLoaderProps {
  className?: string;
}

const SkeletonLoader = ({ className }: SkeletonLoaderProps) => {
  return (
    <div className={cn("rounded-2xl skeleton-shimmer", className)} />
  );
};

export default SkeletonLoader;
