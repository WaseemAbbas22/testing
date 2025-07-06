import PhoneCallBox from "./PhoneCallBox";
import HeroImg from "/src/assets/Home/HeroImg.png"; // Adjust the path as necessary


const HeroMain = () => {
  return (

    <div className="relative">
      <div className="relative w-full min-h-8 bg-green-50 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-12">

        {/* Left Side Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Safe & Fast Pest Control Services in the UAE
          </h1>

          <p className="text-sm text-gray-700 leading-relaxed">
            Protect your home or business with eco-friendly pest control solutions tailored to your needs. Trusted by thousands across Dubai and beyond — we eliminate pests fast and keep them from coming back.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 justify-center md:justify-start">
            <button className="bg-gray-700 text-white text-sm font-semibold px-5 py-2.5 rounded shadow hover:bg-green-600 transition">
              Get a free inspection
            </button>
            <button className="bg-gray-700 text-white text-sm font-semibold px-5 py-2.5 rounded shadow hover:bg-green-600 transition">
              View Services
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        {/* Right Side Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            className="w-full h-full object-cover" // Fill width & height, remove rounded/shadow
            src={HeroImg}
            alt="Hero"
          />
        </div>


        {/* Bottom Right Call Box */}
        {/* ✅ PhoneCallBox Component */}
        <div className="absolute bottom-0 right-4">
          <PhoneCallBox
            title="Call for free Inspection"
            phone="0800-25456158"
            containerWidth="200px"
            containerHeight="56px"
          />
        </div>
      </div>
    </div>

  );
};

export default HeroMain;
