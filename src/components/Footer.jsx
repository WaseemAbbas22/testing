import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import LogoWhite from '/src/assets/Home/LogoWhite.png';

const Footer = () => {
  return (
    <footer className="bg-darkgreen text-white w-full flex flex-col justify-between">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between mt-12 mb-6 gap-8">

        {/* Left */}
        <div className="md:max-w-xs ml-2 text-center md:text-left">
          <img src={LogoWhite} alt="Accurate Logo" className="w-25 h-14 mx-auto md:mx-0" />
          <p className="mt-4 text-xs font-sm justify-text leading-relaxed">
            Accurate Pest Control is a trusted provider of eco-friendly pest management solutions across the UAE. With certified technicians and municipality-approved treatments, we offer fast, effective,
            and safe pest control services for homes and businesses in Dubai, Abu Dhabi, Sharjah, and beyond. Your peace of mind is our priority.
          </p>
          <div className="flex justify-center md:justify-start gap-3  mt-12">
            <div className="bg-white rounded-full p-1">
                <FaFacebookF className="text-darkgreen text-[14px]" />
            </div>
            <div className="bg-white rounded-full p-1">
                <FaTwitter className="text-darkgreen text-[14px]" />
            </div>
            <div className="bg-white rounded-full p-1">
                <FaInstagram className="text-darkgreen text-[14px]" />
            </div>
            <div className="bg-white rounded-full p-1">
                <FaYoutube className="text-darkgreen text-[14px]" />
            </div>
          </div>
        </div>

        {/* Middle Links - combined two columns sharing one column space */}
        <div className="flex-1 flex flex-col md:flex-row justify-between gap-4 text-center md:text-left">

          {/* Combined Container */}
          <div className="flex justify-between w-full md:w-1/2 mx-auto gap-4">

            <div className="w-1/2 text-left">
              <h2 className="font-semibold mb-2 text-base">About Us</h2>
              <ul className="w-[120%] text-[13px] font-thin space-y-1">
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

            <div className="w-1/2 text-left md:ml-10">
              <h2 className="font-semibold mb-2 text-base">Pest Library</h2>
              <ul className="text-[13px] font-thin space-y-1 ">
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
          <div className="text-xs flex flex-col gap-3 md:ml-6 md:mt-2">

            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1.5">
                <FaPhoneAlt className="text-darkgreen text-[10px]" />
              </div>
              <span className='font-thin'>+971 52 152 8725, +971 4 375 6435</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1.5">
                <FaGlobe className="text-darkgreen text-[10px]" />
              </div>
              <span className='font-thin'>www.accuratepestcontrol.ae</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1.5">
                <FaEnvelope className="text-darkgreen text-[10px]" />
              </div>
              <span className='font-thin'>info@accuratepestcontrol.ae</span>
            </div>


            <div className="text-white">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute top-3 left-2.5 w-px h-[calc(80%-8px)] bg-white"></div>

                {/* Locations */}
                <div className="space-y-1">
                  {/* Head Office */}
                  <div className="flex items-start relative">
                    <div className="relative z-10">
                      <div className="bg-white rounded-full p-1.5 flex items-center justify-center">
                        <FaMapMarkerAlt className="text-green-600 text-[10px]" />
                      </div>
                    </div>
                    <span className="ml-3 w-[266px] text-[13px] leading-relaxed pb-2 border-b justify-text border-white">
                      <strong>Head Office:</strong> Warehouse No.1, Plot No. 247-289,<br /> Al Qusais Industrial Area 4, Dubai – UAE
                    </span>
                  </div>

                  {/* Sharjah Branch */}
                  <div className="flex items-start relative">
                    <div className="relative z-10">
                      <div className="bg-white rounded-full w-2 h-2 mt-2 ml-[6px]"></div>
                    </div>
                    <span className="ml-5 text-[13px] leading-relaxed pb-2 border-b border-[#FFFFFF]">
                      <strong>Sharjah Branch:</strong> Building No. 3702, Shop No 3 &<br /> 4, Muweilah Commercial area, Sharjah – UAE
                    </span>
                  </div>

                  {/* Ajman Branch */}
                  <div className="flex items-start relative">
                    <div className="relative z-10">
                      <div className="bg-white rounded-full w-2 h-2 mt-2 ml-[6px]"></div>
                    </div>
                    <span className="ml-5 text-[13px] leading-relaxed">
                      <strong>Ajman Branch:</strong> Shop No. 1, Plot No. 3074, <br /> Eastern Sector, Al Zahya 1, Ajman – UAE
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#0C520A] text-center text-[11px] py-2 w-full justify-center items-center ">
        © 2025 | Accurate Pest Control | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
