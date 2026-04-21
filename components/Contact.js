import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

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

  const inputClass = "w-full bg-transparent border-b border-matcha-700 px-0 py-3 text-cream-100 placeholder-matcha-500 focus:outline-none focus:border-gold-400 transition-colors duration-300 text-sm font-light";
  const labelClass = "block text-xs font-medium uppercase tracking-widest text-gold-400 mb-2";

  return (
    <section id="contact" className="py-28 bg-matcha-950">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-14">
          <div className="w-8 h-px bg-gold-400" />
          <p className="text-xs font-medium uppercase tracking-widest text-gold-400">Get in Touch</p>
        </div>

        {/* Rectangle card with gold border */}
        <div className="border border-gold-500 border-opacity-30 grid md:grid-cols-5">

          {/* Left info column */}
          <div className="md:col-span-2 px-10 py-14 border-b md:border-b-0 md:border-r border-matcha-800 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-cream-100 leading-snug mb-6">
                We'd Love to <em className="italic">Hear</em> from You
              </h2>
              <p className="text-matcha-300 text-sm font-light leading-relaxed">
                Custom orders, bulk requests, or just want to say hi — drop us a message.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {[
                { label: 'Email', value: 'matchaoven@gmail.com' },
                { label: 'Location', value: 'New York, NY, USA' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs uppercase tracking-widest text-gold-500 mb-1">{label}</p>
                  <p className="text-matcha-200 text-sm font-light">{value}</p>
                </div>
              ))}
              <div>
                <p className="text-xs uppercase tracking-widest text-gold-500 mb-1">Instagram</p>
                <a
                  href="https://www.instagram.com/matchaoven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-matcha-200 text-sm font-light hover:text-cream-100 transition-colors"
                >
                  @matchaoven
                </a>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="md:col-span-3 px-10 py-14">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-px bg-gold-400" />
                  <p className="text-xs font-medium uppercase tracking-widest text-gold-400">Message Sent</p>
                  <div className="w-6 h-px bg-gold-400" />
                </div>
                <h3 className="font-serif text-3xl font-semibold text-cream-100 mb-3">Thank you.</h3>
                <p className="text-matcha-300 font-light mb-10">We'll get back to you soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="border border-matcha-600 text-matcha-200 px-8 py-3 text-xs font-medium uppercase tracking-widest hover:border-gold-400 hover:text-gold-400 transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelClass} htmlFor="name">Your Name</label>
                    <input id="name" type="text" placeholder="Full Name" value={form.name} onChange={handleChange} required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="email@example.com" value={form.email} onChange={handleChange} required className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="subject">Subject</label>
                  <input id="subject" type="text" placeholder="Custom order enquiry" value={form.subject} onChange={handleChange} required className={inputClass} />
                </div>

                <div>
                  <label className={labelClass} htmlFor="message">Message</label>
                  <textarea id="message" rows={5} placeholder="Tell us what you need..." value={form.message} onChange={handleChange} required className={`${inputClass} resize-none`} />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-xs uppercase tracking-wide">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full border border-matcha-600 text-cream-100 py-4 text-xs font-medium uppercase tracking-widest hover:border-gold-400 hover:text-gold-400 transition-colors disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
