'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useFirebase } from '@/firebase';
import { addDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { collection } from 'firebase/firestore';
import { Textarea } from '../ui/textarea';

const preRegisterSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  mobile: z.string().min(10, 'Valid mobile number is required.'),
  email: z.string().email('Invalid email address.'),
  comment: z.string().optional(),
});

type PreRegisterFormValues = z.infer<typeof preRegisterSchema>;

export function Hero() {
  const { toast } = useToast();
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  const { firestore } = useFirebase();

  const form = useForm<PreRegisterFormValues>({
    resolver: zodResolver(preRegisterSchema),
    defaultValues: { name: '', mobile: '', email: '', comment: '' },
  });

  const { formState: { isSubmitting } } = form;

  const onSubmit: SubmitHandler<PreRegisterFormValues> = async (data) => {
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
      type: 'pre_register',
      submissionDate: new Date().toISOString(),
    };
    
    addDocumentNonBlocking(collection(firestore, 'contact_form_submissions'), submissionData);

    toast({
      title: 'Request Received!',
      description: "Thank you for registering! We will get back to you with the best offers.",
    });
    form.reset();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white py-16 md:py-24">
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
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Column */}
        <div className="bg-background/80 backdrop-blur-sm text-foreground p-6 md:p-8 rounded-lg">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Booking Open</p>
            <h1 className="text-3xl md:text-4xl font-bold font-headline mt-2">
                Prestige Crystal Lawns
            </h1>
            <p className="text-lg text-muted-foreground mt-1">At IVC Road, Bangalore</p>
            <p className="text-sm text-muted-foreground">By Prestige Group</p>

            <div className="grid grid-cols-3 gap-4 mt-6 text-sm">
                <div>
                    <p className="font-semibold">Development Size</p>
                    <p>24 Acres</p>
                </div>
                <div>
                    <p className="font-semibold">No. of Units</p>
                    <p>235 Units</p>
                </div>
                <div>
                    <p className="font-semibold">Possession</p>
                    <p>August 2029 Onwards</p>
                </div>
            </div>

            <div className="mt-6 border-t border-border pt-6">
                <div className="bg-black text-white p-2 text-center text-sm font-semibold">
                    MOST AWAITED LAUNCH
                </div>
                <div className="bg-primary/20 text-primary-foreground p-4 mt-2 text-center">
                    <p className="font-bold">Pre Launching Residential Plots</p>
                    <p className="text-sm">Avail Special Launch offers Limited Units Only</p>
                </div>
            </div>

            <div className="mt-6 text-center">
                <p className="font-semibold">30X50, 60X40, 50X80 Plots</p>
                <p className="text-4xl font-bold mt-2">₹ 1.38 Cr* Onwards</p>
                <Button size="lg" className="mt-4 w-full md:w-auto">Enquire Now</Button>
                <p className="text-xs text-muted-foreground mt-2">Rera: PR/300925/008132</p>
            </div>
        </div>

        {/* Right Column */}
        <div className="row-start-1 lg:col-start-2">
            <Card className="bg-background/80 backdrop-blur-sm text-foreground">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-headline">Pre-Register here for Best Offers</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Name*" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                             <FormField
                                control={form.control}
                                name="mobile"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center">
                                            <span className="border border-r-0 border-input bg-muted px-3 py-2 rounded-l-md text-sm">+91</span>
                                            <FormControl>
                                                <Input type="tel" placeholder="Mobile No*" {...field} className="rounded-l-none"/>
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input type="email" placeholder="E-Mail Address*" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                             <FormField
                                control={form.control}
                                name="comment"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea placeholder="Comment" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" disabled={isSubmitting} className="w-full bg-black hover:bg-gray-800 text-white font-bold">
                                {isSubmitting ? 'Submitting...' : 'SUBMIT'}
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
