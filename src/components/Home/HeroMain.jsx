import PhoneCallBox from "./PhoneCallBox";
import HeroImg from "@/assets/Home/HeroImg.webp";
//import { FaPhoneAlt } from "react-icons/fa";
// md:px-10 md:py-12 lg:px-32 lg:py-12 xl:px-32 xl:py-12 2xl:px-16 2xl:py-12 3xl:px-10

const HeroMain = () => {
  return (
    <div className="relative bg-[#32A84926]/15 h-[70%] flex items-center justify-center py-8 px-4 sm:px-0  sm:py-[6vh]">
      {/* Inner Content Container - 83% width */}
      <div className="md:w-[75%] mx-auto flex items-center justify-center">
        <div className="flex flex-col sm:flex-row items-center w-full">
          {/* Text Section */}
          <div className="flex-1 flex-col justify-center  xl:space-y-[1.1vh] 3xl:space-y-[1.8vh]">
            <h1
              className="text-2xl font-bold text-gray-900  max-w-[80%]
            sm:text-lg 
            md:text-xl 
            lg:text-2xl 
            xl:text-[32px] xl:leading-tight
            2xl:text-[40px] 
            3xl:text-[45px] 3xl:leading-tight 
            4xl:text-6xl "
            >
              Commercial Pest Control Dubai - Fast, Safe, Compliant
            </h1>

            <h2
              className="text-xs font-bold text-black/70 max-w-[80%]
            sm:text-sm 
            md:text-base 
            lg:text-base 
            xl:text-[15px] xl:leading-[1.2] 
            2xl:text-lg 2xl:leading-[1.2]
            3xl:text-xl 3xl:leading-[1.2] 
            4xl:text-3xl 4xl:leading-[1.2] text-left"
            >
              Dubai Municipality Pest Control Customised Solutions to the
              Commercial Properties
            </h2>

            <p
              className="text-textcolorgray text-[#666666] text-justify max-w-[86%]
            text-[10px] 
            sm:text-sm 
            md:text-base 
            lg:text-xs 
            xl:text-[12.7px] 
            2xl:text-[15.8px] 2xl:leading-[1.2]
            3xl:text-lg 3xl:leading-[1.2]
            4xl:text-xl 4xl:leading-[1.3]"
            >
              Pest control would prove to be not only a vital asset to business
              in Dubai but, more significantly, an imperative issue in terms of
              functionality and legality. The pest control services offered by
              our company target industries whose major concern is regarding
              cleanliness, safety, and conformity. We offer Dubai
              Municipality-approved solutions for use at your restaurant,
              clinic, warehouse, or retail store. We assist you in achieving
              audit readiness and maintaining a pest-free environment through
              comprehensive on-site inspections and reporting, utilising our
              digital tools and preventive solutions. We can design a solution
              that not only makes sure your business is in full compliance with
              the most stringent rules concerning pest control in Dubai, but it
              also does it with rapid response and lasting protection.
            </p>

            <div className="flex flex-row space-x-2 mt-4 sm:mt-0">
              <button
                className="bg-darkgreen text-white text-xs  px-4 py-2 rounded-md shadow hover:bg-green-600 transition  
              sm:text-sm 
              md:text-base 
              lg:text-xs lg:px-4
              xl:text-xs xl:px-2 xl:mt-1 xl:py-1 xl:rounded-[4px]
              2xl:text-sm 2xl:px-4 2xl:py-2
              3xl:text-base 3xl:px-3 3xl:py-2 3xl:rounded-md
              4xl:text-lg 4xl:px-4 4xl:py-2 4xl:rounded-md"
              >
                Get a Free Inspection
              </button>
              <button
                className="bg-[#898989] text-white text-xs px-4 py-2  rounded-md shadow hover:bg-green-600 transition
              sm:text-sm 
              md:text-base 
              lg:text-xs lg:px-6
              xl:text-xs xl:px-2 xl:py-2 xl:mt-1 xl:rounded-[4px]
              2xl:text-sm 2xl:px-4 2xl:py-2
              3xl:text-base 3xl:px-3 3xl:py-2 3xl:rounded-md 
              4xl:text-lg 4xl:px-4 4xl:py-2 4xl:rounded-md"
              >
                View Services
              </button>
            </div>
          </div>

          {/* Spacing between text and image */}
          <div className="md-w-[2vh] flex-shrink-0"></div>

          {/* Image Section */}
          <div className="flex-1 items-center justify-center  mt-4 sm:mt-0">
            <img
              className="object-cover  rounded-lg"
              src={HeroImg}
              alt="Hero"
            />
          </div>
        </div>
      </div>

      {/* Mobile Call Button */}
      <div className="md:hidden fixed right-0 top-1/4 transform -translate-y-1/2 z-50 group">
        <div className="bg-red-600 text-white flex flex-col items-center justify-center w-6 h-32 rounded-l-md shadow-lg relative cursor-pointer">
          <span className="text-xs font-medium tracking-wider transform -rotate-90 whitespace-nowrap px-1">
            Get Free Inspection
          </span>

          {/* Hover Number Tooltip */}
          <div className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 bg-white text-red-600 px-3 py-1 rounded shadow-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            0800 8725
          </div>
        </div>
      </div>

      {/* PhoneCallBox */}
      <div className="fixed hidden md:block bottom-10 xl:bottom-80 3xl:bottom-[400px] right-0 z-50">
        <PhoneCallBox
          upperText="Call for Free Inspection"
          phoneNumber="0800 8725"
          bgColor="bg-[#E50000]"
          iconColor="text-[#E50000]"
          iconSize="xl:text-2xl 3xl:text-3xl 4xl:text-3xl"
          iconPadding="xl:p-3 4xl:p-4 3xl:p-3"
          upperTextColor="text-white"
          phoneTextColor="text-white font-bold"
          iconMarginLeft="xl:ml-2"
          containerHeight={{
            base: "h-[60px]",
            "2xl": "2xl:h-[70px]",
            "3xl": "3xl:h-[70px]",
            "4xl": "4xl:h-[85px]",
          }}
          containerWidth={{
            base: "w-[200px]",
            "2xl": "2xl:w-[250px]",
            "3xl": "3xl:w-[245px]",
            "4xl": "4xl:w-[350px]",
          }}
          upperTextSize={{
            base: "text-[13px]",
            "2xl": "2xl:text-[16px]",
            "3xl": "3xl:text-[16px]",
            "4xl": "4xl:text-2xl",
          }}
          phoneTextSize={{
            base: "text-2xl",
            "2xl": "2xl:text-3xl",
            "3xl": "3xl:text-3xl",
            "4xl": "4xl:text-3xl",
          }}
        />
      </div>
    </div>
  );
};

export default HeroMain;
