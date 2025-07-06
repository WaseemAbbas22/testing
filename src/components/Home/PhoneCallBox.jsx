// src/components/Common/PhoneCallBox.jsx

import PropTypes from "prop-types";
import { FaPhoneAlt } from "react-icons/fa";

const PhoneCallBox = ({
  title = "Call for Schedule",
  phone = "052 152 8725",
  containerWidth = "212px",
  containerHeight = "80px"
}) => {
  return (
    <div
      className="flex items-center rounded overflow-hidden shadow-md bg-green-600"
      style={{ width: containerWidth, height: containerHeight }}
    >
      {/* Icon Part */}
      <div className="bg-white flex items-center justify-center p-3 ml-1.5 rounded-l-lg">
        <FaPhoneAlt className="text-green-600 text-xl" />
      </div>

      {/* Text Part */}
      <div className="flex flex-col justify-center px-2">
        <span className="text-xs text-white font-sm leading-tight">
          {title}
        </span>
        <span className="text-base text-white font-bold">
          {phone}
        </span>
      </div>
    </div>
  );
};

PhoneCallBox.propTypes = {
  title: PropTypes.string,
  phone: PropTypes.string,
  containerWidth: PropTypes.string,
  containerHeight: PropTypes.string,
};

export default PhoneCallBox;
