import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const phoneNumber = '917000220574';

  const handleWhatsAppRedirect = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text and Buttons */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Premium Car
              <span className="block text-yellow-300">Rental Service</span>
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Experience comfort and reliability with our fleet of well-maintained vehicles. 
              Perfect for family trips, business travel, or special occasions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() =>
                  handleWhatsAppRedirect("Hello Travel Tribe, I'd like to book a ride.")
                }
                size="lg"
                className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 font-bold text-lg px-8 py-4"
              >
                Book Your Ride
              </Button>
              <Button
                onClick={() =>
                  handleWhatsAppRedirect("Hello Travel Tribe, I have a question.")
                }
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-600 font-bold text-lg px-8 py-4"
              >
                Call Now
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://www.hertz.com/content/dam/hertz/global/blog-articles/resources/car-rental-tips.jpg"
                alt="Premium rental cars - Hyundai Aura, Maruti Ertiga and more"
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-yellow-400 to-pink-400 rounded-2xl opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;