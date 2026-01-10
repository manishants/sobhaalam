import { NextResponse } from 'next/server';

export async function GET() {
  const toEnv = process.env.TO_EMAIL_ADDRESS ?? '';
  const recipients = toEnv
    .split(',')
    .map((e) => e.trim())
    .filter(Boolean);

  const hasResendApiKey = Boolean(process.env.RESEND_API_KEY);
  const fromEmail = process.env.FROM_EMAIL_ADDRESS ?? 'Sobha Leads <leads@sobhahoskote.online>';

  return NextResponse.json({
    ok: true,
    hasResendApiKey,
    toEmailAddressEnvSet: recipients.length > 0,
    recipientsPreview: recipients.slice(0, 5),
    fromEmail,
    runtimeEnv: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
}