import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import LogoWhite from '/src/assets/Home/LogoWhite.png';

const Footer = () => {
  return (
    <footer className="bg-darkgreen text-white px-6 md:px-16 lg:px-24 w-full flex flex-col justify-between">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between py-8 gap-8">

        {/* Left */}
        <div className="md:max-w-xs ml-10 text-center md:text-left">
          <img src={LogoWhite} alt="Accurate Logo" className="w-25 h-14 mx-auto md:mx-0" />
          <p className="mt-4 text-xs font-sm leading-relaxed">
            Accurate Pest Control is a trusted provider of eco-friendly pest management solutions across the UAE. With certified technicians and municipality-approved treatments, we offer fast, effective,
            and safe pest control services for homes and businesses in Dubai, Abu Dhabi, Sharjah, and beyond. Your peace of mind is our priority.
          </p>
          <div className="flex justify-center md:justify-start gap-3 mt-4">
            <FaFacebookF className="text-lg hover:text-green-200 cursor-pointer" />
            <FaTwitter className="text-lg hover:text-green-200 cursor-pointer" />
            <FaInstagram className="text-lg hover:text-green-200 cursor-pointer" />
            <FaYoutube className="text-lg hover:text-green-200 cursor-pointer" />
          </div>
        </div>

        {/* Middle Links - combined two columns sharing one column space */}
        <div className="flex-1 flex flex-col md:flex-row justify-between gap-4 text-center md:text-left">

          {/* Combined Container */}
          <div className="flex justify-between w-full md:w-1/2 mx-auto gap-4">

            <div className="w-1/2 text-left">
              <h2 className="font-semibold mb-2 text-base">About Us</h2>
              <ul className="text-xs font-thin space-y-1.5">
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

            <div className="w-1/2 text-left md:ml-10">
              <h2 className="font-semibold mb-2 text-base">Pest Library</h2>
              <ul className="text-xs font-thin space-y-1.5 ">
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

          </div>

          {/* Contact Info */}
          <div className="text-xs flex flex-col gap-2 md:ml-12 md:mt-4 md:mt-0">

            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1">
                <FaPhoneAlt className="text-darkgreen text-[9px]" />
              </div>
              <span className='font-thin'>+971 52 152 8725, +971 4 375 6435</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1">
                <FaGlobe className="text-darkgreen text-[10px]" />
              </div>
              <span className='font-thin'>www.accuratepestcontrol.ae</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1">
                <FaEnvelope className="text-darkgreen text-xs" />
              </div>
              <span className='font-thin'>info@accuratepestcontrol.ae</span>
            </div>

            {/* Locations */}
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-start gap-3">
                <div className="bg-white rounded-full p-1">
                  <FaMapMarkerAlt className="text-darkgreen text-xs" />
                </div>
                <span><strong>Head Office:</strong> Warehouse No.1, Plot No. 247-289, Al Qusais Industrial Area 4, Dubai - UAE</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white rounded-full p-1">
                  <FaMapMarkerAlt className="text-darkgreen text-xs" />
                </div>
                <span><strong>Sharjah Branch:</strong> Building No. 3702, Shop No 3 & 4, Muweilah Commercial area, Sharjah - UAE</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white rounded-full p-1">
                  <FaMapMarkerAlt className="text-darkgreen text-xs" />
                </div>
                <span><strong>Ajman Branch:</strong> Shop No. 1, Plot No. 3074, Eastern Sector, Al Zahya 1, Ajman - UAE</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#0C520A] text-center text-xs py-2 ">
        © 2025 | Accurate Pest Control | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
