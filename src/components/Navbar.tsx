import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-secondary text-center py-2 px-4">
        <a href="tel:+15017494338" className="inline-flex items-center gap-2 text-primary font-display text-sm md:text-base tracking-wider hover:text-gold-light transition-colors">
          <Phone className="w-4 h-4" />
          +1 (501) 749-4338
        </a>
      </div>
      <nav className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <a href="#home" className="font-display text-xl md:text-2xl text-gold-gradient tracking-widest">
            Shiv Ji
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="font-display text-xs tracking-[0.2em] uppercase text-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
            <a href="tel:+15017494338" className="bg-gold-gradient text-primary-foreground font-display text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity">
              Call Now
            </a>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-background border-t border-border px-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block font-display text-sm tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors py-2">
                {link.label}
              </a>
            ))}
            <a href="tel:+15017494338" className="block bg-gold-gradient text-primary-foreground font-display text-sm tracking-[0.15em] uppercase px-5 py-2.5 rounded-md text-center">
              Call Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
