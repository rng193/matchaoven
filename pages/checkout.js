import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';

const DELIVERY_FEE = 0;

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState('form'); // 'form' | 'confirmed'
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
    state: '',
    notes: '',
    payment: 'fpx',
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  }

  function validate() {
    const required = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'postcode', 'state'];
    const next = {};
    required.forEach((key) => {
      if (!form[key].trim()) next[key] = 'This field is required.';
    });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email.';
    }
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep('confirmed');
    clearCart();
  }

  if (step === 'confirmed') {
    return (
      <>
        <Head>
          <title>Order Confirmed | Matcha Oven</title>
        </Head>
        <Navbar />
        <main className="min-h-screen bg-cream-50 flex items-center justify-center pt-20 px-6">
          <div className="max-w-md w-full text-center py-20">
            <div className="text-8xl mb-6">🎉</div>
            <h1 className="font-serif text-4xl font-bold text-matcha-900 mb-4">
              Order Confirmed!
            </h1>
            <p className="text-matcha-600 text-lg mb-2">
              Thank you, <span className="font-semibold">{form.firstName}</span>!
            </p>
            <p className="text-matcha-600 mb-8">
              We'll send a confirmation to <span className="font-semibold">{form.email}</span>.
              Your cookies are being freshly baked and will be on their way soon. 🍪
            </p>
            <div className="bg-matcha-50 border border-matcha-100 rounded-2xl p-6 text-left mb-8">
              <h2 className="font-semibold text-matcha-800 mb-3">Order Summary</h2>
              <div className="space-y-1 text-sm text-matcha-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>RM {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="text-matcha-500">Free</span>
                </div>
                <div className="flex justify-between font-bold text-matcha-900 pt-2 border-t border-matcha-100 mt-2">
                  <span>Total Paid</span>
                  <span>RM {totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Link href="/">
              <a className="inline-block bg-matcha-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-matcha-700 transition-colors">
                Back to Home
              </a>
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Checkout | Matcha Oven</title>
      </Head>
      <Navbar />

      <main className="min-h-screen bg-cream-50 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl font-bold text-matcha-900 mb-2">Checkout</h1>
          <p className="text-matcha-500 mb-10">
            <Link href="/"><a className="hover:text-matcha-700 transition-colors">Home</a></Link>
            {' / '}
            <span className="text-matcha-700">Checkout</span>
          </p>

          {items.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-matcha-600 text-xl mb-6">Your cart is empty.</p>
              <Link href="/#products">
                <a className="bg-matcha-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-matcha-700 transition-colors">
                  Browse Cookies
                </a>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left — form */}
                <div className="lg:col-span-2 space-y-8">

                  {/* Contact details */}
                  <section className="bg-white rounded-3xl p-8 border border-matcha-100 shadow-sm">
                    <h2 className="font-serif text-2xl font-bold text-matcha-900 mb-6">Contact Details</h2>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="First Name" name="firstName" value={form.firstName} onChange={handleChange} error={errors.firstName} placeholder="Jane" />
                      <Field label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} error={errors.lastName} placeholder="Doe" />
                      <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="jane@example.com" className="sm:col-span-2" />
                      <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} error={errors.phone} placeholder="+60 12-345 6789" />
                    </div>
                  </section>

                  {/* Delivery address */}
                  <section className="bg-white rounded-3xl p-8 border border-matcha-100 shadow-sm">
                    <h2 className="font-serif text-2xl font-bold text-matcha-900 mb-6">Delivery Address</h2>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Street Address" name="address" value={form.address} onChange={handleChange} error={errors.address} placeholder="123, Jalan Matcha" className="sm:col-span-2" />
                      <Field label="City" name="city" value={form.city} onChange={handleChange} error={errors.city} placeholder="Kuala Lumpur" />
                      <Field label="Postcode" name="postcode" value={form.postcode} onChange={handleChange} error={errors.postcode} placeholder="50000" />
                      <div>
                        <label className="block text-matcha-700 font-semibold mb-1 text-sm">State</label>
                        <select
                          name="state"
                          value={form.state}
                          onChange={handleChange}
                          className={`w-full border rounded-xl px-4 py-3 text-matcha-900 bg-white focus:outline-none focus:ring-2 focus:ring-matcha-400 ${errors.state ? 'border-red-400' : 'border-matcha-200'}`}
                        >
                          <option value="">Select state…</option>
                          {['Kuala Lumpur', 'Selangor', 'Penang', 'Johor', 'Perak', 'Negeri Sembilan', 'Melaka', 'Kedah', 'Kelantan', 'Pahang', 'Sabah', 'Sarawak', 'Terengganu', 'Perlis', 'Putrajaya', 'Labuan'].map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-matcha-700 font-semibold mb-1 text-sm">Order Notes <span className="font-normal text-matcha-400">(optional)</span></label>
                        <textarea
                          name="notes"
                          value={form.notes}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Special requests, gift messages, etc."
                          className="w-full border border-matcha-200 rounded-xl px-4 py-3 text-matcha-900 placeholder-matcha-300 focus:outline-none focus:ring-2 focus:ring-matcha-400 resize-none bg-white"
                        />
                      </div>
                    </div>
                  </section>

                  {/* Payment method */}
                  <section className="bg-white rounded-3xl p-8 border border-matcha-100 shadow-sm">
                    <h2 className="font-serif text-2xl font-bold text-matcha-900 mb-6">Payment Method</h2>
                    <div className="space-y-3">
                      {[
                        { value: 'fpx', label: 'Online Banking (FPX)', icon: '🏦' },
                        { value: 'card', label: 'Credit / Debit Card', icon: '💳' },
                        { value: 'cod', label: 'Cash on Delivery', icon: '💵' },
                      ].map((method) => (
                        <label
                          key={method.value}
                          className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-colors ${
                            form.payment === method.value
                              ? 'border-matcha-500 bg-matcha-50'
                              : 'border-matcha-100 hover:border-matcha-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="payment"
                            value={method.value}
                            checked={form.payment === method.value}
                            onChange={handleChange}
                            className="accent-matcha-600"
                          />
                          <span className="text-xl">{method.icon}</span>
                          <span className="font-medium text-matcha-800">{method.label}</span>
                        </label>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Right — order summary */}
                <div className="lg:col-span-1">
                  <div className="sticky top-28 bg-white rounded-3xl p-6 border border-matcha-100 shadow-sm">
                    <h2 className="font-serif text-xl font-bold text-matcha-900 mb-5">Order Summary</h2>

                    <ul className="space-y-4 mb-5">
                      {items.map((item) => (
                        <li key={item.id} className="flex gap-3 items-center">
                          <div className="w-11 h-11 bg-matcha-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                            {item.emoji}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-matcha-900 font-semibold text-sm truncate">{item.name}</p>
                            <p className="text-matcha-400 text-xs">× {item.qty}</p>
                          </div>
                          <span className="text-matcha-700 font-semibold text-sm flex-shrink-0">
                            RM {(parseFloat(item.price.replace('RM ', '')) * item.qty).toFixed(2)}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-matcha-100 pt-4 space-y-2 text-sm">
                      <div className="flex justify-between text-matcha-600">
                        <span>Subtotal</span>
                        <span>RM {totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-matcha-600">
                        <span>Delivery</span>
                        <span className="text-matcha-500 font-medium">Free</span>
                      </div>
                      <div className="flex justify-between text-matcha-900 font-bold text-base pt-2 border-t border-matcha-100">
                        <span>Total</span>
                        <span>RM {(totalPrice + DELIVERY_FEE).toFixed(2)}</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="mt-6 w-full bg-matcha-600 text-white py-3 rounded-full font-semibold text-lg hover:bg-matcha-700 transition-colors shadow-md"
                    >
                      Place Order
                    </button>

                    <Link href="/">
                      <a className="mt-3 block text-center text-matcha-400 hover:text-matcha-600 text-sm transition-colors">
                        ← Continue Shopping
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </main>
    </>
  );
}

function Field({ label, name, type = 'text', value, onChange, error, placeholder, className = '' }) {
  return (
    <div className={className}>
      <label className="block text-matcha-700 font-semibold mb-1 text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border rounded-xl px-4 py-3 text-matcha-900 placeholder-matcha-300 focus:outline-none focus:ring-2 focus:ring-matcha-400 bg-white ${
          error ? 'border-red-400' : 'border-matcha-200'
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
