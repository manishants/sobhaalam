'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useFirebase } from '@/firebase';
import { addDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { collection } from 'firebase/firestore';
import { Textarea } from '../ui/textarea';
import { sendContactEmail } from '@/ai/flows/send-contact-email';
import { PhoneCall } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

const preRegisterSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  email: z.string().email('Invalid email address.'),
  mobile: z.string().min(10, 'Valid mobile number is required.'),
  comment: z.string().optional(),
});

type PreRegisterFormValues = z.infer<typeof preRegisterSchema>;


export function FloatingForm() {
  const { toast } = useToast();
  const { firestore } = useFirebase();

  const form = useForm<PreRegisterFormValues>({
    resolver: zodResolver(preRegisterSchema),
    defaultValues: { name: '', mobile: '', email: '', comment: '' },
  });

  const { formState: { isSubmitting } } = form;

  const onSubmit: SubmitHandler<PreRegisterFormValues> = async (data) => {
    // 1. Save to Firestore
    if (firestore) {
      const submissionData = {
        name: data.name,
        email: data.email,
        phone: data.mobile,
        comment: data.comment,
        submissionDate: new Date().toISOString(),
        formType: 'Pre-Register',
      };
      addDocumentNonBlocking(collection(firestore, 'contact_form_submissions'), submissionData);
    } else {
      console.warn("Firestore is not available. Skipping database submission.");
    }
    
    // 2. Send email via Genkit flow
    const emailResult = await sendContactEmail({
      name: data.name,
      email: data.email,
      phone: data.mobile,
      comment: data.comment,
      formType: 'Pre-Register',
    });

    if (emailResult.success) {
        toast({
          title: 'Request Received!',
          description: "Thank you for registering! We will get back to you with the best offers.",
        });
    } else {
        toast({
            variant: "destructive",
            title: "Something went wrong",
            description: "There was an issue with your registration. Please try again later.",
        });
    }

    form.reset();
  };

  return (
       <div className="hidden lg:block fixed top-16 right-0 h-[calc(100vh-4rem)] w-96 bg-background/80 backdrop-blur-sm text-foreground z-20 border-l border-border/60">
            <ScrollArea className="h-full">
                <div className="p-6">
                    <div className='flex flex-col items-center gap-2 mb-4'>
                        <Button variant='outline' className='w-full'>Organize Site Visit</Button>
                         <div className='flex items-center gap-2 text-sm'>
                            <a href="tel:+918951142439" className='text-primary font-semibold flex items-center gap-2 hover:underline'> <PhoneCall className='inline h-4 w-4'/>+91 8951142439</a>
                         </div>
                        <Button className='w-full'><PhoneCall className='mr-2 h-4 w-4'/>Request Call Back</Button>
                    </div>

                    <Card className="bg-transparent border-none shadow-none">
                        <CardHeader className="text-center p-2">
                            <CardTitle className="text-xl font-headline text-primary">Pre-Register here for Best Offers</CardTitle>
                        </CardHeader>
                        <CardContent className="p-2">
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
                                                    <span className="border border-r-0 border-input bg-muted px-3 py-2 rounded-l-md text-sm text-muted-foreground">+91</span>
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
                                    <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                                        {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </ScrollArea>
        </div>
  );
}
