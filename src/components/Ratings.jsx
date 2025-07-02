import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import googleLogo from "/src/assets/Google.png"; // Adjust your path
import facebookLogo from "/src/assets/facebook.png"; // Adjust your path

const Ratings = () => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400 text-xl" />);
    }
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400 text-xl" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400 text-xl" />);
    }

    return stars;
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-12 bg-gray-50">
      {/* Google Rating Box */}
      <div className="flex items-center bg-green-100 border border-green-200 rounded shadow-md px-6 py-4 w-96">
        {/* Logo Left */}
        <div className="flex-shrink-0">
          <img src={googleLogo} alt="Google Logo" className="h-12" />
        </div>

        {/* Divider */}
        <div className="w-px bg-green-300 h-20 mx-4"></div>

        {/* Right Content */}
        <div className="flex-1 pl-4">
          <p className="text-sm text-green-700 mb-1">Google Rating</p>
          <div className="flex items-center mb-2">
            <div className="text-3xl font-bold text-green-800 mr-2">4.7</div>
            <div className="flex">{renderStars(4.7)}</div>
          </div>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-green-700 underline hover:text-green-900"
          >
            See all our reviews
          </a>
        </div>
      </div>

      {/* Facebook Rating Box */}
      <div className="flex items-center bg-green-100 border border-green-200 rounded shadow-md px-6 py-4 w-96">
        {/* Logo Left */}
        <div className="flex-shrink-0">
          <img src={facebookLogo} alt="Facebook Logo" className="h-10" />
        </div>

        {/* Divider */}
        <div className="w-px bg-green-300 h-20 mx-4"></div>

        {/* Right Content */}
        <div className="flex-1 pl-4">
          <p className="text-sm text-green-700 mb-1">Facebook Rating</p>
          <div className="flex items-center mb-2">
            <div className="text-3xl font-bold text-green-800 mr-2">4.8</div>
            <div className="flex">{renderStars(4.8)}</div>
          </div>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-green-700 underline hover:text-green-900"
          >
            See all our reviews
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
