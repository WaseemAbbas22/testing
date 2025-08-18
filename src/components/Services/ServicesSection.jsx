import PropTypes from 'prop-types';

const ServicesSection = ({ title, Subtitle, description, buttonText, image }) => {
  return (
    <div className="w-[90%] md:w-[75%] mx-auto flex flex-col md:flex-row items-center justify-between py-8 sm:py-16 md:gap-10">
      
      {/* Left Side - Text */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">{title}</h1>
        <h3 className="text-lg md:text-[20px] font-extrabold text-black/70 mb-1 sm:mb-2">{Subtitle}</h3>
        <p className="text-sm md:text-[13px] text-black/50 mb-1 md:mb-1 text-justify md:text-left">
          {description}
        </p>
        {buttonText && (
          <button className="bg-green-600 text-white text-sm px-5 py-2 rounded hover:bg-green-700 transition">
            {buttonText}
          </button>
        )}
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-full md:w-[90%] h-auto rounded-xl shadow-md"
        />
      </div>

    </div>
  );
};

ServicesSection.propTypes = {
  title: PropTypes.string.isRequired,
  Subtitle: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  image: PropTypes.string
};

export default ServicesSection;
