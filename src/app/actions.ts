'use server';

import { z } from 'zod';
import { aiPropertySearch } from '@/ai/flows/ai-property-search';
import { generatePropertyDescription } from '@/ai/flows/generate-property-description';
import type { GeneratePropertyDescriptionInput } from '@/ai/flows/generate-property-description';

const searchSchema = z.object({
  query: z.string().min(5, 'Search query must be at least 5 characters long.'),
});

export async function handlePropertySearch(formData: FormData) {
  const validation = searchSchema.safeParse({
    query: formData.get('query'),
  });

  if (!validation.success) {
    return { success: false, error: validation.error.flatten().fieldErrors.query?.[0] };
  }

  try {
    const result = await aiPropertySearch({ description: validation.data.query });
    return { success: true, data: result.properties };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'An unexpected error occurred while searching for properties.' };
  }
}

const descriptionSchema = z.object({
  propertyType: z.string().min(1, 'Required'),
  location: z.string().min(1, 'Required'),
  numberOfBedrooms: z.coerce.number().min(0),
  numberOfBathrooms: z.coerce.number().min(0),
  squareFootage: z.coerce.number().min(1),
  amenities: z.string().min(1, 'Required'),
  uniqueFeatures: z.string().min(1, 'Required'),
});

export async function handleGenerateDescription(data: GeneratePropertyDescriptionInput) {
  const validation = descriptionSchema.safeParse(data);

  if (!validation.success) {
    return { success: false, error: 'Invalid input.' };
  }

  try {
    const result = await generatePropertyDescription(validation.data);
    return { success: true, data: result.description };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'An unexpected error occurred while generating the description.' };
  }
}


const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function handleContactForm(formData: FormData) {
  const validation = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validation.success) {
    return { success: false, error: 'Invalid data provided.' };
  }

  // Simulate sending data to a backend
  console.log('Contact form submitted:', validation.data);

  return { success: true, message: 'Thank you! Your message has been sent successfully.' };
}
