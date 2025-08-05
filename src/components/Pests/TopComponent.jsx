import PropTypes from "prop-types";

const TopComponent = ({
  image1,
  image2,
  heading1 = "",
  desc1 = "",
  button1Text = "",
  heading2 = "",
  desc2 = "",
  listItems = [],
  desc3 = "",
}) => {
  return (
    <div className="w-full flex flex-col items-center bg-white py-10">
      {/* Upper Section */}
      <div
        className="w-[75%] h-[43vh] rounded 3xl:rounded-xl shadow overflow-hidden mb-4 flex justify-center items-stretch"
        style={{ background: "linear-gradient(to right, #0C520A, #32A849)" }}
      >
        {/* Text Section */}
        <div className="w-1/2  p-12 flex flex-col  items-start justify-center text-left">
          <h3 className="text-white text-lg font-bold mb-2 3xl:text-3xl">
            {heading1}
          </h3>
          <p className="text-white/90 font-xs text-xs space-y-0.5 mb-3 whitespace-pre-line 3xl:text-lg 3xl:leading-tight text-justify">
            {desc1}
          </p>
          <button className="bg-white text-darkgreen px-3 py-1 3xl:px-4 rounded text-xs 3xl:text-lg hover:bg-gray-100 transition">
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
        className="w-[75%] h-[43vh] rounded 3xl:rounded-xl shadow overflow-hidden mb-4 flex justify-center items-stretch"
        style={{ background: "linear-gradient(to right,  #32A849,#0C520A)" }}
      >
        {/* Image Section */}
        <div className="w-1/2 py-4 ml-6 flex justify-right items-center">
          <img
            src={image2}
            alt="Content"
            className="w-[90%] h-[95%] object-cover border border-white rounded-lg"
          />
        </div>
        {/* Text */}
        <div className="w-1/2 px-8 flex flex-col justify-center items-start text-left 3xl:space-y-2">
          <h3 className="text-white text-lg font-bold mb-2 3xl:text-3xl">
            {heading2}
          </h3>
          <p className="text-white font-xs text-[10px] mb-3 3xl:text-lg 3xl:leading-tight ">
            {desc2}
          </p>
          <div className="text-white text-xs 3xl:text-lg 3xl:leading-tight space-y-0.5">
            {listItems.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                {/* Custom Bullet */}
                <div className="mt-2 w-2 h-2 rounded-full bg-white shrink-0" />

                {/* Bullet Text */}
                <p className="leading-snug">{item}</p>
              </div>
            ))}
          <p className="text-white text-xs mb-3 3xl:text-lg 3xl:leading-tight  ">
            {desc3}
          </p>
          </div>

          <button className="bg-white text-darkgreen px-3 py-1 rounded text-xs hover:bg-gray-100 transition 3xl:text-lg 3xl:px-4 3xl:py-1 3xl:mt-4 3xl:rounded-md">
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
  desc3: PropTypes.string,
  listItems: PropTypes.arrayOf(PropTypes.string),
};

export default TopComponent;
