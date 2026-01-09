'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useEffect, useState } from 'react';
import { Dialog, DialogTrigger } from '../ui/dialog';
import { BrochurePopup } from './brochure-popup';

const heroImages = [
  PlaceHolderImages.find(p => p.id === 'hero-background'),
  PlaceHolderImages.find(p => p.id === 'gallery-1'),
  PlaceHolderImages.find(p => p.id === 'gallery-2'),
  PlaceHolderImages.find(p => p.id === 'gallery-5'),
].filter(Boolean) as any[];


export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 1500); // Change image every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-start text-white py-16 md:py-24">
       {heroImages.map((image, index) => (
         <Image
            key={image.id}
            src={image.imageUrl}
            alt={image.description}
            fill
            className={`object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            priority={index === 0}
            data-ai-hint={image.imageHint}
          />
       ))}
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 container mx-auto px-4 w-full">
        
        <div className="bg-background/80 backdrop-blur-sm text-foreground p-6 md:p-8 rounded-lg max-w-lg shadow-2xl shadow-black/30">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Booking Open</p>
            <h1 className="text-3xl md:text-4xl font-bold font-headline mt-2 text-foreground">
                Prestige Crystal Lawns
            </h1>
            <p className="text-lg text-muted-foreground mt-1">At IVC Road, Bangalore</p>
            <p className="text-sm text-muted-foreground">By Prestige Group</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 text-sm text-muted-foreground">
                <div>
                    <p className="font-semibold text-foreground">Development Size</p>
                    <p>24 Acres</p>
                </div>
                <div>
                    <p className="font-semibold text-foreground">No. of Units</p>
                    <p>235 Units</p>
                </div>
                <div>
                    <p className="font-semibold text-foreground">Possession</p>
                    <p>August 2029 Onwards</p>
                </div>
            </div>

            <div className="mt-6 border-t border-border/50 pt-6">
                <div className="bg-black/80 text-white p-2 text-center text-sm font-semibold rounded-t-md">
                    MOST AWAITED LAUNCH
                </div>
                <div className="bg-primary/20 text-primary-foreground p-4 mt-0 text-center rounded-b-md">
                    <p className="font-bold text-primary">Pre Launching Residential Plots</p>
                    <p className="text-sm text-primary/80">Avail Special Launch offers Limited Units Only</p>
                </div>
            </div>

            <div className="mt-6 text-center">
                <p className="font-semibold text-foreground">30X50, 60X40, 50X80 Plots</p>
                <p className="text-4xl font-bold mt-2 text-primary drop-shadow-lg">₹ 1.38 Cr* Onwards</p>
                <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" className="mt-4 w-full md:w-auto font-bold text-lg">Enquire Now</Button>
                    </DialogTrigger>
                    <BrochurePopup />
                </Dialog>
                <p className="text-xs text-muted-foreground mt-2">Rera: PR/300925/008132</p>
            </div>
        </div>

      </div>
    </section>
  );
}
