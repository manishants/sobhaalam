'use server';
/**
 * @fileOverview A flow for sending contact form submissions as an email.
 *
 * - sendContactEmail - A function that handles sending the email.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { Resend } from 'resend';
import { ContactEmailInputSchema, type ContactEmailInput } from '@/ai/schemas/contact-email-schema';

// IMPORTANT: To enable email sending, you need to:
// 1. Sign up for an account at https://resend.com
// 2. Create an API key in your Resend dashboard.
// 3. Add the API key to your environment variables. Create a file named `.env.local`
//    in the root of your project and add the following line:
//    RESEND_API_KEY=your_api_key_here
// 4. In Resend, verify the domain you want to send emails from.

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendContactEmail(input: ContactEmailInput): Promise<{ success: boolean; message: string }> {
  return sendContactEmailFlow(input);
}

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: ContactEmailInputSchema,
    outputSchema: z.object({ success: z.boolean(), message: z.string() }),
  },
  async (input) => {
    console.log('Received form submission:', input);

    if (!resend) {
      const errorMessage = 'Resend API key is not configured. Email not sent.';
      console.warn(errorMessage);
      // In a real app, you might still want to save the submission to the database here.
      return { success: false, message: errorMessage };
    }
    
    if (!process.env.TO_EMAIL_ADDRESS) {
       const errorMessage = 'TO_EMAIL_ADDRESS environment variable is not set. Email not sent.';
       console.warn(errorMessage);
       return { success: false, message: errorMessage };
    }

    const toEmail = process.env.TO_EMAIL_ADDRESS;
    const fromEmail = 'Sobha Hoskote Lead <onboarding@resend.dev>'; // Using Resend's default alias with a custom name.

    try {
      await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: `Sobha Hoskote Lead via Blowkida - ${input.formType}`,
        html: `
          <h1>New Form Submission</h1>
          <p><strong>Form:</strong> ${input.formType}</p>
          <p><strong>Name:</strong> ${input.name}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          ${input.phone ? `<p><strong>Phone:</strong> ${input.phone}</p>` : ''}
          ${input.message ? `<p><strong>Message:</strong> ${input.message}</p>` : ''}
          ${input.comment ? `<p><strong>Comment:</strong> ${input.comment}</p>` : ''}
        `,
      });

      console.log('Email sent successfully!');
      return { success: true, message: 'Email sent successfully.' };

    } catch (error) {
      console.error('Failed to send email:', error);
      return { success: false, message: 'Failed to send email.' };
    }
  }
);
