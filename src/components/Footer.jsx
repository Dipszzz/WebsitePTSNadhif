import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: Logo & About */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-4">DipsTechnology.</h2>
            <p className="text-center md:text-left">
              DipsTechnology is your ultimate source for cutting-edge technology insights, services, and solutions.your ultimate source for cutting-edge technology insights, services, and solutions.
            </p>
          </div>
          <div></div>
          {/* Section 2: Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>Email: dipsy@DipsTechnology.com</li>
              <li>Phone: +62 821 3721 3821</li>
              <li>Address: Jauh make helm, Tangerang Selatan.</li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-lg font-semibold mb-2">DipsTechnology</p>
          <p className="mb-4">
          Your ultimate source for cutting-edge technology insights, services, and solutions.Your ultimate source for cutting-edge technology insights, services, and solutions.
          </p>
          <p className="text-sm">&copy; 2024 DipsTechnology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
