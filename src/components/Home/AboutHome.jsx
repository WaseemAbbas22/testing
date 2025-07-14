import Circle1 from "/src/assets/Home/cir1.png";
import Circle2 from "/src/assets/Home/cir2.png";
import man from "/src/assets/Home/man.png";

const AboutHome = () => {
  return (
    <div className="bg-[#F0F0F0] w-full flex items-center justify-center py-10 md:py-0 md:h-[450px]">
      {/* Main Flex Container */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] px-4 md:px-0">
        {/* Left Side Div */}
        <div className="relative flex justify-center md:ml-16 items-center w-full md:w-[450px] h-[400px] md:ml-10 md:h-[580px] mb-6 md:mb-0">
          {/* Green Container */}
          <div className="relative rounded-2xl flex justify-center items-end shadow-lg bg-[#32A849] w-[250px] md:w-[320px] h-[320px] md:h-[380px]">
            {/* Man Image */}
            <img
              src={man}
              alt="About Us"
              className="z-10 w-[180px] md:w-[250px] object-contain mb-0"
            />

            {/* Bottom Left Circle */}
            <img
              src={Circle2}
              alt="Bottom Left"
              className="absolute rounded-full border-2 border-white shadow-md w-[70px] md:w-[100px] h-[70px] md:h-[100px] bottom-0 left-[-35px] md:left-[-50px] object-cover"
            />

            {/* Top Right Circle */}
            <img
              src={Circle1}
              alt="Top Right"
              className="absolute rounded-full border-2 border-white shadow-md w-[70px] md:w-[100px] h-[70px] md:h-[100px] top-0 right-[-35px] md:right-[-50px] object-cover"
            />
          </div>
        </div>

        {/* Right Side Div */}
        <div className="w-full md:w-[480px] md:mr-36 px-4 md:px-0">
          {/* Small Text */}
          <p className="text-[#32A849] text-[14px] font-semibold mb-2 text-center md:text-left">
            About Us
          </p>

          {/* Heading */}
          <h2 className="text-[28px] md:text-[36px] font-bold text-gray-800 mb-1 leading-tight text-center md:text-left">
            Experts in Safe & Reliable
          </h2>
          <h2 className="text-[28px] md:text-[36px] font-bold text-gray-800 mb-4 leading-tight text-center md:text-left">
            Pest Control
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-600 text-[12px] mb-3 text-center md:text-left">
            At Accurate Pest Control, we’ve been protecting homes and businesses
            across the UAE for over a decade. Our licensed experts use
            industry-leading, eco-friendly treatments to eliminate pests safely
            and efficiently — from cockroaches and termites to rodents and bed
            bugs.
          </p>
          <p className="text-gray-600 text-[12px] mb-5 text-center md:text-left">
            We combine local expertise with international standards to deliver
            fast, reliable, and discreet pest control services. Whether you need
            one-time treatment or ongoing protection, our team is here to give
            you peace of mind.
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#32A849] text-white text-[11px] font-medium px-5 py-2.5 rounded shadow hover:bg-green-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
