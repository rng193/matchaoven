export default function Footer() {
  return (
    <footer className="bg-matcha-900 text-matcha-200 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="font-serif text-xl font-semibold text-white tracking-wide block mb-4">
              Matcha Oven
            </span>
            <p className="text-matcha-400 text-sm leading-relaxed font-light">
              Small-batch, handcrafted matcha cookies made with premium ceremonial-grade matcha
              from Uji, Kyoto.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-matcha-400 mb-5">Navigate</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-matcha-300 hover:text-white transition-colors font-light">Home</a></li>
              <li><a href="#products" className="text-matcha-300 hover:text-white transition-colors font-light">Shop</a></li>
              <li><a href="#about" className="text-matcha-300 hover:text-white transition-colors font-light">About Us</a></li>
              <li><a href="#contact" className="text-matcha-300 hover:text-white transition-colors font-light">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-matcha-400 mb-5">Follow Us</h4>
            <a
              href="https://www.instagram.com/matchaoven"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-matcha-300 hover:text-white transition-colors font-light"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @matchaoven
            </a>
          </div>
        </div>

        <div className="border-t border-matcha-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-matcha-500 font-light">
          <span>© {new Date().getFullYear()} Matcha Oven. All rights reserved.</span>
          <span>Made with care in New York, NY</span>
        </div>
      </div>
    </footer>
  );
}
