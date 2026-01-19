import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sobha Hoskote Information Site',
  description:
    'How we collect, use, and protect personal information submitted via this site, including name, email, and phone for enquiry purposes.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-IN')}</p>

          <p className="text-muted-foreground">
            This Privacy Policy explains how we collect, use, disclose, and protect information submitted through this website. By using this site, you agree to the practices described below.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold">Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Contact details you provide (name, email, phone, comments, preferred configuration).</li>
            <li>Basic technical data (IP, device/browser type) captured by standard web tooling.</li>
            <li>Non-identifiable analytics to improve user experience.</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold">How We Use Information</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Respond to enquiries and provide project-related updates.</li>
            <li>Improve content relevance and measure campaign effectiveness.</li>
            <li>Maintain site security and prevent misuse.</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold">Legal Bases</h2>
          <p className="text-muted-foreground">We process personal data based on your consent and legitimate interest in responding to your enquiry.</p>

          <h2 className="text-xl md:text-2xl font-semibold">Data Retention</h2>
          <p className="text-muted-foreground">We retain enquiry data only as long as necessary to address your request or as required by law.</p>

          <h2 className="text-xl md:text-2xl font-semibold">Sharing & Disclosure</h2>
          <p className="text-muted-foreground">
            We do not sell your data. Limited sharing may occur with trusted service providers strictly for communication and operational purposes, subject to confidentiality.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold">Security</h2>
          <p className="text-muted-foreground">We implement reasonable safeguards; however, no method of transmission or storage is 100% secure.</p>

          <h2 className="text-xl md:text-2xl font-semibold">Cookies & Tracking</h2>
          <p className="text-muted-foreground">This site may use essential cookies and limited analytics. You can manage cookies via your browser settings.</p>

          <h2 className="text-xl md:text-2xl font-semibold">Your Choices & Rights</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Access, update, or request deletion of your information.</li>
            <li>Withdraw consent at any time for future communications.</li>
            <li>Contact us to exercise these rights.</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold">Third-Party Links</h2>
          <p className="text-muted-foreground">External links may lead to sites we do not control. Their privacy practices apply.</p>

          <h2 className="text-xl md:text-2xl font-semibold">Updates</h2>
          <p className="text-muted-foreground">We may update this Policy to reflect changes in practices or legal requirements. Continued use signifies acceptance of updates.</p>

          <h2 className="text-xl md:text-2xl font-semibold">Contact</h2>
          <p className="text-muted-foreground">For privacy queries, please visit our <a href="/contact" className="underline underline-offset-4 text-primary">Contact</a> page.</p>
        </div>
      </div>
    </section>
  );
}