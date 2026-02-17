import { Phone, Star } from "lucide-react";
import heroImage from "@/assets/hero-shiva.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16">
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Divine Spiritual Guidance" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <p className="text-primary font-display text-sm md:text-base tracking-[0.3em] uppercase mb-4">✨ Psychic · Astrologer · Spiritual Healer</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-gold-gradient">Shiv Ji</span>
            <br />
            <span className="text-foreground text-3xl md:text-4xl lg:text-5xl">Psychic & Astrologer</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            With over <strong className="text-primary">25+ years</strong> of professional experience, Shiv Ji is a trusted Psychic, Astrologer, and Spiritual Healer serving clients across Kansas City, Kansas and throughout the USA.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:+15017494338" className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground font-display text-sm tracking-[0.15em] uppercase px-8 py-4 rounded-md shadow-gold hover:opacity-90 transition-opacity">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <div className="flex items-center gap-1.5 text-primary">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              <span className="text-muted-foreground font-body text-sm ml-2">1000+ Google Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
