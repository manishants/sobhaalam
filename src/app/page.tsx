import { Hero } from '@/components/features/hero';
import { Overview } from '@/components/features/overview';
import { Highlights } from '@/components/features/highlights';
import { Amenities } from '@/components/features/amenities';
import { Gallery } from '@/components/features/gallery';
import { Contact } from '@/components/features/contact';
import { Pricing } from '@/components/features/pricing';
import { Location } from '@/components/features/location';
import { FloatingForm } from '@/components/features/floating-form';
import { SiteAndFloorPlan } from '@/components/features/site-and-floor-plan';

// Placeholder for Virtual Site Tour
const VirtualTour = () => (
  <section id="virtual-tour" className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Virtual Site Tour</h2>
      <p className="text-muted-foreground mt-4 text-lg">Coming Soon! Explore the property from the comfort of your home.</p>
    </div>
  </section>
);


export default function Home() {
  return (
    <div className="flex">
      <div className="flex-grow lg:mr-96">
        <Hero />
        <main className="overflow-x-hidden">
          <Overview />
          <Pricing />
          <SiteAndFloorPlan />
          <Highlights />
          <Location />
          <Amenities />
          <Gallery />
          <VirtualTour />
          <Contact />
        </main>
      </div>
      <FloatingForm />
    </div>
  );
}
