import { useState, useEffect } from "react";
import PhoneCallBox from "./PhoneCallBox";
import HeroImg from "/src/assets/Home/HeroImg.png"; // Adjust the path as necessary

const HeroMain = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Threshold for when PhoneCallBox should become fixed
      const threshold = 400;

      if (scrollY > threshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-green-100">

      {/* Main Container */}
      <div
        className="
          max-w-[1600px] mx-auto flex flex-col items-center justify-between px-6 py-12 space-y-8
          md:flex-row md:px-16 md:space-y-0
          lg:px-24
          xl:px-32
        "
        // Mobile View: flex-col, center aligned, px-6
        // Tab View: md:flex-row, px-16, no vertical spacing
        // Laptop View: lg:px-24
        // Desktop View: xl:px-32
        // Big Screen View: max-w-[1600px] remains
      >

        {/* Left Side Div */}
        <div
          className="
            w-full flex flex-col px-10 space-y-4 text-center
            md:w-1/2 md:items-start md:text-left
          "
          // Mobile View: w-full, text-center
          // Tab View: md:w-1/2, items-start, text-left
          // Laptop View: same as Tab
          // Desktop View: same as Tab
          // Big Screen View: same as Tab
        >
          {/* Heading */}
          <div className="w-full space-y-2">
            <h1 className="text-3xl md:text-[35px] font-bold text-gray-900">
              Safe & Fast Pest Control
            </h1>
            <h1 className="text-3xl md:text-[35px] font-bold text-gray-900">
              Services in the UAE
            </h1>
          </div>

          {/* Paragraph */}
          <div className="w-full">
            <p className="text-[12px] text-gray-600 leading-relaxed">
              Protect your home or business with eco-friendly pest control solutions tailored to <br /> your needs. Trusted by thousands across Dubai and beyond — we eliminate pests <br /> fast and keep them from coming back.
            </p>
          </div>

          {/* Buttons */}
          <div
            className="
              flex flex-col justify-center space-y-1
              sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0
              md:justify-start
            "
            // Mobile View: flex-col, centered
            // Tab View: sm:flex-row, items-center, horizontal spacing
            // Laptop View: md:justify-start
            // Desktop View: same as Laptop
            // Big Screen View: same as Laptop
          >
            <button className="bg-[#32A849] text-white text-[13px] font-semibold px-4 py-2 rounded-md shadow hover:bg-green-600 transition">
              Get a Free Inspection
            </button>
            <button className="bg-[#898989] text-white text-[13px] font-semibold px-4 py-2 rounded-md shadow hover:bg-green-600 transition">
              View Services
            </button>
          </div>
        </div>

        {/* Right Side Div */}
        <div
          className="
            w-full flex justify-center items-center
            md:w-1/2
          "
          // Mobile View: w-full, centered
          // Tab View: md:w-1/2
          // Laptop View: same as Tab
          // Desktop View: same as Tab
          // Big Screen View: same as Tab
        >
          <div className="w-full">
            <img
              className="w-full h-full object-cover"
              src={HeroImg}
              alt="Hero"
            />
          </div>
        </div>

      </div>

      {/* PhoneCallBox */}
      <div
        className={`
          ${isFixed ? "fixed top-4 right-2 z-50" : "absolute bottom-4 right-2"}
        `}
        // Mobile View: position changes based on scroll
        // Tab View: same
        // Laptop View: same
        // Desktop View: same
        // Big Screen View: same
      >
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
