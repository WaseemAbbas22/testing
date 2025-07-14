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
      className="flex items-center rounded overflow-hidden shadow-md bg-green-600 mb-2-ml-2"
      style={{ width: containerWidth, height: containerHeight }}
    >
      {/* Icon Part */}
      <div className="bg-white flex items-center justify-center p-2 ml-1 rounded-l-sm">
        <FaPhoneAlt className="text-green-600 text-l" />
      </div>

      {/* Text Part */}
      <div className="flex flex-col justify-center -space-y-[2px] px-1 mt-1">
        <span className="text-[11px] text-white font-xs leading-tight ">
          {title}
        </span>
        <span className="text-base text-white font-semibold">
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
