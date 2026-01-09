'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { BrochurePopup } from './brochure-popup';
import { Download } from 'lucide-react';

export function Overview() {

  return (
    <section id="overview" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-full text-left">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Prestige Crystal Lawns</h2>
            <p className="text-muted-foreground mt-2 text-lg">At IVC Road, Bangalore</p>
            <div className="text-foreground/80 space-y-4 text-lg mt-6 max-w-4xl">
              <p>Prestige Crystal Lawns is a new-age residential project that offers a blend of luxury, comfort, and tranquility. Spread across a vast expanse of lush greenery, this project is designed to provide a serene living experience amidst the hustle and bustle of the city.</p>
              <p>The project features meticulously designed 3 and 4 BHK apartments that are spacious, well-ventilated, and compliant with Vaastu principles. Every apartment is crafted to perfection with high-quality fittings and finishes, ensuring a lifestyle that is nothing short of extraordinary.</p>
            </div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button size="lg" className="mt-8 font-bold">
                        <Download className="mr-2 h-5 w-5 animate-bounce" />
                        Download Brochure
                    </Button>
                </DialogTrigger>
                <BrochurePopup />
            </Dialog>
        </div>
      </div>
    </section>
  );
}
