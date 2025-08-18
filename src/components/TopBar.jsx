// src/components/TopBar.jsx
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../utils/translations';

const TopBar = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="bg-darkgreen text-white w-full flex justify-center lg:h-[6vh] 2xl:h-[5vh]">
      {/* Container with 70% width */}
      <div className="2xl:w-[75%] xl:w-[75%] lg:w-[80%] flex text-xs flex-col md:flex-row items-center justify-between py-2">
        
        {/* Left Side: Contact + Social Icons */}
        <div className="flex flex-wrap items-center justify-center md:justify-start lg:space-x-4 2xl:space-x-6">
          
          {/* Phone */}
          <div className="md:flex hidden md:block items-center lg:text-sm lg:space-x-2 2xl:text-base 3xl:text-lg 2xl:space-x-2 3xl:space-x-4">
            <FaPhoneAlt className="2xl:text-base 3xl:text-lg" />
            <span>+971 52 152 8725</span>
          </div>

          {/* Email */}
          <div className="flex md:flex hidden md:block items-center lg:text-sm lg:space-x-2 2xl:text-base 3xl:text-lg 2xl:space-x-2 3xl:space-x-4">
            <FaEnvelope className="2xl:text-base 3xl:text-lg " />
            <span>info@accuratepestcontrol.ae</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center lg:text-sm space-x-4 lg:space-x-2 2xl:space-x-2 3xl:space-x-3 2xl:text-base 3xl:text-lg">
            <span>{t('followUsOn')}</span>
            <a href="https://www.facebook.com/accuratepestcontrolservices/" className="hover:text-gray-300 transition">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/AccuratePestC" className="hover:text-gray-300 transition">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/accuratepestcontrolservices" className="hover:text-gray-300 transition">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@AccuratePestControlServices?si=X_OakFTYcL3wRybd" className="hover:text-gray-300 transition">
              <FaYoutube />
            </a>
          </div>
          {/* Right Side: Language Selector */}
        {/* <div className="flex items-center mt-2 md:mt-0">
          <LanguageSelector 
            currentLanguage={currentLanguage}
            onLanguageChange={changeLanguage}
          />
        </div> */}
        </div>

        
      </div>
    </div>
  );
};

export default TopBar;