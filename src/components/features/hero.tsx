'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useFirebase } from '@/firebase';
import { addDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { collection } from 'firebase/firestore';

const brochureSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  email: z.string().email('Invalid email address.'),
});

type BrochureFormValues = z.infer<typeof brochureSchema>;

export function Hero() {
  const { toast } = useToast();
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  const { firestore } = useFirebase();

  const form = useForm<BrochureFormValues>({
    resolver: zodResolver(brochureSchema),
    defaultValues: { name: '', email: '' },
  });

  const { formState: { isSubmitting } } = form;

  const onSubmit: SubmitHandler<BrochureFormValues> = async (data) => {
    if (!firestore) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Firestore is not available.",
      });
      return;
    }

    const submissionData = {
      ...data,
      type: 'brochure_request',
      submissionDate: new Date().toISOString(),
    };
    
    addDocumentNonBlocking(collection(firestore, 'contact_form_submissions'), submissionData);

    toast({
      title: 'Request Received!',
      description: "Thank you! The brochure will be sent to your email shortly.",
    });
    form.reset();
  };

  return (
    <section id="home" className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-white">
      {heroImage && (
         <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 animate-fade-in-down">
            Prestige Crystal Lawns
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-xl mx-auto md:mx-0 animate-fade-in-up">
            Experience luxurious living in the heart of the city with spacious apartments and world-class amenities.
          </p>
        </div>
        <div className="row-start-1 md:col-start-2">
            <Card className="bg-background/80 backdrop-blur-sm text-foreground">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-headline">Download Brochure</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="your.email@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
