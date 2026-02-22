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
              { icon: '🚚', label: 'Free Delivery' },
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
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Decorative circles */}
            <div className="absolute inset-0 rounded-full bg-matcha-200 opacity-30 animate-pulse" />
            <div className="absolute inset-6 rounded-full bg-matcha-100 opacity-50" />
            {/* Cookie emoji placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-9xl md:text-[10rem] drop-shadow-xl">🍪</div>
                <div className="mt-4 bg-white bg-opacity-80 rounded-2xl px-6 py-3 shadow-lg">
                  <p className="font-serif text-matcha-800 font-bold text-lg">Matcha Butter Cookie</p>
                  <p className="text-matcha-500 font-semibold">From RM 15.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
