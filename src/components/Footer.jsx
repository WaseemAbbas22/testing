import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import LogoWhite from '/src/assets/Home/LogoWhite.png'; // Adjust path as needed

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white px-6 md:px-16 lg:px-24 w-full flex flex-col justify-between">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start w-full gap-4 py-4">

        {/* Left Part */}
        <div className="md:max-w-sm text-center md:text-left">
          <img className="w-32 h-auto mx-auto md:mx-0" src={LogoWhite} alt="Accurate Logo" />
          <p className="mt-4 text-sm leading-relaxed">
            Accurate Pest Control provides eco-friendly pest solutions across the UAE with certified technicians and approved treatments.
          </p>
          <div className="flex justify-center md:justify-start items-center gap-3 mt-4">
            <FaFacebookF className="text-lg hover:text-green-200 cursor-pointer" />
            <FaTwitter className="text-lg hover:text-green-200 cursor-pointer" />
            <FaInstagram className="text-lg hover:text-green-200 cursor-pointer" />
            <FaYoutube className="text-lg hover:text-green-200 cursor-pointer" />
          </div>
        </div>

        {/* Middle Parts */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-2 text-center md:text-left">

          <div>
            <h2 className="font-semibold mb-3 text-base">About Us</h2>
            <ul className="text-sm space-y-1">
              <li><a href="#">Home</a></li>
              <li><a href="#">Pests</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Sectors</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Documents</a></li>
              <li><a href="#">Equipment Trading</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-3 text-base">Pest Library</h2>
            <ul className="text-sm space-y-1">
              <li><a href="#">Venomous</a></li>
              <li><a href="#">Cockroaches</a></li>
              <li><a href="#">Mosquitoes</a></li>
              <li><a href="#">Rodents</a></li>
              <li><a href="#">Termites</a></li>
              <li><a href="#">Ants</a></li>
              <li><a href="#">Flies</a></li>
              <li><a href="#">Birds</a></li>
              <li><a href="#">Snakes</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-sm flex flex-col items-center md:items-start space-y-2">

            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1">
                <FaPhoneAlt className="text-green-600 text-lg" />
              </div>
              <span>+971 52 152 8725, +971 4 375 6435</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1">
                <FaGlobe className="text-green-600 text-lg" />
              </div>
              <span>www.accuratepestcontrol.ae</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1">
                <FaEnvelope className="text-green-600 text-lg" />
              </div>
              <span>info@accuratepestcontrol.ae</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-white rounded-full p-1">
                <FaMapMarkerAlt className="text-green-600 text-lg" />
              </div>
              <span><strong>Head Office:</strong> Al Qusais Industrial Area 4, Dubai</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-white rounded-full p-1">
                <FaMapMarkerAlt className="text-green-600 text-lg" />
              </div>
              <span><strong>Sharjah Branch:</strong> Muweilah, Sharjah</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-white rounded-full p-1">
                <FaMapMarkerAlt className="text-green-600 text-lg" />
              </div>
              <span><strong>Ajman Branch:</strong> Al Zahya 1, Ajman</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-green-800 text-center text-xs py-2">
        © 2025 | Accurate Pest Control | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
