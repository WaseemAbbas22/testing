import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import CountrySelector from './CountrySelector';

const TopBar = () => {
  const [selectedCountry, setSelectedCountry] = useState("GB");

  return (
    <div className="bg-darkgreen text-white w-full flex justify-center lg:h-[6vh] 2xl:h-[5vh]">
      
      {/* Container with 70% width */}
      <div className="2xl:w-[75%] xl:w-[75%] lg:w-[80%] flex text-xs flex-col md:flex-row items-center justify-between">

        {/* Left Side: Contact + Social Icons */}
        <div className="flex flex-wrap items-center justify-center md:justify-start lg:space-x-4 2xl:space-x-6">

          {/* Phone */}
          <div className="flex  items-center lg:text-base lg:space-x-2 2xl:text-2xl 2xl:space-x-4 ">
            <FaPhoneAlt className="2xl:text-2xl" />
            <span>+971 52 152 8725</span>
          </div>

          {/* Email */}
          <div className="flex items-center lg:text-base lg:space-x-2 2xl:text-2xl 2xl:space-x-4">
            <FaEnvelope className="2xl:text-2xl" />
            <span>info@accuratepestcontrol.ae</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center lg:text-base lg:space-x-2 2xl:space-x-4 2xl:text-2xl">
            <span>Follow us on:</span>
            <a href="#"><FaFacebookF className="hover:text-gray-300 transition" /></a>
            <a href="#"><FaTwitter className="hover:text-gray-300 transition" /></a>
            <a href="#"><FaInstagram className="hover:text-gray-300 transition" /></a>
            <a href="#"><FaYoutube className="hover:text-gray-300 transition" /></a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
