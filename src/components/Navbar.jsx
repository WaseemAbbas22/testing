import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Logo from '/src/assets/Home/Logo.png';
import PhoneCallBox from "../components/Home/PhoneCallBox";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b-[3px] border-green-600 shadow-sm text-gray-900">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-2">

        {/* Main Flex Container with margins */}
        <div className="flex items-center justify-between ml-16 mr-12">

          {/* Logo Div */}
          <div className="flex-shrink-0">
            <a href="#">
              <img src={Logo} alt="Logo" className="h-9 md:h-10" />
            </a>
          </div>

          {/* Desktop Menu Div */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex text-[13px] space-x-3.5 ml-6 text-gray">
              <li><Link to="/" className="nav-link-hover">Home</Link></li>
              <li><Link to="/pests" className="nav-link-hover">Pests</Link></li>
              <li><Link to="/services" className="nav-link-hover">Services</Link></li>
              <li><Link to="/sectors" className="nav-link-hover">Sectors</Link></li>
              <li><Link to="/about" className="nav-link-hover">About Us</Link></li>
              <li><Link to="/documents" className="nav-link-hover">Documents</Link></li>
              <li><Link to="/equipment-trading" className="nav-link-hover">Equipment Trading</Link></li>
              <li><Link to="/careers" className="nav-link-hover">Careers</Link></li>
              <li><Link to="/blogs" className="nav-link-hover">Blogs</Link></li>
              <li><Link to="/contact" className="nav-link-hover">Contact Us</Link></li>
            </ul>
          </div>

          {/* PhoneCallBox Div */}
          <div className="hidden md:block">
            <PhoneCallBox
              title="Call For Schedule"
              phone="052 152 8725"
              containerWidth="150px"
              containerHeight="40px"
            />
          </div>

          {/* Mobile Menu Toggle Div */}
          <div className="md:hidden flex-shrink-0">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <HiMenu className="text-2xl" />
            </button>
          </div>

        </div>

        {/* Mobile Menu Div */}
        {isMenuOpen && (
          <div className="md:hidden px-4 py-2">
            <ul className="flex flex-col space-y-2">
              <li><Link to="/" className="hover:text-green-600 hover:underline">Home</Link></li>
              <li><Link to="/pests" className="hover:text-green-600 hover:underline">Pests</Link></li>
              <li><Link to="/services" className="hover:text-green-600 hover:underline">Services</Link></li>
              <li><Link to="/sectors" className="hover:text-green-600 hover:underline">Sectors</Link></li>
              <li><Link to="/about" className="hover:text-green-600 hover:underline">About Us</Link></li>
              <li><Link to="/documents" className="hover:text-green-600 hover:underline">Documents</Link></li>
              <li><Link to="/equipment-trading" className="hover:text-green-600 hover:underline">Equipment Trading</Link></li>
              <li><Link to="/careers" className="hover:text-green-600 hover:underline">Careers</Link></li>
              <li><Link to="/blogs" className="hover:text-green-600 hover:underline">Blogs</Link></li>
              <li><Link to="/contact" className="hover:text-green-600 hover:underline">Contact Us</Link></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
