import PropTypes from 'prop-types';

const ServicesSection = ({ title, description, buttonText, image, reverse }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10 md:h-[60vh]">
      
      {/* Left or Right based on 'reverse' prop */}
      <div className={`md:w-1/2 ${reverse ? 'md:order-2 md:pl-2' : ''} text-center md:text-left`}>
        <h1 className="text-3xl font-bold text-gray-800 mb-2 md:ml-[110px]">{title}</h1>
        <p className="text-xs text-gray mb-2 md:ml-[110px]">{description}</p>
        {buttonText && (
          <button className="bg-green-600 text-xs text-white px-4 py-2 rounded hover:bg-green-700 h-[30px] w-[130px] transition md:ml-[110px] mt-2 md:mt-0">
            {buttonText}
          </button>
        )}
      </div>

      <div className={`md:w-1/2 mt-6 h-[50vh] md:mt-0 ${reverse ? 'md:mr-12' : ''} flex items-center justify-center`}>
        <img
          src={image}
          alt={title}
          className="w-[70%] md:w-[65%] h-[40vh] md:h-[90%] object-cover rounded-xl shadow-md mt-8 mr-28"
        />
      </div>
      
    </div>
  );
};

ServicesSection.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  image: PropTypes.string.isRequired,
  reverse: PropTypes.bool
};

export default ServicesSection;
