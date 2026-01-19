'use client';

import { Hero } from '@/components/features/hero';
import { Overview } from '@/components/features/overview';
import { Amenities } from '@/components/features/amenities';
import { Gallery } from '@/components/features/gallery';
import { Contact } from '@/components/features/contact';
import { Pricing } from '@/components/features/pricing';
import { Location } from '@/components/features/location';
import { FloatingForm } from '@/components/features/floating-form';
import { SiteAndFloorPlan } from '@/components/features/site-and-floor-plan';
import { VirtualTour } from '@/components/features/virtual-tour';
import { Faq } from '@/components/features/faq';
import { Article } from '@/components/features/article';
import { SeoLinks } from '@/components/features/seo-links';

export default function Home() {
  return (
    <div className="flex">
      <div className="flex-grow lg:mr-96">
        <Hero />
        <main>
          <Overview />
          <Pricing />
          <SiteAndFloorPlan />
          <Amenities />
          <Location />
          <Gallery />
          <VirtualTour />
          <Article />
          <SeoLinks />
          <Faq />
          <Contact />
        </main>
      </div>
      <FloatingForm />
    </div>
  );
}
