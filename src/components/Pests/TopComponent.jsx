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
    <div className="w-full flex flex-col md:flex-col items-center bg-white py-10 xl:space-y-4 3xl:space-y-8 font-Cabin">
      {/* Upper Section */}
      <div
        className="w-[85%] sm:w-[75%] h-auto md:h-[50vh] rounded 3xl:rounded-xl shadow overflow-hidden mb-4 flex flex-col md:flex-row justify-center items-stretch"
        style={{ background: "linear-gradient(to right, #0C520A, #32A849)" }}
      >
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4 xl:p-8 3xl:p-12 flex flex-col items-start justify-center text-left">
          <h3 className="text-white text-lg font-bold mb-2 xl:text-[20px] 3xl:text-3xl">
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
        <div className="w-full md:w-1/2 p-2 3xl:p-4 flex justify-center items-center">
          <img
            src={image1}
            alt="Content"
            className="w-[95%] h-[95%] object-cover border border-white rounded-lg 3xl:rounded-xl"
          />
        </div>
      </div>

      {/* Lower Section */}
      <div
        className="w-[85%] sm:w-[75%] h-auto md:h-[50vh] rounded 3xl:rounded-xl shadow overflow-hidden mb-4 flex flex-col md:flex-row justify-center items-stretch"
        style={{ background: "linear-gradient(to right,  #32A849,#0C520A)" }}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 py-2 xl:py-2 3xl:py-4 ml-2 xl:ml-4 3xl:ml-6 flex justify-right items-center">
          <img
            src={image2}
            alt="Content"
            className="w-[95%] 3xl:w-[90%] h-[95%] object-cover border border-white rounded-lg"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 p-4 xl:px-8 flex flex-col justify-center items-start text-left  space-y-1 xl:space-y-2 3xl:space-y-2">
          <h3 className="text-white/90 text-lg font-bold 3xl:mb-2 3xl:text-3xl">
            {heading2}
          </h3>
          <p className="text-white font-xs text-justify text-xs 3xl:mb-3 xl:text-[13px] 3xl:text-lg 3xl:leading-tight ">
            {desc2}
          </p>
          <div className="text-white/90 text-xs  text-justify xl:text-[13px] 3xl:text-lg xl:leading-tight 3xl:leading-tight space-y-0.5">
            {listItems.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="mt-2 xl:mt-1 3xl:mt-2 w-2 h-2 rounded-full bg-white shrink-0" />
                <p className="leading-snug">{item}</p>
              </div>
            ))}
            <p className="text-[#FFFFFF] font-xs text-xs xl:text-[13px] 3xl:mb-3 3xl:text-lg xl:leading-tight 3xl:leading-tight ">
              {desc3}
            </p>
          </div>

          <button className="bg-white text-darkgreen px-3 py-1 rounded text-xs hover:bg-gray-100 transition 3xl:text-lg xl:mt-4 3xl:px-4 3xl:py-1 3xl:mt-4 3xl:rounded-md">
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
