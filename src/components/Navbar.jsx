import { useState } from 'react';
import Logo from '/src/assets/Home/Logo.png';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';

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
        <li><Link to="/" className="text-sm hover:text-green-600 hover:underline transition">Home</Link></li>
        <li><Link to="/pests" className="text-sm hover:text-green-600 hover:underline transition">Pests</Link></li>
        <li><Link to="/services" className="text-sm hover:text-green-600 hover:underline transition">Services</Link></li>
        <li><Link to="/sectors" className="text-sm hover:text-green-600 hover:underline transition">Sectors</Link></li>
        <li><Link to="/about" className="text-sm hover:text-green-600 hover:underline transition">About Us</Link></li>
        <li><Link to="/documents" className="text-sm hover:text-green-600 hover:underline transition">Documents</Link></li>
        <li><Link to="/equipment-trading" className="text-sm hover:text-green-600 hover:underline transition">Pest Control Equipment Trading</Link></li>
        <li><Link to="/careers" className="text-sm hover:text-green-600 hover:underline transition">Careers</Link></li>
        <li><Link to="/blogs" className="text-sm hover:text-green-600 hover:underline transition">Blogs</Link></li>
        <li><Link to="/contact" className="text-sm hover:text-green-600 hover:underline transition">Contact Us</Link></li>
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
          <ul className="hidden md:flex items-center justify-center space-x-5 flex-1">
            <li><Link to="/" className="text-sm hover:text-green-600 hover:underline transition">Home</Link></li>
            <li><Link to="/pests" className="text-sm hover:text-green-600 hover:underline transition">Pests</Link></li>
            <li><Link to="/services" className="text-sm hover:text-green-600 hover:underline transition">Services</Link></li>
            <li><Link to="/sectors" className="text-sm hover:text-green-600 hover:underline transition">Sectors</Link></li>
            <li><Link to="/about" className="text-sm hover:text-green-600 hover:underline transition">About Us</Link></li>
            <li><Link to="/documents" className="text-sm hover:text-green-600 hover:underline transition">Documents</Link></li>
            <li><Link to="/equipment-trading" className="text-sm hover:text-green-600 hover:underline transition">Pest Control Equipment Trading</Link></li>
            <li><Link to="/careers" className="text-sm hover:text-green-600 hover:underline transition">Careers</Link></li>
            <li><Link to="/blogs" className="text-sm hover:text-green-600 hover:underline transition">Blogs</Link></li>
            <li><Link to="/contact" className="text-sm hover:text-green-600 hover:underline transition">Contact Us</Link></li>
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
