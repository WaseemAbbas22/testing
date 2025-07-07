import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import CountrySelector from './CountrySelector';

const TopBar = () => {
  const [selectedCountry, setSelectedCountry] = useState("GB");

  return (
    <div className="bg-green-600 text-white text-xs w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-2">

        {/* Main Flex Container */}
        <div className="flex flex-col md:flex-row items-center justify-between ml-7 mr-6 space-y-2 md:space-y-0">

          {/* Left Side Div */}
          <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4">

            {/* Phone Div */}
            <div className="flex items-center space-x-1">
              <FaPhoneAlt className="text-xs" />
              <span>+971 52 152 8725</span>
            </div>

            {/* Email Div */}
            <div className="flex items-center space-x-1">
              <FaEnvelope className="text-xs" />
              <span>info@accuratepestcontrol.ae</span>
            </div>

            {/* Social Icons Div */}
            <div className="flex items-center space-x-2">
              <span>Follow us on:</span>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
            </div>

          </div>

          {/* Right Side Div: Country Selector */}
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
