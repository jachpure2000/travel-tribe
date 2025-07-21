import React from 'react';
import { motion } from 'framer-motion';
import { Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const handleContact = () => {
    const phoneNumber = '917000220574';
    const message = encodeURIComponent("Hello Travel Tribe, I'd like to book a ride!");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="glass-effect fixed w-full top-0 z-50 py-4"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
          <Car className="h-8 w-8 text-white" />
          <span className="text-2xl font-bold text-white">Travel Tribe</span>
        </motion.div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-white hover:text-purple-200 transition-colors">Home</a>
          <a href="#cars" className="text-white hover:text-purple-200 transition-colors">Our Cars</a>
          <a href="#features" className="text-white hover:text-purple-200 transition-colors">Features</a>
          <a href="#contact" className="text-white hover:text-purple-200 transition-colors">Contact</a>
        </nav>

        <Button onClick={handleContact} className="bg-white text-purple-600 hover:bg-purple-50 font-semibold">
          Book Now
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;