import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import googleLogo from "@/assets/Home/Google.webp";
import facebookLogo from "@/assets/Home/facebook.webp";

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
          className="text-[#F6A000] ml-1 xl:ml-2 2xl:ml-4 3xl:ml-6 justify-between text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl 3xl:text-[40px] 4xl:text-6xl"
        >
          <FaStar />
        </span>
      );
    }
    if (halfStar) {
      stars.push(
        <span
          key="half"
          className="text-[#F6A000] ml-1 xl:ml-2 2xl:ml-4 3xl:ml-6 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl 3xl:text-[40px] 4xl:text-6xl"
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
      <div className="flex flex-col w-[90%] items-center justify-center 
      md:flex-row  md:w-[70%]  
      lg:gap-8  
      h-[50vh] gap-4
      md:h-[35vh]">
        {/* Facebook Rating Box */}
        <div className="flex xl:w-[100%] 3xl:w-[99%] h-[20vh] items-center bg-[#32A84926]/15 border-2  border-[#32A84926]/50 rounded-md 2xl:rounded-xl px-4 sm:px-6 2xl:py-16 w-full shadow">
          {/* Logo */}
          <div className="flex-shrink-0 md:mr-2">
            <img
              src={googleLogo}
              alt="Facebook Logo"
              className="h-20 sm:h-10 md:h-20 xl:h-20 2xl:h-24 3xl:h-[110px] 4xl:h-44 2xl:ml-4 3xl:ml-0"
            />
          </div>

          {/* Divider */}
          <div className="w-px bg-[#9D9D9D] h-16 lg:h-20 2xl:h-28 3xl:h-32 mx-3"></div>

          {/* Content */}
          <div className="flex-1 md:ml-4 4xl:ml-10 space-y-2 sm:space-y-0 2xl:space-y-2 3xl:space-y-2">
            <p className="text-xs xl:text-base 2xl:text-xl 3xl:text-xl text-black/60 ">
              Google Rating
            </p>
            <div className="flex items-center">
              <span className="text-4xl text-black/80 md:text-5xl xl:text-[7vh] 2xl:text-[6vh] 3xl:text-[7vh] font-cabin font-bold mr-2">
                4.9
              </span>
              <div className="flex">{renderStars(4.9)}</div>
            </div>
            <a
              href="#"
              className="text-xs xl:text-base 2xl:text-xl 3xl:text-xl text-blue-600 hover:text-green-800"
            >
              See all our Reviews
            </a>
          </div>
        </div>


        {/* Facebook Rating Box */}
        <div className="flex xl:w-[100%] 3xl:w-[99%] h-[20vh] items-center bg-[#32A84926]/15 border-2 border-[#32A84926]/50 rounded-md 2xl:rounded-xl px-4 sm:px-6 2xl:py-16 w-full shadow">
          {/* Logo */}
          <div className="flex-shrink-0 md:mr-2">
            <img
              src={facebookLogo}
              alt="Facebook Logo"
              className="h-14 sm:h-10 md:h-20 xl:h-14 2xl:h-[80px] 3xl:h-[90px] 4xl:h-32 2xl:ml-0 3xl:ml-0"
            />
          </div>

          {/* Divider */}
          <div className="w-px bg-[#9D9D9D] h-16 lg:h-20 2xl:h-28 3xl:h-32 mx-4"></div>

          {/* Content */}
          <div className="flex-1 md:ml-4 4xl:ml-10 space-y-2 sm:space-y-0 2xl:space-y-2 3xl:space-y-2">
            <p className="text-xs xl:text-base 2xl:text-xl 3xl:text-xl text-black/60 ">
              Facebook Rating
            </p>
            <div className="flex items-center">
              <span className="text-4xl text-black/80 md:text-5xl xl:text-[7vh] 2xl:text-[6vh] 3xl:text-[7vh] font-cabin font-bold mr-2">
                4.9
              </span>
              <div className="flex">{renderStars(4.9)}</div>
            </div>
            <a
              href="#"
              className="text-xs xl:text-base 2xl:text-xl 3xl:text-xl text-blue-600 hover:text-green-800"
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
