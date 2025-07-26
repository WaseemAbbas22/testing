import PhoneCallBox from "./PhoneCallBox";
import HeroImg from "/src/assets/Home/HeroImg.png";
import { FaPhoneAlt } from "react-icons/fa";

const HeroMain = () => {
  return (
    <div className="relative bg-[#32A84926]/15  h-[70%] flex flex-col items-center justify-center py-8 px-4 md:px-10 md:py-12 lg:px-32 lg:py-12 xl:px-32 xl:py-12 2xl:px-16 2xl:py-12 3xl:px-10">
      {/* Inner Content Container */}
      <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[92%] 2xl:w-[81%] flex flex-col md:flex-row items-center justify-between md:space-x-8 lg:space-x-8 xl:space-x-2 2xl:space-x-0 space-y-6 md:space-y-0">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col space-y-1 md:space-y-4 lg:space-y-2 xl:space-y-2 2xl:space-y-6 text-left">
          <h1
            className="
          
            text-2xl
            sm:text-lg 
            md:text-xl 
            lg:text-2xl 
            xl:text-4xl 
            2xl:text-4xl
            4xl:text-6xl 
            font-bold text-gray-900 leading-tight
          "
          >
            Trusted Commercial Pest <br /> Control Dubai Solution -<br /> Fast,
            Safe, Compliant
          </h1>

          <h2
            className="
            text-xs
            sm:text-sm
            md:text-base
            lg:text-base
            xl:text-base
            2xl:text-2xl
            font-bold text-black/70
          "
          >
            Dubai municipality's pest control solution tailored <br /> control
            for commercial properties
          </h2>

          <p
            className="
          text-textcolorgray
      
            text-[10px]
            sm:text-sm
            md:text-base
            lg:text-xs g:w-[490px]
            xl:text-xs xl:w-[460px]
            2xl:text-xl 2xl:w-[800px]
            3xl:w-[700px]
            text-[#666666] text-justify
          "
          >
            In Dubai, Pest Control is not only essential for business but also a
            top functional and legal concern. Our company’s Pest Control Dubai
            services are designed for industries that value cleanliness, safety,
            and regulations. We provide solutions that have been authorized by
            the pest control authority of the Dubai municipality, regardless of
            whether you are the owner of a restaurant, clinic, warehouse, or
            retail space. With thorough site inspections, digital reporting, and
            preventive actions, we assist you in keeping your environment
            pest-free and audit-ready. With our customized approach, your
            company will comply with Dubai's strongest pest control rules, react
            quickly, and be protected for a very long time.
          </p>

          <div className="flex flex-row space-x-2">
            <button
              className="
              bg-darkgreen text-white
              text-xs
              sm:text-sm
              md:text-base
              lg:text-xs
              xl:text-xs
              2xl:text-lg
              font-medium px-4 py-2 lg:px-4 xl:px-4 xl:py-1 2xl:px-4 2xl:py-3 rounded-lg shadow hover:bg-green-600 transition
            "
            >
              Get a Free Inspection
            </button>
            <button
              className="
              bg-[#898989] text-white
              text-xs
              sm:text-sm
              md:text-base
              lg:text-xs
              xl:text-xs
              2xl:text-lg
              font-medium px-4 py-2 lg:px-6 xl:px-6 xl:py-2 2xl:px-6 2xl:py-4 rounded-md shadow hover:bg-green-600 transition
            "
            >
              View Services
            </button>
          </div>
        </div>

        <div className="md:hidden fixed right-0 top-1/4 transform -translate-y-1/2 z-50">
          <div className="bg-red-600 text-white flex flex-col items-center justify-center w-6 h-32 rounded-l-md shadow-lg">
            <span className="text-xs font-medium tracking-wider transform -rotate-90 whitespace-nowrap px-1">
              Get Free Inspection
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 xl:w-3/4 4xl:w-1/2 flex justify-center items-center">
          <img
            className="w-full h-full object-contain rounded-lg"
            src={HeroImg}
            alt="Hero"
          />
        </div>
      </div>

      {/* PhoneCallBox */}
      <div className="fixed hidden md:block bottom-10 right-0 z-50">
        <PhoneCallBox
          upperText="Call for Free Inspection"
          phoneNumber="800 8725"
          bgColor="bg-[#E50000]"
          iconColor="text-[#E50000]"
          iconSize="xl:text-2xl 3xl:text-3xl 4xl:text-3xl" // e.g. text-xl, text-2xl, text-3xl
          iconPadding="xl:p-3 4xl:p-4 3xl:p-4" // e.g. p-2, p-3, p-4, p-6
          upperTextColor="text-white"
          phoneTextColor="text-white"
          containerHeight={{
            base: "h-[60px]",
            "2xl": "2xl:h-[70px]",
            "3xl": "3xl:h-[80px]",
            "4xl": "4xl:h-[85px]",
          }}
          containerWidth={{
            base: "w-[250px]",
            "2xl": "2xl:w-[350px]",
            "3xl": "3xl:w-[300px]",
            "4xl": "4xl:w-[350px]",
          }}
          upperTextSize={{
            base: "text-md",
            "2xl": "2xl:text-sm",
            "3xl": "3xl:text-lg",
            "4xl": "4xl:text-2xl",
          }}
          phoneTextSize={{
            base: "text-xl",
            "2xl": "2xl:text-base",
            "3xl": "3xl:text-2xl",
            "4xl": "4xl:text-3xl",
          }}
        />
      </div>
    </div>
  );
};

export default HeroMain;
