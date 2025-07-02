import { FaPhoneAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
//import heroImg from '../../assets/Services/step2.png'; // Adjust the path as necessary

const ServicesHero = ({ title = "Services", breadcrumb = "Home > Services", bgImg }) => {
  return (
    <div className="relative w-full h-[50vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full pl-10 text-white ml-12">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-sm mt-2">{breadcrumb}</p>
      </div>

      {/* Call Box remains unchanged */}
      <div className="absolute bottom-5 right-5">
        <div className="bg-white border border-gray-300 w-52 h-12 rounded-full flex overflow-hidden shadow">
          <div className="bg-white flex items-center justify-center w-1/3">
            <FaPhoneAlt className="text-green-600 text-lg" />
          </div>
          <div className="flex flex-col justify-center pl-2 w-2/3">
            <span className="text-xs text-green-600 font-semibold">Call for Free Inspection</span>
            <span className="text-xs font-medium text-gray-700">+92 300 1234567</span>
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
