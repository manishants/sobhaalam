import Image from 'next/image';
import type { Property } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BedDouble, Bath, Square, MapPin } from 'lucide-react';

type PropertyCardProps = {
  property: Property;
  index: number;
};

export function PropertyCard({ property, index }: PropertyCardProps) {
  const placeholderImage = PlaceHolderImages.find(p => p.id === `property-${(index % 4) + 1}`) || PlaceHolderImages[0];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="aspect-video relative">
          <Image
            src={placeholderImage.imageUrl}
            alt={property.description}
            fill
            className="object-cover"
            data-ai-hint={placeholderImage.imageHint}
          />
          <Badge variant="secondary" className="absolute top-4 left-4 text-lg">{formatPrice(property.price)}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <CardTitle className="font-headline text-xl truncate">{property.address}</CardTitle>
        <p className="text-muted-foreground text-sm line-clamp-2">{property.description}</p>
        <div className="flex items-center text-muted-foreground text-sm pt-2 gap-4">
            <div className="flex items-center gap-1.5" title={`${property.bedrooms} Bedrooms`}>
                <BedDouble className="w-4 h-4 text-accent"/>
                <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1.5" title={`${property.bathrooms} Bathrooms`}>
                <Bath className="w-4 h-4 text-accent"/>
                <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1.5" title={`${property.squareFeet} sq ft`}>
                <Square className="w-4 h-4 text-accent"/>
                <span>{property.squareFeet.toLocaleString()} sq ft</span>
            </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex flex-wrap gap-2">
          {property.amenities.slice(0, 3).map((amenity, i) => (
            <Badge key={i} variant="outline" className="font-normal">{amenity}</Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
