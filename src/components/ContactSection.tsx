import { Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-gradient mb-4">Contact Us</h2>
          <p className="font-body text-lg text-muted-foreground">Reach out for a consultation and begin your journey to clarity</p>
        </div>
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-8 border border-border text-center">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Phone</h3>
            <a href="tel:+15017494338" className="font-body text-primary hover:text-gold-light transition-colors text-lg">
              +1 (501) 749-4338
            </a>
          </div>
          <div className="bg-card rounded-lg p-8 border border-border text-center">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Address</h3>
            <p className="font-body text-muted-foreground">1843 Village West Pkwy,<br />Kansas City, KS 66111</p>
          </div>
        </div>
        <div className="mt-12 max-w-4xl mx-auto rounded-lg overflow-hidden border border-border">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.8!2d-94.8309!3d39.1152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c08e3b0f6e0001%3A0x1234567890!2s1843+Village+West+Pkwy%2C+Kansas+City%2C+KS+66111!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
