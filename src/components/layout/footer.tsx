import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-muted-foreground text-xs space-y-4">
          <p>Disclaimer: The content provided on this website is for informational purposes only and does not constitute an offer or solicitation. All images are for illustrative purposes and may not be to scale. The company reserves the right to make changes to the project specifications, amenities, and features without prior notice. Please verify all details with our sales team.</p>
          <div className="flex justify-center gap-4">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary">Terms of Use</Link>
          </div>
          <p>&copy; {currentYear} Prestige Crystal Lawns. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
