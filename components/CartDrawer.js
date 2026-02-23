import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQty, clearCart, totalPrice } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-cream-50 z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-matcha-100">
          <h2 className="font-serif text-xl font-bold text-matcha-900">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-matcha-500 hover:text-matcha-800 transition-colors"
            aria-label="Close cart"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-matcha-400 gap-4">
              <span className="text-6xl">🛒</span>
              <p className="font-semibold text-lg">Your cart is empty</p>
              <p className="text-sm">Add some delicious cookies to get started!</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-matcha-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-matcha-700 transition-colors"
              >
                Browse Cookies
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 bg-white rounded-2xl p-4 border border-matcha-100 shadow-sm"
                >
                  {/* Emoji */}
                  <div className="w-14 h-14 bg-matcha-50 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                    {item.emoji}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-matcha-900 text-sm truncate">{item.name}</p>
                    <p className="text-matcha-500 text-sm">{item.price}</p>

                    {/* Qty controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-6 h-6 rounded-full bg-matcha-100 hover:bg-matcha-200 text-matcha-700 flex items-center justify-center font-bold text-sm transition-colors"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="text-matcha-800 font-semibold w-4 text-center text-sm">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-6 h-6 rounded-full bg-matcha-100 hover:bg-matcha-200 text-matcha-700 flex items-center justify-center font-bold text-sm transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Subtotal + remove */}
                  <div className="flex flex-col items-end justify-between flex-shrink-0">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-matcha-300 hover:text-red-400 transition-colors"
                      aria-label="Remove item"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                    <span className="text-matcha-700 font-bold text-sm">
                      ${(parseFloat(item.price.replace('$', '')) * item.qty).toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-matcha-100 px-6 py-5 space-y-4 bg-white">
            <div className="flex justify-between text-matcha-700 text-sm">
              <span>Subtotal</span>
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-matcha-700 text-sm">
              <span>Delivery</span>
              <span className="font-semibold text-matcha-500">Free</span>
            </div>
            <div className="flex justify-between text-matcha-900 font-bold text-lg border-t border-matcha-100 pt-3">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <Link href="/checkout">
              <a
                onClick={() => setIsOpen(false)}
                className="block w-full bg-matcha-600 text-white py-3 rounded-full font-semibold text-lg hover:bg-matcha-700 transition-colors shadow-md text-center"
              >
                Checkout
              </a>
            </Link>
            <button
              onClick={clearCart}
              className="w-full text-matcha-400 hover:text-matcha-600 text-sm text-center transition-colors"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
