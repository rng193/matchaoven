import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col">

      {/* Full-width statement — dark green, at top */}
      <div className="bg-matcha-950 pt-24 pb-16 px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-gold-400 mb-4">
          Now Open
        </p>
        <h2
          className="font-serif font-semibold text-cream-100 leading-none mb-6"
          style={{ fontSize: 'clamp(4rem, 14vw, 14rem)' }}
        >
          Matcha Oven
        </h2>
        <p className="text-sm text-matcha-300 font-light tracking-wide">
          Follow us on Instagram for updates{' '}
          <a
            href="https://www.instagram.com/matchaoven"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-400 hover:text-gold-300 transition-colors"
          >
            @matchaoven
          </a>
        </p>
      </div>

      {/* Main hero content */}
      <div className="bg-gradient-to-br from-white via-cream-50 to-matcha-50">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-gold-400" />
              <p className="text-xs font-medium uppercase tracking-widest text-gold-500">
                Handcrafted in New York
              </p>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-matcha-900 leading-tight mb-8">
              Cookies Baked with the{' '}
              <em className="italic text-matcha-600">Finest Matcha</em>
            </h1>

            <p className="text-matcha-700 text-lg leading-relaxed mb-10 font-light max-w-md">
              Every cookie is crafted in small batches using premium ceremonial-grade matcha.
              Rich, earthy, and perfectly sweet — a little piece of Japan in every bite.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="bg-matcha-900 text-cream-50 px-10 py-3.5 text-xs font-medium uppercase tracking-widest hover:bg-matcha-800 transition-colors"
              >
                Shop Now
              </a>
              <a
                href="#about"
                className="border border-matcha-300 text-matcha-700 px-10 py-3.5 text-xs font-medium uppercase tracking-widest hover:border-matcha-600 transition-colors"
              >
                Our Story
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 pt-8 border-t border-cream-200">
              {[
                { value: 'Small Batch', label: 'Made to Order' },
                { value: 'Premium', label: 'Ceremonial Matcha' },
                { value: 'NY Made', label: 'New York, USA' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-sm font-semibold text-matcha-800">{value}</div>
                  <div className="text-xs text-gold-500 mt-0.5 uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center items-center">
            <div className="relative bg-matcha-100 bg-opacity-40 rounded-sm p-12">
              <div className="absolute inset-0 rounded-sm border border-gold-300 opacity-30" />
              <Image
                src="/logo.png"
                alt="Matcha Oven"
                width={360}
                height={360}
                style={{ objectFit: 'contain' }}
                className="relative drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
