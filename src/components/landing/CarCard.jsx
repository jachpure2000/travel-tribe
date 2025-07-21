import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CarCard = ({ car, index, onBook }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="car-card rounded-3xl p-8 text-white"
    >
    <div className="mb-6">
        <img
          alt={`${car.name} - ${car.type} available for rent`}
          className="w-full h-64 object-cover rounded-2xl"
          src={car.image}
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold">{car.name}</h3>
            <p className="text-purple-200">{car.type}</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-yellow-400">{car.price}</p>
            <p className="text-sm text-purple-200">Starting from</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 py-4">
          <div>
            <p className="text-sm text-purple-200">Fuel Type</p>
            <p className="font-semibold">{car.specs.fuel}</p>
          </div>
          <div>
            <p className="text-sm text-purple-200">Transmission</p>
            <p className="font-semibold">{car.specs.transmission}</p>
          </div>
          <div>
            <p className="text-sm text-purple-200">Mileage</p>
            <p className="font-semibold">{car.specs.mileage}</p>
          </div>
          <div>
            <p className="text-sm text-purple-200">Luggage</p>
            <p className="font-semibold">{car.specs.luggage}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 py-2">
          {car.features.map((feature, idx) => (
            <span key={idx} className="bg-purple-600 bg-opacity-50 px-3 py-1 rounded-full text-sm">
              {feature}
            </span>
          ))}
        </div>

        <Button onClick={() => onBook(car)} className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 hover:from-yellow-300 hover:to-orange-300 font-bold py-3 text-lg">
          Book This Car
        </Button>
      </div>
    </motion.div>
  );
};

export default CarCard;
