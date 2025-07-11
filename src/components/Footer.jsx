import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import LogoWhite from '/src/assets/Home/LogoWhite.png';

const Footer = () => {
  return (
    <footer className="bg-darkgreen text-white w-full flex flex-col justify-between">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between mt-6 md:mt-12 mb-6 gap-4 md:gap-8 px-2">

        {/* Left */}
        <div className="md:max-w-xs">
          <img src={LogoWhite} alt="Accurate Logo" className="w-20 sm:w-24 md:w-24 lg:w-32 h-auto mx-auto md:mx-0" />
          <p className="
            mt-2 text-[9px] sm:text-[10px] md:mt-4 md:text-xs lg:text-xs leading-relaxed text-center md:text-left">
            Accurate Pest Control is a trusted provider of eco-friendly pest management solutions across the UAE. With certified technicians and municipality-approved treatments, we offer fast, effective,
            and safe pest control services for homes and businesses in Dubai, Abu Dhabi, Sharjah, and beyond. Your peace of mind is our priority.
          </p>
          <div className="flex justify-center md:justify-start gap-2 sm:gap-3 mt-4 md:mt-16">
            <div className="bg-white rounded-full p-0.5 sm:p-1.5 md:p-1.5 lg:p-2">
              <FaFacebookF className="text-darkgreen text-[10px] sm:text-[12px] md:text-[14px] lg:text-[13px]" />
            </div>
            <div className="bg-white rounded-full p-0.5 sm:p-1.5 md:p-1.5 lg:p-2">
              <FaTwitter className="text-darkgreen text-[10px] sm:text-[12px] md:text-[14px] lg:text-[13px]" />
            </div>
            <div className="bg-white rounded-full p-0.5 sm:p-1.5 md:p-1.5 lg:p-2">
              <FaInstagram className="text-darkgreen text-[10px] sm:text-[12px] md:text-[14px] lg:text-[13px]" />
            </div>
            <div className="bg-white rounded-full p-0.5 sm:p-1.5 md:p-1.5 lg:p-2">
              <FaYoutube className="text-darkgreen text-[10px] sm:text-[12px] md:text-[14px] lg:text-[13px]" />
            </div>
          </div>
        </div>

        {/* Middle Links */}
        <div className="flex-1 flex flex-col-3 md:flex-row justify-between gap-4 text-center md:text-left">

          {/* Combined Container */}
          <div className="flex flex-row sm:flex-row justify-between w-full md:w-1/2 md:mx-8 gap-4">
            <div className="w-full sm:w-1/2 text-left sm:text-left md:text-left">
              <h2 className="font-semibold mb-2 text-[10px] sm:text-xs md:text-sm lg:text-base">About Us</h2>
              <ul className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[13px] font-thin space-y-1">
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

            <div className="w-full sm:w-1/2 text-left sm:text-left md:text-left">
              <h2 className="font-semibold mb-2 text-[10px] sm:text-xs md:text-sm lg:text-base">Pest Library</h2>
              <ul className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[13px] font-thin space-y-1">
                <li><a href="#">Venomous</a></li>
                <li><a href="#">Cockroaches</a></li>
                <li><a href="#">Mosquitoes</a></li>
                <li><a href="#">Red Bug</a></li>
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
          <div className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm flex flex-col gap-3 md:ml-6 md:mt-2">
            <div className="flex items-center gap-1 sm:gap-3">
              <div className="bg-white rounded-full p-0.5 md:p-1.5">
                <FaPhoneAlt className="text-darkgreen text-[7px] sm:text-[10px] md:text-[12px] lg:text-[14px]" />
              </div>
              <span className='font-thin'>+971 52 152 8725, +971 4 375 6435</span>
            </div>

            <div className="flex items-center gap-1 sm:gap-3">
              <div className="bg-white rounded-full p-0.5 md:p-1.5">
                <FaGlobe className="text-darkgreen text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px]" />
              </div>
              <span className='font-thin'>www.accuratepestcontrol.ae</span>
            </div>

            <div className="flex items-center gap-1 sm:gap-3">
              <div className="bg-white rounded-full p-0.5 md:p-1.5">
                <FaEnvelope className="text-darkgreen text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px]" />
              </div>
              <span className='font-thin'>info@accuratepestcontrol.ae</span>
            </div>

            {/* Locations */}
            <div className="text-white mt-2 md:w-80">
              <div className="relative">
                <div className="absolute top-3 left-3 w-px h-[calc(75%-8px)] bg-white hidden sm:block"></div>

                <div className="space-y-1">
                  {/* Head Office */}
                  <div className="flex items-start relative">
                    <div className="relative z-10">
                      <div className="bg-white rounded-full md:p-1.5 flex items-center justify-center">
                        <FaMapMarkerAlt className="text-green-600 text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px]" />
                      </div>
                    </div>
                    <span className="ml-[2px] md:ml-3 w-full sm:w-[266px] text-[6px] sm:text-[10px] md:text-[12px] lg:text-[13px] leading-relaxed pb-2 border-b justify-left border-white">
                      <strong>Head Office:</strong> Warehouse No.1, Plot No. 247-289, Al Qusais Industrial Area 4, Dubai – UAE
                    </span>
                  </div>

                  {/* Sharjah Branch */}
                  <div className="flex items-start relative">
                    <div className="relative z-10">
                      <div className="bg-white rounded-full w-1 h-1 mt-1 ml-[3px]  md:w-2 md:h-2 md:mt-2 md:ml-[8px]"></div>
                    </div>
                    <span className="ml-[6px] md:ml-5 w-full text-[6px] sm:text-[10px] md:text-[12px] lg:text-[13px] leading-relaxed pb-2 border-b border-[#FFFFFF]">
                      <strong>Sharjah Branch:</strong> Building No. 3702, Shop No 3 & 4, Muweilah Commercial area, Sharjah – UAE
                    </span>
                  </div>

                  {/* Sharjah Branch */}
                  <div className="flex items-start relative">
                    <div className="relative z-10">
                      <div className="bg-white rounded-full w-1 h-1 mt-1 ml-[3px]  md:w-2 md:h-2 md:mt-2 md:ml-[8px]"></div>
                    </div>
                    <span className="md:ml-5 w-full text-[6px] sm:text-[10px] md:text-[12px] lg:text-[13px] leading-relaxed pb-2 ">
                      <strong>Ajman Branch:</strong>Shop No. 1, Plot No. 3074, Eastern Sector, Al Zahya 1, Ajman - UAE
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#0C520A] text-center text-[10px] sm:text-[10px] md:text-[11px] lg:text-[12px] py-2 w-full">
        © 2025 | Accurate Pest Control | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
