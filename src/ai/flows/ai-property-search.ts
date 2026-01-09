'use server';

/**
 * @fileOverview This file defines an AI-powered property search flow.
 *
 * The flow takes a natural language description of desired property features
 * and returns a structured representation of properties matching the description.
 *
 * - aiPropertySearch -  The main function to initiate the property search.
 * - AIPropertySearchInput - The input type for the aiPropertySearch function.
 * - AIPropertySearchOutput - The output type for the aiPropertySearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIPropertySearchInputSchema = z.object({
  description: z.string().describe('A natural language description of the desired property.'),
});
export type AIPropertySearchInput = z.infer<typeof AIPropertySearchInputSchema>;

const AIPropertySearchOutputSchema = z.object({
  properties: z.array(
    z.object({
      address: z.string().describe('The address of the property.'),
      description: z.string().describe('A detailed description of the property.'),
      price: z.number().describe('The price of the property.'),
      bedrooms: z.number().describe('The number of bedrooms.'),
      bathrooms: z.number().describe('The number of bathrooms.'),
      squareFeet: z.number().describe('The square footage of the property.'),
      amenities: z.array(z.string()).describe('A list of amenities offered by the property.'),
      locationFeatures: z.array(z.string()).describe('A list of features of the surrounding location.'),
    })
  ).describe('A list of properties matching the description.'),
});
export type AIPropertySearchOutput = z.infer<typeof AIPropertySearchOutputSchema>;

export async function aiPropertySearch(input: AIPropertySearchInput): Promise<AIPropertySearchOutput> {
  return aiPropertySearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPropertySearchPrompt',
  input: {schema: AIPropertySearchInputSchema},
  output: {schema: AIPropertySearchOutputSchema},
  prompt: `You are an AI real estate expert. A user will provide a description of their ideal property.
  Your goal is to return a JSON array of properties that match the description as closely as possible.

  User Description: {{{description}}}

  Ensure the properties array you return is valid JSON and conforms to the specified output schema.
  Include realistic and diverse property details in your response.
  `, 
});

const aiPropertySearchFlow = ai.defineFlow(
  {
    name: 'aiPropertySearchFlow',
    inputSchema: AIPropertySearchInputSchema,
    outputSchema: AIPropertySearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
