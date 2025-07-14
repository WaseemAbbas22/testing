import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import CountrySelector from './CountrySelector';

const TopBar = () => {
  const [selectedCountry, setSelectedCountry] = useState("GB");

  return (
    <div className="bg-green-600 text-white text-xs w-full">
      {/* Responsiveness for all screens (mobile-first) */}
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-1">
        
        {/* Main Flex Container */}
        {/* Responsiveness for mobile: flex-col; for md and above: flex-row */}
        <div className="flex flex-col md:flex-row items-center justify-between ml-4 md:ml-16 mr-4 md:mr-12 space-y-2 md:space-y-0">
          
          {/* Left Side: Contact + Social Icons */}
          {/* Responsiveness for wrapping items in mobile */}
          <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4">

            {/* Phone */}
            <div className="flex items-center space-x-1">
              <FaPhoneAlt className="text-[10px]" />
              <span>+971 52 152 8725</span>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-1">
              <FaEnvelope className="text-[10px]" />
              <span>info@accuratepestcontrol.ae</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-2">
              <span>Follow us on:</span>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
            </div>

          </div>

          {/* Right Side: Country Selector */}
          {/* Responsiveness for alignment on mobile and md+ */}
          <div className="flex items-center">
            <CountrySelector
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              width="90px"
              height="30px"
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default TopBar;
