import { Bot } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl font-bold">AI Estate</span>
          </div>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            &copy; {currentYear} AI Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
