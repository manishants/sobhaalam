import type { Metadata } from 'next';
import { Contact } from '@/components/features/contact';

export const metadata: Metadata = {
  title: 'Contact Us | Sobha Hoskote Enquiries',
  description:
    'Get in touch to register interest for Sobha Hoskote. Submit your details and we will reach out with verified information.',
  alternates: { canonical: '/contact' },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary">Contact Us</h1>
          <p className="text-muted-foreground">
            Share your details and preferred configuration to receive project updates and assistance. We aim to respond promptly.
          </p>
        </div>
        <div className="mt-8">
          <Contact />
        </div>
        <p className="text-xs text-muted-foreground mt-6">
          Note: Submitting this form indicates interest only. It does not constitute a booking or allotment. By submitting, you agree to our{' '}
          <a href="/privacy-policy" className="underline underline-offset-4 text-primary">Privacy Policy</a>{' '}and{' '}
          <a href="/disclaimer" className="underline underline-offset-4 text-primary">Disclaimer</a>.
        </p>
      </div>
    </section>
  );
}