import Link from 'next/link';
import { Building2, Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#overview', label: 'Overview' },
    { href: '#highlights', label: 'Highlights' },
    { href: '#location', label: 'Location' },
    { href: '#master-plan', label: 'Master Plan' },
    { href: '#floor-plan', label: 'Floor Plans' },
    { href: '#price', label: 'Pricing' },
    { href: '#amenities', label: 'Amenities' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact Us' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center mx-auto px-4">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Building2 className="h-7 w-7 text-primary" />
          <span className="font-bold text-xl font-headline">Prestige Crystal Lawns</span>
        </Link>
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
            <Button variant="outline" className="hidden sm:flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                +91 12345 67890
            </Button>
            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <nav className="flex flex-col space-y-4 mt-8">
                            {navLinks.map(link => (
                                <SheetClose asChild key={link.href}>
                                  <Link href={link.href} className="text-lg transition-colors hover:text-primary">
                                      {link.label}
                                  </Link>
                                </SheetClose>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
