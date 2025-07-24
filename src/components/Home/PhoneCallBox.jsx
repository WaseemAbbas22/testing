import PropTypes from "prop-types";
import { FaPhoneAlt } from "react-icons/fa";

const PhoneCallBox = ({
  upperText = "Call for Schedule",
  phoneNumber = "052 152 8725",
  bgColor = "bg-green-600",
  iconColor = "text-green-600",
  iconSize = "text-2xl", // 🆕 icon size input (Tailwind class)
  iconPadding = "p-4", // 🆕 icon padding input (Tailwind class)
  upperTextColor = "text-white",
  phoneTextColor = "text-white",
  containerHeight = {
    base: "h-[80px]",
    "2xl": "2xl:h-[70px]",
    "3xl": "3xl:h-[80px]",
  },
  containerWidth = {
    base: "w-[300px]",
    "2xl": "2xl:w-[350px]",
    "3xl": "3xl:w-[400px]",
  },
  upperTextSize = {
    base: "text-xs",
    "2xl": "2xl:text-sm",
    "3xl": "3xl:text-base",
  },
  phoneTextSize = {
    base: "text-sm",
    "2xl": "2xl:text-base",
    "3xl": "3xl:text-lg",
  },
}) => {
  return (
    <div
      className={`
        flex items-center rounded overflow-hidden shadow-md space-x-2 mb-2
        ${bgColor}
        ${containerHeight.base} ${containerHeight["2xl"] || ""} ${containerHeight["3xl"] || ""} ${containerHeight["4xl"] || ""}
        ${containerWidth.base} ${containerWidth["2xl"] || ""} ${containerWidth["3xl"] || ""} ${containerWidth["4xl"] || ""}
      `}
    >
      {/* Icon Part */}
      <div className={`bg-white flex items-center justify-center ${iconPadding} ml-2 rounded-md`}>
        <FaPhoneAlt className={`${iconSize} ${iconColor}`} />
      </div>

      {/* Text Part */}
      <div className="flex flex-col justify-center px-1">
        <span
          className={`${upperTextColor} ${upperTextSize.base} ${upperTextSize["2xl"] || ""} ${upperTextSize["3xl"] || ""} ${upperTextSize["4xl"] || ""}`}
        >
          {upperText}
        </span>
        <span
          className={`font-semibold ${phoneTextColor} ${phoneTextSize.base} ${phoneTextSize["2xl"] || ""} ${phoneTextSize["3xl"] || ""} ${phoneTextSize["4xl"] || ""}`}
        >
          {phoneNumber}
        </span>
      </div>
    </div>
  );
};

PhoneCallBox.propTypes = {
  upperText: PropTypes.string,
  phoneNumber: PropTypes.string,
  bgColor: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.string, // 🆕 icon size prop type
  iconPadding: PropTypes.string, // 🆕 icon padding prop type
  upperTextColor: PropTypes.string,
  phoneTextColor: PropTypes.string,
  containerHeight: PropTypes.object, // { base, 2xl, 3xl }
  containerWidth: PropTypes.object,
  upperTextSize: PropTypes.object,
  phoneTextSize: PropTypes.object,
};

export default PhoneCallBox;
