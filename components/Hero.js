import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream-50 pt-16">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-matcha-500 mb-6">
            Handcrafted in New York
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-matcha-900 leading-tight mb-8">
            Cookies Baked with the Finest Matcha
          </h1>
          <p className="text-matcha-700 text-lg leading-relaxed mb-10 font-light max-w-md">
            Every cookie is crafted in small batches using premium ceremonial-grade matcha.
            Rich, earthy, and perfectly sweet — a little piece of Japan in every bite.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="bg-matcha-800 text-white px-8 py-3 text-sm font-medium uppercase tracking-widest hover:bg-matcha-700 transition-colors"
            >
              Shop Now
            </a>
            <a
              href="#about"
              className="border border-matcha-700 text-matcha-800 px-8 py-3 text-sm font-medium uppercase tracking-widest hover:bg-cream-100 transition-colors"
            >
              Our Story
            </a>
          </div>

          <div className="flex gap-10 mt-14 border-t border-cream-200 pt-8">
            {[
              { value: 'Small Batch', label: 'Made to Order' },
              { value: 'Premium', label: 'Ceremonial Matcha' },
              { value: 'NY Made', label: 'New York, USA' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-sm font-semibold text-matcha-800">{value}</div>
                <div className="text-xs text-matcha-500 mt-0.5 uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Matcha Oven"
            width={380}
            height={380}
            style={{ objectFit: 'contain' }}
            className="drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
