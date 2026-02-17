import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+15017494338"
      className="fixed bottom-6 right-6 z-50 bg-gold-gradient text-primary-foreground p-4 rounded-full shadow-gold hover:scale-110 transition-transform"
      aria-label="Call Now"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default FloatingCallButton;
