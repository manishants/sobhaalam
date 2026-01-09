'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PlayCircle } from 'lucide-react';
import { Dialog, DialogTrigger } from '../ui/dialog';
import { BrochurePopup } from './brochure-popup';

export function VirtualTour() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'master-plan-image');

  return (
    <section id="virtual-tour" className="relative py-20 md:py-36 text-white bg-card">
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          className="object-cover"
          data-ai-hint={bgImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Dialog>
            <DialogTrigger asChild>
                <div className="inline-block cursor-pointer group">
                    <PlayCircle className="h-24 w-24 mx-auto text-white/80 group-hover:text-primary group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
                </div>
            </DialogTrigger>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mt-4">VIRTUAL TOUR</h2>
            <p className="text-lg mt-2 text-muted-foreground">Prestige Crystal Lawns At IVC Road, Bangalore</p>
            <BrochurePopup />
        </Dialog>
      </div>
    </section>
  );
}
