import { Phone } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">✨</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-gradient mb-8">About Shiv Ji</h2>
          <div className="space-y-5 font-body text-lg text-muted-foreground leading-relaxed">
            <p>
              With over <strong className="text-foreground">25+ years</strong> of professional experience, Shiv Ji is a trusted Psychic, Astrologer, and Spiritual Healer serving clients across Kansas City, Kansas and throughout the USA. Known for accuracy, compassion, and powerful spiritual insight, Shiv Ji has helped thousands of individuals overcome challenges in love, relationships, marriage, career, business, and personal life.
            </p>
            <p>
              Using the wisdom of Vedic astrology, psychic readings, tarot guidance, and spiritual healing techniques, Shiv Ji provides clear answers and effective solutions tailored to each client's unique situation. Many clients seek guidance for love problem solutions, black magic removal, negative energy cleansing, chakra balancing, and relationship reunions — and have experienced positive, life-changing results.
            </p>
            <p>
              Shiv Ji's mission is to bring peace, clarity, and success into people's lives through honest guidance and proven spiritual remedies. Whether you are searching for the best psychic in Kansas City, KS, a trusted astrologer, or genuine spiritual healing, Shiv Ji is dedicated to helping you find the right path forward 🌟
            </p>
          </div>
          <a href="tel:+15017494338" className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground font-display text-sm tracking-[0.15em] uppercase px-8 py-4 rounded-md shadow-gold hover:opacity-90 transition-opacity mt-10">
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
