'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Map, Camera } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const mapImage = PlaceHolderImages.find(p => p.id === 'map-background');
const tourImage = PlaceHolderImages.find(p => p.id === 'virtual-tour-1');

const features = [
  {
    icon: Map,
    title: "Interactive Map",
    description: "Explore properties with our AI-enhanced map. Get insights on neighborhoods, amenities, and market trends in real-time.",
    image: mapImage,
    imageHint: mapImage?.imageHint,
  },
  {
    icon: Camera,
    title: "Immersive Virtual Tours",
    description: "Step inside your future home from anywhere. Our high-fidelity 3D tours provide a realistic and detailed viewing experience.",
    image: tourImage,
    imageHint: tourImage?.imageHint,
  }
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Discover the Future of Real Estate</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Our platform leverages cutting-edge technology to provide an unparalleled property discovery experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                  <CardHeader className="flex-row items-center gap-4">
                    <feature.icon className="w-8 h-8 text-accent flex-shrink-0" />
                    <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    {feature.image && (
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <Image
                          src={feature.image.imageUrl}
                          alt={feature.description}
                          width={600}
                          height={400}
                          data-ai-hint={feature.imageHint}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 border-0">
                <DialogHeader className="p-4">
                  <DialogTitle className="font-headline text-2xl">{feature.title}</DialogTitle>
                </DialogHeader>
                {feature.image && (
                  <div className="aspect-video w-full">
                     <Image
                          src={feature.image.imageUrl}
                          alt={feature.description}
                          fill
                          data-ai-hint={feature.imageHint}
                          className="object-cover"
                        />
                  </div>
                )}
                <p className="p-4 text-muted-foreground">{feature.description}</p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
