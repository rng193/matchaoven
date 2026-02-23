import { useState } from 'react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Strawberry Matcha Latte',
    description: 'Classic butter cookie infused with ceremonial-grade matcha. Melt-in-your-mouth texture.',
    price: '$15.00',
    image: '/strawberry-matcha-latte.jpg',
    tag: 'Best Seller',
    tagColor: 'bg-matcha-500',
  },
  {
    id: 2,
    name: 'Banana Bread Chocolate Chip',
    description: 'Chewy matcha cookie loaded with dark chocolate chips. A perfect earthy-sweet combo.',
    price: '$18.00',
    image: '/banana-bread-choc-chip.jpg',
    tag: 'New',
    tagColor: 'bg-cream-400',
  },
  {
    id: 3,
    name: 'Strawberry Pocky',
    description: 'Traditional Japanese flavour pairing — smooth red bean paste in a crisp matcha shell.',
    price: '$20.00',
    image: '/strawberry-pocky.jpg',
    tag: 'Popular',
    tagColor: 'bg-matcha-700',
  },
];

function NotifyButton() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-matcha-600 text-sm font-semibold">
        ✓ We'll notify you!
      </p>
    );
  }

  if (open) {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 w-full mt-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 border border-matcha-200 rounded-full px-3 py-1.5 text-sm text-matcha-900 placeholder-matcha-300 focus:outline-none focus:ring-2 focus:ring-matcha-400"
        />
        <button
          type="submit"
          className="bg-matcha-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-matcha-700 transition-colors"
        >
          Notify Me
        </button>
      </form>
    );
  }

  return (
    <button
      onClick={() => setOpen(true)}
      className="border-2 border-matcha-500 text-matcha-600 px-5 py-2 rounded-full text-sm font-semibold hover:bg-matcha-50 transition-colors"
    >
      Notify Me
    </button>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-6">
          <span className="inline-block bg-matcha-100 text-matcha-700 text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-widest">
            Our Menu
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-matcha-900 mb-4">
            Signature Cookies
          </h2>
        </div>

        {/* Out of stock banner */}
        <div className="bg-cream-100 border border-cream-300 rounded-2xl px-6 py-4 text-center mb-12">
          <p className="text-matcha-700 font-medium">
            🍵 We're currently restocking our ingredients — cookies coming soon! Enter your email on any product to be the first to know.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-cream-50 rounded-3xl p-6 border border-matcha-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image & Tag */}
              <div className="relative mb-4">
                <div className="w-full h-48 relative rounded-2xl overflow-hidden">
                  <Image src={product.image} alt={product.name} layout="fill" objectFit="contain" />
                </div>
                {product.tag && (
                  <span className={`absolute top-3 right-3 ${product.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {product.tag}
                  </span>
                )}
                <span className="absolute top-3 left-3 bg-white text-matcha-600 text-xs font-bold px-3 py-1 rounded-full border border-matcha-200">
                  Out of Stock
                </span>
              </div>

              {/* Info */}
              <h3 className="font-serif text-xl font-bold text-matcha-900 mb-2">{product.name}</h3>
              <p className="text-matcha-600 text-sm leading-relaxed flex-1 mb-4">{product.description}</p>

              {/* Price & Notify */}
              <div className="flex items-center justify-between mt-auto flex-wrap gap-2">
                <span className="text-matcha-700 font-bold text-lg">{product.price}</span>
                <NotifyButton />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
