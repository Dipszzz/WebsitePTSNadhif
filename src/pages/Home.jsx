import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  console.log("Home component rendered"); // Tambahkan ini
  return (
    <>
    <Header />
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to DipsTechnology.</h1>
        <p className="text-gray-400 text-lg mb-8">
        Your ultimate source for cutting-edge technology insights, services, and solutions. Discover innovative strategies and expert guidance tailored to elevate your business in a rapidly evolving digital landscape.
        </p>
      </div>

      <div className="bg-gray-800 py-12 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-6">Why Choose DipsTechnology?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-3">Innovative Solutions</h3>
              <p className="text-gray-400">At DipsTechnology, we provide forward-thinking technology solutions that empower businesses to not only survive but thrive in the digital age. Our innovative strategies and tailored services are designed to enhance operational efficiency, drive growth, and foster long-term success in an ever-evolving technological landscape.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-3">Expert Team</h3>
              <p className="text-gray-400">Our team is comprised of seasoned professionals committed to delivering exceptional technology services. With a wealth of experience and expertise, we strive to understand your unique needs and provide tailored solutions that drive success and innovation.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-3">Customer Satisfaction</h3>
              <p className="text-gray-400">We prioritize client satisfaction by offering customized solutions and unmatched support. Our dedicated team works closely with you to understand your unique challenges, ensuring that our services not only meet but exceed your expectations at every stage of your journey.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-4">Our Core Services</h2>
          <p className="text-gray-400 mb-8">
            From IT consulting to software development, we offer a range of services to meet all your tech needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-3">Cloud Computing</h3>
              <p className="text-gray-400">Scalable and secure cloud solutions for your business operations.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-3">Cybersecurity</h3>
              <p className="text-gray-400">Protect your digital assets with our advanced cybersecurity solutions.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-3">AI & Automation</h3>
              <p className="text-gray-400">Leverage the power of AI to automate and optimize your processes.</p>
            </div>
          </div>
  <button
    onClick={() => window.location.href = "/services"}
    className="mt-10 bg-cyan-800 hover:bg-gray-600 text-white px-4 py-2 mt-2 rounded-lg focus:outline-none"
  >
    More Information
  </button>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Home;
