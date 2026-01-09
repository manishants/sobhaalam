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
const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_K5fhaZer_LwM84ZTWWLRQc1GtMr6dvcUd';
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
    
    // Deliver to both recipients; allow env override via comma-separated list.
    const toEnv = process.env.TO_EMAIL_ADDRESS ?? '';
    const toListFromEnv = toEnv.split(',').map((e) => e.trim()).filter(Boolean);
    const defaultRecipients = ['glenmoreventures2026@gmail.com', 'manishants@gmail.com'];
    const recipients = toListFromEnv.length > 0 ? toListFromEnv : defaultRecipients;

    // Prefer sending directly to manishants, and CC any others for reliability.
    const primaryTo = recipients.find((e) => e.toLowerCase() === 'manishants@gmail.com') ?? recipients[0];
    const ccRecipients = recipients.filter((e) => e !== primaryTo);
    const fromPrimary = process.env.FROM_EMAIL_ADDRESS || 'Sobha Leads <leads@sobhahoskote.online>';
    const fromFallback = 'Sobha Hoskote Lead <onboarding@resend.dev>';

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

      // First attempt: use primary (custom) sender.
      await resend.emails.send({ from: fromPrimary, ...payload });

      console.log('Email sent successfully!');
      return { success: true, message: 'Email sent successfully.' };

    } catch (error) {
      console.error('Failed to send email:', error);
      const msg = (error as any)?.message ? String((error as any).message) : String(error);
      const domainIssue = /domain/i.test(msg) && /verify|verified|authentication|dkim|spf/i.test(msg);

      // If domain verification blocks sends, fall back to Resend's default onboarding sender.
      if (domainIssue) {
        try {
          console.warn('Retrying with fallback sender due to domain verification issue.');
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
          await resend.emails.send({ from: fromFallback, ...payload });
          console.log('Email sent successfully via fallback sender.');
          return { success: true, message: 'Email sent successfully (fallback sender).' };
        } catch (fallbackError) {
          console.error('Fallback sender also failed:', fallbackError);
          return { success: false, message: 'Failed to send email (domain not verified).' };
        }
      }

      // Other errors: treat as failure so UI can reflect issue.
      return { success: false, message: 'Failed to send email.' };
    }
  }
);
