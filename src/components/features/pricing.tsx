'use client';

import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { BrochurePopup } from './brochure-popup';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from '../ui/card';

const priceData = [
    {
        type: "1 BHK",
        area: "Approx. 750 Sq Ft",
        price: "On Request",
    },
    {
        type: "2 BHK",
        area: "Approx. 1200 Sq Ft",
        price: "On Request",
    },
    {
        type: "3 BHK",
        area: "Approx. 1800 Sq Ft",
        price: "On Request",
    },
    {
        type: "4 BHK",
        area: "Approx. 2400 sq ft",
        price: "On Request",
    }
];

// Use local EOI image from public/images/others
const eoiImage = { id: 'eoi', imageUrl: '/images/others/sobha-hoskote-eoi.webp', description: 'Sobha Hoskote EOI Details', imageHint: 'eoi-image' };

export function Pricing() {
    return (
        <section id="price" className="py-20 md:py-28 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Price List</h2>
                    <p className="text-muted-foreground mt-4 text-lg">Experience luxury living at Sobha Hoskote with competitive pricing. Submit your Expression of Interest (EOI) today.</p>
                </div>

                <Dialog>
                    <div className="grid lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
                        <Card className="lg:col-span-2 bg-background/50 backdrop-blur-sm border-border/50 p-4 rounded-lg shadow-lg">
                             <div className="text-center mb-4">
                                <p className="font-semibold text-foreground">Expected Price: <span className="text-primary font-bold">₹13,500 per sq. ft.</span></p>
                            </div>
                            <Table>
                                <TableHeader>
                                    <TableRow className='border-border/30'>
                                        <TableHead className="font-bold text-foreground">Unit Type</TableHead>
                                        <TableHead className="font-bold text-foreground">Size (Approx.)</TableHead>
                                        <TableHead className="font-bold text-foreground">Price</TableHead>
                                        <TableHead></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {priceData.map((plan, index) => (
                                        <TableRow key={index} className='border-border/30'>
                                            <TableCell className='font-medium'>{plan.type}</TableCell>
                                            <TableCell>{plan.area}</TableCell>
                                            <TableCell className='text-primary font-semibold'>{plan.price}</TableCell>
                                            <TableCell>
                                                <DialogTrigger asChild>
                                                    <Button variant="default">Get Price</Button>
                                                </DialogTrigger>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>

                        <div className="relative text-center">
                             <p className="absolute -right-12 top-1/2 -translate-y-1/2 -rotate-90 text-4xl font-bold tracking-widest text-muted-foreground/10 hidden lg:block">Price</p>
                            <DialogTrigger asChild>
                                <div className="cursor-pointer group">
                                    <Card className="bg-background/50 backdrop-blur-sm border-border/50 p-2">
                                        <Image
                                            src={eoiImage.imageUrl}
                                            alt={eoiImage.description}
                                            width={400}
                                            height={500}
                                            className="w-full h-auto object-contain rounded-lg group-hover:shadow-primary/20 transition-shadow"
                                            data-ai-hint={eoiImage.imageHint}
                                        />
                                    </Card>
                                    <div className="bg-black/80 text-white p-3 mt-[-10px] relative z-10 rounded-b-lg">
                                        <h3 className="font-semibold text-lg">EOI Details</h3>
                                        <p className="text-xs">1 & 2 BHK: ₹15L | 3 & 4 BHK: ₹20L</p>
                                    </div>
                                </div>
                            </DialogTrigger>
                        </div>
                    </div>
                    <BrochurePopup />
                </Dialog>
            </div>
        </section>
    )
}
