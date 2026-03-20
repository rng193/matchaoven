import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-matcha-50 via-cream-100 to-cream-200 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="inline-block bg-matcha-100 text-matcha-700 text-sm font-semibold px-4 py-1 rounded-full mb-6 uppercase tracking-widest">
            Handcrafted with Love
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-matcha-900 leading-tight mb-6">
            Cookies Baked with the{' '}
            <span className="text-matcha-500">Finest Matcha</span>
          </h1>
          <p className="text-matcha-700 text-lg leading-relaxed mb-8">
            Every cookie is crafted in small batches using premium ceremonial-grade matcha.
            Rich, earthy, and perfectly sweet — a little piece of Japan in every bite.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="bg-matcha-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-matcha-700 transition-colors shadow-md"
            >
              Shop Now
            </a>
            <a
              href="#about"
              className="border-2 border-matcha-600 text-matcha-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-matcha-50 transition-colors"
            >
              Our Story
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex gap-6 mt-10">
            {[
              { icon: '🌿', label: 'Premium Matcha' },
              { icon: '🍪', label: 'Small Batch' },
              { icon: '🚚', label: 'Delivery' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <span className="text-2xl mb-1">{icon}</span>
                <span className="text-xs font-semibold text-matcha-600 uppercase tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="flex justify-center">
          <Image src="/logo.png" alt="Matcha Oven" width={320} height={320} style={{ objectFit: 'contain' }} className="drop-shadow-xl" />
        </div>
      </div>
    </section>
  );
}
