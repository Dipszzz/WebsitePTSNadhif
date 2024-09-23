import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Contact = () => {
  // State untuk menyimpan input pengguna
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Mengupdate state ketika pengguna mengetik
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Event handler ketika form dikirim
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Cetak data ke console
    console.log('Form Data Submitted:', formData);
    
    // Reset form setelah dikirim
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
    <Header />
    <section id="contact" className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-gray-400 text-center text-lg mb-12">
          Got questions? We’re here to help! Reach out to us and we’ll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulir Kontak */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-teal-500 hover:bg-teal-600 rounded-lg text-lg font-bold transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Informasi Kontak */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-gray-400 mb-6">
              Whether you have a question about our services, need support, or just want to say hello, we’re here for you!
            </p>
            <ul className="space-y-4">
              <li>
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-gray-400">dipsy@DipsTechnology.com</p>
              </li>
              <li>
                <h3 className="text-xl font-bold">Phone</h3>
                <p className="text-gray-400">+62 821 3721 3821</p>
              </li>
              <li>
                <h3 className="text-xl font-bold">Address</h3>
                <p className="text-gray-400"> Jauh make helm, Tangerang Selatan.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Contact;
