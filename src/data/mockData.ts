import {
  Scissors, Wrench, Stethoscope, Home, Zap, Truck, Paintbrush,
  UtensilsCrossed, Baby, Dog, Flower2, BookOpen, Dumbbell,
  Car, ShieldCheck, Landmark, Camera, Music, Shirt, Hammer,
  type LucideIcon,
} from "lucide-react";

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  color: string;
}

export interface FeaturedService {
  id: string;
  title: string;
  provider: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isVerified: boolean;
}

export interface OfferBanner {
  id: string;
  title: string;
  subtitle: string;
  discount: string;
  code: string;
}

export const categories: Category[] = [
  { id: "salon", name: "Salon & Spa", icon: Scissors, description: "Haircut, Facial, Massage", color: "hsl(var(--primary))" },
  { id: "appliance", name: "Appliance Repair", icon: Wrench, description: "AC, Fridge, Washing Machine", color: "hsl(var(--primary))" },
  { id: "medical", name: "Medical", icon: Stethoscope, description: "Doctor, Lab Test, Pharmacy", color: "hsl(var(--primary))" },
  { id: "home", name: "Home Maintenance", icon: Home, description: "Plumber, Electrician, Carpenter", color: "hsl(var(--primary))" },
  { id: "electrician", name: "Electrician", icon: Zap, description: "Wiring, Switches, MCB", color: "hsl(var(--primary))" },
  { id: "shifting", name: "Packers & Movers", icon: Truck, description: "Home Shifting, Office Move", color: "hsl(var(--primary))" },
  { id: "painting", name: "Painting", icon: Paintbrush, description: "Interior, Exterior, Texture", color: "hsl(var(--primary))" },
  { id: "catering", name: "Catering", icon: UtensilsCrossed, description: "Party, Wedding, Corporate", color: "hsl(var(--primary))" },
  { id: "babysitter", name: "Baby Care", icon: Baby, description: "Nanny, Babysitter, Daycare", color: "hsl(var(--primary))" },
  { id: "petcare", name: "Pet Care", icon: Dog, description: "Grooming, Vet, Walking", color: "hsl(var(--primary))" },
  { id: "decoration", name: "Decoration", icon: Flower2, description: "Wedding, Birthday, Events", color: "hsl(var(--primary))" },
  { id: "pandit", name: "Pandit Ji", icon: BookOpen, description: "Puja, Havan, Ceremonies", color: "hsl(var(--primary))" },
  { id: "fitness", name: "Fitness", icon: Dumbbell, description: "Personal Trainer, Yoga", color: "hsl(var(--primary))" },
  { id: "mechanic", name: "Mechanic", icon: Car, description: "Car, Bike Repair, Service", color: "hsl(var(--primary))" },
  { id: "security", name: "Security", icon: ShieldCheck, description: "Guard, CCTV, Alarm", color: "hsl(var(--primary))" },
  { id: "realestate", name: "Real Estate", icon: Landmark, description: "Rent, Buy, Sell Property", color: "hsl(var(--primary))" },
  { id: "photography", name: "Photography", icon: Camera, description: "Wedding, Event, Portrait", color: "hsl(var(--primary))" },
  { id: "events", name: "Event Planning", icon: Music, description: "DJ, Anchor, Sound System", color: "hsl(var(--primary))" },
  { id: "laundry", name: "Laundry", icon: Shirt, description: "Dry Clean, Iron, Wash", color: "hsl(var(--primary))" },
  { id: "labor", name: "Daily Labor", icon: Hammer, description: "Helper, Mason, Welder", color: "hsl(var(--primary))" },
];

export const featuredServices: FeaturedService[] = [
  { id: "1", title: "Men's Premium Haircut", provider: "Royal Salon", rating: 4.8, reviews: 342, price: 199, originalPrice: 399, image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop", category: "Salon & Spa", isVerified: true },
  { id: "2", title: "Full AC Service", provider: "CoolTech Repairs", rating: 4.6, reviews: 218, price: 499, originalPrice: 899, image: "https://images.unsplash.com/photo-1631545806609-05a82e4a3429?w=400&h=300&fit=crop", category: "Appliance Repair", isVerified: true },
  { id: "3", title: "Complete Home Cleaning", provider: "SparkleHome", rating: 4.9, reviews: 567, price: 999, originalPrice: 1499, image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop", category: "Home Maintenance", isVerified: false },
  { id: "4", title: "Wedding Photography", provider: "PixelPerfect Studio", rating: 4.7, reviews: 89, price: 14999, originalPrice: 24999, image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop", category: "Photography", isVerified: true },
  { id: "5", title: "Pest Control Service", provider: "BugFree Solutions", rating: 4.5, reviews: 156, price: 799, originalPrice: 1299, image: "https://images.unsplash.com/photo-1632935190508-1f1e30a08608?w=400&h=300&fit=crop", category: "Home Maintenance", isVerified: true },
  { id: "6", title: "Bridal Makeup Package", provider: "Glamour Studio", rating: 4.9, reviews: 423, price: 4999, originalPrice: 7999, image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop", category: "Salon & Spa", isVerified: true },
];

export const offerBanners: OfferBanner[] = [
  { id: "1", title: "First Booking Offer!", subtitle: "Get flat discount on your first service", discount: "50% OFF", code: "WELCOME50" },
  { id: "2", title: "Summer Special", subtitle: "AC service & repair at lowest prices", discount: "₹200 OFF", code: "SUMMER200" },
  { id: "3", title: "Refer & Earn", subtitle: "Invite friends and earn wallet cashback", discount: "₹100 Each", code: "REFER100" },
];

export const cities = [
  "Delhi NCR", "Mumbai", "Bangalore", "Hyderabad", "Chennai",
  "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
  "Patna", "Ranchi", "Bhopal", "Indore", "Chandigarh",
];

export const searchPlaceholders = [
  "Search Plumber...",
  "Search Salon near you...",
  "Search AC Repair...",
  "Search Electrician...",
  "Search Doctor...",
  "Search Painter...",
  "Search Caterer...",
];
