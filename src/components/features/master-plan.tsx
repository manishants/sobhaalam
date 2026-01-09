'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

export function MasterPlan() {
  const masterPlanImage = PlaceHolderImages.find(p => p.id === 'master-plan-image');
  
  return (
    <section id="master-plan" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Master Plan</h2>
            <p className="text-muted-foreground mt-4 text-lg">Explore the thoughtfully designed layout of Prestige Crystal Lawns, balancing architecture and nature.</p>
        </div>
        {masterPlanImage && (
            <Card className="overflow-hidden rounded-lg shadow-xl">
                <Image
                    src={masterPlanImage.imageUrl}
                    alt={masterPlanImage.description}
                    width={1000}
                    height={700}
                    className="w-full h-auto object-contain"
                    data-ai-hint={masterPlanImage.imageHint}
                />
            </Card>
        )}
      </div>
    </section>
  );
}
