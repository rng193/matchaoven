import { useState } from 'react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Strawberry Matcha Latte',
    description: 'A dreamy blend of sweet strawberry and earthy matcha in every bite. Light, fragrant, and perfectly balanced.',
    price: '$15.00',
    image: '/strawberry-matcha-latte.jpg',
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'Banana Bread Chocolate Chip',
    description: 'Moist and rich banana bread flavor packed with gooey chocolate chips. Soft, chewy, and indulgent.',
    price: '$18.00',
    image: '/banana-bread-choc-chip.jpg',
    tag: 'New',
  },
  {
    id: 3,
    name: 'Strawberry Pocky',
    description: 'Inspired by the classic Japanese snack — a crisp, sweet strawberry-flavored cookie with a satisfying crunch.',
    price: '$20.00',
    image: '/strawberry-pocky.jpg',
    tag: 'Popular',
  },
];

function NotifyButton() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await fetch('/api/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-matcha-600 text-xs font-medium uppercase tracking-wide">
        We'll notify you when we're back
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
          className="flex-1 border border-cream-300 px-3 py-2 text-sm text-matcha-900 placeholder-matcha-300 focus:outline-none focus:border-matcha-500 bg-white"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-matcha-800 text-white px-4 py-2 text-xs font-medium uppercase tracking-widest hover:bg-matcha-700 transition-colors disabled:opacity-60"
        >
          {loading ? '...' : 'Submit'}
        </button>
      </form>
    );
  }

  return (
    <button
      onClick={() => setOpen(true)}
      className="border border-matcha-700 text-matcha-800 px-5 py-2 text-xs font-medium uppercase tracking-widest hover:bg-cream-100 transition-colors"
    >
      Notify Me
    </button>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-4">
          <p className="text-xs font-medium uppercase tracking-widest text-matcha-500 mb-4">Our Menu</p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-matcha-900">
            Signature Cookies
          </h2>
        </div>

        {/* Out of stock notice */}
        <div className="border-l-2 border-matcha-400 pl-4 mb-16 mt-8">
          <p className="text-matcha-700 text-sm leading-relaxed">
            We're currently restocking our ingredients — cookies coming soon.
            Enter your email on any product to be the first to know.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col group">
              {/* Image */}
              <div className="relative w-full h-64 bg-cream-100 overflow-hidden mb-5">
                <Image src={product.image} alt={product.name} layout="fill" objectFit="contain" className="transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-white text-matcha-700 text-xs font-medium px-2 py-0.5 uppercase tracking-wide border border-cream-200">
                    Out of Stock
                  </span>
                </div>
                {product.tag && (
                  <span className="absolute top-3 right-3 bg-matcha-800 text-white text-xs font-medium px-2 py-0.5 uppercase tracking-wide">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Info */}
              <h3 className="font-serif text-xl font-semibold text-matcha-900 mb-2">{product.name}</h3>
              <p className="text-matcha-600 text-sm leading-relaxed flex-1 mb-5 font-light">{product.description}</p>

              <NotifyButton />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
