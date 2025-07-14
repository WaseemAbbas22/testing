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
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400 text-sm sm:text-base md:text-xl" />);
    }
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400 text-sm sm:text-base md:text-xl" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400 text-sm sm:text-base md:text-xl" />);
    }

    return stars;
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-10 py-6 md:py-8 bg-gray-50 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
      
      {/* Google Rating Box */}
      <div className="flex items-center bg-green-100 border border-[#32A84980] rounded shadow-md px-4 sm:px-6 py-2 rounded-lg  w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={googleLogo} alt="Google Logo" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16" />
        </div>

        {/* Divider */}
        <div className="w-px bg-gray-400 h-16 sm:h-20 md:h-24 lg:h-28 mx-4"></div>

        {/* Content */}
        <div className="flex-1">
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 mb-1">Google Rating</p>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl flex flex-col sm:flex-row sm:items-center mb-2">
            <div className=" font-cabin font-bold mr-2">4.8</div>
            <div className="flex">{renderStars(4.7)}</div>
          </div>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] sm:text-xs md:text-sm text-blue-700 hover:text-green-900"
          >
            See all our reviews
          </a>
        </div>
      </div>

      {/* Facebook Rating Box */}
      <div className="flex items-center bg-green-100 border border-[#32A84980] rounded shadow-md px-4 sm:px-6 py-4 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={facebookLogo} alt="Facebook Logo" className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16" />
        </div>

        {/* Divider */}
        <div className="w-px bg-gray-400 h-16 sm:h-20 md:h-24 lg:h-28 mx-4"></div>

        {/* Content */}
        <div className="flex-1">
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 mb-1">Facebook Rating</p>
          <div className="flex flex-col sm:flex-row sm:items-center mb-2">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-cabin font-bold mr-2">4.7</div>
            <div className="flex">{renderStars(4.8)}</div>
          </div>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] sm:text-xs md:text-sm text-blue-700 hover:text-green-900"
          >
            See all our reviews
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
