'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

export function Overview() {
  const overviewImage = PlaceHolderImages.find(p => p.id === 'overview-image');

  return (
    <section id="overview" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6">Project Overview</h2>
            <div className="text-muted-foreground space-y-4 text-lg">
              <p>Prestige Crystal Lawns is a new-age residential project that offers a blend of luxury, comfort, and tranquility. Spread across a vast expanse of lush greenery, this project is designed to provide a serene living experience amidst the hustle and bustle of the city.</p>
              <p>The project features meticulously designed 3 and 4 BHK apartments that are spacious, well-ventilated, and compliant with Vaastu principles. Every apartment is crafted to perfection with high-quality fittings and finishes, ensuring a lifestyle that is nothing short of extraordinary.</p>
            </div>
          </div>
          <div className="w-full">
            {overviewImage && (
              <Card className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={overviewImage.imageUrl}
                  alt={overviewImage.description}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  data-ai-hint={overviewImage.imageHint}
                />
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
