import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactInfo = () => (
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="space-y-8"
  >
    <div className="feature-card rounded-2xl p-8 text-white">
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      
      <div className="text-purple-200 mb-6">
        <p className="mb-2">For any inquiries or bookings, feel free to reach out to us: Aman Jachpure</p>
        <p className="mb-2">We look forward to serving you!</p>
        <p className="mb-2">Your satisfaction is our priority.</p>
      </div>

      <div className="text-purple-200 mb-6">
        <div className="font-semibold mb-2">Follow us on social media:</div>
        <div className="flex space-x-4">
        <p className="mb-2">Instagram: <a href="https://www.instagram.com/travel_tribe_25?igsh=MWl3bGlnaGhkbjgzYg==" className="text-yellow-400 hover:underline">Travel Tribe</a></p>
        <p className="mb-2">Instagram: <a href="https://www.instagram.com/namdev_namkeen_wala?utm_source=qr&igsh=eWk0NTByNWI1ZnRm" className="text-yellow-400 hover:underline">Namdev Namkeen</a></p>

        </div>
        </div>


      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-400 w-12 h-12 rounded-full flex items-center justify-center">
            <Phone className="h-6 w-6 text-purple-900" />
          </div>
          <div>
            <p className="font-semibold">Phone</p>
            <p className="text-purple-200">+91 7000220574</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-400 w-12 h-12 rounded-full flex items-center justify-center">
            <Mail className="h-6 w-6 text-purple-900" />
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-purple-200">amanjachpure@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-400 w-12 h-12 rounded-full flex items-center justify-center">
            <MapPin className="h-6 w-6 text-purple-900" />
          </div>
          <div>
            <p className="font-semibold">Location</p>
            <p className="text-purple-200">Available across major cities</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const BookingForm = () => {
  const handleBooking = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const car = formData.get('car');
    const date = formData.get('date');

    const phoneNumber = '917000220574';
    const message = encodeURIComponent(
      `Hello Travel Tribe, I'd like to make a booking.\n\nName: ${name}\nPhone: ${phone}\nCar: ${car}\nDate: ${date}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="feature-card rounded-2xl p-8"
    >
      <h3 className="text-2xl font-bold text-white mb-6">Quick Booking</h3>
      <form onSubmit={handleBooking} className="space-y-4">
        <div>
          <label className="block text-white font-semibold mb-2">Full Name</label>
          <input name="name" type="text" className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-purple-200 border border-purple-300 focus:border-yellow-400 focus:outline-none" placeholder="Enter your name" required />
        </div>
        <div>
          <label className="block text-white font-semibold mb-2">Phone Number</label>
          <input name="phone" type="tel" className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-purple-200 border border-purple-300 focus:border-yellow-400 focus:outline-none" placeholder="Enter your phone" required />
        </div>
        <div>
          <label className="block text-white font-semibold mb-2">Car Preference</label>
          <select name="car" className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white border border-purple-300 focus:border-yellow-400 focus:outline-none" required>
            <option value="">Select a car</option>
            <option value="Hyundai Aura (4 Seater)">Hyundai Aura (4 Seater)</option>
            <option value="Maruti Ertiga (7 Seater)">Maruti Ertiga (7 Seater)</option>
          </select>
        </div>
        <div>
          <label className="block text-white font-semibold mb-2">Rental Date</label>
          <input name="date" type="date" className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white border border-purple-300 focus:border-yellow-400 focus:outline-none" required />
        </div>
        <Button type="submit" className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 hover:from-yellow-300 hover:to-orange-300 font-bold py-3 text-lg mt-6">
          Submit Booking Request
        </Button>
      </form>
    </motion.div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Ready to book your perfect ride? Contact us today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ContactInfo />
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;