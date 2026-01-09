'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import { addDocumentNonBlocking } from '@/firebase/non-blocking-updates';
// Use API route for email sending in production
import { DialogContent, DialogHeader, DialogTitle, DialogClose } from '../ui/dialog';
import { Car, BadgeIndianRupee, PhoneCall, X } from 'lucide-react';

const brochureSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  email: z.string().email('Invalid email address.'),
  mobile: z.string().min(10, 'Valid mobile number is required.'),
  comment: z.string().optional(),
});

type BrochureFormValues = z.infer<typeof brochureSchema>;

const promises = [
    { icon: PhoneCall, text: 'Instant Call Back' },
    { icon: Car, text: 'Free Site Visit' },
    { icon: BadgeIndianRupee, text: 'Unmatched Price' },
]

export function BrochurePopup() {
  const { toast } = useToast();
  const { firestore } = useFirebase();

  const form = useForm<BrochureFormValues>({
    resolver: zodResolver(brochureSchema),
    defaultValues: { name: '', mobile: '', email: '', comment: '' },
  });

  const { formState: { isSubmitting }, reset } = form;

  const onSubmit: SubmitHandler<BrochureFormValues> = async (data) => {
    // 1. Save to Firestore
    if (firestore) {
      const submissionData = {
        name: data.name,
        email: data.email,
        phone: data.mobile,
        comment: data.comment,
        submissionDate: new Date().toISOString(),
        formType: 'Brochure Download',
      };
      addDocumentNonBlocking(collection(firestore, 'contact_form_submissions'), submissionData);
    } else {
      console.warn("Firestore is not available. Skipping database submission.");
    }
    
    // 2. Send email via API route
    const res = await fetch('/api/contact-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.mobile,
        comment: data.comment,
        formType: 'Brochure Download',
      }),
    });
    const emailResult = await res.json();

    if (emailResult.success) {
        toast({
          title: 'Request Sent!',
          description: "Thank you for your interest. The brochure will be sent to your email shortly.",
        });
    } else {
        toast({
            variant: "destructive",
            title: "Something went wrong",
            description: "There was an issue with your request. Please try again later.",
        });
    }
    reset();
  };

  return (
    <DialogContent className="max-w-3xl p-0 bg-background/80 backdrop-blur-sm border-border">
        <div className="grid md:grid-cols-2">
            <div className="hidden md:flex flex-col items-center justify-center p-8 bg-muted/50">
                <h3 className="font-bold text-xl mb-6 text-foreground">We Promise</h3>
                <div className="space-y-8">
                    {promises.map((promise) => (
                        <div key={promise.text} className="flex flex-col items-center text-center">
                            <div className='relative h-20 w-20'>
                                <div className='absolute inset-0 bg-primary/20 rounded-full animate-ping'></div>
                                <promise.icon className="h-20 w-20 text-primary p-4 bg-background rounded-full " />
                            </div>
                           
                            <p className="font-semibold mt-4 text-foreground">{promise.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-8">
                <DialogHeader className="text-left mb-6">
                    <DialogTitle className="text-2xl font-bold text-primary">Download Brochure</DialogTitle>
                </DialogHeader>

                 <p className="text-sm mb-4 text-muted-foreground">Register Here And Avail The <span className="text-red-500 font-semibold">Best Offers!!</span></p>
                
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
                        <DialogClose asChild>
                            <Button type="submit" disabled={isSubmitting} className="w-full font-bold">
                                {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                            </Button>
                        </DialogClose>
                    </form>
                </Form>
            </div>
        </div>
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
    </DialogContent>
  );
}
