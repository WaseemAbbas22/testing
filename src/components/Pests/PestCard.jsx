// src/components/Pest/PestCard.jsx

import PropTypes from "prop-types";
import { pests } from "../../data/pestsData";
import { Link } from "react-router-dom";

const PestCard = ({ pestName }) => {
  const pest = pests.find((p) => p.name === pestName.toUpperCase());

  if (!pest) {
    return <div>Pest not found.</div>;
  }

  return (
    <div
      className="
        relative 2xl:w-[35vh] 3xl:w-[30vh] 4xl:w-[34vh]
        rounded-lg shadow-lg group
      "
    >
      <img
        src={pest.image}
        alt={pest.name}
        className="w-full h-full object-cover rounded-lg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl transition duration-300 group-hover:bg-opacity-60 flex items-end">
        <div className="pl-6 sm:px-3 md:px-4 lg:px-5 mt-6 sm:mt-8 md:mt-10 w-full">
          {/* Moving title & subtitle */}
          <div className="transition-all duration-500 ease-in-out transform group-hover:-translate-y-28 2xl:group-hover:-translate-y-56 md:group-hover:-translate-y-28 text-left">
            <div className="mb-4 sm:mb-3 md:mb-4">
              <h2 className="text-white text-2xl sm:text-xs md:text-sm lg:text-base xl:text-xl font-bold lg:text-2xl 2xl:ml-6 2xl:text-4xl 3xl:text-3xl 4xl:text-4xl">
                {pest.name}
              </h2>
              <p className="text-white text-lg 2xl:text-xl 3xl:text-base 4xl:text-2xl lg:text-lg 2xl:ml-6 text-justify">
                {pest.desc}
              </p>
            </div>
          </div>

          {/* Hidden Text & Button */}
          <div
            className="absolute mb-4 transition-all duration-500 ease-in-out transform group-hover:-translate-y-32 
          sm:mb-6 
          md:mb-8  2xl:group-hover:-translate-y-56 md:group-hover:-translate-y-28 text-left"
          >
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 pr-6 ">
              <p className="text-white text-sm text-justify md:text-xs lg:text-xs xl:text-xs 2xl:mb-8 2xl:text-xl 3xl:text-base 4xl:text-xl 2xl:ml-6">
                {pest.more}
              </p>
              <Link to={pest.link}>
                <button
                  className="mt-2
                    bg-green-600 text-white 
                    text-[12px] sm:text-[8px] md:text-xs
                    px-2 sm:px-2 md:px-3 
                    py-0.5 sm:py-1 md:py-1.5
                    rounded mt-1 sm:mt-1.5 md:mt-2 
                    hover:bg-green-700 transition 2xl:ml-6 2xl:text-lg
                  "
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PestCard.propTypes = {
  pestName: PropTypes.string.isRequired,
};

export default PestCard;
