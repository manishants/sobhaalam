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

// Prefer environment variable; fall back to provided key to ensure delivery.
const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_PAVHeUMq_KqPHRF2C75ixe2BzMeF1G3W8';
const resend = new Resend(RESEND_API_KEY);

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

    // Resend client initialized above; proceed with sending.
    
    // Deliver to both primary recipients (no BCC)
    const toRecipients = ['glenmoreventures2026@gmail.com', 'manishants@gmail.com'];
    const fromEmail = 'Sobha Hoskote Lead <onboarding@resend.dev>'; // Using Resend's default alias with a custom name.

    try {
      await resend.emails.send({
        from: fromEmail,
        to: toRecipients,
        reply_to: input.email,
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
      // Return failure so UI can reflect an actual send problem
      return { success: false, message: 'Failed to send email.' };
    }
  }
);
