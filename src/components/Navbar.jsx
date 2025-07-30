import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logo from "/src/assets/Home/APClogo.svg";
import PhoneCallBox from "../components/Home/PhoneCallBox";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
//px-5 sm:px-6 md:px-4 lg:px-40 xl:px-20 2xl:px-16 
// md:w-[85%]
//         xl:w-[75%]
//         2xl:w-[80%]
//         3xl:w-[83%]
        
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b-[2px] 2xl:border-b-[8px] border-green-600 shadow-sm text-gray-900 h-[35px] xl:h-[13vh] 2xl:h-[12vh] 3xl:h-[12vh] 4xl:h-[9vh]">
      <div
        className="
        w-[90%]
        md:w-[75%]
        mx-auto
         
        h-full
      "
      >
        {/* Main Flex Container */}
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#">
              <img
                src={Logo}
                alt="Logo"
                className="h-7 sm:h-9 md:h-10 lg:h-14 xl:h-16 2xl:h-16 3xl:h-20"
              />
            </a>
          </div>

          {/* Mobile-only buttons (hidden on md and larger screens) */}
          <div className="flex items-center justify-center gap-2 md:hidden h-full">
            {/* WhatsApp Button */}
            <button className="bg-darkgreen hover:bg-green-600 text-white px-2 py-1 rounded-md flex items-center gap-1 text-xs font-medium transition-colors">
              <FaWhatsapp className="text-base" />
              <span>WhatsApp</span>
            </button>

            {/* Call Us Button */}
            <button className="bg-darkgreen hover:bg-green-700 text-white px-2 py-1 rounded-md flex items-center gap-1 text-xs font-medium transition-colors">
              <FaPhoneAlt className="text-base" />
              <span>Call Us</span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul
              className="
              flex
              space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-4 xl:space-x-3 2xl:space-x-8 3xl:space-x-4 4xl:space-x-8
              text-[10px] sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-2xl 3xl:text-lg 4xl:text-2xl
              text-gray
            "
            >
              <li>
                <Link to="/" className="nav-link-hover">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/documents" className="nav-link-hover">
                  Documents
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-green-600 hover:underline"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* PhoneCallBox */}
          <div className="hidden md:block 4xl:mr-8">
            <PhoneCallBox
              upperText="Call for Schedule"
              phoneNumber="052 152 8725"
              bgColor="bg-[#32A849]"
              iconColor="text-[#32A849]"
              iconSize="text-xl 2xl:text-xl 4xl:text-2xl"
              iconPadding="xl:p-2.5 2xl:py-3 3xl:p-3.5 4xl:p-5"
              upperTextColor="text-white"
              phoneTextColor="text-white"
              iconMarginLeft = "ml-1 2xl:ml-1.2 3xl:ml-1.5"
              spaceX = "space-x-1.5"
              containerHeight={{
                base: "h-[47px]",
                "2xl": "2xl:h-[53px]",
                "3xl": "3xl:h-[58px]",
                "4xl": "4xl:h-[85px]",
              }}
              containerWidth={{
                base: "w-[160px]",
                "2xl": "2xl:w-[175px]",
                "3xl": "3xl:w-[210px]",
                "4xl": "4xl:w-[320px]",
              }}
              upperTextSize={{
                base: "text-xs",
                "2xl": "2xl:text-md",
                "3xl": "3xl:text-base",
                "4xl": "4xl:text-2xl",
              }}
              phoneTextSize={{
                base: "text-lg",
                "2xl": "2xl:text-xl",
                "3xl": "3xl:text-2xl",
                "4xl": "4xl:text-4xl",
              }}
            />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex-shrink-0 h-full flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <HiMenu className="text-xl sm:text-2xl" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <ul className="flex flex-col space-y-2 text-sm px-2">
              <li>
                <Link to="/" className="hover:text-green-600 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/pests"
                  className="hover:text-green-600 hover:underline"
                >
                  Pests
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-green-600 hover:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/sectors"
                  className="hover:text-green-600 hover:underline"
                >
                  Sectors
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-green-600 hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/documents"
                  className="hover:text-green-600 hover:underline"
                >
                  Documents
                </Link>
              </li>
              <li>
                <Link
                  to="/equipment-trading"
                  className="hover:text-green-600 hover:underline"
                >
                  Equipment Trading
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-green-600 hover:underline"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="hover:text-green-600 hover:underline"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-green-600 hover:underline"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
