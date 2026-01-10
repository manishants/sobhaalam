# Sobha Hoskote Web App

## Environment Configuration

- Copy `.env.example` to `.env.local` for local development and fill in values.
- Do NOT commit `.env.local` to GitHub.
- In production (Coolify), set environment variables in the app settings:
  - `RESEND_API_KEY` – your Resend API key
  - `TO_EMAIL_ADDRESS` – comma-separated recipient emails
  - `FROM_EMAIL_ADDRESS` – optional; use a verified sender like `Sobha Leads <leads@sobhahoskote.online>`
  - `NEXT_PUBLIC_SITE_URL` – your site URL

## Email Sending

- Email is sent via Resend from the server API route at `POST /api/contact-email`.
- If `RESEND_API_KEY` is missing in production, the API returns `{ success: false, message: 'Email service not configured.' }`.
- Diagnostic endpoint: `GET /api/email-status` shows whether envs are present on live.

## Development

- Run `npm run dev` and visit `http://localhost:3000` (or configured port).
