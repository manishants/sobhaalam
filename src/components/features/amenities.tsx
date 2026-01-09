'use client';

import { Dumbbell, Waves, TreePine, Gamepad2, PartyPopper, ShieldCheck, Car, Footprints } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { BrochurePopup } from "./brochure-popup";

const amenitiesList = [
  { icon: Waves, name: "Swimming Pool" },
  { icon: Dumbbell, name: "Gymnasium" },
  { icon: PartyPopper, name: "Clubhouse" },
  { icon: Gamepad2, name: "Games Room" },
  { icon: TreePine, name: "Landscaped Gardens" },
  { icon: Footprints, name: "Jogging Track" },
  { icon: ShieldCheck, name: "24/7 Security" },
  { icon: Car, name: "Covered Parking" },
];

export function Amenities() {
  return (
    <section id="amenities" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">World-Class Amenities</h2>
            <p className="text-muted-foreground mt-4 text-lg">Indulge in a lifestyle of comfort and convenience with a wide range of modern amenities.</p>
        </div>
        <Dialog>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {amenitiesList.map((amenity, index) => (
                <DialogTrigger asChild key={index}>
                    <Card className="text-center p-6 flex flex-col items-center justify-center transition-all duration-300 hover:bg-primary/10 hover:shadow-lg hover:-translate-y-1 cursor-pointer group bg-card/50 backdrop-blur-sm border-border/50">
                      <CardContent className="p-0 flex flex-col items-center gap-4">
                        <div className="bg-primary/20 p-4 rounded-full relative group-hover:scale-110 transition-transform">
                           <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                          <amenity.icon className="w-8 h-8 text-primary relative" />
                        </div>
                        <p className="font-semibold text-lg text-foreground">{amenity.name}</p>
                      </CardContent>
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
