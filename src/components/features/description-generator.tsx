'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { handleGenerateDescription } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Bot, Clipboard, Check } from 'lucide-react';
import type { GeneratePropertyDescriptionInput } from '@/ai/flows/generate-property-description';

const descriptionSchema = z.object({
  propertyType: z.string().min(1, 'Property type is required.'),
  location: z.string().min(1, 'Location is required.'),
  numberOfBedrooms: z.coerce.number().min(0, 'Must be 0 or more.'),
  numberOfBathrooms: z.coerce.number().min(0, 'Must be 0 or more.'),
  squareFootage: z.coerce.number().min(1, 'Square footage is required.'),
  amenities: z.string().min(1, 'Amenities are required.'),
  uniqueFeatures: z.string().min(1, 'Unique features are required.'),
});


export function DescriptionGenerator() {
  const [generatedDescription, setGeneratedDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<GeneratePropertyDescriptionInput>({
    resolver: zodResolver(descriptionSchema),
    defaultValues: {
      propertyType: 'Modern Apartment',
      location: 'Downtown Tech City',
      numberOfBedrooms: 2,
      numberOfBathrooms: 2,
      squareFootage: 1200,
      amenities: 'Rooftop pool, 24/7 gym, smart home integration',
      uniqueFeatures: 'Floor-to-ceiling windows, panoramic city views, custom Italian cabinetry',
    },
  });

  const onSubmit: SubmitHandler<GeneratePropertyDescriptionInput> = async (data) => {
    setIsLoading(true);
    setGeneratedDescription('');
    const result = await handleGenerateDescription(data);
    setIsLoading(false);

    if (result.success && result.data) {
      setGeneratedDescription(result.data);
    } else {
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: result.error || 'An unexpected error occurred.',
      });
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedDescription);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };


  return (
    <section id="ai-tools" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">For Agents: AI Copywriter</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Effortlessly craft compelling property listings. Our AI analyzes your property's features to generate descriptions that attract and engage buyers.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Enter Property Details</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField control={form.control} name="propertyType" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Property Type</FormLabel>
                        <FormControl><Input placeholder="e.g., House, Condo" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="location" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl><Input placeholder="e.g., City, Neighborhood" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="numberOfBedrooms" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bedrooms</FormLabel>
                        <FormControl><Input type="number" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="numberOfBathrooms" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bathrooms</FormLabel>
                        <FormControl><Input type="number" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <FormField control={form.control} name="squareFootage" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Square Footage</FormLabel>
                      <FormControl><Input type="number" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="amenities" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amenities</FormLabel>
                      <FormControl><Textarea placeholder="e.g., Pool, Gym, Parking" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="uniqueFeatures" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Unique Features</FormLabel>
                      <FormControl><Textarea placeholder="e.g., Ocean view, Smart home" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Bot className="mr-2 h-4 w-4" />
                    {isLoading ? 'Generating...' : 'Generate Description'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <div className="relative">
            <Card className="min-h-[500px] bg-background">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Generated Description</CardTitle>
                </CardHeader>
                <CardContent>
                    {isLoading && (
                        <div className="flex justify-center items-center h-64">
                            <Bot className="w-12 h-12 animate-pulse text-primary" />
                        </div>
                    )}
                    {generatedDescription && (
                        <div className="relative">
                            <Textarea
                                readOnly
                                value={generatedDescription}
                                className="h-80 text-base"
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-2 right-2"
                                onClick={handleCopy}
                            >
                                {isCopied ? <Check className="h-4 w-4 text-accent" /> : <Clipboard className="h-4 w-4" />}
                            </Button>
                        </div>
                    )}
                    {!isLoading && !generatedDescription && (
                        <div className="text-center text-muted-foreground py-20">
                            <p>Your AI-generated property description will appear here.</p>
                        </div>
                    )}
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
