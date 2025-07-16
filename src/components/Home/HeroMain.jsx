import { useState, useEffect } from "react";
import PhoneCallBox from "./PhoneCallBox";
import HeroImg from "/src/assets/Home/HeroImg.png";

const HeroMain = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 400;
      setIsFixed(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-green-100">
      <div
        className="
          max-w-[1600px] mx-auto flex flex-col items-center justify-between px-4 py-8 space-y-6
          md:flex-row md:space-y-0 md:px-10
          lg:px-20
          xl:px-32
        "
      >
        {/* Left Side */}
        <div
          className="
            w-full flex flex-col space-y-3 text-left
            md:w-1/2 md:items-start md:text-left lg:ml-8
          "
        >
          <div className="w-full sm:w-[400px] space-y-1 ">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900">
              Trusted Commercial Pest Control Dubai Solution - Fast, Safe, Compliant
            </h1>
          </div>

          <div className="w-full sm:w-[450px]">
            <h2 className="text-[11px] sm:text-[10px] md:text-xs lg:text-sm font-bold text-gray leading-relaxed mb-2">
              Dubai municipality's pest control solution tailored control for commercial properties
            </h2>
            <p className="text-[11px] sm:text-[12px] md:text-sm lg:text-xs text-gray leading-relaxed">
              In Dubai, Pest Control is not only essential for business but also a top functional and legal concern. Our company’s Pest Control Dubai services are designed for industries that value cleanliness, safety and regulations. We provide solutions that have been authorized by the pest control authority of the Dubai municipality, regardless of whether you are the owner of a restaurant, clinic, warehouse, or retail space. With thorough site inspections, digital reporting and preventive actions, we assist you in keeping our environment pest-free and audit-ready. With our customized approach, you can ensure that your company complies with Dubai's strongest pest control rules, react quickly, and be protected for a very long time.
            </p>
          </div>

          <div
            className="
              flex flex-col-2 justify-left space-y-1
              sm:flex-row sm:items-center space-x-2 md:justify-start
            "
          >
            <button className="bg-[#32A849] text-white text-[14px] sm:text-[12px] font-semibold px-6 sm:px-4 rounded-md shadow hover:bg-green-600 transition">
              Get a Free Inspection
            </button>
            <button className="bg-gray text-white text-[14px] sm:text-[12px] font-semibold px-6 sm:px-4 py-2 rounded-md shadow hover:bg-green-600 transition">
              View More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-[80%] sm:w-[70%] md:w-full">
            <img
              className="w-full h-auto object-contain"
              src={HeroImg}
              alt="Hero"
            />
          </div>
        </div>
      </div>

      {/* PhoneCallBox */}
      <div className={`${isFixed ? "fixed top-2 right-2 z-50" : "absolute bottom-0 right-2"}`}>
        <PhoneCallBox
          title="Call For Free Inspection"
          phone="0800-25456158"
          containerWidth="180px"
          containerHeight="46px"
        />
      </div>
    </div>
  );
};

export default HeroMain;
