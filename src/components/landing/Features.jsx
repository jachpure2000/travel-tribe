import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Shield, Award } from 'lucide-react';

const featuresData = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'All vehicles are regularly sanitized and maintained for your safety',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer support for any assistance you need',
  },
  {
    icon: Award,
    title: 'Best Prices',
    description: 'Competitive rates with no hidden charges or extra fees',
  },
  {
    icon: Star,
    title: 'Quality Service',
    description: 'Premium vehicles with excellent customer service experience',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Why Choose Travel Tribe?</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            We provide exceptional service with every rental experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="feature-card rounded-2xl p-6 text-center text-white"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-orange-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-purple-900" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-purple-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
