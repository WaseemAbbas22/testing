import { useState } from 'react';
import Logo from '/src/assets/Home/Logo.png';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom'; // Ensure this import is at the top

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="relative flex items-center justify-between px-4 md:px-10 lg:px-16 xl:px-24 py-2 bg-white text-gray-900 shadow-sm border-b-2 border-green-500">
      {/* Logo */}
      <a href="#">
        <img className="h-8 md:h-10" src={Logo} alt="Logo" />
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center justify-center space-x-4 flex-1">
        <li><Link to="/" className="text-xs md:text-sm hover:text-green-600 hover:underline transition">Home</Link></li>
        <li><Link to="/pests" className="text-xs md:text-sm hover:text-green-600 hover:underline transition">Pests</Link></li>
        <li><Link to="/services" className="text-xs md:text-sm hover:text-green-600 hover:underline transition">Services</Link></li>
        <li><Link to="/sectors" className="text-xs md:text-sm hover:text-green-600 hover:underline transition">Sectors</Link></li>
        <li><Link to="/about" className="text-xs md:text-sm hover:text-green-600 hover:underline transition">About Us</Link></li>
        <li><Link to="/documents" className="text-xs md:text-sm hover:text-green-600 hover:underline transition">Documents</Link></li>
        <li><Link to="/equipment-trading" className="text-xs md:text-sm hover:text-green-600 hover:underline transition">Equipment Trading</Link></li>
        <li><Link to="/careers" className="text-xs md:text-sm hover:text-green-600 hover:underline transition">Careers</Link></li>
        <li><Link to="/blogs" className="text-xs md:text-sm hover:text-green-600 hover:underline transition">Blogs</Link></li>
        <li><Link to="/contact" className="text-xs md:text-sm hover:text-green-600 hover:underline transition">Contact Us</Link></li>
      </ul>

      {/* Call Button */}
      <div className="bg-green-600 rounded-md border border-gray-300 mt-1 w-40 h-10 flex overflow-hidden">
        {/* Icon part - 3/10 */}
        <div className="bg-white flex items-center justify-center" style={{ flex: 3 }}>
          <FaPhoneAlt className="text-green-600 text-lg" />
        </div>

        {/* Text part - 7/10 */}
        <div className="flex flex-col justify-center pl-1" style={{ flex: 7 }}>
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
          <ul className="hidden md:flex items-center justify-center space-x-4 flex-1">
            <li><Link to="/" className="text-xs md:text-sm hover:text-green-600 hover:underline transition">Home</Link></li>
            <li><Link to="/pests" className="text-xs md:text-sm hover:text-green-600 hover:underline transition">Pests</Link></li>
            <li><Link to="/services" className="text-xs md:text-sm hover:text-green-600 hover:underline transition">Services</Link></li>
            <li><Link to="/sectors" className="text-xs md:text-sm hover:text-green-600 hover:underline transition">Sectors</Link></li>
            <li><Link to="/about" className="text-xs md:text-sm hover:text-green-600 hover:underline transition">About Us</Link></li>
            <li><Link to="/documents" className="text-xs md:text-sm hover:text-green-600 hover:underline transition">Documents</Link></li>
            <li><Link to="/equipment-trading" className="text-xs md:text-sm hover:text-green-600 hover:underline transition">Equipment Trading</Link></li>
            <li><Link to="/careers" className="text-xs md:text-sm hover:text-green-600 hover:underline transition">Careers</Link></li>
            <li><Link to="/blogs" className="text-xs md:text-sm hover:text-green-600 hover:underline transition">Blogs</Link></li>
            <li><Link to="/contact" className="text-xs md:text-sm hover:text-green-600 hover:underline transition">Contact Us</Link></li>
          </ul>


        </div>
      )}
    </nav>
  );
};

export default Navbar;
