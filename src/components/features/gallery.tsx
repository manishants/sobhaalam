'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"
import { BrochurePopup } from './brochure-popup';

// Use local WebP assets from public/images for the gallery
const galleryImages = [
  { id: 'banner', imageUrl: '/images/sobha-hoskote-banner.webp', description: 'Sobha Hoskote banner', imageHint: 'gallery' },
  { id: 'exterior', imageUrl: '/images/sobha-hoskote-exterior.webp', description: 'Exterior elevation', imageHint: 'gallery' },
  { id: 'hall', imageUrl: '/images/sobha-hoskote-hall.webp', description: 'Interior hall', imageHint: 'gallery' },
  { id: 'hall1', imageUrl: '/images/sobha-hoskote-hall1.webp', description: 'Interior hall variant', imageHint: 'gallery' },
  { id: 'pool', imageUrl: '/images/sobha-hoskote-swimming-pool.webp', description: 'Swimming pool', imageHint: 'gallery' },
  { id: 'one', imageUrl: '/images/sobha-hoskote-1.webp', description: 'Sobha Hoskote view', imageHint: 'gallery' },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Project Gallery</h2>
            <p className="text-muted-foreground mt-4 text-lg">A glimpse into the stunning architecture and serene landscapes of Sobha Hoskote.</p>
        </div>
        <Dialog>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => image && (
                <DialogTrigger asChild key={index}>
                    <Card className="overflow-hidden group cursor-pointer border-border/50 bg-card/50">
                      <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover aspect-video transition-transform duration-300 group-hover:scale-110"
                          data-ai-hint={image.imageHint}
                      />
                    </Card>
                </DialogTrigger>
              ))}
            </div>
            <BrochurePopup />
        </Dialog>
      </div>
    </section>
  );
}
