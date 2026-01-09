import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FirebaseClientProvider } from '@/firebase/client-provider';

export const metadata: Metadata = {
  title: 'Sobha Hoskote | Premium 1, 2, 3 & 4 BHK Apartments in Hoskote, Bangalore',
  description: 'Discover Sobha Hoskote, an iconic new residential development by Sobha Limited. Featuring East Bengaluru\'s tallest towers, it offers premium 1, 2, 3 & 4 BHK apartments with world-class amenities in the strategic location of Hoskote, Bangalore.',
};

const realEstateListingLd = {
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

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Sobha Hoskote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sobha Hoskote is a new premium residential apartment project located on Old Madras Road (OMR), Hoskote, Bangalore. It features the tallest towers in East Bengaluru, offering 1, 2, 3, & 4 BHK apartments across a 48-acre development."
      }
    },
    {
      "@type": "Question",
      "name": "Where is the project located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The project is strategically located at Hoskote Toll Gate on OMR (Old Madras Road, NH-75), providing excellent connectivity to IT hubs, international schools, hospitals, and entertainment zones in East Bengaluru."
      }
    },
    {
      "@type": "Question",
      "name": "What types of apartments are available at Sobha Hoskote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sobha Hoskote offers a variety of configurations to suit different family sizes and needs, including 1, 2, 3, and 4 BHK premium apartments."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Sobha Hoskote unique?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is set to be an iconic landmark with the tallest residential towers in East Bengaluru (53 floors). The project is spread over 48 acres and includes integrated retail and commercial spaces, along with world-class amenities."
      }
    },
    {
      "@type": "Question",
      "name": "What is the expected price per square foot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The expected price for apartments at Sobha Hoskote is approximately ₹13,500 per square foot. Prices may vary based on the unit size and location within the tower."
      }
    },
    {
      "@type": "Question",
      "name": "What is an Expression of Interest (EOI)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Expression of Interest (EOI) is a non-binding offer from a potential buyer to show serious interest in purchasing a property. Submitting an EOI for Sobha Hoskote gives you priority access to unit selection and exclusive pre-launch offers."
      }
    },
    {
      "@type": "Question",
      "name": "What are the EOI amounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The EOI amount is ₹15,00,000 for 1 & 2 BHK units and ₹20,00,000 for 3 & 4 BHK units."
      }
    },
    {
      "@type": "Question",
      "name": "What are the key amenities at Sobha Hoskote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The project will feature a wide range of world-class amenities, including a swimming pool, state-of-the-art gymnasium, clubhouse, landscaped gardens, jogging tracks, sports courts, and 24/7 security."
      }
    },
    {
      "@type": "Question",
      "name": "Who is the developer of this project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The project is developed by Sobha Limited, one of India's most respected and trustworthy real estate developers, known for their commitment to quality, design, and timely delivery."
      }
    },
    {
      "@type": "Question",
      "name": "When is the expected possession date?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The possession timeline will be announced after the official RERA registration and project launch. Please register your interest for the latest updates."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a commercial or retail space within the project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Sobha Hoskote is a mixed-use development that includes a G+2 retail building and a G+4 commercial building, providing convenient access to shopping and services for residents."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/images/sobha-logo.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateListingLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
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
