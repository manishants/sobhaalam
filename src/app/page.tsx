import { Hero } from '@/components/features/hero';
import { Overview } from '@/components/features/overview';
import { Highlights } from '@/components/features/highlights';
import { MasterPlan } from '@/components/features/master-plan';
import { FloorPlans } from '@/components/features/floor-plans';
import { Amenities } from '@/components/features/amenities';
import { Gallery } from '@/components/features/gallery';
import { Contact } from '@/components/features/contact';
import { Pricing } from '@/components/features/pricing';
import { Location } from '@/components/features/location';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Overview />
      <Highlights />
      <Location />
      <MasterPlan />
      <FloorPlans />
      <Pricing />
      <Amenities />
      <Gallery />
      <Contact />
    </div>
  );
}
