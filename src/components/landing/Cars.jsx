import React from 'react';
import { motion } from 'framer-motion';
import CarCard from '@/components/landing/CarCard';

const carsData = [
  {
    id: 1,
    name: 'Hyundai Aura',
    type: '4 Seater Sedan',
    price: '₹2,500/day',
    image: 'https://assets.gqindia.com/photos/5dfcb1d9cc8eda000874c88e/16:9/w_2560%2Cc_limit/top-image.jpg',
    features: ['AC', 'Power Steering', 'Music System', 'GPS Navigation'],
    specs: {
      fuel: 'Deisel',
      transmission: 'Manual/Automatic',
      mileage: '20 km/l',
      luggage: '2 Large Bags',
    },
  },
  {
    id: 2,
    name: 'Maruti Suzuki Ertiga',
    type: '7 Seater MPV',
    price: '₹3,500/day',
    image: 'https://htcms-prod-images.s3.ap-south-1.amazonaws.com/htmobile1/marutisuzuki_ertiga/images/colour_marutisuzuki-ertiga_pearl-metallic-arctic-white_600x400.jpg',
    features: ['AC', 'Power Steering', 'Music System', 'GPS Navigation', 'Extra Space'],
    specs: {
      fuel: 'Petrol/CNG',
      transmission: 'Manual/Automatic',
      mileage: '19 km/l',
      luggage: '4 Large Bags',
    },
  },
];

const Cars = () => {
  const handleBooking = (car) => {
    const phoneNumber = '917000220574';
    const message = encodeURIComponent(`Hello Travel Tribe, I'd like to book the ${car.name}.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="cars" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Premium Fleet</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Choose from our carefully selected vehicles designed to meet all your travel needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {carsData.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} onBook={handleBooking} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cars;