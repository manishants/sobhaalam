'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Dialog, DialogTrigger } from '../ui/dialog';
import { BrochurePopup } from './brochure-popup';

export function Location() {
  const mapImage = PlaceHolderImages.find(p => p.id === 'location-map');
  const projectLocationUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.13123041525!2d77.63398631526656!3d13.0910972907789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1971261a8a27%3A0x4642b323c6214151!2sPrestige%20Crystal%20Lawns!5e0!3m2!1sen!2sin!4v1688800000000";

  return (
    <section id="location" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Location Advantage</h2>
            <p className="text-muted-foreground mt-4 text-lg">Strategically located to provide excellent connectivity to major IT hubs, schools, hospitals, and shopping centers.</p>
        </div>
        <Dialog>
          <div className="grid md:grid-cols-2 gap-8 items-center">
              <DialogTrigger asChild>
                <div className="cursor-pointer">
                  <h3 className="text-xl font-bold text-center mb-4">Map View</h3>
                  <Card className="overflow-hidden rounded-lg shadow-xl aspect-video">
                      <iframe
                          src={projectLocationUrl}
                          width="100%"
                          height="100%"
                          style={{ border:0 }}
                          allowFullScreen={false}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                  </Card>
                </div>
              </DialogTrigger>
              <DialogTrigger asChild>
                <div className="cursor-pointer">
                  <h3 className="text-xl font-bold text-center mb-4">Location Map</h3>
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
              </DialogTrigger>
          </div>
          <BrochurePopup />
        </Dialog>
      </div>
    </section>
  );
}
