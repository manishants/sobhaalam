import type { Property } from '@/lib/types';
import { PropertyCard } from './property-card';
import { Skeleton } from '@/components/ui/skeleton';
import { Bot } from 'lucide-react';

type PropertyListingsProps = {
  properties: Property[];
  isLoading: boolean;
  error: string | null;
};

function PropertySkeleton() {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[225px] w-full rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    )
}

export function PropertyListings({ properties, isLoading, error }: PropertyListingsProps) {
  if (isLoading) {
    return (
      <section id="properties" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => <PropertySkeleton key={i} />)}
            </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="properties" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto bg-card p-8 rounded-lg">
                <h3 className="font-headline text-xl text-destructive-foreground mb-4">Search Error</h3>
                <p className="text-muted-foreground">{error}</p>
            </div>
        </div>
      </section>
    );
  }

  if (!properties || properties.length === 0) {
    return (
      <section id="properties" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto p-8 rounded-lg">
                <Bot className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4"/>
                <h3 className="font-headline text-xl text-primary mb-2">Start Your Search</h3>
                <p className="text-muted-foreground">Describe your ideal home in the search bar above to see AI-powered results.</p>
            </div>
        </div>
      </section>
    );
  }

  return (
    <section id="properties" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-8 text-center">AI-Powered Matches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={property.address + index} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
