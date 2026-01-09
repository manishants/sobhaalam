'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Sobha Hoskote?",
    answer: "Sobha Hoskote is a new premium residential apartment project located on Old Madras Road (OMR), Hoskote, Bangalore. It features the tallest towers in East Bengaluru, offering 1, 2, 3, & 4 BHK apartments across a 48-acre development."
  },
  {
    question: "Where is the project located?",
    answer: "The project is strategically located at Hoskote Toll Gate on OMR (Old Madras Road, NH-75), providing excellent connectivity to IT hubs, international schools, hospitals, and entertainment zones in East Bengaluru."
  },
  {
    question: "What types of apartments are available at Sobha Hoskote?",
    answer: "Sobha Hoskote offers a variety of configurations to suit different family sizes and needs, including 1, 2, 3, and 4 BHK premium apartments."
  },
  {
    question: "What makes Sobha Hoskote unique?",
    answer: "It is set to be an iconic landmark with the tallest residential towers in East Bengaluru (53 floors). The project is spread over 48 acres and includes integrated retail and commercial spaces, along with world-class amenities."
  },
  {
    question: "What is the expected price per square foot?",
    answer: "The expected price for apartments at Sobha Hoskote is approximately ₹13,500 per square foot. Prices may vary based on the unit size and location within the tower."
  },
  {
    question: "What is an Expression of Interest (EOI)?",
    answer: "An Expression of Interest (EOI) is a non-binding offer from a potential buyer to show serious interest in purchasing a property. Submitting an EOI for Sobha Hoskote gives you priority access to unit selection and exclusive pre-launch offers."
  },
  {
    question: "What are the EOI amounts?",
    answer: "The EOI amount is ₹15,00,000 for 1 & 2 BHK units and ₹20,00,000 for 3 & 4 BHK units."
  },
  {
    question: "What are the key amenities at Sobha Hoskote?",
    answer: "The project will feature a wide range of world-class amenities, including a swimming pool, state-of-the-art gymnasium, clubhouse, landscaped gardens, jogging tracks, sports courts, and 24/7 security."
  },
  {
    question: "Who is the developer of this project?",
    answer: "The project is developed by Sobha Limited, one of India's most respected and trustworthy real estate developers, known for their commitment to quality, design, and timely delivery."
  },
  {
    question: "When is the expected possession date?",
    answer: "The possession timeline will be announced after the official RERA registration and project launch. Please register your interest for the latest updates."
  },
  {
    question: "Is there a commercial or retail space within the project?",
    answer: "Yes, Sobha Hoskote is a mixed-use development that includes a G+2 retail building and a G+4 commercial building, providing convenient access to shopping and services for residents."
  }
];

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mt-4 text-lg">Find answers to common questions about Sobha Hoskote.</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
