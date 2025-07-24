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
    <footer className="bg-darkgreen text-white w-full">
      {/* Desktop/Tablet Layout (md and above) */}
      <div className="hidden md:flex xl:h-[65vh] 4xl:h-[50vh] 3xl:h-[50vh] xl:h-[52vh] flex-col justify-between">
        {/* Main Footer Content Container */}
        <div className="w-[75%] mx-auto flex flex-row justify-between xl:mt-10 3xl:mt-12 4xl:mt-20">
          {/* Left Section: Logo & Description (30%) */}
          <div className="w-[30%] flex flex-col items-start">
            <img
              src={LogoWhite}
              alt="Accurate Logo"
              className="w-12 xl:w-28 2xl:w-44 h-auto"
            />
            <p className="mt-4 text-xs lg:text-xs xl:text-xs 2xl:text-lg 3xl:text-xl 4xl:text-2xl text-justify leading-relaxed text-left">
              Accurate Pest Control Services LLC is a trusted provider of
              professional pest management solutions across the UAE. With
              certified technicians and municipality pest control approvals, we
              offer fast, reliable, and safe pest control for homes and
              commercial spaces in Dubai, Sharjah and Ajman. Your protection and
              peace of mind remain our top priority.
            </p>

            {/* Social Icons */}
            <div className="flex justify-start gap-3 mt-8">
              {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-full p-1.5 lg:p-2 2xl:p-3"
                  >
                    <Icon className="text-darkgreen text-[14px] lg:text-[13px] 2xl:text-2xl" />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Middle Section: Links (30%) */}
          <div className="flex flex-row text-left">
            <div>
              {/* <h2 className="font-semibold mb-2 text-sm lg:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
                About Us
              </h2> */}
              <ul className="text-[12px] lg:text-[13px] xl:text-sm 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-md space-y-1">
                {[
                  "Home",
                  "Documents",
                  ].map((item, i) => (
                  <li key={i}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="xl:ml-14 3xl:ml-12 4xl:ml-10">
              <h2 className="font-semibold mb-2 text-sm lg:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
                Pest Library
              </h2>
              <ul className="text-[12px] lg:text-[13px] xl:text-sm 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-thin space-y-1">
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
          <div className="w-[30%]  flex flex-col gap-4 text-xs lg:text-sm 2xl:text-lg">
            {/* Contact Info */}
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1.5 2xl:p-2">
                <FaPhoneAlt className="text-darkgreen text-[12px] lg:text-[14px] 2xl:text-xl" />
              </div>
              <span className="font-thin xl:text-[14px] 3xl:text-xl 4xl:text-2xl">
                +971 52 152 8725, +971 4 375 6435
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1.5 2xl:p-2">
                <FaGlobe className="text-darkgreen text-[12px] lg:text-[14px] 2xl:text-xl" />
              </div>
              <span className="font-thin xl:text-[15px] 3xl:text-xl 4xl:text-2xl">
                www.accuratepestcontrol.ae
              </span>
            </div>

            <div className="flex items-center gap-x-3">
              <div className="bg-white rounded-full p-1.5 2xl:p-2">
                <FaEnvelope className="text-darkgreen text-[12px] lg:text-[14px] 2xl:text-xl" />
              </div>
              <span className="font-thin xl:text-[14px] 3xl:text-xl 4xl:text-2xl">
                info@accuratepestcontrol.ae
              </span>
            </div>

            {/* Locations */}
            <div className="text-white mt-2 xl:text-lg 2xl:text-lg w-full">
              <div className="relative">
                <div className="absolute top-3 left-3 w-px 3xl:ml-1 h-[calc(75%-8px)] bg-white"></div>

                <div className="space-y-1">
                  {/* Head Office */}
                  <div className="flex items-start relative 4xl:w-[87%]">
                    <div className="relative z-10">
                      <div className="bg-white rounded-full p-1.5 2xl:p-2 flex items-center justify-center">
                        <FaMapMarkerAlt className="text-green-600 text-[12px] lg:text-[14px] xl:text-md 2xl:text-xl" />
                      </div>
                    </div>
                    <span className="ml-3 w-full text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-lg leading-relaxed pb-2 border-b border-white 3xl:text-xl 4xl:text-2xl 3xl:mb-2 4xl:mb-2">
                      <strong>Head Office:</strong> Warehouse No.1, Plot No.
                      247-289, Al Qusais Industrial Area 4, Dubai – UAE
                    </span>
                  </div>

                  {/* Sharjah Branch */}
                  <div className="flex items-start relative xl:w-[110%] 3xl:w-[105%] 4xl:w-[92%]">
                    <div className="relative z-10">
                      <div className="bg-white rounded-full w-2 h-2 mt-2 ml-[8px] 3xl:ml-[10px] 2xl:w-3 2xl:h-3"></div>
                    </div>
                    <span className="ml-5 w-full font-semibold text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-lg leading-relaxed pb-2 border-b border-white 3xl:text-xl 4xl:text-2xl 3xl:mb-2 4xl:mb-2">
                      <strong>Sharjah Branch:</strong> Building No. 3702, Shop
                      No 3 & 4, Muweilah Commercial area, Sharjah – UAE
                    </span>
                  </div>

                  {/* Ajman Branch */}
                  <div className="flex items-start relative 3xl:w-[92%] 4xl:w-[90%]">
                    <div className="relative z-10">
                      <div className="bg-white rounded-full w-2 h-2 mt-2 ml-[8px] 3xl:ml-[10px] 2xl:w-3 2xl:h-3"></div>
                    </div>
                    <span className="ml-5 w-full text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-lg leading-relaxed pb-2 3xl:text-xl 4xl:text-2xl">
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
        <div className="bg-[#0C520A] text-center text-[11px] lg:text-[12px] 2xl:text-xl py-2 w-full">
          © 2025 | Accurate Pest Control | All rights reserved.
        </div>
      </div>

      {/* Mobile Layout (below md) */}
      <div className="md:hidden flex flex-col px-4  min-h-screen">
        {/* Logo Section */}
        <div className="flex flex-col items-start pt-8 pb-6">
          <img
            src={LogoWhite}
            alt="Accurate Logo"
            className="w-32 h-auto mb-4"
          />
          <p className="text-[12px] leading-relaxed items-start text-justify ">
            Accurate Pest Control Services LLC is a trusted provider of
            professional pest management solutions across the UAE. With
            certified technicians and municipality pest control approvals, we
            offer fast, reliable, and safe pest control for homes and commercial
            spaces in Dubai, Sharjah and Ajman. Your protection and peace of
            mind remain our top priority.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-2 mt-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
              <div key={i} className="bg-white rounded-full p-2">
                <Icon className="text-darkgreen text-[12px]" />
              </div>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="flex items-start gap-12 pb-6 ">
          <div>
            <h2 className="font-semibold mb-2 text-xl">About Us</h2>
            <ul className="text-xs space-y-1">
              {[
                "Home",
                ].map((item, i) => (
                <li key={i}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-2 text-xl">Pest Library</h2>
            <ul className="text-xs space-y-1">
              {[
                "Venomous",
                "Cockroaches",
                "Mosquitoes",
                "Red Bugs",
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

        {/* Contact Info Section */}
        <div className="flex flex-col gap-3 pb-6">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full p-1">
              <FaPhoneAlt className="text-darkgreen text-xs" />
            </div>
            <span className="text-base">
              +971 52 152 8725, +971 4 375 6435
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-1">
              <FaGlobe className="text-darkgreen text-xs" />
            </div>
            <span className="text-base">www.accuratepestcontrol.ae</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-1">
              <FaEnvelope className="text-darkgreen text-xs" />
            </div>
            <span className="text-lg">info@accuratepestcontrol.ae</span>
          </div>
        </div>

        {/* Locations Section */}
        <div className="pb-6">
          <div className="relative">
            <div className="absolute top-2 left-2.5 w-px h-[calc(80%-16px)] bg-white"></div>

            <div className="space-y-3">
              {/* Head Office */}
              <div className="flex items-start relative">
                <div className="relative z-10">
                  <div className="bg-white rounded-full p-1 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-green-600 text-xs" />
                  </div>
                </div>
                <span className="ml-3 text-[14px] leading-relaxed border-b border-white">
                  <strong>Head Office:</strong> Warehouse No.1, Plot No.
                  247-289, Al Qusais Industrial Area 4, Dubai – UAE
                </span>
              </div>

              {/* Sharjah Branch */}
              <div className="flex items-start relative">
                <div className="relative z-10">
                  <div className="bg-white rounded-full w-2 h-2 mt-2 ml-[6px]"></div>
                </div>
                <span className="ml-[14px] text-[14px] leading-relaxed border-b border-white ">
                  <strong>Sharjah Branch:</strong> Building No. 3702, Shop No 3
                  & 4, Muweilah Commercial area, Sharjah – UAE
                </span>
              </div>

              {/* Ajman Branch */}
              <div className="flex items-start relative">
                <div className="relative z-10">
                  <div className="bg-white rounded-full w-2 h-2 mt-1 ml-[6px]"></div>
                </div>
                <span className="ml-[14px] text-[14px] leading-relaxed ">
                  <strong>Ajman Branch:</strong> Shop No. 1, Plot No. 3074,
                  Eastern Sector, Al Zahya 1, Ajman - UAE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-[#0C520A] text-center text-[9px] py-2 w-full mt-auto">
          © 2025 | Accurate Pest Control | All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

