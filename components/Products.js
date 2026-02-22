import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Matcha Butter Cookie',
    description: 'Classic butter cookie infused with ceremonial-grade matcha. Melt-in-your-mouth texture.',
    price: 'RM 15.00',
    emoji: '🍪',
    tag: 'Best Seller',
    tagColor: 'bg-matcha-500',
  },
  {
    id: 2,
    name: 'Matcha Chocolate Chip',
    description: 'Chewy matcha cookie loaded with dark chocolate chips. A perfect earthy-sweet combo.',
    price: 'RM 18.00',
    emoji: '🍫',
    tag: 'New',
    tagColor: 'bg-cream-400',
  },
  {
    id: 3,
    name: 'Matcha Red Bean',
    description: 'Traditional Japanese flavour pairing — smooth red bean paste in a crisp matcha shell.',
    price: 'RM 20.00',
    emoji: '🫘',
    tag: 'Popular',
    tagColor: 'bg-matcha-700',
  },
  {
    id: 4,
    name: 'Matcha Cream Sandwich',
    description: 'Two delicate matcha wafers with a luscious white chocolate matcha cream filling.',
    price: 'RM 22.00',
    emoji: '🥪',
    tag: 'Premium',
    tagColor: 'bg-matcha-400',
  },
  {
    id: 5,
    name: 'Matcha Lemon Crinkle',
    description: 'Zesty lemon meets earthy matcha in a soft, powdered crinkle cookie. Uniquely refreshing.',
    price: 'RM 17.00',
    emoji: '🍋',
    tag: null,
    tagColor: '',
  },
  {
    id: 6,
    name: 'Cookie Gift Box (12 pcs)',
    description: 'A curated assortment of all our signature cookies. Perfect for gifting.',
    price: 'RM 68.00',
    emoji: '🎁',
    tag: 'Gift Set',
    tagColor: 'bg-matcha-600',
  },
];

export default function Products() {
  const { addItem } = useCart();

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-matcha-100 text-matcha-700 text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-widest">
            Our Menu
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-matcha-900 mb-4">
            Signature Cookies
          </h2>
          <p className="text-matcha-600 text-lg max-w-xl mx-auto">
            Each variety is baked fresh to order and shipped within 48 hours.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-cream-50 rounded-3xl p-6 border border-matcha-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Emoji & Tag */}
              <div className="relative mb-4">
                <div className="w-full h-40 bg-matcha-50 rounded-2xl flex items-center justify-center text-7xl">
                  {product.emoji}
                </div>
                {product.tag && (
                  <span
                    className={`absolute top-3 right-3 ${product.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}
                  >
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Info */}
              <h3 className="font-serif text-xl font-bold text-matcha-900 mb-2">{product.name}</h3>
              <p className="text-matcha-600 text-sm leading-relaxed flex-1 mb-4">{product.description}</p>

              {/* Price & CTA */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-matcha-700 font-bold text-lg">{product.price}</span>
                <button
                  onClick={() => addItem(product)}
                  className="bg-matcha-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-matcha-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
