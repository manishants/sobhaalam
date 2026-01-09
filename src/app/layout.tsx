import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FirebaseClientProvider } from '@/firebase/client-provider';

export const metadata = {
  title: 'Sobha Hoskote | Premium Plots in Hoskote, Bangalore',
  description: 'Discover Sobha Hoskote, a new luxury residential plotted development by Sobha Limited. Offering premium plots with world-class amenities in the strategic location of Hoskote, Bangalore.',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": "Sobha Hoskote – Sobha Codename Project",
  "description": "Sobha Hoskote Codename Project is a premium residential township in Hoskote, Bengaluru, offering 1, 2, 3 & 4 BHK apartments on NH-75 with the tallest towers in East Bengaluru.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hoskote",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "floorSize": {
    "@type": "QuantitativeValue",
    "unitText": "SQFT"
  },
  "price": "13500",
  "priceCurrency": "INR",
  "numberOfRooms": "1,2,3,4",
  "provider": {
    "@type": "Organization",
    "name": "Sobha Limited"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <FirebaseClientProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
