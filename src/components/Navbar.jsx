import { useState } from 'react';
import Logo from '/src/assets/Logo.png';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="relative flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white text-gray-900 shadow-sm">
      {/* Logo */}
      <a href="#">
        <img className="h-10" src={Logo} alt="Logo" />
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center justify-center space-x-5 flex-1">
        <li><a href="#" className="text-sm hover:text-green-600 hover:underline transition">Home</a></li>
        <li><a href="#" className="text-sm hover:text-green-600 hover:underline transition">About</a></li>
        <li><a href="#" className="text-sm hover:text-green-600 hover:underline transition">Services</a></li>
        <li><a href="#" className="text-sm hover:text-green-600 hover:underline transition">Portfolio</a></li>
        <li><a href="#" className="text-sm hover:text-green-600 hover:underline transition">Pricing</a></li>
        <li><a href="#" className="text-sm hover:text-green-600 hover:underline transition">Blog</a></li>
        <li><a href="#" className="text-sm hover:text-green-600 hover:underline transition">Testimonials</a></li>
        <li><a href="#" className="text-sm hover:text-green-600 hover:underline transition">FAQ</a></li>
        <li><a href="#" className="text-sm hover:text-green-600 hover:underline transition">Careers</a></li>
        <li><a href="#" className="text-sm hover:text-green-600 hover:underline transition">Contact</a></li>
        <li><a href="#" className="text-sm hover:text-green-600 hover:underline transition">Privacy</a></li>
        <li><a href="#" className="text-sm hover:text-green-600 hover:underline transition">Terms</a></li>
      </ul>

      {/* Call Button */}
      <div className="bg-green-600 rounded-full border border-gray-300 mt-1 w-40 h-11 flex overflow-hidden">
        <div className="bg-white flex items-center justify-center w-1/3">
          <FaPhoneAlt className="text-green-600 text-lg" />
        </div>
        <div className="flex flex-col justify-center pl-2 w-2/3">
          <span className="text-xs text-white font-semibold leading-tight">Call for Schedule</span>
          <span className="text-xs text-white">+971 52 152 8725</span>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button onClick={toggleMenu} className="md:hidden">
        <HiMenu className="text-2xl" />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-6 md:hidden z-50">
          <ul className="flex flex-col space-y-4 text-lg">
            <li><a href="#" className="text-gray-900 hover:text-green-600 hover:underline transition">Home</a></li>
            <li><a href="#" className="text-gray-900 hover:text-green-600 hover:underline transition">About</a></li>
            <li><a href="#" className="text-gray-900 hover:text-green-600 hover:underline transition">Services</a></li>
            <li><a href="#" className="text-gray-900 hover:text-green-600 hover:underline transition">Portfolio</a></li>
            <li><a href="#" className="text-gray-900 hover:text-green-600 hover:underline transition">Pricing</a></li>
            <li><a href="#" className="text-gray-900 hover:text-green-600 hover:underline transition">Blog</a></li>
            <li><a href="#" className="text-gray-900 hover:text-green-600 hover:underline transition">Testimonials</a></li>
            <li><a href="#" className="text-gray-900 hover:text-green-600 hover:underline transition">FAQ</a></li>
            <li><a href="#" className="text-gray-900 hover:text-green-600 hover:underline transition">Careers</a></li>
            <li><a href="#" className="text-gray-900 hover:text-green-600 hover:underline transition">Contact</a></li>
            <li><a href="#" className="text-gray-900 hover:text-green-600 hover:underline transition">Privacy</a></li>
            <li><a href="#" className="text-gray-900 hover:text-green-600 hover:underline transition">Terms</a></li>
          </ul>

          <div className="bg-green-600 rounded-full border border-gray-300 mt-6 w-40 h-11 flex overflow-hidden">
            <div className="bg-white flex items-center justify-center w-1/3">
              <FaPhoneAlt className="text-green-600 text-lg" />
            </div>
            <div className="flex flex-col justify-center pl-2 w-2/3">
              <span className="text-xs text-white font-semibold leading-tight">Call for Schedule</span>
              <span className="text-xs text-white">+971 52 152 8725</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
