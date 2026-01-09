'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"
import { BrochurePopup } from './brochure-popup';

const galleryImages = [
  PlaceHolderImages.find(p => p.id === 'gallery-1'),
  PlaceHolderImages.find(p => p.id === 'gallery-2'),
  PlaceHolderImages.find(p => p.id === 'gallery-3'),
  PlaceHolderImages.find(p => p.id === 'gallery-4'),
  PlaceHolderImages.find(p => p.id === 'gallery-5'),
  PlaceHolderImages.find(p => p.id === 'gallery-6'),
].filter(Boolean);

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
