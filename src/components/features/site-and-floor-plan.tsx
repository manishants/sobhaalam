'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { BrochurePopup } from './brochure-popup';

export function SiteAndFloorPlan() {
  const masterPlanImage = PlaceHolderImages.find(p => p.id === 'master-plan-image');
  const floorPlanImage = PlaceHolderImages.find(p => p.id === 'floor-plan-3bhk');
  
  return (
    <section id="master-plan" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Site & Floor Plan</h2>
            <p className="text-muted-foreground mt-4 text-lg">Explore the thoughtfully designed layout and spacious apartment plans of Sobha Hoskote.</p>
        </div>
        
        <Dialog>
            <div className="grid md:grid-cols-2 gap-8">
                {masterPlanImage && (
                    <DialogTrigger asChild>
                        <div className="cursor-pointer group">
                            <Card className="overflow-hidden rounded-lg shadow-xl bg-card/50 border-border/50">
                                <Image
                                    src={masterPlanImage.imageUrl}
                                    alt={masterPlanImage.description}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                                    data-ai-hint={masterPlanImage.imageHint}
                                />
                            </Card>
                            <h3 className="text-center font-bold text-xl mt-4 text-foreground">Master Plan</h3>
                        </div>
                    </DialogTrigger>
                )}
                 {floorPlanImage && (
                    <DialogTrigger asChild>
                         <div className="cursor-pointer group">
                            <Card className="overflow-hidden rounded-lg shadow-xl bg-card/50 border-border/50">
                                <Image
                                    src={floorPlanImage.imageUrl}
                                    alt={floorPlanImage.description}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                                    data-ai-hint={floorPlanImage.imageHint}
                                />
                            </Card>
                            <h3 className="text-center font-bold text-xl mt-4 text-foreground">Typical Floor Plan</h3>
                        </div>
                    </DialogTrigger>
                )}
            </div>
            <BrochurePopup />
        </Dialog>
      </div>
    </section>
  );
}
