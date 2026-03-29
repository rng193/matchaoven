import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-matcha-950 bg-opacity-95 backdrop-blur-sm border-b border-matcha-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="font-serif text-xl font-semibold text-cream-100 tracking-wide">
            Matcha Oven
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#products" className="text-xs font-medium uppercase tracking-widest text-matcha-200 hover:text-white transition-colors">
            Shop
          </a>
          <a href="#about" className="text-xs font-medium uppercase tracking-widest text-matcha-200 hover:text-white transition-colors">
            About
          </a>
          <a href="#contact" className="text-xs font-medium uppercase tracking-widest text-matcha-200 hover:text-white transition-colors">
            Contact
          </a>

          {/* Cart button */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative text-matcha-200 hover:text-white transition-colors"
            aria-label="Open cart"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-matcha-400 text-matcha-950 text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile: cart icon + hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="relative text-matcha-200"
            aria-label="Open cart"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-matcha-400 text-matcha-950 text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          <button
            className="text-matcha-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-matcha-950 border-t border-matcha-800 px-6 py-6 flex flex-col gap-5">
          <a href="#products" className="text-xs font-medium uppercase tracking-widest text-matcha-200" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="#about" className="text-xs font-medium uppercase tracking-widest text-matcha-200" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" className="text-xs font-medium uppercase tracking-widest text-matcha-200" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
