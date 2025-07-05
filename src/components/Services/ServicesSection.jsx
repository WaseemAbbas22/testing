import PropTypes from 'prop-types';

const ServicesSection = ({ title, description, buttonText, image, reverse }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 py-10 h-[60vh]">
      
      {/* Left or Right based on 'reverse' prop */}
      <div className={`md:w-1/2 ${reverse ? 'md:order-2 md:pl-10' : ''}`}>
        <h1 className="text-2xl font-bold text-gray-800 mb-2 ml-8">{title}</h1>
        <p className="text-sm text-gray-600 mb-2 ml-8">{description}</p>
        {buttonText && (
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            {buttonText}
          </button>
        )}
      </div>

      <div className={`md:w-1/2 mt-10 md:mt-0 ${reverse ? 'md:mr-10' : 'md:ml-10'} h-full flex items-center justify-center`}>
        <img
          src={image}
          alt={title}
          className="w-auto h-[120%] object-cover rounded shadow-md m-4"
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
