import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-xl text-gold-gradient mb-4">Shiv Ji</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Trusted Psychic, Astrologer & Spiritual Healer serving Kansas City and the entire USA with 25+ years of experience.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm tracking-[0.2em] uppercase text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Services", "Testimonials", "Contact", "FAQ"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm tracking-[0.2em] uppercase text-foreground mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a href="tel:+15017494338" className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                +1 (501) 749-4338
              </a>
              <div className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                1843 Village West Pkwy, Kansas City, KS 66111
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Shiv Ji Psychic & Astrologer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
