import PropTypes from "prop-types";

const TopComponent = ({
  image1,
  image2,
  heading1 = "Get Rid of Rats - Fast, Safe, and Guaranteed",
  desc1 = "Rats can invade your home or business...",
  button1Text = "Contact Now",
  heading2 = "Why Rat Removal is Necessary",
  desc2 = "Rats invade homes, restaurants, offices, and warehouses in search of food and shelter. Once inside, they can cause significant damage and health risks.",
  listItems = [],
}) => {
  return (
    <div className="w-full flex flex-col items-center bg-white py-10">
      {/* Upper Section */}
      <div
        className="w-[75%] h-[43vh] rounded 3xl:rounded-xl shadow overflow-hidden mb-4 flex justify-center items-stretch"
        style={{ background: "linear-gradient(to right, #0C520A, #32A849)" }}
      >
        {/* Text Section */}
        <div className="w-1/2 pt-12 p-8 flex flex-col  items-start text-left">
          <h3 className="text-white text-lg font-bold mb-2">{heading1}</h3>
          <p className="text-white text-xs space-y-0.5 mb-3 whitespace-pre-line">
            {desc1}
          </p>
          <button className="bg-white text-green-800 px-3 py-1 rounded text-xs hover:bg-gray-100 transition">
            {button1Text}
          </button>
        </div>

        {/* Image Section */}
        <div className="w-1/2 p-4 flex justify-center items-center">
          <img
            src={image1}
            alt="Content"
            className="w-[95%] h-[95%] object-cover border border-white rounded-lg 3xl:rounded-xl"
          />
        </div>
      </div>
      {/* Lower Section */}
      <div
        className="w-[75%] h-[43vh] rounded shadow overflow-hidden mb-4 flex justify-center items-stretch"
        style={{ background: "linear-gradient(to right, #0C520A, #32A849)" }}
      >
         {/* Image Section */}
        <div className="w-1/2 py-4 ml-6 flex justify-right items-center">
          <img
            src={image1}
            alt="Content"
            className="w-[90%] h-[95%] object-cover border border-white rounded-lg"
          />
        </div>
        {/* Text */}
        <div className="w-1/2 px-8 flex flex-col justify-center items-start text-left 3xl:space-y-1">
          <h3 className="text-white text-lg font-bold mb-2 3xl:text-3xl 3xl:max-w-[70%]">
            {heading2}
          </h3>
          <p className="text-white text-xs mb-3 3xl:text-lg 3xl:leading-tight">
            {desc2}
          </p>
          <ul className="text-white text-xs list-disc list-inside 3xl:text-lg font-thin">
            {listItems.map((item, i) => (
              <li key={i}> {item} </li>
            ))}
          </ul>
          <button className="bg-white text-darkgreen px-3 py-1 rounded text-xs hover:bg-gray-100 transition 3xl:text-lg 3xl:px-4 3xl:py-2 mt-2 3xl:rounded-md">
            {button1Text}
          </button>
        </div>
      </div>
    </div>
  );
};

TopComponent.propTypes = {
  image1: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  heading1: PropTypes.string,
  desc1: PropTypes.string,
  button1Text: PropTypes.string,
  heading2: PropTypes.string,
  desc2: PropTypes.string,
  listItems: PropTypes.arrayOf(PropTypes.string),
};

export default TopComponent;
