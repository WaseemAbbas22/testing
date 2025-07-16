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
        relative 
        w-[250px] sm:w-[20vw] md:w-[25vw] lg:w-[180px] xl:w-[250px] 2xl:w-[400px]
        h-[250px] sm:h-[20vw] md:h-[25vw] lg:h-[180px] xl:h-[250px] 2xl:h-[400px]
        rounded-lg shadow-lg group
      "
    >
      <img
        src={pest.image}
        alt={pest.name}
        className="w-full h-full object-cover rounded-lg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg transition duration-300 group-hover:bg-opacity-60 flex items-end">
        <div className="px-2 sm:px-3 md:px-4 lg:px-5 mt-6 sm:mt-8 md:mt-10 w-full">
          
          {/* Moving title & subtitle */}
          <div className="transition-all duration-500 ease-in-out transform group-hover:-translate-y-20 group-hover:-translate-y-28 md:group-hover:-translate-y-28 text-left">
            <div className="mb-2 sm:mb-3 md:mb-4">
              <h2 className="text-white text-base sm:text-xs md:text-sm lg:text-base xl:text-xl font-bold">{pest.name}</h2>
              <p className="text-white text-base sm:text-xs md:text-sm lg:text-base">{pest.desc}</p>
            </div>
          </div>

          {/* Hidden Text & Button */}
          <div className="absolute mb-4 sm:mb-6 md:mb-8 transition-all duration-500 ease-in-out transform group-hover:-translate-y-20 group-hover:-translate-y-28 md:group-hover:-translate-y-28 text-left">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-xs md:text-xs lg:text-xs xl:text-xs">{pest.more}</p>
              <Link to={pest.link}>
                <button
                  className="
                    bg-green-600 text-white 
                    text-[6px] sm:text-[8px] md:text-xs
                    px-1 sm:px-2 md:px-3 
                    py-0.5 sm:py-1 md:py-1.5
                    rounded mt-1 sm:mt-1.5 md:mt-2 
                    hover:bg-green-700 transition
                  "
                >
                  View More
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
