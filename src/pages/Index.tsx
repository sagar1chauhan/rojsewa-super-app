import { motion } from "framer-motion";
import { Bell } from "lucide-react";
import TopNavbar from "@/components/rojsewa/TopNavbar";
import BottomNavBar from "@/components/rojsewa/BottomNavBar";
import LocationHeader from "@/components/rojsewa/LocationHeader";
import EmergencyButton from "@/components/rojsewa/EmergencyButton";
import GlobalSearchBar from "@/components/rojsewa/GlobalSearchBar";
import CategoryIcon from "@/components/rojsewa/CategoryIcon";
import ServiceCard from "@/components/rojsewa/ServiceCard";
import OfferCarousel from "@/components/rojsewa/OfferCarousel";
import { categories, featuredServices } from "@/data/mockData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Top Navbar */}
      <TopNavbar />

      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 sticky top-0 z-50 glass border-b border-border/50">
        <LocationHeader />
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-extrabold tracking-tight">
            <span className="text-primary">Roj</span>
            <span className="text-secondary">Sewa</span>
          </h1>
        </div>
        <button className="p-2 rounded-xl hover:bg-muted transition-colors relative">
          <Bell className="w-5 h-5 text-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-emergency rounded-full" />
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10 pb-24 md:pb-10">
        {/* Hero Emergency Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <EmergencyButton />
        </motion.section>

        {/* Search Bar */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mt-6"
        >
          <GlobalSearchBar />
        </motion.section>

        {/* Category Grid */}
        <section className="mt-8">
          <h2 className="text-lg font-bold text-foreground mb-4">All Services</h2>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2">
            {categories.map((cat, i) => (
              <CategoryIcon key={cat.id} category={cat} index={i} />
            ))}
          </div>
        </section>

        {/* Offers */}
        <section className="mt-8">
          <h2 className="text-lg font-bold text-foreground mb-4">🔥 Offers For You</h2>
          <OfferCarousel />
        </section>

        {/* Featured Services */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-foreground">⭐ Popular Services</h2>
            <button className="text-sm text-primary font-semibold hover:underline">View All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
            {featuredServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </section>
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
};

export default Index;
