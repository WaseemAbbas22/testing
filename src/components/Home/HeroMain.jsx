import PhoneCallBox from "./PhoneCallBox";
import HeroImg from "/src/assets/Home/HeroImg.png"; // Adjust the path as necessary

const HeroMain = () => {
  return (
    <div className="relative bg-green-100">

      {/* Main Container */}
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-12 space-y-8 md:space-y-0">

        {/* Left Side Div */}
        <div className="w-full md:w-1/2 flex flex-col px-10 md:items-start space-y-4">

          {/* Heading Div */}
          <div className="w-full text-center md:text-left space-y-2">
            <h1 className="text-3xl md:text-[35px] font-bold text-gray-900">
              Safe & Fast Pest Control             </h1>
            <h1 className="text-3xl md:text-[35px] font-bold text-gray-900">
               Services in the UAE
            </h1>
          </div>

          {/* Paragraph Div */}
          <div className="w-full text-center md:text-left">
            <p className="text-[12px] text-gray-600 leading-relaxed justify-content">
              Protect your home or business with eco-friendly pest control solutions tailored to <br /> yourneeds. Trusted by thousands across Dubai and beyond — we eliminate pests <br />fast and keep them from coming back.
            </p>
          </div>

          {/* Buttons Div */}
          <div className=" flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-1 sm:space-y-0 justify-center md:justify-start">
            <button className="bg-[#32A849] text-white text-[13px] font-semibold px-4 py-2 rounded-md shadow hover:bg-green-600 transition">
              Get a Free Inspection
            </button>
            <button className="bg-[#898989] text-white text-[13px] font-semibold px-4 py-2 rounded-md shadow hover:bg-green-600 transition">
              View Services
            </button>
          </div>

        </div>

        {/* Right Side Div */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-full">
            <img
              className="w-full h-full object-cover"
              src={HeroImg}
              alt="Hero"
            />
          </div>
        </div>

      </div>

      {/* PhoneCallBox Div */}
      <div className="absolute bottom-4 right-2 ">
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
