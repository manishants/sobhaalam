'use client';

import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const highlights = [
  "Spacious 3 & 4 BHK Apartments",
  "World-Class Amenities",
  "80% Open Space",
  "Vaastu Compliant Homes",
  "Excellent Connectivity",
  "Proximity to IT Hubs",
  "High-end Security System",
  "Sustainable & Green Living",
];

export function Highlights() {
  return (
    <section id="highlights" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Crystal Lawns Highlights</h2>
            <p className="text-muted-foreground mt-4 text-lg">Discover the key features that make Prestige Crystal Lawns the perfect place to call home.</p>
        </div>
        <Card className="shadow-lg">
            <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
                    {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <span className="text-lg text-foreground">{highlight}</span>
                    </div>
                    ))}
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
