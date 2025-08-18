import PropTypes from "prop-types";

const ClientBox = ({ logo, name, border, logoSizeClasses }) => {
  return (
    <div className={`flex flex-col items-center text-center ${border}`}>
      <img
        src={logo}
        alt={name}
        className={` block ${logoSizeClasses}`} // added block
      />
      <p className="text-[10px] xl:text-[8px] 2xl:text-xs 2xl:mt-0 4xl:mt-2 mb-2 max-w-[90%] sm:max-w-full">{name}</p>
    </div>
  );
};

ClientBox.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  border: PropTypes.string,
  logoSizeClasses: PropTypes.string,
};

export default ClientBox;
