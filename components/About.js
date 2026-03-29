export default function About() {
  return (
    <section id="about" className="py-28 bg-matcha-950">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs font-medium uppercase tracking-widest text-matcha-300 mb-6">
          Our Story
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-cream-100 mb-8 leading-tight">
          Baked with Passion, Steeped in Tradition
        </h2>
        <p className="text-matcha-200 text-base leading-relaxed mb-5 font-light">
          Matcha Oven was born from a love of Japanese tea culture and a belief that great cookies
          deserve great ingredients. We source our matcha directly from small farms in Uji, Kyoto —
          the birthplace of Japanese matcha.
        </p>
        <p className="text-matcha-200 text-base leading-relaxed mb-12 font-light">
          Every batch is baked in small quantities to ensure freshness, quality, and that little
          sprinkle of care that makes all the difference.
        </p>
        <div className="grid grid-cols-3 gap-6 border-t border-matcha-800 pt-8">
          {[
            { number: '2026', label: 'Founded' },
            { number: '50+', label: 'Happy Customers' },
            { number: '100%', label: 'Natural Ingredients' },
          ].map(({ number, label }) => (
            <div key={label}>
              <div className="font-serif text-2xl font-semibold text-cream-100">{number}</div>
              <div className="text-xs text-matcha-400 mt-1 uppercase tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
