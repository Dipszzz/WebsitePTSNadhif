import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CloudPNG from "../img/cloud.png";
import SecurityPNG from "../img/security.png";
import AIPNG from "../img/ai.png";



const Services = () => {
  return (
    <>
    <Header />
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-8">Our Services</h1>
        <p className="text-gray-400 text-lg mb-12">
          At DipsTechnology, we provide cutting-edge technology services to empower your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cloud Computing */}
          <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src={CloudPNG}
              alt="Cloud Computing"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-3">Cloud Computing</h3>
            <p className="text-gray-400">
            Unlock the full potential of a scalable and secure cloud infrastructure, meticulously tailored to meet the unique needs of your business. Our solutions enhance flexibility, drive efficiency, and ensure robust security, empowering you to innovate and adapt in a dynamic digital landscape.
            </p>
          </div>

          {/* Cybersecurity */}
          <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src={SecurityPNG}
              alt="Cybersecurity"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-3">Cybersecurity</h3>
            <p className="text-gray-400">
            Safeguard your business against evolving cyber threats with our advanced security solutions. We offer comprehensive protection that includes proactive monitoring, threat detection, and robust response strategies, ensuring your valuable data and assets remain secure in an increasingly complex digital landscape.
            </p>
          </div>

          {/* Artificial Intelligence */}
          <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src={AIPNG}
              alt="Artificial Intelligence"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-3">Artificial Intelligence</h3>
            <p className="text-gray-400">
            Streamline and optimize your operations with our AI-powered solutions, meticulously designed to enhance efficiency and drive productivity. By automating routine tasks and providing insightful analytics, our technology empowers your team to focus on strategic initiatives, fostering innovation and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Services;
