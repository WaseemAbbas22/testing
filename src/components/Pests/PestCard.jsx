// src/components/Pest/PestCard.jsx

import PropTypes from "prop-types";
import { pests } from "../../data/pestsData";


const PestCard = ({ pestName }) => {
  const pest = pests.find((p) => p.name === pestName.toUpperCase());

  if (!pest) {
    return <div>Pest not found.</div>;
  }

  return (
    <div className="relative w-[250px] h-[250px] rounded-lg shadow-lg group">
      <img
        src={pest.image}
        alt={pest.name}
        className="w-full h-full object-cover rounded-lg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg transition duration-300 group-hover:bg-opacity-60 flex items-end">

        <div className="px-5 mt-10  w-full]">
          {/* Container for moving title & subtitle */}
          <div className="transition-all duration-500 ease-in-out transform group-hover:-translate-y-28 text-left">

            {/* Title & Subtitle */}
            <div className="mb-4">
              <h2 className="text-white text-lg font-bold">{pest.name}</h2>
              <p className="text-white text-xs">{pest.desc}</p>
            </div>
          </div>

          <div className="absolute  mb-8 transition-all duration-500 ease-in-out mb-4 transform group-hover:-translate-y-28 text-left">

            {/* Hidden Text & Button */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity  duration-500">
              <p className="text-white text-xs">{pest.more}</p>
              <button
                className="bg-green-600 text-white text-xs px-3 py-1 rounded mt-2 hover:bg-green-700 transition"
                onClick={() => window.location.href = pest.link} // navigate to different page
              >
                View More
              </button>

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
