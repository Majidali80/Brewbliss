import Navbar from './components/Navbar/page';
import Footer from './components/Footer/page'; // Correct casing
import Hero from './components/Hero/page';
import Futured from './components/Futured/page';
import Contact from './components/contact/page';
import Head from 'next/head'; // Import Head for metadata

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brue Bliss</title>
        <meta name="description" content="Discover the best coffee at BrewBliss. From freshly ground beans to expert brewing tips, we provide everything you need for the perfect cup of coffee. Enjoy a premium coffee experience with our carefully curated blends and accessories." />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> {/* Viewport meta tag */}
      </Head>
      <Navbar />
      <Hero />
      <Futured />
      <Contact />
      <Footer />
    </div>
  );
}
