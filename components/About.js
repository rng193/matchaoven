import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-matcha-50 to-cream-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Visual */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-matcha-200 shadow-lg overflow-hidden">
              <Image src="/logo.png" alt="Matcha Oven" layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="inline-block bg-matcha-100 text-matcha-700 text-sm font-semibold px-4 py-1 rounded-full mb-6 uppercase tracking-widest">
            Our Story
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-matcha-900 mb-6">
            Baked with Passion, Steeped in Tradition
          </h2>
          <p className="text-matcha-700 text-lg leading-relaxed mb-4">
            Matcha Oven was born from a love of Japanese tea culture and a belief that great cookies
            deserve great ingredients. We source our matcha directly from small farms in Uji, Kyoto —
            the birthplace of Japanese matcha.
          </p>
          <p className="text-matcha-700 text-lg leading-relaxed mb-8">
            Every batch is baked in small quantities to ensure freshness, quality, and that little
            sprinkle of care that makes all the difference.
          </p>
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { number: '2026', label: 'Founded' },
              { number: '50+', label: 'Happy Customers' },
              { number: '100%', label: 'Natural Ingredients' },
            ].map(({ number, label }) => (
              <div key={label} className="bg-white rounded-2xl p-4 shadow-sm border border-matcha-100">
                <div className="font-serif text-2xl font-bold text-matcha-600">{number}</div>
                <div className="text-sm text-matcha-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
