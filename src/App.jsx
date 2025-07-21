import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Cars from '@/components/landing/Cars';
import Features from '@/components/landing/Features';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Travel Tribe - Premium Car Rental Service | 4 & 7 Seater Cars</title>
        <meta name="description" content="Rent premium Hyundai Aura (4-seater) and Maruti Ertiga (7-seater) cars with Travel Tribe. Best rates, 24/7 support, and quality service guaranteed." />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Cars />
          <Features />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
