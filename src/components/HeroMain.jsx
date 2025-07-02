import { FaPhoneAlt } from "react-icons/fa";
import HeroImg from "/src/assets/HeroImg.png"; // Adjust the path as necessary

const HeroMain = () => {
  return (
    <div className="relative w-full min-h-screen bg-green-50 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-12">

      {/* Left Side Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          We make your home beautiful
        </h1>

        <p className="text-sm text-gray-700 leading-relaxed">
          Unlock your home potential with our professional inspection services.
          <br />
          We simplify your challenges to ensure maximum results.
          <br />
          Your trusted partner in quality and care.
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
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-md"
          src={HeroImg}
          alt="Hero"
        />
      </div>

      {/* Bottom Right Call Box */}
      <div className="absolute bottom-6 right-6 flex rounded overflow-hidden shadow-lg">
        <div className="bg-white flex items-center justify-center px-3">
          <FaPhoneAlt className="text-green-600 text-lg" />
        </div>
        <div className="bg-green-600 flex flex-col justify-center px-4 py-2">
          <span className="text-xs text-white font-semibold leading-tight">
            Call for free inspection
          </span>
          <span className="text-xs text-white">+971 52 152 8725</span>
        </div>
      </div>

    </div>
  );
};

export default HeroMain;
