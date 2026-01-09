'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import { addDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { sendContactEmail } from '@/ai/flows/send-contact-email';
import { Car, Phone } from 'lucide-react';
import { Dialog, DialogTrigger } from '../ui/dialog';
import { BrochurePopup } from './brochure-popup';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const { toast } = useToast();
  const { firestore } = useFirebase();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', phone: '', message: '' },
  });

  const { formState: { isSubmitting } } = form;

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    // 1. Save to Firestore
    if (firestore) {
      const submissionData = {
          ...data,
          submissionDate: new Date().toISOString(),
          formType: 'Contact Us',
      };
      addDocumentNonBlocking(collection(firestore, 'contact_form_submissions'), submissionData);
    } else {
       console.warn("Firestore is not available. Skipping database submission.");
    }
    
    // 2. Send email via Genkit flow
    const emailResult = await sendContactEmail({ ...data, formType: 'Contact Us', to: 'manishants@gmail.com' });

    if (emailResult.success) {
        toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. We will get back to you shortly.",
        });
    } else {
        toast({
            variant: "destructive",
            title: "Something went wrong",
            description: "There was an issue sending your message. Please try again later.",
        });
    }

    form.reset();
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <Dialog>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <Car className="mx-auto md:mx-0 text-primary h-24 w-24 mb-6" />
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Book a Free Site Visit</h2>
                    <p className="text-muted-foreground mt-4 text-lg">Experience Prestige Crystal Lawns firsthand. We offer complimentary cab service for your site visit.</p>
                    <DialogTrigger asChild>
                        <Button size="lg" className="mt-8 font-bold">
                            <Phone className="mr-2 h-5 w-5"/>
                            Book Now
                        </Button>
                    </DialogTrigger>
                </div>
                <div className="max-w-xl mx-auto w-full">
                    <Card className="shadow-2xl shadow-primary/10 bg-card/50 backdrop-blur-sm border border-border/50">
                      <CardHeader className='text-center'>
                        <CardTitle className="font-headline text-3xl text-primary">Get In Touch</CardTitle>
                        <CardDescription>Have a question? We would love to hear from you.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Full Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="John Doe" {...field} />
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
                                  <FormLabel>Email Address</FormLabel>
                                  <FormControl>
                                    <Input placeholder="you@example.com" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone Number (Optional)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="+1 234 567 890" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="message"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Your Message</FormLabel>
                                  <FormControl>
                                    <Textarea placeholder="Tell us how we can help..." {...field} rows={5} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <Button type="submit" disabled={isSubmitting} className="w-full font-bold text-lg">
                              {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                          </form>
                        </Form>
                      </CardContent>
                    </Card>
                </div>
            </div>
            <BrochurePopup />
        </Dialog>
      </div>
    </section>
  );
}
