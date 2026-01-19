import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | Sobha Hoskote Information Site',
  description:
    'Important disclosures: independent information site, not an official Sobha Limited webpage. Visuals are indicative; verify specifications and pricing.',
  alternates: { canonical: '/disclaimer' },
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary">Disclaimer</h1>
          <p className="text-muted-foreground">
            This website is intended for informational and marketing purposes only and is not the official website of Sobha Limited. The content herein is based on publicly available information and indicative materials.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold">No Offer or Allotment</h2>
          <p className="text-muted-foreground">
            Nothing on this site constitutes an offer, booking, or allotment. Expressions of Interest (EOI) are non-binding and purely for prioritizing communication. Final allocation is subject to the developer’s policies and statutory approvals.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold">Illustrations & Specifications</h2>
          <p className="text-muted-foreground">
            Images, floor plans, and amenities are illustrative and may differ from eventual deliverables. Specifications, approvals, and pricing are subject to change without prior notice.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold">Verification</h2>
          <p className="text-muted-foreground">
            Prospective purchasers should independently verify all details—pricing, availability, statutory approvals, and legal clearances—directly with authorized representatives and relevant authorities.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold">Third-Party Links</h2>
          <p className="text-muted-foreground">
            External links are provided for convenience and informational context. We do not control or endorse the content of third-party websites.
          </p>

          <p className="text-sm text-muted-foreground">For additional information, please review our <a href="/privacy-policy" className="underline underline-offset-4 text-primary">Privacy Policy</a> or <a href="/contact" className="underline underline-offset-4 text-primary">Contact Us</a>.</p>
        </div>
      </div>
    </section>
  );
}