import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

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
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✉️</div>
              <h3 className="font-serif text-2xl font-bold text-matcha-900 mb-2">Message Sent!</h3>
              <p className="text-matcha-600 mb-6">Thanks for reaching out — we'll get back to you soon.</p>
              <button
                onClick={() => setStatus('idle')}
                className="bg-matcha-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-matcha-700 transition-colors"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-matcha-700 font-semibold mb-2 text-sm" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
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
                    value={form.email}
                    onChange={handleChange}
                    required
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
                  value={form.subject}
                  onChange={handleChange}
                  required
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
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-matcha-200 rounded-xl px-4 py-3 text-matcha-900 placeholder-matcha-300 focus:outline-none focus:ring-2 focus:ring-matcha-400 bg-white resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-matcha-600 text-white py-3 rounded-full font-semibold text-lg hover:bg-matcha-700 transition-colors shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}

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
