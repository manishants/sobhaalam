'use server';

/**
 * @fileOverview AI-powered property description generator.
 *
 * - generatePropertyDescription - A function that generates a property description.
 * - GeneratePropertyDescriptionInput - The input type for the generatePropertyDescription function.
 * - GeneratePropertyDescriptionOutput - The return type for the generatePropertyDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePropertyDescriptionInputSchema = z.object({
  propertyType: z
    .string()
    .describe('The type of property (e.g., house, apartment, condo).'),
  location: z.string().describe('The location of the property.'),
  numberOfBedrooms: z.number().describe('The number of bedrooms in the property.'),
  numberOfBathrooms: z.number().describe('The number of bathrooms in the property.'),
  squareFootage: z.number().describe('The square footage of the property.'),
  amenities: z
    .string()
    .describe(
      'A comma-separated list of amenities (e.g., swimming pool, gym, parking).'
    ),
  uniqueFeatures: z
    .string()
    .describe(
      'A comma-separated list of unique features of the property (e.g., updated kitchen, hardwood floors, stunning views).'
    ),
});
export type GeneratePropertyDescriptionInput = z.infer<
  typeof GeneratePropertyDescriptionInputSchema
>;

const GeneratePropertyDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated property description.'),
});
export type GeneratePropertyDescriptionOutput = z.infer<
  typeof GeneratePropertyDescriptionOutputSchema
>;

export async function generatePropertyDescription(
  input: GeneratePropertyDescriptionInput
): Promise<GeneratePropertyDescriptionOutput> {
  return generatePropertyDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePropertyDescriptionPrompt',
  input: {schema: GeneratePropertyDescriptionInputSchema},
  output: {schema: GeneratePropertyDescriptionOutputSchema},
  prompt: `You are a real estate copywriter. Generate a compelling property description based on the following information:

Property Type: {{propertyType}}
Location: {{location}}
Number of Bedrooms: {{numberOfBedrooms}}
Number of Bathrooms: {{numberOfBathrooms}}
Square Footage: {{squareFootage}}
Amenities: {{amenities}}
Unique Features: {{uniqueFeatures}}

Write a description that is engaging, informative, and highlights the best aspects of the property. Use a tone that is appropriate for attracting potential buyers.`,
});

const generatePropertyDescriptionFlow = ai.defineFlow(
  {
    name: 'generatePropertyDescriptionFlow',
    inputSchema: GeneratePropertyDescriptionInputSchema,
    outputSchema: GeneratePropertyDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
