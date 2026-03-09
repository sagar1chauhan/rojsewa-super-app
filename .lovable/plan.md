

# Rojsewa Super App — Screen 1: Dynamic Home Page

## Design System Setup
- **Primary colors:** Vibrant Green (`#22C55E` range) for trust/actions, Bright Yellow (`#FACC15` range) for energy/emergency
- **Font:** Inter (Google Fonts) with clear hierarchy
- **Install Framer Motion** for animations
- **Glassmorphism** effects on floating components (bottom nav, popups)
- **Green-tinted skeleton loaders** for shimmer effects

## Theme Configuration
- Custom Tailwind theme with green/yellow palette, extended animations (pulse-glow, bloop, fade-in, slide-up)
- CSS variables for the Rojsewa brand colors

## Components to Build

### Layout Components
- **`<TopNavbar />`** — Desktop: sleek top bar with logo, search, location, profile
- **`<BottomNavBar />`** — Mobile: sticky glassmorphic bottom nav with Home, Search, Bookings, Profile icons (with Framer Motion tap animations)
- **`<LocationHeader />`** — Auto-detect location display with manual city select dropdown

### Home Page Sections
1. **Hero Section** with pulsing **`<EmergencyButton />`** — large "Emergency Service 24x7" button with animated yellow/red glow ring, scale-on-tap effect
2. **`<GlobalSearchBar />`** — Search input with rotating animated placeholder text ("Search Plumber...", "Search Salon...", etc.)
3. **`<CategoryGrid />`** — 20+ service categories in a beautiful icon grid using Lucide icons (Scissors for Salon, Wrench for Repair, Stethoscope for Medical, etc.) with hover-lift animations
4. **Featured/Popular Services section** — Horizontal scrollable cards with `<ServiceCard />` components
5. **Active Offers Banner** — Carousel of promotional banners with yellow accent

### Reusable Components
- **`<ServiceCard />`** — Card with image, title, rating, price, "Book Now" button with bloop animation
- **`<EmergencyButton />`** — Pulsing emergency CTA with Framer Motion glow animation
- **`<CategoryIcon />`** — Individual category item with icon, label, and hover-lift effect
- **`<SkeletonLoader />`** — Green-tinted shimmer placeholder

## Responsive Behavior
- **Mobile:** App-like feel, bottom nav, full-width sections, compact category grid (4 columns)
- **Tablet:** Hybrid layout, wider cards
- **Desktop:** Top navbar, wider grid (5-6 columns), dashboard feel with sidebar potential

## Animations
- Framer Motion page transitions (fade + slide)
- Button bloop effect (scale 0.95 on press)
- Emergency button: infinite soft pulse glow
- Category icons: hover scale + shadow lift
- Search placeholder: typewriter-style cycling text
- Skeleton loaders: green shimmer wave

## Mock Data
- 20+ hardcoded categories with names, icons, and descriptions
- Sample featured services with ratings, prices, provider names
- Sample offer banners

