'use client';

import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { BrochurePopup } from './brochure-popup';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const priceData = [
    {
        type: "30X50",
        area: "1500 Sq Ft",
        price: "₹1.38 Cr* Onwards",
    },
    {
        type: "60X40",
        area: "2400 sq ft",
        price: "₹2.22 Cr* Onwards",
    },
    {
        type: "50X80",
        area: "4000 sq ft",
        price: "₹3.7 Cr* Onwards",
    }
];

const costingDetailsImage = PlaceHolderImages.find(p => p.id === 'costing-sheet');

export function Pricing() {
    return (
        <section id="price" className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Price List</h2>
                    <p className="text-muted-foreground mt-4 text-lg">Affordable luxury with flexible payment plans. Find the perfect home that fits your budget.</p>
                </div>

                <Dialog>
                    <div className="grid lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
                        <div className="lg:col-span-2 bg-card p-4 rounded-lg shadow-lg">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="font-bold text-foreground">Type</TableHead>
                                        <TableHead className="font-bold text-foreground">Carpet Area</TableHead>
                                        <TableHead className="font-bold text-foreground">Price</TableHead>
                                        <TableHead></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {priceData.map((plan, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{plan.type}</TableCell>
                                            <TableCell>{plan.area}</TableCell>
                                            <TableCell>{plan.price}</TableCell>
                                            <TableCell>
                                                <DialogTrigger asChild>
                                                    <Button variant="default" className="bg-black hover:bg-gray-800 text-white">Price Breakup</Button>
                                                </DialogTrigger>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        <div className="relative text-center">
                             <p className="absolute -right-12 top-1/2 -translate-y-1/2 -rotate-90 text-4xl font-bold tracking-widest text-muted-foreground/50 hidden lg:block">Price</p>
                            <DialogTrigger asChild>
                                <div className="cursor-pointer group">
                                    {costingDetailsImage && (
                                        <Image
                                            src={costingDetailsImage.imageUrl}
                                            alt={costingDetailsImage.description}
                                            width={400}
                                            height={500}
                                            className="w-full h-auto object-contain border rounded-lg p-2 bg-card shadow-lg group-hover:shadow-primary/20 transition-shadow"
                                            data-ai-hint={costingDetailsImage.imageHint}
                                        />
                                    )}
                                    <div className="bg-black text-white p-3 mt-[-10px] relative z-10 rounded-b-lg">
                                        <h3 className="font-semibold text-lg">Complete Costing Details</h3>
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
