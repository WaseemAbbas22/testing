import { FaPhoneAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
// import heroImg from '../../assets/Services/step2.png'; // Adjust the path as necessary

const ServicesHero = ({ title = "Services", breadcrumb = "Home > Services", bgImg }) => {
  return (
    <div className="relative w-full h-[50vh]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 flex flex-col justify-center h-full pl-10 text-white ml-12">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-sm mt-2">{breadcrumb}</p>
      </div>

      {/* Call Box */}
      <div className="absolute bottom-5 right-0">
        <div className="flex rounded overflow-hidden shadow" style={{ width: "200px", height: "50px" }}>

          {/* Icon Part */}
          <div className="bg-white flex items-center justify-center px-3">
            <FaPhoneAlt className="text-green-600 text-lg" />
          </div>

          {/* Text Part */}
          <div className="bg-green-600 flex flex-col justify-center px-3 flex-1">
            <span className="text-sm text-white font-semibold leading-tight">
              Call for Schedule
            </span>
            <span className="text-xs text-white font-bold">0800-25456158</span>
          </div>

        </div>
      </div>
    </div>
  );
};

ServicesHero.propTypes = {
  title: PropTypes.string,
  breadcrumb: PropTypes.string,
  bgImg: PropTypes.string
};

export default ServicesHero;
