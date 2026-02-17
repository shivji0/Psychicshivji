const stats = [
  { number: "5,000+", label: "Clients Helped Across USA" },
  { number: "1,000+", label: "Google Ratings" },
  { number: "25+", label: "Years Experience" },
  { number: "50+", label: "Cities Served" },
];

const StatsSection = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</p>
              <p className="font-body text-sm md:text-base text-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
