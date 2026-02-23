export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-matcha-100 text-matcha-700 text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-matcha-900 mb-4">
            We'd Love to Hear from You
          </h2>
          <p className="text-matcha-600 text-lg">
            Custom orders, bulk requests, or just want to say hi — drop us a message!
          </p>
        </div>

        <div className="bg-cream-50 rounded-3xl p-8 md:p-12 border border-matcha-100 shadow-sm">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-matcha-700 font-semibold mb-2 text-sm" htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-matcha-200 rounded-xl px-4 py-3 text-matcha-900 placeholder-matcha-300 focus:outline-none focus:ring-2 focus:ring-matcha-400 bg-white"
                />
              </div>
              <div>
                <label className="block text-matcha-700 font-semibold mb-2 text-sm" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  className="w-full border border-matcha-200 rounded-xl px-4 py-3 text-matcha-900 placeholder-matcha-300 focus:outline-none focus:ring-2 focus:ring-matcha-400 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-matcha-700 font-semibold mb-2 text-sm" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Custom order enquiry"
                className="w-full border border-matcha-200 rounded-xl px-4 py-3 text-matcha-900 placeholder-matcha-300 focus:outline-none focus:ring-2 focus:ring-matcha-400 bg-white"
              />
            </div>

            <div>
              <label className="block text-matcha-700 font-semibold mb-2 text-sm" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us what you need..."
                className="w-full border border-matcha-200 rounded-xl px-4 py-3 text-matcha-900 placeholder-matcha-300 focus:outline-none focus:ring-2 focus:ring-matcha-400 bg-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-matcha-600 text-white py-3 rounded-full font-semibold text-lg hover:bg-matcha-700 transition-colors shadow-md"
            >
              Send Message
            </button>
          </form>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center gap-8 mt-10 pt-8 border-t border-matcha-100">
            {[
              { icon: '📧', label: 'matchaoven@gmail.com' },
              { icon: '📍', label: 'New York, NY, USA' },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-matcha-600">
                <span className="text-xl">{icon}</span>
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
