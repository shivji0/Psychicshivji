import { Star } from "lucide-react";

const testimonials = [
  { text: "Shiv Ji's psychic reading was incredibly accurate. He helped me understand my relationship problems and gave me clear guidance. Within weeks, my life started improving. Highly recommended!", name: "Sarah M.", location: "Kansas City, KS" },
  { text: "I was going through a very difficult time in my marriage. Shiv Ji's spiritual healing sessions brought peace back into our lives. My wife and I are closer than ever. Thank you!", name: "James R.", location: "Overland Park, KS" },
  { text: "The horoscope reading was so detailed and accurate. Shiv Ji predicted career changes that actually happened. His Vedic astrology knowledge is unmatched. I visit him regularly now.", name: "Priya K.", location: "Lenexa, KS" },
  { text: "I felt negative energy around me for months. After Shiv Ji's cleansing session, I felt an immediate shift. My business improved and I feel more positive than ever. Truly life-changing!", name: "Michael T.", location: "Kansas City, MO" },
  { text: "Shiv Ji removed black magic that was affecting my family for years. Other healers couldn't help, but his powerful remedies worked. We are finally living in peace and happiness.", name: "Angela D.", location: "Olathe, KS" },
  { text: "The palm reading session was eye-opening. Shiv Ji identified patterns in my life that nobody else could see. His spiritual advice helped me make better decisions. Five stars!", name: "David L.", location: "Lee's Summit, MO" },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-gradient mb-4">Client Testimonials</h2>
          <p className="font-body text-lg text-muted-foreground">Real stories from real people who found clarity and healing</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-lg p-6 border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <p className="font-body text-muted-foreground italic leading-relaxed mb-5">"{t.text}"</p>
              <div>
                <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
