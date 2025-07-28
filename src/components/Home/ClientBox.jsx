import PropTypes from "prop-types";

const ClientBox = ({ logo, name, border, logoSizeClasses }) => {
  return (
    <div className={`flex flex-col items-center text-center ${border}`}>
      <img
        src={logo}
        alt={name}
        className={` block ${logoSizeClasses}`} // added block
      />
      <p className="text-[10px] 2xl:text-xs 2xl:mt-2 4xl:mt-2 ">{name}</p>
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
