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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏢</text></svg>" />
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
        <link rel="icon" href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjM4IiB2aWV3Qm94PSIwIDAgMTUwIDU3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xMDJfMikiPjxwYXRoIGQ9Ik03NCAyNEM3NS4xMDQ2IDI0IDc2IDIzLjEwNDYgNzYgMjJDNzYgMjAuODk1NCA3NS4xMDQ2IDIwIDc0IDIwQzcyLjg5NTQgMjAgNzIgMjAuODk1NCA3MiAyMkM3MiAyMy4xMDQ2IDcyLjg5NTQgMjQgNzQgMjRaTTY4IDQ0QzY5LjEwNDYgNDQgNzAgNDMuMTA0NiA3MCA0MkM3MCA0MC44OTU0IDY5LjEwNDYgNDAgNjggNDBDNjYuODk1NCA0MCA2NiA0MC44OTU0IDY2IDQyQzY2IDQzLjEwNDYgNjYuODk1NCA0NCA2OCA0NFoiIGZpbGw9ImhzbCh2YXItLWZvcmVncm91bmQpIj48L3BhdGg+PHBhdGggZD0iTTc4IDI4Qzc5LjEwNDYgMjggODAgMjcuMTA0NiA4MCAyNkM4MCAyNC44OTU0IDc5LjEwNDYgMjQgNzggMjRDNzYuODk1NCAyNCA3NiAyNC44OTU0IDc2IDI2Qzc2IDI3LjEwNDYgNzYuODk1NCAyOCA3OCAyOFpNNzIgNDRDNzMuMTA0NiA0NCA3NCA0My4xMDQ2IDc0IDQyQzc0IDQwLjg5NTQgNzMuMTA0NiA0MCA3MiA0MEM3MC44OTU0IDQwIDcwIDQwLjg5NTQgNzAgNDJDNzAgNDMuMTA0NiA3MC44OTU0IDQ0IDcyIDQ0WiIgZmlsbD0iaHNsKHZhci0tZm9yZWdyb3VuZCkiPjwvcGF0aD48cGF0aCBkPSJNODEgMzJDODIuMTA0NiAzMiA4MyAzMS4xMDQ2IDgzIDMwQzgzIDI4Ljg5NTQgODIuMTA0NiAyOCA4MSAyOEM3OS44OTU0IDI4IDc5IDI4Ljg5NTQgNzkgMzBDNzkgMzEuMTA0NiA3OS44OTU0IDMyIDgxIDMyWk03NiA0NEM3Ny4xMDQ2IDQ0IDc4IDQzLjEwNDYgNzggNDJDNzggNDAuODk1NCA3Ny4xMDQ2IDQwIDc2IDQwQzc0Ljg5NTQgNDAgNzQgNDAuODk1NCA3NCA0MkM3NCA0My4xMDQ2IDc0Ljg5NTQgNDQgNzYgNDRaIiBmaWxsPSJoc2wodmFyKC0tZm9yZWdyb3VuZCkpIj48L3BhdGg+PHBhdGggZD0iTTg2IDM2Qzg3LjEwNDYgMzYgODggMzUuMTA0NiA4OCAzNEM4OCAzMi44OTU0IDg3LjEwNDYgMzIgODYgMzJDODQuODk1NCAzMiA4NCAzMi44OTU0IDg0IDM0Qzg0IDM1LjEwNDYgODQuODk1NCAzNiA4NiAzNlpNODAgNDRDODEuMTA0NiA0NCA4MiA0My4xMDQ2IDgyIDQyQzgyIDQwLjg5NTQgODEuMTA0NiA0MCA4MCA0MEM3OC44OTU0IDQwIDc4IDQwLjg5NTQgNzggNDJDNzggNDMuMTA0NiA3OC44OTU0IDQ0IDgwIDQ0WiIgZmlsbD0iaHNsKHZhci0tZm9yZWdyb3VuZCkpIj48L3BhdGg+PHBhdGggZD0iTTkwIDQwQzkxLjEwNDYgNDAgOTIgMzkuMTA0NiA5MiAzOEM5MiAzNi44OTU0IDkxLjEwNDYgMzYgOTAgMzZDODguODk1NCAzNiA4OCAzNi44OTU0IDg4IDM4Qzg4IDM5LjEwNDYgODguODk1NCA0MCA5MCA0MFpNODQgNDRDODUuMTA0NiA0NCA4NiA0My4xMDQ2IDg2IDQyQzg2IDQwLjg5NTQgODUuMTA0NiA0MCA4NCA0MEM4Mi44OTU0IDQwIDgyIDQwLjg5NTQgODIgNDJDNzIgNDMuMTA0NiA4Mi44OTU0IDQ0IDg0IDQ0WiIgZmlsbD0iaHNsKHZhci0tZm9yZWdyb3VuZCkpIj48L3BhdGg+PHBhdGggZD0iTTk0IDIwQzk1LjEwNDYgMjAgOTYgMTkuMTA0NiA5NiAxOEM5NiAxNi44OTU0IDk1LjEwNDYgMTYgOTQgMTZDOTIuODk1NCAxNiA5MiAxNi44OTU0IDkyIDE4QzkyIDE5LjEwNDYgOTIuODk1NCAyMCA5NCAyMFpNODggNDRDODkuMTA0NiA0NCA5MCA0My4xMDQ2IDkwIDQyQzkwIDQwLjg5NTQgODkuMTA0NiA0MCA4OCA0MEM4Ni44OTU0IDQwIDg2IDQwLjg5NTQgODYgNDJDNjYgNDMuMTA0NiA4Ni44OTU0IDQ0IDg4IDQ0WiIgZmlsbD0iaHNsKHZhci0tZm9yZWdyb3VuZCkpIj48L3BhdGg+PHBhdGggZD0iTTk4IDI0Qzk5LjEwNDYgMjQgMTAwIDIzLjEwNDYgMTAwIDIyQzEwMCAyMC44OTU0IDk5LjEwNDYgMjAgOTggMjBDOTYuODk1NCAyMCA5NiAyMC44OTU0IDk2IDIyQzk2IDIzLjEwNDYgOTYuODk1NCAyNCA5OCAyNFpNOTIgNDRDOTMuMTA0NiA0NCA5NCA0My4xMDQ2IDk0IDQyQzk0IDQwLjg5NTQgOTMuMTA0NiA0MCA5MiA0MEM5MC44OTU0IDQwIDkwIDQwLjg5NTQgOTAgNDJDNDIgNDMuMTA0NiA5MC44OTU0IDQ0IDkyIDQ0WiIgZmlsbD0iaHNsKHZhci0tZm9yZWdyb3VuZCkpIj48L3BhdGg+PHBhdGggZD0iTTEwMiAyOEMxMDMuMTA1IDI4IDEwNCAyNy4xMDQ2IDEwNCAyNkMxMDQgMjQuODk1NCAxMDMuMTA1IDI0IDEwMiAyNEMxMDAuODk1IDI0IDEwMCAyNC44OTU0IDEwMCAyNkMxMDAgMjcuMTA0NiAxMDAuODk1IDI4IDEwMiAyOFpNOTYgNDRDOTcuMTA0NiA0NCA5OCA0My4xMDQ2IDk4IDQyQzk4IDQwLjg5NTQgOTcuMTA0NiA0MCA5NiA0MEM5NC44OTU0IDQwIDk0IDQwLjg5NTQgOTQgNDJDNDIgNDMuMTA0NiA5NC44OTU0IDQ0IDk2IDQ0WiIgZmlsbD0iaHNsKHZhci0tZm9yZWdyb3VuZCkpIj48L3BhdGg+PHBhdGggZD0iTTEwNiAzMkMxMDcuMTA1IDMyIDEwOCAzMS4xMDQ2IDEwOCAzMEMxMDggMjguODk1NCAxMDcuMTA1IDI4IDEwNiAyOEMxMDQuODk1IDI4IDEwNCAyOC44OTU0IDEwNCAzMEMxMDQgMzEuMTA0NiAxMDQuODk1IDMyIDEwNiAzMlpNMTAwIDQ0QzEwMS4xMDUsNDQgMTAyIDQzLjEwNDYgMTAyIDQyQzEwMiA0MC44OTU0IDEwMS4xMDUgNDAgMTAwIDQwQzk4Ljg5NTQgNDAgOTggNDAuODk1NCA5OCA0MkM5OCA0My4xMDQ2IDk4Ljg5NTQgNDQgMTAwIDQ0WiIgZmlsbD0iaHNsKHZhci0tZm9yZWdyb3VuZCkpIj48L3BhdGg+PHBhdGggZD0iTTExMCAzNkMxMTEuMTA1IDM2IDExMiAzNS4xMDQ2IDExMiAzNEMxMTIgMzIuODk1NCAxMTEuMTA1IDMyIDExMCAzMkMxMDguODk1IDMyIDEwOCAzMi44OTU0IDEwOCAzNEMxMDggMzUuMTA0NiAxMDguODk1IDM2IDExMCAzNlpNMTA0IDQ0QzEwNS4xMDQgNDQgMTA2IDQzLjEwNDYgMTA2IDQyQzEwNiA0MC44OTU0IDEwNS4xMDQgNDAgMTA0IDQwQzEwMi44OTYgNDAgMTAyIDQwLjg5NTQgMTAyIDQyQzEwMiA0My4xMDQ2IDEwMi44OTYgNDQgMTA0IDQ0WiIgZmlsbD0iaHNsKHZhci0tZm9yZWdyb3VuZCkpIj48L3BhdGg+PHBhdGggZD0iTTExNCA0MEMxMTUuMTA1IDQwIDExNiAzOS4xMDQ2IDExNiAzOEMxMTYgMzYuODk1NCAxMTUuMTA1IDM2IDExNCAzNkMxMTIuODk1IDM2IDExMiAzNi44OTU0IDExMiAzOEMxMTIgMzkuMTA0NiAxMTIuODk1IDQwIDExNCA0MFpNMTA4IDQ0QzEwOS4xMDQgNDQgMTEwIDQzLjEwNDYgMTEwIDQyQzExMCA0MC44OTU0IDEwOS4xMDQgNDAgMTA4IDQwQzEwNi44OTYgNDAgMTA2IDQwLjg5NTQgMTA2IDQyQzEwNiA0My4xMDQ2IDEwNi44OTYgNDQgMTA4IDQ0WiIgZmlsbD0iaHNsKHZhci0tZm9yZWdyb3VuZCkpIj48L3BhdGg+PHBhdGggZD0iTTk0IDI0Qzk1LjEwNDYgMjQgOTYgMjMuMTA0NiA5NiAyMkM5NiAyMC44OTU0IDk1LjEwNDYgMjAgOTQgMjBDOTIuODk1NCAyMCA5MiAyMC44OTU0IDkyIDIyQzkyIDIzLjEwNDYgOTIuODk1NCAyNCA5NCAyNFpNMTEyIDQ0QzExMy4xMDQgNDQgMTE0IDQzLjEwNDYgMTE0IDQyQzExNCA0MC44OTU0IDExMy4xMDQgNDAgMTEyIDQwQzExMC44OTYgNDAgMTEwIDQwLjg5NTQgMTEwIDQyQzExMCA0My4xMDQ2IDExMC44OTYgNDQgMTEyIDQ0WiIgZmlsbD0iaHNsKHZhci0tZm9yZWdyb3VuZCkpIj48L3BhdGg+PHBhdGggZD0iTTk0IDI4Qzk1LjEwNDYgMjggOTYgMjcuMTA0NiA5NiAyNkM5NiAyNC44OTU0IDk1LjEwNDYgMjQgOTQgMjRDOTIuODk1NCAyNCA5MiAyNC44OTU0IDkyIDI2QzkyIDI3LjEwNDYgOTIuODk1NCAyOCA5NCAyOFoiIGZpbGw9ImhzbCh2YXItLWZvcmVncm91bmQpIj48L3BhdGg+PHBhdGggZD0iTTk0IDMyQzk1LjEwNDYgMzIgOTYgMzEuMTA0NiA5NiAzMEM5NiAyOC44OTU0IDk1LjEwNDYgMjggOTQgMjhDOTIuODk1NCAyOCA5MiAyOC44OTU0IDkyIDMwQzkyIDMxLjEwNDYgOTIuODk1NCAzMiA5NCAzMloiIGZpbGw9ImhzbCh2YXItLWZvcmVncm91bmQpIj48L3BhdGg+PHBhdGggZD0iTTk0IDM2Qzk1LjEwNDYgMzYgOTYgMzUuMTA0NiA5NiAzNEM5NiAzMi44OTU0IDk1LjEwNDYgMzIgOTQgMzJDOTIuODk1NCAzMiA5MiAzMi44OTU0IDkyIDM0QzkyIDM1LjEwNDYgOTIuODk1NCAzNiA5NCAzNloiIGZpbGw9ImhzbCh2YXItLWZvcmVncm91bmQpIj48L3BhdGg+PHBhdGggZD0iTTk0IDQwQzk1LjEwNDYgNDAgOTYgMzkuMTA0NiA5NiAzOEM5NiAzNi44OTU0IDk1LjEwNDYgMzYgOTQgMzZDOTIuODk1NCAzNiA5MiAzNi44OTU0IDkyIDM4QzkyIDM5LjEwNDYgOTIuODk1NCA0MCA5NCA0MFoiIGZpbGw9ImhzbCh2YXItLWZvcmVncm9yZWdyb3VuZCkiPjwvcGF0aD48cGF0aCBkPSJNNzQgNDRDNzUuMTA0NiA0NCA3NiA0My4xMDQ2IDc2IDQyQzc2IDQwLjg5NTQgNzUuMTA0NiA0MCA3NCA0MEM3Mi44OTU0IDQwIDcyIDQwLjg5NTQgNzIgNDJDNzIgNDMuMTA0NiA3Mi44OTU0IDQ0IDc0IDQ0WiIgZmlsbD0iaHNsKHZhci0tZm9yZWdyb3VuZCkiPjwvcGF0aD48cGF0aCBkPSJNNzQgNDBDNzUuMTA0NiA0MCA3NiAzOS4xMDQ2IDc2IDM4Qzc2IDM2Ljg5NTQgNzUuMTA0NiAzNiA3NCAzNkM3Mi44OTU0IDM2IDcyIDM2Ljg5NTQgNzIgMzhDNzIgMzkuMTA0NiA3Mi44OTU0IDQwIDc0IDQwWiIgZmlsbD0iaHNsKHZhci0tZm9yZWdyb3VuZCkiPjwvcGF0aD48cGF0aCBkPSJNNzQgMzZDNzUuMTA0NiAzNiA3NiAzNS4xMDQ2IDc2IDM0Qzc2IDMyLjg5NTQgNzUuMTA0NiAzMiA3NCAzMkM3Mi44OTU0IDMyIDcyIDMyLjg5NTQgNzIgMzRDNzIgMzUuMTA0NiA3Mi44OTU0IDM2IDc0IDM2WiIgZmlsbD0iaHNsKHZhci0tZm9yZWdyb3VuZCkiPjwvcGF0aD48cGF0aCBkPSJNNzQgMzJDNzUuMTA0NiAzMiA3NiAzMS4xMDQ2IDc2IDMwQzc2IDI4Ljg5NTQgNzUuMTA0NiAyOCA3NCAyOEM3Mi44OTU0IDI4IDcyIDI4Ljg5NTQgNzIgMzBDNzIgMzEuMTA0NiA3Mi44OTU0IDMyIDc0IDMyWiIgZmlsbD0iaHNsKHZhci0tZm9yZWdyb3VuZCkiPjwvcGF0aD48cGF0aCBkPSJNNzQgMjhDNzUuMTA0NiAyOCA3NiAyNy4xMDQ2IDc2IDI2Qzc2IDI0Ljg5NTQgNzUuMTA0NiAyNCA3NCAyNEM3Mi44OTU0IDI0IDcyIDI0Ljg5NTQgNzIgMjZDNzIgMjcuMTA0NiA3Mi44OTU0IDI4IDc0IDI4WiIgZmlsbD0iaHNsKHZhci0tZm9yZWdyb3VuZCkiPjwvcGF0aD48cGF0aCBkPSJNNzggNDRDNzkuMTA0NiA0NCA4MCA0My4xMDQ2IDgwIDQyQzgwIDQwLjg5NTQgNzkuMTA0NiA0MCA3OCA0MEM3Ni44OTU0IDQwIDc2IDQwLjg5NTQgNzYgNDJDNzYgNDMuMTA0NiA3Ni44OTU0IDQ0IDc4IDQ0WiIgZmlsbD0iaHNsKHZhci0tZm9yZWdyb3VuZCkiPjwvcGF0aD48cGF0aCBkPSJNODEgNDRDODIuMTA0NiA0NCA4MyA0My4xMDQ2IDgzIDQyQzgzIDQwLjg5NTQgODIuMTA0NiA0MCA4MSA0MEM3OS44OTU0IDQwIDc5IDQwLjg5NTQgNzkgNDJDNzkgNDMuMTA0NiA3OS44OTU0IDQ0IDgxIDQ0WiIgZmlsbD0iaHNsKHZhci0tZm9yZWdyb3VuZCkiPjwvcGF0aD48cGF0aCBkPSJNOTQgOEM5NS4xMDQ2IDggOTYgNy4xMDQ1NyA5NiA2Qzk2IDQuODk1NDMgOTUuMTA0NiA0IDk0IDRDOTIuODk1NCA0IDkyIDQuODk1NDMgOTIgNkM5MiA3LjEwNDU3IDkyLjg5NTQgOCA5NCA4WiIgZmlsbD0iI0VGNDQ0NCI+PC9wYXRoPjxwYXRoIGQ9Ik05NCAxMkM5NS4xMDQ2IDEyIDk2IDExLjEwNDYgOTYgMTBDOTYgOC44OTU0MyA5NS4xMDQ2IDggOTQgOEM5Mi44OTU0IDggOTIgOC44OTU0MyA5MiAxMEM5MiAxMS4xMDQ2IDkyLjg5NTQgMTIgOTQgMTJaIiBmaWxsPSJoc2wodmFyKC0tZm9yZWdyb3VuZCkpIj48L3BhdGg+PHBhdGggZD0iTTk0IDE2Qzk1LjEwNDYgMTYgOTYgMTUuMTA0NiA5NiAxNEM5NiAxMi44OTU0IDk1LjEwNDYgMTIgOTQgMTJDOTIuODk1NCAxMiA5MiAxMi44OTU0IDkyIDE0QzkyIDE1LjEwNDYgOTIuODk1NCAxNiA5NCAxNloiIGZpbGw9ImhzbCh2YXItLWZvcmVncm91bmQpIj48L3BhdGg+PHBhdGggZD0iTTkwIDIwQzkxLjEwNDYgMjAgOTIgMTkuMTA0NiA5MiAxOEM5MiAxNi44OTU0IDkxLjEwNDYgMTYgOTAgMTZDODguODk1NCAxNiA4OCAxNi44OTU0IDg4IDE4Qzg4IDE5LjEwNDYgODguODk1NCAyMCA5MCAyMFoiIGZpbGw9ImhzbCh2YXItLWZvcmVncm91bmQpIj48L3BhdGg+PHBhdGggZD0iTTkwIDI0QzkxLjEwNDYgMjQgOTIgMjMuMTA0NiA5MiAyMkM5MiAyMC44OTU0IDkxLjEwNDYgMjAgOTAgMjBDODguODk1NCAyMCA4OCAyMC44OTU0IDg4IDIyQzg4IDIzLjEwNDYgODguODk1NCAyNCA5MCAyNFoiIGZpbGw9ImhzbCh2YXItLWZvcmVncm91bmQpIj48L3BhdGg+PHBhdGggZD0iTTkwIDI4QzkxLjEwNDYgMjggOTIgMjcuMTA0NiA5MiAyNkM5MiAyNC44OTU0IDkxLjEwNDYgMjQgOTAgMjRDODguODk1NCAyNCA4OCAyNC44OTU0IDg4IDI2Qzg4IDI3LjEwNDYgODguODk1NCAyOCA5MCAyOFoiIGZpbGw9ImhzbCh2YXItLWZvcmVncm91bmQpIj48L3BhdGg+PHBhdGggZD0iTTkwIDMyQzkxLjEwNDYgMzIgOTIgMzEuMTA0NiA5MiAzMEM5MiAyOC44OTU0IDkxLjEwNDYgMjggOTAgMjhDODguODk1NCAyOCA4OCAyOC44OTU0IDg4IDMwQzg4IDMxLjEwNDYgODguODk1NCAzMiA5MCAzMloiIGZpbGw9ImhzbCh2YXItLWZvcmVncm91bmQpIj48L3BhdGg+PHBhdGggZD0iTTk4IDQ0Qzk5LjEwNDYgNDQgMTAwIDQzLjEwNDYgMTAwIDQyQzEwMCA0MC44OTU0IDk5LjEwNDYgNDAgOTggNDBDOTYuODk1NCA0MCA5NiA0MC44OTU0IDk2IDQyQzk2IDQzLjEwNDYgOTYuODk1NCA0NCA5OCg0NFoiIGZpbGw9ImhzbCh2YXItLWZvcmVncm91bmQpIj48L3BhdGg+PHBhdGggZD0iTTEwMiA0NEMxMDMuMTA1IDQ0IDEwNCA0My4xMDQ2IDEwNCA0MkMxMDQgNDAuODk1NCAxMDMuMTA1IDQwIDEwMiA0MEMxMDAuODk1IDQwIDEwMCA0MC44OTU0IDEwMCA0MkMxMDAgNDMuMTA0NiAxMDAuODk1IDQ0IDEwMiA0NFoiIGZpbGw9ImhzbCh2YXItLWZvcmVncm91bmQpIj48L3BhdGg+PHBhdGggZD0iTTEwNiA0NEMxMDcuMTA1IDQ0IDEwOCA0My4xMDQ2IDEwOCA0MkMxMDggNDAuODk1NCAxMDcuMTA1IDQwIDEwNiA0MEMxMDQuODk1IDQwIDEwNCA0MC44OTU0IDEwNCA0MkMxMDQgNDMuMTA0NiAxMDQuODk1IDQ0IDEwNiA0NFoiIGZpbGw9ImhzbCh2YXItLWZvcmVncm91bmQpIj48L3BhdGg+PHBhdGggZD0iTTEzMiA1MkMxMzMuMTA1IDUyIDEzNCA1MS4xMDQ2IDEzNCA1MEMxMzQgNDguODk1NCAxMzMuMTA1IDQ4IDEzMiA0OEMxMzAuODk1IDQ4IDEzMCA0OC44OTU0IDEzMCA1MEMxMzAgNTEuMTA0NiAxMzAuODk1IDUyIDEzMiA1MloiIGZpbGw9ImhzbCh2YXItLWZvcmVncm91bmQpIj48L3BhdGg+PHRleHQgZmlsbD0iaHNsKHZhci0tZm9yZWdyb3VuZCkpIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0id2hpdGUtc3BhY2U6IHByZSIgZm9udC1mYW1pbHk9InNlcmlmIiBmb250LXNpemU9IjI0IiBsZXR0ZXItc3BhY2luZz0iMC4yZW0iIHk9IjU0IiB4PSIwIj5TT0JIQTwvdGV4dD48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJjbGlwMF8xMDJfMiI+PHJlY3Qgd2lkdGg9IjE1MCIgaGVpZ2h0PSI1NyIgZmlsbD0id2hpdGUiPjwvcmVjdD48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=" />
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
