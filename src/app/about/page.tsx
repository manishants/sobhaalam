'use client';

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Sobha Hoskote Project Information',
  description:
    'Learn about this independent project information site for Sobha Hoskote. Our mission is to provide verified, concise details and help you register interest safely.',
  alternates: { canonical: '/about' },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary">About Us</h1>
          <p className="text-muted-foreground">
            This website is an independent information resource for the upcoming Sobha Hoskote development in East Bengaluru. Our goal is to present clear, concise, and accurate details on plans, pricing cues, amenities, location benefits, and the Expression of Interest (EOI) process.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold">What We Do</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Summarize available project information for quick decision-making.</li>
            <li>Highlight location connectivity, proposed amenities, and plan options.</li>
            <li>Provide a simple contact form to help you register interest.</li>
          </ul>
          <h2 className="text-xl md:text-2xl font-semibold">Important Notes</h2>
          <p className="text-muted-foreground">
            We are not the official Sobha Limited website and do not issue bookings or allotments. All visuals are illustrative. Final specifications, approvals, and pricing are subject to change. Please verify details directly with authorized sales representatives.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact" className="text-primary underline underline-offset-4">Contact Us</Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/privacy-policy" className="text-primary underline underline-offset-4">Privacy Policy</Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/disclaimer" className="text-primary underline underline-offset-4">Disclaimer</Link>
          </div>
        </div>
      </div>
    </section>
  );
}