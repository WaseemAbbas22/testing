import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import LogoWhite from '/src/assets/Home/LogoWhite.png'; // Adjust path as needed

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white px-6 pt-8 md:px-16 lg:px-24 w-full">
      
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-green-800 pb-10">
        
        {/* Left Part */}
        <div className="md:max-w-md">
          <img className="w-36 h-auto" src={LogoWhite} alt="Accurate Logo" />
          <p className="mt-6 text-sm leading-relaxed">
            Accurate Pest Control is a trusted provider of eco-friendly pest management solutions across the UAE. With certified technicians and municipality-approved treatments, we offer fast, effective, and safe pest control services for homes and businesses in Dubai, Abu Dhabi, Sharjah, and beyond. Your peace of mind is our priority.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <FaFacebookF className="text-xl hover:text-green-200 cursor-pointer" />
            <FaTwitter className="text-xl hover:text-green-200 cursor-pointer" />
            <FaInstagram className="text-xl hover:text-green-200 cursor-pointer" />
            <FaYoutube className="text-xl hover:text-green-200 cursor-pointer" />
          </div>
        </div>

        {/* Middle Parts */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          <div>
            <h2 className="font-semibold mb-5">About Us</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">Pests</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Sectors</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Documents</a></li>
              <li><a href="#">Pest Control</a></li>
              <li><a href="#">Equipment Trading</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-5">Pest Library</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#">Venomous</a></li>
              <li><a href="#">Cockroaches</a></li>
              <li><a href="#">Mosquitoes</a></li>
              <li><a href="#">Red Bugs</a></li>
              <li><a href="#">Rodents</a></li>
              <li><a href="#">Termites</a></li>
              <li><a href="#">Ants</a></li>
              <li><a href="#">Flies</a></li>
              <li><a href="#">Birds</a></li>
              <li><a href="#">Snakes</a></li>
            </ul>
          </div>

          {/* Contact Info with separator lines */}
          <div className="divide-y divide-black/40 text-xs">

            <div className="flex items-start gap-3 py-2">
              <FaPhoneAlt className="text-lg mt-1" />
              <span>+971 52 152 8725, +971 4 375 6435</span>
            </div>

            <div className="flex items-start gap-3 py-2">
              <FaGlobe className="text-lg mt-1" />
              <span>www.accuratepestcontrol.ae</span>
            </div>

            <div className="flex items-start gap-3 py-2">
              <FaEnvelope className="text-lg mt-1" />
              <span>info@accuratepestcontrol.ae</span>
            </div>

            <div className="flex items-start gap-3 py-2">
              <FaMapMarkerAlt className="text-lg mt-1" />
              <span>
                <strong>Head Office:</strong> Warehouse No.1, Plot No. 247-289, Al Qusais Industrial Area 4, Dubai – UAE
              </span>
            </div>

            <div className="flex items-start gap-3 py-2">
              <span className="ml-8">
                <strong>Sharjah Branch:</strong> Building No. 3702, Shop No 3 & 4, Muweilah Commercial area, Sharjah – UAE
              </span>
            </div>

            <div className="flex items-start gap-3 py-2">
              <span className="ml-8">
                <strong>Ajman Branch:</strong> Shop No. 1, Plot No. 3074, Eastern Sector, Al Zahya 1, Ajman – UAE
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-green-800 text-center py-4 mt-4">
        <p className="text-sm">
          © {new Date().getFullYear()} | Accurate Pest Control | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
