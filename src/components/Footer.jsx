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
import LogoWhite from "@/assets/Home/WhiteLogo.svg";

const Footer = () => {
  return (
    <footer className="bg-darkgreen text-white w-full items-center">
      {/* Desktop/Tablet Layout (md and above) */}
      <div className="hidden md:flex min-h-[50vh] xl:min-h-[62vh] 2xl:min-h-[45vh] 3xl:min-h-[50vh] 4xl:min-h-[45vh] items-center justify-center w-full ">
        {/* Main Footer Content Container */}
        <div className="w-[75%] flex flex-row justify-between mt-[8vh] mb-[2vh]">
          {/* Left Section: Logo & Description (30%) */}
          <div className="w-[30%] flex flex-col ">
            <img
              src={LogoWhite}
              alt="Accurate Logo"
              className="w-12 xl:w-28 2xl:w-36 3xl:w-44 h-auto"
            />
            <p className="mt-4 text-xs font-xs text-white/90 lg:text-xs xl:text-xs 2xl:text-base 3xl:text-xl 4xl:text-2xl text-justify leading-relaxed text-left">
              Accurate Pest Control Services LLC is a trusted provider of
              professional pest management solutions across the UAE. With
              certified technicians and municipality pest control approvals, we
              offer fast, reliable, and safe pest control for homes and
              commercial spaces in Dubai, Sharjah and Ajman. Your protection and
              peace of mind remain our top priority.
            </p>

            {/* Social Icons */}
            <div className="flex justify-start gap-3 mt-8">
              {[
                { Icon: FaFacebookF, url: "https://www.facebook.com/accuratepestcontrolservices/" },
                { Icon: FaTwitter, url: "https://twitter.com/AccuratePestC" },
                { Icon: FaInstagram, url: "https://www.instagram.com/accuratepestcontrolservices" },
                { Icon: FaYoutube, url: "https://youtube.com/@AccuratePestControlServices?si=X_OakFTYcL3wRybd" },
              ].map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-1.5 lg:p-2 2xl:p-1.5 3xl:p-2 hover:bg-gray-100 transition"
                >
                  <Icon className="text-darkgreen text-[14px] lg:text-[13px] 2xl:text-xl 3xl:text-2xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Middle Section: Links (30%) */}
          <div className="flex flex-row text-left xl:gap-6 4xl:gap-32">
            <div>
              <h2 className="font-semibold mb-2 text-white/90 text-sm lg:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
                About Us
              </h2>
              <ul className="text-[12px] lg:text-[13px] text-white/90 xl:text-sm 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-md space-y-1">
                {[
                  { name: "Home", link: "/" },
                  { name: "Documents", link: "/documents" },
                  { name: "About Us", link: "/about" },
                  { name: "Contact Us", link: "/contact" },
                  { name: "Pests", link: "/pests" },
                ].map((item, i) => (
                  <li key={i}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="xl:ml-14 3xl:ml-12 4xl:ml-10">
              <h2 className="font-semibold mb-2 text-sm  text-white/90 lg:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
                Pest Library
              </h2>
              <ul className="text-[12px] lg:text-[13px]  text-white/90 xl:text-sm 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-thin space-y-1">
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
          <div className="w-[30%] flex flex-col gap-4 text-xs lg:text-sm 2xl:text-lg">
            {/* Contact Info */}
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1.5 2xl:p-2">
                <FaPhoneAlt className="text-darkgreen text-[12px] lg:text-[14px] 2xl:text-xl" />
              </div>
              <span className="font-thin xl:text-[14px]  text-white/90 3xl:text-xl 4xl:text-2xl">
                +971 52 152 8725, +971 4 375 6435
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1.5 2xl:p-2">
                <FaGlobe className="text-darkgreen text-[12px] lg:text-[14px] 2xl:text-xl" />
              </div>
              <span className="font-thin xl:text-[15px] text-white/90 3xl:text-xl 4xl:text-2xl">
                www.accuratepestcontrol.ae
              </span>
            </div>

            <div className="flex items-center gap-x-3">
              <div className="bg-white rounded-full p-1.5 2xl:p-2">
                <FaEnvelope className="text-darkgreen  text-[12px] lg:text-[14px] 2xl:text-xl" />
              </div>
              <span className="font-thin xl:text-[14px] text-white/90 3xl:text-xl 4xl:text-2xl">
                info@accuratepestcontrol.ae
              </span>
            </div>

            {/* Locations */}
            <div className="text-white mt-2 xl:text-lg 2xl:text-lg w-full">
              <div className="relative">
                <div className="absolute top-3 left-3 w-px 2xl:ml-1 3xl:ml-1 h-[calc(75%-8px)] bg-white"></div>

                <div className="space-y-1">
                  {/* Head Office */}
                  <div className="flex items-start relative 4xl:w-[87%]">
                    <div className="relative z-10">
                      <div className="bg-white rounded-full p-1.5 2xl:p-2  flex items-center justify-center">
                        <FaMapMarkerAlt className="text-green-600 text-[12px] lg:text-[14px] xl:text-md 2xl:text-xl" />
                      </div>
                    </div>
                    <span className="ml-3 text-white/90 w-full text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-base 3xl:text-lg leading-relaxed pb-2 border-b border-white 3xl:text-xl 4xl:text-2xl 3xl:mb-2 4xl:mb-2">
                      <strong>Head Office:</strong> Warehouse No.1, Plot No.
                      247-289, Al Qusais Industrial Area 4, Dubai – UAE
                    </span>
                  </div>

                  {/* Sharjah Branch */}
                  <div className="flex items-start relative xl:w-[110%] 3xl:w-[105%] 4xl:w-[92%]">
                    <div className="relative z-10">
                      <div className="bg-white rounded-full w-2 h-2 mt-2 ml-[8px] 2xl:ml-[10px] 3xl:ml-[10px] 2xl:w-3 2xl:h-3"></div>
                    </div>
                    <span className="ml-5 text-white/90  w-full font-semibold text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-base 3xl:text-lg leading-relaxed pb-2 border-b border-white 3xl:text-xl 4xl:text-2xl 3xl:mb-2 4xl:mb-2">
                      <strong>Sharjah Branch:</strong> Building No. 3702, Shop
                      No 3 & 4, Muweilah Commercial area, Sharjah – UAE
                    </span>
                  </div>

                  {/* Ajman Branch */}
                  <div className="flex items-start relative 3xl:w-[92%] 4xl:w-[90%]">
                    <div className="relative z-10">
                      <div className="bg-white rounded-full w-2 h-2 mt-2 ml-[8px] 2xl:ml-[10px] 3xl:ml-[10px] 2xl:w-3 2xl:h-3"></div>
                    </div>
                    <span className="ml-5 text-white/90 w-full text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-base 3xl:text-lg leading-relaxed pb-2 3xl:text-xl 4xl:text-2xl">
                      <strong>Ajman Branch:</strong> Shop No. 1, Plot No. 3074,
                      Eastern Sector, Al Zahya 1, Ajman - UAE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <p className="text-[12px] text-white/90 leading-relaxed items-start text-justify ">
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
            <ul className="text-xs text-white/90 space-y-1">
              {["Home", "Documents", "About Us"].map((item, i) => (
                <li key={i}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-2 text-xl">Pest Library</h2>
            <ul className="text-xs text-white/90 space-y-1">
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
              <FaPhoneAlt className="text-darkgreen  text-xs" />
            </div>
            <span className="text-base text-white/90">
              +971 52 152 8725, +971 4 375 6435
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-1">
              <FaGlobe className="text-darkgreen text-xs" />
            </div>
            <span className="text-base text-white/90">
              www.accuratepestcontrol.ae
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-1">
              <FaEnvelope className="text-darkgreen text-xs" />
            </div>
            <span className="text-lg text-white/90">
              info@accuratepestcontrol.ae
            </span>
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
                <span className="ml-3 text-white/90 text-[14px] leading-relaxed border-b border-white">
                  <strong>Head Office:</strong> Warehouse No.1, Plot No.
                  247-289, Al Qusais Industrial Area 4, Dubai – UAE
                </span>
              </div>

              {/* Sharjah Branch */}
              <div className="flex items-start relative">
                <div className="relative z-10">
                  <div className="bg-white rounded-full w-2 h-2 mt-2 ml-[6px]"></div>
                </div>
                <span className="ml-[14px] text-white/90 text-[14px] leading-relaxed border-b border-white ">
                  <strong>Sharjah Branch:</strong> Building No. 3702, Shop No 3
                  & 4, Muweilah Commercial area, Sharjah – UAE
                </span>
              </div>

              {/* Ajman Branch */}
              <div className="flex items-start relative">
                <div className="relative z-10">
                  <div className="bg-white rounded-full w-2 h-2 mt-1 ml-[6px]"></div>
                </div>
                <span className="ml-[14px] text-white/90 text-[14px] leading-relaxed ">
                  <strong>Ajman Branch:</strong> Shop No. 1, Plot No. 3074,
                  Eastern Sector, Al Zahya 1, Ajman - UAE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0C520A] text-white/90 text-center text-xs 2xl:text-base  py-2 w-full mt-auto">
        © 2025 | Accurate Pest Control LLC | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
