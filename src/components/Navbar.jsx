import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Logo from "@/assets/Home/APClogo.svg";
import PhoneCallBox from "../components/Home/PhoneCallBox";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
//className="h-[54px] sm:h-9 md:h-10 lg:h-14 xl:w-32 xl:h-auto 2xl:h-16 3xl:h-24 object-contain"

//px-5 sm:px-6 md:px-4 lg:px-40 xl:px-20 2xl:px-16
// md:w-[85%]
//         xl:w-[75%]
//         2xl:w-[80%]
//         3xl:w-[83%]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b-[4px] 2xl:border-b-[8px] border-green-600 shadow-sm text-gray-900 h-[60px] xl:h-[13vh] 2xl:h-[12vh] 3xl:h-[12vh] 4xl:h-[9vh]">
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
            <a href="/">
              <img
                src={Logo}
                alt="Logo"
                className="h-[54px] xl:h-[72px] 3xl:h-[92px] w-auto"
                style={{ imageRendering: "crisp-edges" }}
              />
            </a>
          </div>

          {/* Mobile-only buttons (hidden on md and larger screens) */}
          <div className="flex items-center justify-center gap-1 md:hidden h-full">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/+971524496173" // Replace with your full number in international format
              target="_blank"
              rel="noopener noreferrer"
              className="bg-darkgreen hover:bg-green-600 text-white px-2 py-1.5 rounded-md flex items-center gap-1 text-xs font-medium transition-colors"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => (window.location.href = "tel:08008725")}
              className="bg-darkgreen hover:bg-green-700 text-white px-3 py-2 rounded-md flex items-center gap-1 text-xs font-medium transition-colors"
            >
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
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link-hover ${isActive ? "nav-link-active" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/documents"
                  className={({ isActive }) =>
                    `nav-link-hover ${isActive ? "nav-link-active" : ""}`
                  }
                >
                  Documents
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav-link-hover ${isActive ? "nav-link-active" : ""}`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav-link-hover ${isActive ? "nav-link-active" : ""}`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pests"
                  className={({ isActive }) =>
                    `nav-link-hover ${isActive ? "nav-link-active" : ""}`
                  }
                >
                  Pests
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/careers"
                  className={({ isActive }) =>
                    `nav-link-hover ${isActive ? "nav-link-active" : ""}`
                  }
                >
                  Career
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sectors"
                  className={({ isActive }) =>
                    `nav-link-hover ${isActive ? "nav-link-active" : ""}`
                  }
                >
                  Sectors
                </NavLink>
              </li>
            </ul>
          </div>

          {/* PhoneCallBox */}
          <div className="hidden md:block 4xl:mr-8">
            <PhoneCallBox
              upperText="Call for Schedule"
              phoneNumber="052 152 8725"
              bgColor="bg-[#32A849]"
              spacingY="-space-y-1"
              iconColor="text-[#32A849]"
              iconSize="text-xl 2xl:text-xl 3xl:text-2xl 4xl:text-2xl"
              iconPadding="xl:p-2.5 2xl:py-3 3xl:p-3 4xl:p-5"
              upperTextColor="text-white xl:text-[13px] 3xl:text-lg"
              roundedValue="rounded-md"
              phoneTextColor="text-white font-bold"
              iconMarginLeft="ml-1 2xl:ml-1.2 3xl:ml-1.5"
              spaceX="space-x-1.5"
              containerHeight={{
                base: "h-[50px]",
                "2xl": "2xl:h-[53px]",
                "3xl": "3xl:h-[60px]",
                "4xl": "4xl:h-[78px]",
              }}
              containerWidth={{
                base: "w-[160px]",
                "2xl": "2xl:w-[175px]",
                "3xl": "3xl:w-[220px]",
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
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)}>
              <HiMenu className="text-2xl" />
            </button>
          </div>
        </div>
        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full bg-white z-[100] p-6 flex flex-col">
            {/* Close button */}
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMenuOpen(false)}>
                {/* You need to import HiX from react-icons/hi */}
                <HiX className="text-3xl" />
              </button>
            </div>

            <ul className="flex flex-col space-y-4 text-lg">
              <li>
                <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </NavLink>
              </li>
              {/* <li><NavLink to="/pests" onClick={() => setIsMenuOpen(false)}>Pests</NavLink></li> */}
              {/* <li><NavLink to="/services" onClick={() => setIsMenuOpen(false)}>Services</NavLink></li> */}
              {/* <li><NavLink to="/sectors" onClick={() => setIsMenuOpen(false)}>Sectors</NavLink></li> */}
              <li>
                <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/documents" onClick={() => setIsMenuOpen(false)}>
                  Documents
                </NavLink>
              </li>
              {/* <li><NavLink to="/equipment-trading" onClick={() => setIsMenuOpen(false)}>Equipment Trading</NavLink></li>
              <li><NavLink to="/careers" onClick={() => setIsMenuOpen(false)}>Careers</NavLink></li>
              <li><NavLink to="/blogs" onClick={() => setIsMenuOpen(false)}>Blogs</NavLink></li>
              <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink></li> */}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
