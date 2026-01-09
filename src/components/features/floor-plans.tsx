'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';

const floorPlan3BHK = PlaceHolderImages.find(p => p.id === 'floor-plan-3bhk');
const floorPlan4BHK = PlaceHolderImages.find(p => p.id === 'floor-plan-4bhk');

export function FloorPlans() {
  return (
    <section id="floor-plan" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Floor Plans</h2>
            <p className="text-muted-foreground mt-4 text-lg">Choose from a variety of spacious and well-designed floor plans to suit your family's needs.</p>
        </div>
        
        <Tabs defaultValue="3bhk" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="3bhk">3 BHK</TabsTrigger>
            <TabsTrigger value="4bhk">4 BHK</TabsTrigger>
          </TabsList>
          <TabsContent value="3bhk">
            <Card>
              <CardContent className="p-4 md:p-6">
                {floorPlan3BHK && (
                  <Image
                    src={floorPlan3BHK.imageUrl}
                    alt={floorPlan3BHK.description}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg"
                    data-ai-hint={floorPlan3BHK.imageHint}
                  />
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="4bhk">
            <Card>
              <CardContent className="p-4 md:p-6">
                {floorPlan4BHK && (
                  <Image
                    src={floorPlan4BHK.imageUrl}
                    alt={floorPlan4BHK.description}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg"
                    data-ai-hint={floorPlan4BHK.imageHint}
                  />
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
