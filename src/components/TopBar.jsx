import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const TopBar = () => {
  const [selectedCountry, setSelectedCountry] = useState("AE");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="text-sm text-white w-full">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-2 bg-green-600">

        {/* Left Side: Email, Phone, Social Icons */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <FaEnvelope className="text-xs" />
            <span className="text-xs">info@example.com</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaPhoneAlt className="text-xs" />
            <span className="text-xs">+971 52 152 8725</span>
          </div>

          {/* Follow us on */}
          <div className="flex items-center space-x-2">
            <span className="text-xs">Follow us on:</span>
            <a href="#"><FaFacebookF className="text-xs hover:text-gray-200" /></a>
            <a href="#"><FaTwitter className="text-xs hover:text-gray-200" /></a>
            <a href="#"><FaInstagram className="text-xs hover:text-gray-200" /></a>
          </div>
        </div>

        {/* Right Side: Country Dropdown with emoji flags */}
        <div className="relative">
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className="bg-white text-gray-800 text-xs px-3 py-1 rounded shadow focus:outline-none appearance-none pr-8"
          >
            <option value="AE">🇦🇪 UAE</option>
            <option value="PK">🇵🇰 Pakistan</option>
            <option value="IN">🇮🇳 India</option>
            <option value="GB">🇬🇧 UK</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
