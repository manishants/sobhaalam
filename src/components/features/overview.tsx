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
            <p className="text-muted-foreground mt-2 text-lg">At Hoskote, Bangalore</p>
            <div className="text-foreground/80 space-y-4 text-lg mt-6 max-w-4xl">
              <p>Sobha Hoskote is a new-age residential plotted development project that offers a blend of luxury, comfort, and tranquility. Spread across a vast expanse of lush greenery, this project is designed to provide a serene living experience amidst the burgeoning hub of Hoskote.</p>
              <p>The project features meticulously planned plots of various sizes, allowing you to build your dream home. It is compliant with all regulatory principles, ensuring a lifestyle that is nothing short of extraordinary with Sobha Limited's commitment to quality and perfection.</p>
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
