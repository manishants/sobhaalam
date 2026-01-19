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

// Require RESEND_API_KEY from environment; do not hardcode secrets.
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

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
    if (!resend) {
      console.error('RESEND_API_KEY is not configured in the environment.');
      return { success: false, message: 'Email service not configured. Set RESEND_API_KEY in production.' };
    }
    
    // Resolve recipients strictly from environment; no hardcoded fallbacks.
    const toEnv = process.env.TO_EMAIL_ADDRESS ?? '';
    const recipients = toEnv.split(',').map((e) => e.trim()).filter(Boolean);
    if (recipients.length === 0) {
      console.error('TO_EMAIL_ADDRESS is not configured in the environment.');
      return { success: false, message: 'Email recipients not configured. Set TO_EMAIL_ADDRESS in production.' };
    }

    const primaryTo = recipients[0];
    const ccRecipients = recipients.slice(1);

    // Sender must be provided via env and verified in Resend.
    const fromEmail = process.env.FROM_EMAIL_ADDRESS;
    if (!fromEmail) {
      console.error('FROM_EMAIL_ADDRESS is not configured in the environment.');
      return { success: false, message: 'Sender not configured. Set FROM_EMAIL_ADDRESS in production.' };
    }

    try {
      const payload = {
        to: primaryTo,
        cc: ccRecipients.length ? ccRecipients : undefined,
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
        text: `New Form Submission\nForm: ${input.formType}\nName: ${input.name}\nEmail: ${input.email}\n${input.phone ? `Phone: ${input.phone}\n` : ''}${input.message ? `Message: ${input.message}\n` : ''}${input.comment ? `Comment: ${input.comment}\n` : ''}`,
      };

      const { data, error } = await resend.emails.send({ from: fromEmail, ...payload });

      if (error) {
        const errMsg = error.message ?? 'Unknown error';
        console.error('Resend returned error:', errMsg);
        return { success: false, message: `Failed to send email: ${errMsg}` };
      }

      console.log('Email sent successfully!', data?.id ? `id=${data.id}` : '');
      return { success: true, message: `Email sent successfully${data?.id ? ` (id: ${data.id})` : ''}.` };

    } catch (error) {
      const errMsg = error instanceof Error ? error.message : String(error);
      console.error('Failed to send email:', errMsg);
      // Include error reason to aid production triage (no secrets leaked).
      return { success: false, message: `Failed to send email: ${errMsg}` };
    }
  }
);
