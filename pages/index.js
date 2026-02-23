import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Matcha Oven | Handcrafted Matcha Cookies</title>
        <meta
          name="description"
          content="Premium handcrafted matcha cookies made in small batches using ceremonial-grade matcha from Uji, Kyoto. Order fresh cookies delivered to your door."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
