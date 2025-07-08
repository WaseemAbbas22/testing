// src/components/Pest/PestCard.jsx

import PropTypes from "prop-types";
import { pests } from "../../data/pestsData";

const PestCard = ({ pestName }) => {
  const pest = pests.find((p) => p.name === pestName.toUpperCase());

  if (!pest) {
    return <div>Pest not found.</div>;
  }

  return (
    <div className="relative w-[250px] h-[250px] overflow-hidden rounded-lg shadow-lg group">
      <img
        src={pest.image}
        alt={pest.name}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 transition duration-300 group-hover:bg-opacity-60 flex items-end">
        
        <div className="pl-3 w-full">
          {/* Container for moving title & subtitle */}
          <div className="transition-all duration-500 ease-in-out transform group-hover:-translate-y-8 text-left">

            {/* Title & Subtitle */}
            <div className="-mt-4">
              <h2 className="text-white text-lg font-bold">{pest.name}</h2>
              <p className="text-white text-xs">{pest.desc}</p>
            </div>

            {/* Hidden Text & Button */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-xs mb-2">{pest.more}</p>
              <button className="bg-green-600 text-white text-xs px-3 py-1 rounded hover:bg-green-700 transition">
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
