import { z } from 'zod';

export const ContactEmailInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  email: z.string().email().describe('The email of the person submitting the form.'),
  phone: z.string().optional().describe('The phone number of the person submitting the form.'),
  message: z.string().optional().describe('The message from the form.'),
  comment: z.string().optional().describe('A comment from the form.'),
  formType: z.string().describe('The type of form being submitted (e.g., "Contact Us", "Pre-Register").'),
});

export type ContactEmailInput = z.infer<typeof ContactEmailInputSchema>;
