'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const priceData = [
    {
        type: "3 BHK",
        area: "1850 Sq.Ft.",
        price: "1.5 Cr*",
        features: ["3 Bedrooms", "3 Bathrooms", "Spacious Living Area", "2 Balconies"]
    },
    {
        type: "4 BHK",
        area: "2450 Sq.Ft.",
        price: "2.1 Cr*",
        features: ["4 Bedrooms", "4 Bathrooms", "Large Dining Area", "Study Room", "3 Balconies"]
    }
]

export function Pricing() {
    return (
        <section id="price" className="py-20 md:py-28 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Price List</h2>
                    <p className="text-muted-foreground mt-4 text-lg">Affordable luxury with flexible payment plans. Find the perfect home that fits your budget.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {priceData.map((plan, index) => (
                        <Card key={index} className="shadow-lg flex flex-col">
                            <CardHeader>
                                <CardTitle className="text-primary text-2xl">{plan.type}</CardTitle>
                                <CardDescription>{plan.area}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-4xl font-bold mb-6">{plan.price}</p>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-green-500" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Get Detailed Price</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
