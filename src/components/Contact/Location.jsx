import Img1 from "../../assets/Contact/Location1.png";
import Img2 from "../../assets/Contact/Location2.png";

const Location = () => {
  return (
    <div className="w-full bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-black-700">Location</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* First Location */}
          <div className="flex flex-col items-center">
            <img
              src={Img1}
              alt="Sharjah office"
              className="rounded-lg w-full h-48 object-cover mb-2 border-4 border-green-500 transition-transform transform hover:scale-105 hover:shadow-lg"
            />
            <p className="text-center font-medium">Sharjah office</p>
          </div>

          {/* Second Location */}
          <div className="flex flex-col items-center">
            <img
              src={Img1}
              alt="Dubai office"
              className="rounded-lg w-full h-48 object-cover mb-2 border-4 border-green-500 transition-transform transform hover:scale-105 hover:shadow-lg"
            />
            <p className="text-center font-medium">Dubai office</p>
          </div>

          {/* Third Location */}
          <div className="flex flex-col items-center">
            <img
              src={Img2}
              alt="Abu Dhabi office"
              className="rounded-lg w-full h-48 object-cover mb-2 border-4 border-green-500 transition-transform transform hover:scale-105 hover:shadow-lg"
            />
            <p className="text-center font-medium">Abu Dhabi office</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
