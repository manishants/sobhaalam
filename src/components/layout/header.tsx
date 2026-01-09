'use client';

import Link from 'next/link';
import { Building2, Menu, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { BrochurePopup } from '@/components/features/brochure-popup';
import { Dialog, DialogTrigger } from '../ui/dialog';
import { useEffect, useState } from 'react';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#overview', label: 'Overview' },
    { href: '#price', label: 'Price' },
    { href: '#master-plan', label: 'Site & Floor Plan' },
    { href: '#amenities', label: 'Amenities' },
    { href: '#location', label: 'Location' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#virtual-tour', label: 'Virtual Site Tour' },
];

export function Header() {
  const [activeLink, setActiveLink] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = navLinks.map(link => document.querySelector(link.href)).filter(Boolean);
      const scrollPosition = window.scrollY + 150; // Add offset for better accuracy

      for (const section of sections) {
        if (section instanceof HTMLElement) {
           if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
             const newActiveLink = `#${section.id}`;
             if (newActiveLink !== activeLink) {
                setActiveLink(newActiveLink);
             }
             break;
           }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLink]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setActiveLink(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center mx-auto px-4">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Building2 className="h-7 w-7 text-primary" />
          <span className="font-bold text-xl font-headline text-foreground">Prestige Crystal Lawns</span>
        </Link>
        <nav className="hidden lg:flex items-center space-x-4 text-sm font-medium">
          {navLinks.map(link => (
            <Link key={link.href + link.label} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className={`transition-colors hover:text-primary ${activeLink === link.href ? 'text-primary' : 'text-muted-foreground'}`}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Dialog>
              <DialogTrigger asChild>
                <Button className="hidden sm:flex items-center">
                    <Download className="mr-2 h-4 w-4 animate-bounce" />
                    Brochure
                </Button>
              </DialogTrigger>
              <BrochurePopup />
          </Dialog>
            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-foreground hover:bg-accent">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <nav className="flex flex-col space-y-4 mt-8">
                            {navLinks.map(link => (
                                <SheetClose asChild key={link.href + link.label}>
                                  <Link href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className={`text-lg transition-colors hover:text-primary ${activeLink === link.href ? 'text-primary' : 'text-foreground'}`}>
                                      {link.label}
                                  </Link>
                                </SheetClose>
                            ))}
                            <Dialog>
                               <DialogTrigger asChild>
                                    <Button className="w-full mt-4">
                                        <Download className="mr-2 h-4 w-4 animate-bounce" />
                                        Brochure
                                    </Button>
                               </DialogTrigger>
                               <BrochurePopup />
                            </Dialog>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
