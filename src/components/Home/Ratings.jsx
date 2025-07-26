import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import googleLogo from "/src/assets/Home/Google.png";
import facebookLogo from "/src/assets/Home/facebook.png";

//import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Ratings = ({ rating }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span
          key={`full-${i}`}
          className="text-[#F6A000] ml-1 xl:ml-2 2xl:ml-4 justify-between text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl 3xl:text-5xl 4xl:text-6xl"
        >
          <FaStar />
        </span>
      );
    }
    if (halfStar) {
      stars.push(
        <span
          key="half"
          className="text-[#F6A000] ml-1 xl:ml-2 2xl:ml-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl 3xl:text-5xl 4xl:text-6xl"
        >
          <FaStarHalfAlt />
        </span>
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span
          key={`empty-${i}`}
          className="text-yellow-400 ml-1 text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl"
        >
          <FaRegStar />
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="flex justify-center bg-gray-50">
      <div className="flex flex-col w-[95%] md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-10 py-6 md:py-8 px-4 sm:px-6 md:px-10 lg:px-8 xl:px-36 xl:w-[95%] 3xl:w-[90%] 4xl:w-[85%] h-[30vh] md:h-[40vh]">
        {/* Google Rating Box */}
        <div className="flex h-[20vh] items-center bg-[#32A84926]/15 border-2 border-[#32A84926]/50 rounded-lg xl:rounded-2xl px-4 sm:px-6 lg:py-4 2xl:py-16 w-full  shadow">
          {/* Logo */}
          <div className="flex-shrink-0 mr-0 md:mr-2">
            <img
              src={googleLogo}
              alt="Google Logo"
              className="h-20 sm:h-10 md:h-20 xl:h-24 3xl:h-32 2xl:h-40 4xl:h-44 4xl:ml-2 2xl:ml-4 3xl:ml-0"
            />
          </div>

          {/* Divider */}
          <div className="w-px bg-gray h-10 lg:h-20 2xl:h-40 mx-4"></div>

          {/* Content */}
          <div className="flex-1 ml-0 md:ml-4 4xl:ml-10 2xl:space-y-4">
            <p className="text-xs xl:text-base 2xl:text-2xl 4xl:text-3xl text-black/60 ">
              Google Rating
            </p>
            <div className="flex items-center">
              <span className="text-4xl md:text-5xl xl:text-[7vh] 2xl:text-[7vh] 4xl:text-[8vh] font-cabin font-bold mr-2">
                4.9
              </span>
              <div className="flex">{renderStars(4.9)}</div>
            </div>
            <a
              href="#"
              className="text-xs xl:text-base 2xl:text-2xl text-blue-600 hover:text-green-800"
            >
              See all our Reviews
            </a>
          </div>
        </div>

        {/* Facebook Rating Box */}
        <div className="flex xl:w-[100%] 3xl:w-[99%] h-[20vh] items-center bg-[#32A84926]/15 border-2 border-[#32A84926]/50 rounded-lg xl:rounded-2xl px-4 sm:px-6 2xl:py-16 w-full shadow">
          {/* Logo */}
          <div className="flex-shrink-0 md:mr-2">
            <img
              src={facebookLogo}
              alt="Facebook Logo"
              className="h-14 sm:h-10 md:h-20 xl:h-20 2xl:h-40 3xl:h-32 4xl:h-44 2xl:ml-4 3xl:ml-0"
            />
          </div>

          {/* Divider */}
          <div className="w-px bg-gray h-10 lg:h-20 2xl:h-40 mx-5"></div>

          {/* Content */}
          <div className="flex-1 md:ml-4 4xl:ml-10 2xl:space-y-4">
            <p className="text-xs xl:text-base 2xl:text-2xl text-black/60 ">
              Facebook Rating
            </p>
            <div className="flex items-center">
              <span className="text-4xl md:text-5xl xl:text-[7vh] 2xl:text-[7vh] font-cabin font-bold mr-2">
                4.9
              </span>
              <div className="flex">{renderStars(4.9)}</div>
            </div>
            <a
              href="#"
              className="text-xs xl:text-base 2xl:text-2xl text-blue-600 hover:text-green-800"
            >
              See all our Reviews
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
