'use client';

import Link from 'next/link';

export function SeoLinks() {
  return (
    <section aria-labelledby="learn-more" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 id="learn-more" className="text-2xl md:text-3xl font-headline font-bold text-primary">Learn More</h2>
          <p className="text-muted-foreground mt-3">
            Explore helpful resources and official references. These links improve discoverability and provide additional context for the Sobha Hoskote development.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold">Internal Links</h3>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-muted-foreground">
                <li><Link href="/about" className="underline underline-offset-4 text-primary">About Us</Link> – who we are and what we do.</li>
                <li><Link href="/contact" className="underline underline-offset-4 text-primary">Contact Us</Link> – submit your details to register interest.</li>
                <li><Link href="/privacy-policy" className="underline underline-offset-4 text-primary">Privacy Policy</Link> – how we handle your data.</li>
                <li><Link href="/disclaimer" className="underline underline-offset-4 text-primary">Disclaimer</Link> – important disclosures and verifications.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">External References</h3>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-muted-foreground">
                <li><a href="https://www.sobha.com/" className="underline underline-offset-4 text-primary" target="_blank" rel="noopener">Sobha Official Website</a> – developer’s corporate site.</li>
                <li><a href="https://en.wikipedia.org/wiki/Hoskote" className="underline underline-offset-4 text-primary" target="_blank" rel="noopener">Hoskote on Wikipedia</a> – locality overview and history.</li>
                <li><a href="https://rera.karnataka.gov.in/" className="underline underline-offset-4 text-primary" target="_blank" rel="noopener">Karnataka RERA</a> – regulatory authority and project registration info.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}