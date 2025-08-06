import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const RemoveAnimals = ({ heading, animals }) => {
  return (
    <div className="w-full flex flex-col items-center py-10 3xl:py-14 bg-white">
      <h2 className="text-3xl xl:text-4xl font-bold mb-8 3xl:mb-12  text-center 3xl:text-[50px]">{heading}</h2>

      <div className="flex flex-wrap justify-center gap-4 w-4/5">
        {animals.map((animal, index) => (
          <Link
            key={index}
            to={animal.link}
            className="w-[45%] sm:w-[22%] h-[150px] 3xl:h-[200px] rounded 3xl:rounded-lg overflow-hidden shadow cursor-pointer relative"
          >
            <img
              src={animal.img}
              alt={animal.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="absolute bottom-0 left-0 w-full text-white text-sm text-left py-4 px-6">
              <div className="font-semibold text-sm sm:text-sm 3xl:text-xl">{animal.name}</div>
              <div className="text-xs sm:text-sm">{animal.sci}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
RemoveAnimals.propTypes = {
  heading: PropTypes.string.isRequired,
  animals: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      sci: PropTypes.string
    })
  ).isRequired
};

export default RemoveAnimals;
