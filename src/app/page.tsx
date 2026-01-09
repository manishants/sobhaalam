'use client';

import { useState } from 'react';
import type { Property } from '@/lib/types';
import { Hero } from '@/components/features/hero';
import { PropertyListings } from '@/components/features/property-listings';
import { FeaturesGrid } from '@/components/features/features-grid';
import { DescriptionGenerator } from '@/components/features/description-generator';
import { ContactForm } from '@/components/features/contact-form';

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="overflow-x-hidden">
      <Hero 
        setIsLoading={setIsLoading} 
        setProperties={setProperties}
        setError={setError}
      />
      <PropertyListings 
        isLoading={isLoading} 
        properties={properties} 
        error={error}
      />
      <FeaturesGrid />
      <DescriptionGenerator />
      <ContactForm />
    </div>
  );
}
