export default function Footer() {
  return (
    <footer className="bg-matcha-900 text-matcha-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍵</span>
              <span className="font-serif text-xl font-bold text-white">Matcha Oven</span>
            </div>
            <p className="text-matcha-300 text-sm leading-relaxed">
              Small-batch, handcrafted matcha cookies made with premium ceremonial-grade matcha
              from Uji, Kyoto.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-matcha-300">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Shop</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { label: 'Instagram', icon: '📸' },
                { label: 'Facebook', icon: '💬' },
                { label: 'TikTok', icon: '🎵' },
              ].map(({ label, icon }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-matcha-700 hover:bg-matcha-500 flex items-center justify-center text-lg transition-colors"
                >
                  {icon}
                </button>
              ))}
            </div>
            <p className="text-matcha-400 text-sm mt-4">@matchaoven</p>
          </div>
        </div>

        <div className="border-t border-matcha-700 pt-6 text-center text-matcha-400 text-sm">
          © {new Date().getFullYear()} Matcha Oven. All rights reserved. Made with 🍵 &amp; ❤️
        </div>
      </div>
    </footer>
  );
}
