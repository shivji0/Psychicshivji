import { Phone } from "lucide-react";
import psychicReading from "@/assets/psychic-reading.jpg";
import palmReading from "@/assets/palm-reading.jpg";
import horoscopeReading from "@/assets/horoscope-reading.jpg";
import spiritualHealing from "@/assets/spiritual-healing.jpg";
import loveRelationship from "@/assets/love-relationship.jpg";
import psychicAstrology from "@/assets/psychic-astrology.jpg";
import blackMagicRemoval from "@/assets/black-magic-removal.jpg";
import negativeEnergy from "@/assets/negative-energy.jpg";
import husbandWife from "@/assets/husband-wife.jpg";

const services = [
  { title: "Psychic Readings", price: "$25", image: psychicReading, description: "Deep insight into your past, present, and future. With over 25+ years of intuitive experience, we help answer important questions about love, career, family, and life decisions 🌟" },
  { title: "Palm Reading", price: "$30", image: palmReading, description: "An ancient practice that reveals valuable information about your destiny, personality, strengths, and life path by studying the lines of your hand ✨" },
  { title: "Horoscope Reading", price: "$50", image: horoscopeReading, description: "Based on accurate birth chart analysis and planetary positions. Detailed insights into opportunities, challenges, marriage timing, career growth, and financial success 🔮" },
  { title: "Spiritual Healing & Cleansing", price: "$250", image: spiritualHealing, description: "Restores balance to your mind, body, and soul. Through energy cleansing and chakra alignment, we remove emotional blockages and promote positivity ✨" },
  { title: "Love & Relationship Problems", price: "Consult", image: loveRelationship, description: "Compassionate spiritual guidance to help rebuild trust, strengthen emotional bonds, and restore harmony in relationships 💖" },
  { title: "Psychic & Astrology Services", price: "Consult", image: psychicAstrology, description: "Complete life guidance blending intuitive insight with astrological knowledge for career, marriage, business, and personal growth 🌟" },
  { title: "Black Magic Removal", price: "Consult", image: blackMagicRemoval, description: "Eliminate harmful influences using powerful spiritual protection methods. We restore positivity, balance, and peace ✨" },
  { title: "Negative Energy Cleansing", price: "Consult", image: negativeEnergy, description: "Clear unwanted vibrations from your aura and surroundings, helping attract success, happiness, and positive energy 🌟" },
  { title: "Husband & Wife Disputes", price: "Consult", image: husbandWife, description: "Spiritual counseling and effective remedies to improve communication, rebuild trust, and restore love between partners ❤️" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-gradient mb-4">Our Services</h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of spiritual services designed to bring clarity, healing, and positive transformation into your life
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold">
              <div className="relative h-52 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground font-display text-xs tracking-wider px-3 py-1.5 rounded-md">
                  {service.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                <a href="tel:+15017494338" className="inline-flex items-center gap-2 text-primary font-display text-xs tracking-[0.15em] uppercase hover:text-gold-light transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
