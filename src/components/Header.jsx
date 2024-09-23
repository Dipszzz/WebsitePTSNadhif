import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCogs,
  faInfoCircle,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex bg-gray-800 shadow-md w-full">
      <button
        className="md:hidden absolute p-4 right-0"
        onClick={() => setIsOpen(true)}
      >
        {!isOpen && <FontAwesomeIcon icon={faBars} className="text-white" />}
      </button>

      <div
        className={`md:flex ${
          isOpen ? "flex flex-col" : "hidden"
        } md:flex-row justify-between items-center md:w-[95%] md:py-4 w-full `}
      >
        <button
          className="md:hidden absolute p-4 right-0"
          onClick={toggleMenu}
        >
          {isOpen && (
            <FontAwesomeIcon icon={faTimes} className="text-red-300" />
          )}
        </button>

        <div className="text-2xl font-bold text-white mx-auto py-4 md:py-0 md:px-4 md:mx-0 ">
          DipsTechnology
        </div>

        <ul className="flex flex-col md:flex-row gap-5 p-8 md:p-0 md:text-md text-xl w-full md:w-auto md:p-4">
          {/* Home */}
          <li>
            <Link
              to="/"
              className="text-gray-300 hover:text-white flex items-center space-x-2"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faHome} />
              <span>Home</span>
            </Link>
          </li>

          {/* Services */}
          <li>
            <Link
              to="/services"
              className="text-gray-300 hover:text-white flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={faCogs} />
              <span>Services</span>
            </Link>
          </li>

          {/* About */}
          <li>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              <span>About</span>
            </Link>
          </li>

          {/* Contact */}
          <li>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
