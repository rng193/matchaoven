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

  const inputClass = "w-full border-b border-cream-300 bg-transparent px-0 py-3 text-matcha-900 placeholder-matcha-300 focus:outline-none focus:border-matcha-600 transition-colors text-sm";
  const labelClass = "block text-xs font-medium uppercase tracking-widest text-matcha-500 mb-1";

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-matcha-500 mb-4">Get in Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-matcha-900 mb-4">
            We'd Love to Hear from You
          </h2>
          <p className="text-matcha-600 text-base font-light">
            Custom orders, bulk requests, or just want to say hi — drop us a message.
          </p>
        </div>

        {status === 'success' ? (
          <div className="py-20 border-t border-cream-200 text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-matcha-500 mb-3">Message Sent</p>
            <h3 className="font-serif text-3xl font-semibold text-matcha-900 mb-4">Thank you for reaching out.</h3>
            <p className="text-matcha-600 font-light mb-8">We'll get back to you soon.</p>
            <button
              onClick={() => setStatus('idle')}
              className="border border-matcha-700 text-matcha-800 px-8 py-3 text-xs font-medium uppercase tracking-widest hover:bg-cream-50 transition-colors"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <label className={labelClass} htmlFor="name">Your Name</label>
                <input id="name" type="text" placeholder="Full Name" value={form.name} onChange={handleChange} required className={inputClass} />
              </div>
              <div>
                <label className={labelClass} htmlFor="email">Email Address</label>
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
              <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
            )}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-t border-cream-200 pt-8">
              <div className="flex flex-col gap-2 text-sm text-matcha-600 font-light">
                <span>matchaoven@gmail.com</span>
                <span>New York, NY, USA</span>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-matcha-800 text-white px-10 py-3 text-xs font-medium uppercase tracking-widest hover:bg-matcha-700 transition-colors disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
