import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Logo from '/src/assets/Home/Logo.png';
import PhoneCallBox from "../components/Home/PhoneCallBox";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b-[2px] 2xl:border-b-[8px] border-green-600 shadow-sm text-gray-900 2xl:h-[9vh]">
      <div className="
        w-full
        mx-auto
        px-4 sm:px-6 md:px-4 lg:px-40 xl:px-20 2xl:px-4 
        py-2
        max-w-[1920px]
      ">

        {/* Main Flex Container */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#">
              <img src={Logo} alt="Logo" className="h-8 sm:h-9 md:h-10 lg:h-14 xl:h-12 2xl:h-20 2xl:mt-2" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="
              flex
              space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-4 xl:space-x-6 2xl:space-x-8
              text-[10px] sm:text-xs md:text-sm lg:text-md xl:text-base 2xl:text-2xl
              text-gray
            ">
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

          {/* PhoneCallBox */}
          <div className="hidden md:block">
            <PhoneCallBox
              title="Call For Schedule"
              phone="052 152 8725"
              containerWidth="300px"
              containerHeight="70px"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex-shrink-0">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <HiMenu className="text-xl sm:text-2xl" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <ul className="flex flex-col space-y-2 text-sm px-2">
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
