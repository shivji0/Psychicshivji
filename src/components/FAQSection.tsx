import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What can I expect from a psychic reading session?", a: "During a psychic reading session, Shiv Ji will connect with your energy to provide insights into your past, present, and future. Sessions typically last 30-60 minutes. You can ask questions about love, career, family, or any area of your life. Each reading is confidential, honest, and designed to give you clarity and direction." },
  { q: "How does spiritual healing work?", a: "Spiritual healing works by channeling positive energy to remove blockages, negative influences, and emotional burdens. Shiv Ji uses ancient Vedic techniques, chakra balancing, and energy cleansing to restore harmony to your mind, body, and soul. Many clients feel an immediate sense of relief and peace after their sessions." },
  { q: "Can you help with love and relationship problems?", a: "Yes! Love and relationship issues are one of the most common reasons clients seek Shiv Ji's guidance. Whether you're dealing with heartbreak, separation, trust issues, or communication problems, spiritual counseling and effective remedies can help restore harmony and strengthen your relationship." },
  { q: "Do you offer remote or phone consultations?", a: "Absolutely! Shiv Ji offers phone and remote consultations for clients who cannot visit in person. Distance does not affect the accuracy or effectiveness of psychic readings, astrology consultations, or spiritual healing. Call +1 (501) 749-4338 to schedule your session." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-gradient mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="font-display text-sm md:text-base text-foreground hover:text-primary py-5 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
