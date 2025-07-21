import React from 'react';
import { Car } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-900 bg-opacity-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Car className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold text-white">Travel Tribe</span>
            </div>
            <p className="text-purple-200">
              Your trusted partner for premium car rental services. 
              Experience comfort, safety, and reliability with every journey.
            </p>
          </div>
          
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Quick Links</span>
            <div className="space-y-2">
              <p className="text-purple-200 hover:text-white cursor-pointer transition-colors">About Us</p>
              <p className="text-purple-200 hover:text-white cursor-pointer transition-colors">Our Fleet</p>
              <p className="text-purple-200 hover:text-white cursor-pointer transition-colors">Booking</p>
              <p className="text-purple-200 hover:text-white cursor-pointer transition-colors">Contact</p>
            </div>
          </div>
          
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Services</span>
            <div className="space-y-2">
              <p className="text-purple-200">4 Seater Cars</p>
              <p className="text-purple-200">7 Seater Cars</p>
              <p className="text-purple-200">24/7 Support</p>
              <p className="text-purple-200">Airport Pickup</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-700 mt-8 pt-8 text-center">
          <p className="text-purple-200">
            © 2025 Travel Tribe. All rights reserved. | Premium Car Rental Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
