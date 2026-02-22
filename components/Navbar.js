import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-50 bg-opacity-95 backdrop-blur-sm border-b border-matcha-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl">🍵</span>
          <span className="font-serif text-xl font-bold text-matcha-700 tracking-wide">
            Matcha Oven
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-matcha-700 hover:text-matcha-500 font-medium transition-colors">
            Shop
          </a>
          <a href="#about" className="text-matcha-700 hover:text-matcha-500 font-medium transition-colors">
            About
          </a>
          <a href="#contact" className="text-matcha-700 hover:text-matcha-500 font-medium transition-colors">
            Contact
          </a>

          {/* Cart button */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative text-matcha-700 hover:text-matcha-500 transition-colors"
            aria-label="Open cart"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-matcha-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          <a
            href="#products"
            className="bg-matcha-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-matcha-700 transition-colors"
          >
            Order Now
          </a>
        </div>

        {/* Mobile: cart icon + hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="relative text-matcha-700"
            aria-label="Open cart"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-matcha-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          <button
            className="text-matcha-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream-50 border-t border-matcha-100 px-6 py-4 flex flex-col gap-4">
          <a href="#products" className="text-matcha-700 font-medium" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="#about" className="text-matcha-700 font-medium" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" className="text-matcha-700 font-medium" onClick={() => setMenuOpen(false)}>Contact</a>
          <a
            href="#products"
            className="bg-matcha-600 text-white px-5 py-2 rounded-full font-semibold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
}
