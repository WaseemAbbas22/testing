import PropTypes from 'prop-types';

const ClientBox = ({ logo, name, border }) => {
  return (
    <div className={`flex flex-col items-center text-center px-0 py-2 ${border}`}>
      <img
        src={logo}
        alt={name}
        className="w-20 h-12 2xl:w-52 2xl:h-28 2xl:mt-2 object-contain"
      />
      <p className="text-[10px] 2xl:text-base">{name}</p>
    </div>
  );
};

ClientBox.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  border: PropTypes.string,
};

export default ClientBox;
