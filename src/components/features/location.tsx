'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

export function Location() {
  const mapImage = PlaceHolderImages.find(p => p.id === 'location-map');
  
  return (
    <section id="location" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Location Advantage</h2>
            <p className="text-muted-foreground mt-4 text-lg">Strategically located to provide excellent connectivity to major IT hubs, schools, hospitals, and shopping centers.</p>
        </div>
        {mapImage && (
            <Card className="overflow-hidden rounded-lg shadow-xl">
                <Image
                    src={mapImage.imageUrl}
                    alt={mapImage.description}
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                    data-ai-hint={mapImage.imageHint}
                />
            </Card>
        )}
      </div>
    </section>
  );
}
