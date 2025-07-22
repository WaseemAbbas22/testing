import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaGlobe,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import LogoWhite from "/src/assets/Home/LogoWhite.png";

const Footer = () => {
  return (
    <footer className="bg-darkgreen text-white w-full h-[55vh] flex flex-col justify-between">
      {/* Main Footer Content Container */}
      <div className="w-[75%] mx-auto flex flex-col md:flex-row justify-between mt-6 md:mt-12 mb-6 gap-8">
        {/* Left Section: Logo & Description (30%) */}
        <div className="w-full md:w-[30%] flex flex-col items-center md:items-start">
          <img
            src={LogoWhite}
            alt="Accurate Logo"
            className="w-20 sm:w-24 md:w-24 lg:w-32 xl:w-36 2xl:w-44 h-auto"
          />
          <p className="mt-2 text-[9px] sm:text-[10px] md:mt-4 md:text-xs lg:text-xs xl:text-sm 2xl:text-lg leading-relaxed text-center md:text-left">
            Accurate Pest Control Services LLC is a trusted provider of
            professional pest management solutions across the UAE. With
            certified technicians and municipality pest control approvals, we
            offer fast, reliable, and safe pest control for homes and commercial
            spaces in Dubai, Sharjah and Ajman. Your protection and peace of
            mind remain our top priority.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-2 sm:gap-3 mt-4 md:mt-8">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="bg-white rounded-full p-0.5 sm:p-1.5 md:p-1.5 lg:p-2 2xl:p-3"
                >
                  <Icon className="text-darkgreen text-[10px] sm:text-[12px] md:text-[14px] lg:text-[13px] 2xl:text-2xl" />
                </div>
              )
            )}
          </div>
        </div>

        {/* Middle Section: Links (30%) */}
        <div className="w-full md:w-[30%] flex flex-row text-center md:text-left">
          <div>
            <h2 className="font-semibold mb-2 text-[10px] sm:text-xs md:text-sm lg:text-base 2xl:text-xl">
              About Us
            </h2>
            <ul className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[13px] xl:text-base 2xl:text-lg font-thin space-y-1">
              {[
                "Home",
                "Pests",
                "Services",
                "Sectors",
                "About Us",
                "Documents",
                "Pest Control",
                "Equipment Trading",
                "Careers",
                "Blogs",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="ml-12">
            <h2 className="font-semibold mb-2 text-[10px] sm:text-xs md:text-sm lg:text-base 2xl:text-xl">
              Pest Library
            </h2>
            <ul className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[13px] xl:text-base 2xl:text-lg font-thin space-y-1">
              {[
                "Venomous",
                "Cockroaches",
                "Mosquitoes",
                "Red Bug",
                "Rodents",
                "Termites",
                "Ants",
                "Flies",
                "Birds",
                "Snakes",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section: Contact Info & Locations (30%) */}
        <div className="w-full md:w-[30%] flex flex-col gap-3 text-[8px] sm:text-[10px] md:text-xs lg:text-sm 2xl:text-lg">
          {/* Contact Info */}
          <div className="flex items-center gap-1 sm:gap-3">
            <div className="bg-white rounded-full p-0.5 md:p-1.5 2xl:p-2">
              <FaPhoneAlt className="text-darkgreen xl:text-md text-[7px] sm:text-[10px] md:text-[12px] lg:text-[14px] 2xl:text-xl" />
            </div>
            <span className="font-thin xl:text-[15px]">
              +971 52 152 8725, +971 4 375 6435
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-3">
            <div className="bg-white rounded-full p-0.5 md:p-1.5 2xl:p-2">
              <FaGlobe className="text-darkgreen text-[8px] xl:text-md sm:text-[10px] md:text-[12px] lg:text-[14px] 2xl:text-xl" />
            </div>
            <span className="font-thin xl:text-[16px]">www.accuratepestcontrol.ae</span>
          </div>

          <div className="flex items-center gap-1 sm:gap-3">
            <div className="bg-white rounded-full p-0.5 md:p-1.5 2xl:p-2">
              <FaEnvelope className="text-darkgreen xl:text-md text-[8px] sm:text-[10px] md:text-[12px]  lg:text-[14px] 2xl:text-xl" />
            </div>
            <span className="font-thin xl:text-[15px]">info@accuratepestcontrol.ae</span>
          </div>

          {/* Locations */}
          <div className="text-white mt-2 md:w-80 xl:text-lg 2xl:text-lg">
            <div className="relative">
              <div className="absolute top-3 left-3 w-px h-[calc(75%-8px)] bg-white hidden sm:block"></div>

              <div className="space-y-1">
                {/* Head Office */}
                <div className="flex items-start relative">
                  <div className="relative z-10">
                    <div className="bg-white rounded-full md:p-1.5 2xl:p-2 flex items-center justify-center">
                      <FaMapMarkerAlt className="text-green-600 text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-md 2xl:text-xl" />
                    </div>
                  </div>
                  <span className="ml-[2px] md:ml-3 w-full text-[6px] sm:text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-lg leading-relaxed pb-2 border-b justify-left border-white">
                    <strong>Head Office:</strong> Warehouse No.1, Plot No.
                    247-289, Al Qusais Industrial Area 4, Dubai – UAE
                  </span>
                </div>

                {/* Sharjah Branch */}
                <div className="flex items-start relative">
                  <div className="relative z-10">
                    <div className="bg-white rounded-full w-1 h-1 mt-1 ml-[3px] md:w-2 md:h-2 md:mt-2 md:ml-[8px] 2xl:w-3 2xl:h-3"></div>
                  </div>
                  <span className="ml-[6px] md:ml-5 w-full font-semibold text-[6px] sm:text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-lg leading-relaxed pb-2 border-b border-[#FFFFFF]">
                    <strong>Sharjah Branch:</strong> Building No. 3702, Shop No
                    3 & 4, Muweilah Commercial area, Sharjah – UAE
                  </span>
                </div>

                {/* Ajman Branch */}
                <div className="flex items-start relative">
                  <div className="relative z-10">
                    <div className="bg-white rounded-full w-1 h-1 mt-1 ml-[3px] md:w-2 md:h-2 md:mt-2 md:ml-[8px] 2xl:w-3 2xl:h-3"></div>
                  </div>
                  <span className="md:ml-5 w-full text-[6px] sm:text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-lg leading-relaxed pb-2 ">
                    <strong>Ajman Branch:</strong> Shop No. 1, Plot No. 3074,
                    Eastern Sector, Al Zahya 1, Ajman - UAE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#0C520A] text-center text-[10px] sm:text-[10px] md:text-[11px] lg:text-[12px] 2xl:text-xl py-2 w-full">
        © 2025 | Accurate Pest Control | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
