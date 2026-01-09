'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { handlePropertySearch } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Search, Bot } from 'lucide-react';
import type { Property } from '@/lib/types';

type HeroProps = {
  setIsLoading: (isLoading: boolean) => void;
  setProperties: (properties: Property[]) => void;
  setError: (error: string | null) => void;
};

const searchSchema = z.object({
  query: z.string().min(5, 'Describe your ideal home in at least 5 words.'),
});

type SearchFormValues = z.infer<typeof searchSchema>;

export function Hero({ setIsLoading, setProperties, setError }: HeroProps) {
  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: { query: 'A 3-bedroom modern house with a pool in a sunny location' },
  });

  const onSubmit: SubmitHandler<SearchFormValues> = async (data) => {
    setIsLoading(true);
    setProperties([]);
    setError(null);
    const formData = new FormData();
    formData.append('query', data.query);
    const result = await handlePropertySearch(formData);
    setIsLoading(false);

    if (result.success) {
      setProperties(result.data || []);
      if((result.data || []).length === 0){
        setError('No properties found matching your description. Try being more general.');
      }
    } else {
      setError(result.error || 'An unexpected error occurred.');
    }
  };

  return (
    <section className="relative py-24 md:py-40 text-center bg-card overflow-hidden">
        <div className="absolute inset-0 bg-background/50 z-10"></div>
        <div className="absolute -bottom-1/3 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-1/3 -right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-3xl animate-pulse delay-500"></div>

        <div className="container mx-auto px-4 relative z-20">
            <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 text-primary animate-fade-in-down">
                Find Your Future Home With AI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up">
                Describe your dream home, and our AI will find the perfect match. The future of real estate search is here.
            </p>

            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)} 
                    className="max-w-2xl mx-auto"
                >
                    <FormField
                        control={form.control}
                        name="query"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="relative">
                                        <Bot className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                        <Input
                                            {...field}
                                            type="text"
                                            placeholder="e.g., 'a spacious 3-bedroom apartment with a city view'"
                                            className="h-14 pl-12 pr-32 text-lg rounded-full"
                                        />
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground"
                                            disabled={form.formState.isSubmitting}
                                        >
                                            <Search className="mr-2 h-5 w-5" />
                                            Search
                                        </Button>
                                    </div>
                                </FormControl>
                                <FormMessage className="mt-2 text-left" />
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </div>
    </section>
  );
}
