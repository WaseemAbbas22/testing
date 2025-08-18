import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import PhoneCallBox from "@/components/Home/PhoneCallBox";

const ServicesHero = ({
  title = "Services",
  breadcrumb = "Home > Services",
  bgImg,
}) => {
  const [isFixed, setIsFixed] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setIsFixed(rect.bottom <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-full overflow-hidden h-[25vh] sm:h-[40vh]"
    >
      {/* Responsive Image */}
      <img
        src={bgImg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="ml-2 xl:ml-32 3xl:ml-44 4xl:ml-56 relative z-10 flex flex-col justify-center h-full px-4 sm:px-[4vw] text-white">
        <h1
          className="font-bold leading-tight sm:leading-[1.2] text-2xl xl:text-4xl 3xl:text-5xl max-w-[40%] "
          
        >
          {title}
        </h1>
        <p
          className="mt-1"
          style={{
            fontSize: "2vh",
          }}
        >
          {breadcrumb}
        </p>

        {/* PhoneCallBox (Desktop Only) */}
        <div className="fixed hidden md:block xl:bottom-60 3xl:bottom-[450px] right-0 z-[40]">
          <PhoneCallBox
            upperText="Call for Free Inspection"
            phoneNumber="0800 8725"
            bgColor="bg-[#E50000]"
            iconColor="text-[#E50000]"
            iconSize="xl:text-2xl 2xl:text-3xl 3xl:text-3xl 4xl:text-3xl"
            spacingY="space-y-0"
            iconPadding="xl:p-3 4xl:p-4 3xl:p-3"
            upperTextColor="text-white "
            roundedValue="rounded-s-md"
          
            phoneTextColor="text-white font-bold"
            containerHeight={{
              base: "h-[60px]",
              "2xl": "2xl:h-[70px]",
              "3xl": "3xl:h-[70px]",
              "4xl": "4xl:h-[85px]",
            }}
            containerWidth={{
              base: "w-[200px]",
              "2xl": "2xl:w-[250px]",
              "3xl": "3xl:w-[250px]",
              "4xl": "4xl:w-[350px]",
            }}
            upperTextSize={{
              base: "xl:text-[13px]",
              "2xl": "2xl:text-[16px]",
              "3xl": "3xl:text-[16px]",
              "4xl": "4xl:text-2xl",
            }}
            phoneTextSize={{
              base: "xl:text-2xl",
              "2xl": "2xl:text-3xl",
              "3xl": "3xl:text-3xl",
              "4xl": "4xl:text-3xl",
            }}
          />
        </div>

        {/* Mobile: Floating Free Inspection Tab */}
        <div className="md:hidden fixed right-0 top-1/4 transform -translate-y-1/2 z-50">
          <button className="bg-red-600 text-white flex flex-col items-center justify-center w-8 h-28 rounded-l-md shadow-lg">
            <span className="text-[10px] font-medium tracking-wider transform -rotate-90 whitespace-nowrap px-1">
              Free Inspection
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

ServicesHero.propTypes = {
  title: PropTypes.string,
  breadcrumb: PropTypes.string,
  bgImg: PropTypes.string,
};

export default ServicesHero;
