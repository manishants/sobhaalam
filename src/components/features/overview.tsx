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
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Sobha Hoskote</h2>
            <p className="text-muted-foreground mt-2 text-lg">OMR Road, Hoskote Toll Gate, Bangalore</p>
            <div className="text-foreground/80 space-y-4 text-lg mt-6 max-w-4xl">
              <p>Welcome to <strong>Sobha Hoskote</strong>, an iconic upcoming residential project by Sobha Limited, set to redefine the East Bengaluru skyline. Located strategically on Old Madras Road (NH-75), this landmark development features the tallest residential towers in the region, soaring up to 53 floors. Spanning a vast 48-acre land parcel, Sobha Hoskote is a pre-launch marvel offering a unique blend of luxury, connectivity, and futuristic living.</p>
              <p>Discover a curated collection of 5,406 premium 1, 2, 3, & 4 BHK apartments, meticulously designed for those who seek an extraordinary lifestyle. Beyond residences, the project integrates a G+2 retail building and a G+4 commercial complex, creating a self-sustained community. Embrace the pinnacle of architectural excellence and urban convenience at <strong>Sobha Hoskote</strong>, where your dream home awaits.</p>
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
