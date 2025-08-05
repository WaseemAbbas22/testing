import PropTypes from "prop-types";
import { pests } from "../../data/pestsData";
import { Link } from "react-router-dom";

const PestCard = ({ pestName }) => {
  const pest = pests.find((p) => p.name === pestName.toUpperCase());

  if (!pest) {
    return <div>Pest not found.</div>;
  }

  return (
    <div className="relative w-full aspect-[5/5] rounded-lg shadow-lg group overflow-hidden">
      <img
        src={pest.image}
        alt={pest.name}
        className="w-full h-full object-cover rounded-lg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg transition duration-300 group-hover:bg-opacity-60 flex flex-col justify-end">
        <div className="px-4 py-6 w-full relative">
          {/* Title & Desc */}
          <div
            className="
              transform transition-transform duration-500 ease-in-out -space-y-1.5
              group-hover:-translate-y-[275%]
              xl:group-hover:-translate-y-[220%]
              3xl:group-hover:-translate-y-[270%]
            "
          >
            <h2 className="text-white text-left pl-2 xl:pl-0 3xl:pl-3 text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold">
              {pest.name}
            </h2>
            <p className="text-white text-sm pl-2  xl:pl-0 3xl:pl-3 sm:text-sm md:text-base lg:text-base 2xl:text-lg text-justify">
              {pest.desc}
            </p>
          </div>

          {/* Extra Text + Button */}
          <div
            className="
              absolute  left-6 xl:left-4 3xl:left-7 right-4 bottom-6 opacity-0
              group-hover:opacity-100 transition-opacity duration-1000 ease-in-out
              transform group-hover:translate-y-[-5%]
              text-left
            "
          >
            <p className="text-white text-xs sm:text-xs 2xl:text-[16px] 3xl:text-base xl:leading-tight 3xl:leading-tight mb-5 xl:mb-2 3xl:mb-4 text-justify">
              {pest.more}
            </p>
            <Link to={pest.link}>
              <button className="bg-green-600 text-white px-3 py-1 3xl:px-5 3xl:py-2 text-xs sm:text-sm md:text-xs 3xl:text-sm rounded hover:bg-green-700 transition">
                Read More
              </button>
            </Link>
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
