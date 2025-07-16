import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import googleLogo from "/src/assets/Home/Google.png";
import facebookLogo from "/src/assets/Home/facebook.png";

const Ratings = () => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar
          key={`full-${i}`}
          className="text-yellow-400 ml-0 md:ml-2 space-x-2 md:space-x-4"
          size={30} // Adjust star size to match design
        />
      );
    }
    if (halfStar) {
      stars.push(
        <FaStarHalfAlt
          key="half"
          className="text-yellow-400 ml-0 md:ml-2 space-x-2 md:space-x-4"
          size={30}
        />
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaRegStar
          key={`empty-${i}`}
          className="text-yellow-400 ml-0 md:ml-2 space-x-2 md:space-x-4"
          size={30}
        />
      );
    }

    return stars;
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-10 py-6 md:py-8 bg-gray-50 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
      {/* Google Rating Box */}
      <div className="flex items-center bg-green-50 border border-green-300 rounded px-2.5 sm:px-6 py-4 w-full max-w-md shadow">
        {/* Logo */}
        <div className="flex-shrink-0 mr-0 md:mr-2">
          <img
            src={googleLogo}
            alt="Google Logo"
            className="h-20 sm:h-10 md:h-20"
          />
        </div>

        {/* Divider */}
        <div className="w-px bg-gray h-20 mx-2"></div>

        {/* Content */}
        <div className="flex-1 ml-4">
          <p className="text-xs text-gray-700 mb-1">Google Rating</p>
          <div className="flex items-center mb-1">
            <span className=" text-5xl md:text-5xl font-cabin font-bold mr-2">4.9</span>
            <div className="flex">{renderStars(4.9)}</div>
          </div>
          <a
            href="#"
            className="text-xs text-blue-600 hover:text-green-800"
          >
            See all our Reviews
          </a>
        </div>
      </div>

      {/* Facebook Rating Box */}
      <div className="flex items-center bg-green-50 border border-green-300 rounded px-0 sm:px-6 py-4 w-full max-w-md shadow">
        {/* Logo */}
        <div className="flex-shrink-0 mr-2">
          <img
            src={facebookLogo}
            alt="Facebook Logo"
            className="h-16 sm:h-10 md:h-16"
          />
        </div>

        {/* Divider */}
        <div className="w-px bg-gray h-20 mx-2"></div>

        {/* Content */}
        <div className="flex-1 ml-4">
          <p className="text-xs text-gray-700 mb-1">Facebook Rating</p>
          <div className="flex items-center mb-1">
            <span className="text-5xl font-bold mr-2">4.9</span>
            <div className="flex">{renderStars(4.9)}</div>
          </div>
          <a
            href="#"
            className="text-xs text-blue-600 hover:text-green-800"
          >
            See all our Reviews
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
