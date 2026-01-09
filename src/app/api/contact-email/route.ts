import { NextResponse } from 'next/server';
import { ContactEmailInputSchema } from '@/ai/schemas/contact-email-schema';
import { sendContactEmail } from '@/ai/flows/send-contact-email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = ContactEmailInputSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: 'Invalid input', errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const result = await sendContactEmail(parsed.data);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Email API error:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}